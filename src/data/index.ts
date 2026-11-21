import type { Phoneme, Rule, Topic } from '../types';

import { trap } from './phonemes/trap';
import { kit } from './phonemes/kit';
import { dress } from './phonemes/dress';
import { strut } from './phonemes/strut';
import { foot } from './phonemes/foot';
import { schwa } from './phonemes/schwa';

/**
 * 音素の登録。音韻的な順序（母音は舌の位置順、子音は調音点順）で並べる。
 * 未執筆のものはここに追加されるまで Day ビューで「準備中」と表示される。
 */
export const phonemes: Phoneme[] = [
  // 短母音
  kit,
  dress,
  trap,
  strut,
  foot,
  schwa,
];

export const rules: Rule[] = [];

export const topics: Topic[] = [];

export const phonemeById = new Map(phonemes.map((x) => [x.id, x]));
export const ruleById = new Map(rules.map((x) => [x.id, x]));
export const topicById = new Map(topics.map((x) => [x.id, x]));

/** 音素をグループ別にまとめる（IPA表の表示用）。 */
export function phonemesByGroup(): { group: string; items: Phoneme[] }[] {
  const order: string[] = [];
  const buckets = new Map<string, Phoneme[]>();
  for (const ph of phonemes) {
    if (!buckets.has(ph.group)) {
      buckets.set(ph.group, []);
      order.push(ph.group);
    }
    buckets.get(ph.group)!.push(ph);
  }
  return order.map((group) => ({ group, items: buckets.get(group)! }));
}
