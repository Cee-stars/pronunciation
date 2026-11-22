import { useEffect, useState } from 'react';

export type AsyncState<T> = { status: 'loading' } | { status: 'done'; value: T };

/**
 * 遅延読み込み用の最小フック。
 * 読み込み中に別の対象へ切り替わったとき、古い結果で上書きしないようにする。
 */
export function useAsync<T>(load: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  useEffect(() => {
    let alive = true;
    setState({ status: 'loading' });
    load().then((value) => {
      if (alive) setState({ status: 'done', value });
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
}
