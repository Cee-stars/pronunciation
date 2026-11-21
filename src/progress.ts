/**
 * 進捗。読んだかどうかのフラグだけを localStorage に持つ。
 * 採点も達成度評価もしない。ロックもかけない（辞典として引けなくなるため）。
 */

const KEY = 'pronunciation.readDays.v1';

export function readDays(): Set<number> {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter((x): x is number => typeof x === 'number'));
  } catch {
    return new Set();
  }
}

export function setDayRead(day: number, read: boolean): Set<number> {
  const set = readDays();
  if (read) set.add(day);
  else set.delete(day);
  try {
    localStorage.setItem(KEY, JSON.stringify([...set].sort((a, b) => a - b)));
  } catch {
    // 保存できない環境でも閲覧は続けられるようにする
  }
  return set;
}
