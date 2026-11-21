/**
 * 音声再生。Web Speech API のみを使う（外部サービスも音声ファイルも持たない）。
 *
 * 制約を先に明記しておく:
 *  - 単独の音素（/æ/ など）は TTS が正しく読めない。音素ページではキーワード語を
 *    連続再生する方式を採る。
 *  - 声の質は端末に依存する。同じテキストでも OS により音が違う。
 *  - これは「正解の音を確認する」ための機能で、発音を判定する機能ではない。
 */

export const speechSupported = (): boolean =>
  typeof window !== 'undefined' && 'speechSynthesis' in window;

let cachedVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

/** en-US の声を優先して1つ選ぶ。 */
export function pickVoice(): SpeechSynthesisVoice | null {
  if (!speechSupported()) return null;
  if (cachedVoice) return cachedVoice;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  voicesLoaded = true;
  const prefer = [
    (v: SpeechSynthesisVoice) => v.lang === 'en-US' && /natural|premium|enhanced/i.test(v.name),
    (v: SpeechSynthesisVoice) => v.lang === 'en-US' && v.localService,
    (v: SpeechSynthesisVoice) => v.lang === 'en-US',
    (v: SpeechSynthesisVoice) => v.lang.startsWith('en'),
  ];
  for (const test of prefer) {
    const found = voices.find(test);
    if (found) {
      cachedVoice = found;
      return found;
    }
  }
  return null;
}

/** 声のリストは非同期に入ってくるため、読み込み完了を待てるようにする。 */
export function warmUpVoices(): void {
  if (!speechSupported() || voicesLoaded) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    cachedVoice = null;
    pickVoice();
  });
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}

export interface SpeakOptions {
  /** 0.1–2.0。既定 0.85（発音確認のためやや遅く） */
  rate?: number;
  pitch?: number;
}

function utter(text: string, opts: SpeakOptions = {}): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text);
  const voice = pickVoice();
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? 'en-US';
  u.rate = opts.rate ?? 0.85;
  u.pitch = opts.pitch ?? 1;
  return u;
}

/** 1つのテキストを読む。直前の再生は打ち切る。 */
export function speak(text: string, opts: SpeakOptions = {}): Promise<void> {
  if (!speechSupported()) return Promise.resolve();
  stopSpeaking();
  return new Promise((resolve) => {
    const u = utter(text, opts);
    u.onend = () => resolve();
    u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
}

/**
 * 複数のテキストを間を空けて順に読む。
 * ミニマルペアの A → B 連続再生と、音素ページのキーワード連続再生に使う。
 */
export async function speakSequence(
  texts: string[],
  opts: SpeakOptions & { gapMs?: number } = {},
): Promise<void> {
  if (!speechSupported()) return;
  const gap = opts.gapMs ?? 450;
  stopSpeaking();
  for (let i = 0; i < texts.length; i++) {
    await new Promise<void>((resolve) => {
      const u = utter(texts[i], opts);
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    });
    if (i < texts.length - 1) {
      await new Promise((r) => setTimeout(r, gap));
    }
  }
}
