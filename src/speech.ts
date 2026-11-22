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
  // voice の代入は環境によっては失敗しうる。失敗しても既定の声で読ませればよい。
  try {
    if (voice) u.voice = voice;
  } catch {
    // 既定の声にまかせる
  }
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
    try {
      const u = utter(text, opts);
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    } catch {
      // 再生できなくても呼び出し側は進めてよい
      resolve();
    }
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
      try {
        const u = utter(texts[i], opts);
        u.onend = () => resolve();
        u.onerror = () => resolve();
        window.speechSynthesis.speak(u);
      } catch {
        resolve();
      }
    });
    if (i < texts.length - 1) {
      await new Promise((r) => setTimeout(r, gap));
    }
  }
}

/**
 * 利用可能な声が出揃うまで待つ。
 *
 * getVoices() は初回に空配列を返し、少し遅れて voiceschanged が飛ぶ実装が多い。
 * また Linux のように音声エンジンが入っていない環境では、API は存在するのに
 * 声が0個のままになる。その場合ボタンを押しても無音のまま何も起きないので、
 * 呼び出し側が状態を表示できるよう、待った結果をそのまま返す。
 */
export function waitForVoices(timeoutMs = 2000): Promise<SpeechSynthesisVoice[]> {
  if (!speechSupported()) return Promise.resolve([]);
  const immediate = window.speechSynthesis.getVoices();
  if (immediate.length > 0) return Promise.resolve(immediate);
  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, timeoutMs);
  });
}

export type VoiceStatus = 'unsupported' | 'none' | 'ok';

/** 音声再生が実際に機能するかを判定する。'none' は API はあるが声が無い状態。 */
export async function checkVoices(): Promise<VoiceStatus> {
  if (!speechSupported()) return 'unsupported';
  const voices = await waitForVoices();
  return voices.length === 0 ? 'none' : 'ok';
}
