import { useEffect, useState } from 'react';
import { checkVoices, speak, speakSequence, speechSupported, warmUpVoices } from '../speech';
import { useAsync } from '../useAsync';

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
        try {
          await speak(text, { rate: slow ? 0.6 : 0.85 });
        } finally {
          setBusy(false);
        }
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
        try {
          await speakSequence([a, b], { rate: slow ? 0.6 : 0.85, gapMs: slow ? 700 : 450 });
        } finally {
          setBusy(false);
        }
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
        try {
          await speakSequence(texts, { rate: slow ? 0.6 : 0.85, gapMs: slow ? 700 : 400 });
        } finally {
          setBusy(false);
        }
      }}
    >
      {busy ? '再生中…' : label}
    </button>
  );
}

/**
 * 音声が使えない環境向けの注意書き。
 *
 * API の有無だけでは足りない。音声エンジンを持たない環境（多くの Linux、一部の
 * コンテナ環境）では speechSynthesis は存在するのに声が0個で、ボタンを押しても
 * 無音のまま何も起きない。利用者が不具合と区別できるよう、その状態を明示する。
 */
export function SpeechNotice() {
  const status = useAsync(() => checkVoices(), []);
  if (status.status === 'loading') return null;
  if (status.value === 'ok') return null;
  if (status.value === 'unsupported') {
    return (
      <p className="notice">
        この環境では音声合成に対応していないため、再生ボタンは動作しません。Chrome / Safari /
        Edge では利用できます。
      </p>
    );
  }
  return (
    <p className="notice">
      音声合成の API はありますが、この環境には音声データが入っていないため、再生しても音が出ません。
      再生ボタンは表示されますが無音です。macOS・Windows・iOS・Android の標準ブラウザでは音が出ます。
      Linux の場合は音声エンジン（speech-dispatcher と espeak-ng など）を入れると有効になります。
    </p>
  );
}
