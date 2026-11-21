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
];
