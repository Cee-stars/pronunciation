import type { Phoneme, Rule, Topic } from '../types';

import { trap } from './phonemes/trap';
import { kit } from './phonemes/kit';
import { dress } from './phonemes/dress';
import { strut } from './phonemes/strut';
import { foot } from './phonemes/foot';
import { schwa } from './phonemes/schwa';
import { fleece } from './phonemes/fleece';
import { goose } from './phonemes/goose';
import { lot } from './phonemes/lot';
import { thought } from './phonemes/thought';
import { face } from './phonemes/face';
import { price } from './phonemes/price';
import { choice } from './phonemes/choice';
import { mouth } from './phonemes/mouth';
import { goat } from './phonemes/goat';
import { nurse } from './phonemes/nurse';
import { letter } from './phonemes/letter';
import { start } from './phonemes/start';
import { north } from './phonemes/north';
import { near } from './phonemes/near';
import { square } from './phonemes/square';
import { cure } from './phonemes/cure';
import { p as pCons } from './phonemes/p';
import { b } from './phonemes/b';
import { t } from './phonemes/t';
import { d } from './phonemes/d';
import { k } from './phonemes/k';
import { g } from './phonemes/g';
import { f } from './phonemes/f';
import { v } from './phonemes/v';
import { th } from './phonemes/th';
import { dh } from './phonemes/dh';
import { s as sCons } from './phonemes/s';
import { sh } from './phonemes/sh';
import { z } from './phonemes/z';
import { zh } from './phonemes/zh';
import { h } from './phonemes/h';
import { ch } from './phonemes/ch';
import { jh } from './phonemes/jh';
import { m } from './phonemes/m';
import { n } from './phonemes/n';
import { ng } from './phonemes/ng';
import { l } from './phonemes/l';
import { r } from './phonemes/r';
import { w } from './phonemes/w';
import { y } from './phonemes/y';
import { allTopics } from './topics';
import { allRules } from './rules';

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
  // 長母音
  fleece,
  goose,
  lot,
  thought,
  // 二重母音
  face,
  price,
  choice,
  mouth,
  goat,
  // R性母音
  nurse,
  letter,
  start,
  north,
  near,
  square,
  cure,
  // 破裂音（調音点順: 両唇 → 歯茎 → 軟口蓋）
  pCons,
  b,
  t,
  d,
  k,
  g,
  // 摩擦音（調音点順: 唇歯 → 歯 → 歯茎 → 後部歯茎）
  f,
  v,
  th,
  dh,
  sCons,
  z,
  sh,
  zh,
  h,
  // 破擦音
  ch,
  jh,
  // 鼻音
  m,
  n,
  ng,
  // 接近音
  l,
  r,
  w,
  y,
];

export const rules: Rule[] = allRules;

export const topics: Topic[] = allTopics;

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
