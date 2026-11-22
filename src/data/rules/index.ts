import type { Rule } from '../../types';
import { vowelReduction } from './vowel-reduction';
import { schwaDeletion } from './schwa-deletion';
import { vowelLengthBeforeVoiced } from './vowel-length-before-voiced';
import { happyTensing } from './happy-tensing';
import { preNasalRaising } from './pre-nasal-raising';
import { yodDropping } from './yod-dropping';
import { canadianRaising } from './canadian-raising';
import { flapT } from './flap-t';
import { glottalStop } from './glottal-stop';
import { tAllophones } from './t-allophones';
import { aspiration } from './aspiration';
import { palatalization } from './palatalization';
import { darkL } from './dark-l';
import { nasalLateralRelease } from './nasal-lateral-release';
import { linking } from './linking';
import { elision } from './elision';
import { clusterSimplification } from './cluster-simplification';
import { assimilation } from './assimilation';
import { wordStressRules } from './word-stress-rules';
import { suffixStressShift } from './suffix-stress-shift';
import { nounVerbStress } from './noun-verb-stress';
import { compoundStress } from './compound-stress';
import { sentenceStress } from './sentence-stress';
import { rhythm } from './rhythm';
import { stressContentFunction } from './stress-content-function';
import { weakForms } from './weak-forms';
import { fallingRising } from './falling-rising';
import { questionIntonation } from './question-intonation';
import { tagQuestions } from './tag-questions';
import { focusInformation } from './focus-information';

/** 音声変化ルール。音素エントリの relatedRules から参照される。 */
export const allRules: Rule[] = [
  vowelReduction,
  schwaDeletion,
  vowelLengthBeforeVoiced,
  happyTensing,
  preNasalRaising,
  yodDropping,
  canadianRaising,
  tAllophones,
  flapT,
  glottalStop,
  aspiration,
  palatalization,
  darkL,
  nasalLateralRelease,
  // Day 21-23: 連結発話
  linking,
  elision,
  clusterSimplification,
  assimilation,
  // Day 24-27: 強勢・リズム
  wordStressRules,
  suffixStressShift,
  nounVerbStress,
  compoundStress,
  sentenceStress,
  rhythm,
  stressContentFunction,
  weakForms,
  // Day 28: イントネーション
  fallingRising,
  questionIntonation,
  tagQuestions,
  focusInformation,
];
