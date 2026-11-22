import type { Topic } from '../../types';
import { ipaBasics } from './ipa-basics';
import { phonemeVsAllophone } from './phoneme-vs-allophone';
import { dictionaryNotation } from './dictionary-notation';
import { placeOfArticulation } from './place-of-articulation';
import { mannerOfArticulation } from './manner-of-articulation';
import { voicing } from './voicing';
import { vowelAxes } from './vowel-axes';
import { phonotactics } from './phonotactics';
import { vowelDigraphs } from './vowel-digraphs';
import { consonantDigraphs } from './consonant-digraphs';
import { edEndings } from './ed-endings';
import { sEndings } from './s-endings';
import { magicE } from './magic-e';
import { silentLetters } from './silent-letters';
import { ough } from './ough';
import { usVsUk } from './us-vs-uk';
import { mergers } from './mergers';
import { jpKatakanaGaps } from './jp-katakana-gaps';

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
  // Day 29: スペリング逆引き
  vowelDigraphs,
  consonantDigraphs,
  edEndings,
  sEndings,
  magicE,
  silentLetters,
  ough,
  // Day 30: 方言・変種
  usVsUk,
  mergers,
  jpKatakanaGaps,
];
