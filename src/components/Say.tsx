import { useEffect, useState } from 'react';
import { speak, speakSequence, speechSupported, warmUpVoices } from '../speech';

/** 1語・1文を読み上げるボタン。全ジャンルの例に付ける。 */
export function Say({
  text,
  label,
  slow = false,
}: {
  text: string;
  label?: string;
  slow?: boolean;
}) {
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    warmUpVoices();
  }, []);
  if (!speechSupported()) return null;
  return (
    <button
      type="button"
      className={`say${busy ? ' say-busy' : ''}`}
      title={`「${text}」を再生`}
      aria-label={`「${text}」を再生`}
      onClick={async () => {
        setBusy(true);
        await speak(text, { rate: slow ? 0.6 : 0.85 });
        setBusy(false);
      }}
    >
      {label ?? '▶'}
    </button>
  );
}

/** ミニマルペアを A → B と続けて読むボタン。聞き分けの中核。 */
export function SayPair({ a, b, slow = false }: { a: string; b: string; slow?: boolean }) {
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    warmUpVoices();
  }, []);
  if (!speechSupported()) return null;
  return (
    <button
      type="button"
      className={`say say-pair${busy ? ' say-busy' : ''}`}
      title={`${a} → ${b} を連続再生`}
      aria-label={`${a} と ${b} を連続再生`}
      onClick={async () => {
        setBusy(true);
        await speakSequence([a, b], { rate: slow ? 0.6 : 0.85, gapMs: slow ? 700 : 450 });
        setBusy(false);
      }}
    >
      A→B
    </button>
  );
}

/** 複数語を続けて読むボタン。音素ページでキーワード語を並べて聞かせるのに使う。 */
export function SayAll({
  texts,
  label = 'まとめて再生',
  slow = false,
}: {
  texts: string[];
  label?: string;
  slow?: boolean;
}) {
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    warmUpVoices();
  }, []);
  if (!speechSupported() || texts.length === 0) return null;
  return (
    <button
      type="button"
      className={`say say-all${busy ? ' say-busy' : ''}`}
      onClick={async () => {
        setBusy(true);
        await speakSequence(texts, { rate: slow ? 0.6 : 0.85, gapMs: slow ? 700 : 400 });
        setBusy(false);
      }}
    >
      {busy ? '再生中…' : label}
    </button>
  );
}

/** 音声が使えない環境向けの注意書き。 */
export function SpeechNotice() {
  if (speechSupported()) return null;
  return (
    <p className="notice">
      この環境では音声合成が使えないため、再生ボタンは表示されません。Chrome / Safari / Edge
      では利用できます。
    </p>
  );
}
