import type { Topic } from '../../types';
import { ipaBasics } from './ipa-basics';
import { phonemeVsAllophone } from './phoneme-vs-allophone';
import { dictionaryNotation } from './dictionary-notation';
import { placeOfArticulation } from './place-of-articulation';
import { mannerOfArticulation } from './manner-of-articulation';
import { voicing } from './voicing';
import { vowelAxes } from './vowel-axes';
import { phonotactics } from './phonotactics';

/** Day 1–2 の調音の基礎。以降のすべての項目がこの座標系の上に乗る。 */
export const allTopics: Topic[] = [
  ipaBasics,
  phonemeVsAllophone,
  dictionaryNotation,
  placeOfArticulation,
  mannerOfArticulation,
  voicing,
  vowelAxes,
  phonotactics,
];
