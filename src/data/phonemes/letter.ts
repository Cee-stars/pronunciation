import type { Phoneme } from '../../types';

export const letter: Phoneme = {
  id: 'letter',
  ipa: 'ɚ',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'letter / comma の対立',
  nickname: 'R の響きを持つシュワー',
  oneLiner:
    '強勢のない音節に現れる、R の音色を伴ったシュワー。/ɝ/ と音質は同じで、違いは強勢がないことだけ。英語で最も頻度の高い語尾の一つ。',
  articulation: {
    voicing: '有声',
    tongue: '/ɝ/ と同じ。舌先を反らせるか舌の中ほどを盛り上げる。ただし力は入れず、短く済ませる。',
    lips: 'ほぼ丸めない。脱力した形。',
    vowel: {
      height: '中',
      backness: '中舌',
      rounded: false,
      tension: 'lax',
      jaw: 'ほとんど下げない。',
    },
  },
  howTo: [
    '/ɝ/ を出す。',
    '力を抜き、短くする。それだけで /ɚ/ になる。',
    '目立たせないこと。この音は語の中で最も弱い部分に現れる。',
    '「アー」と伸ばさない。teacher を「ティーチャー」と伸ばすと強勢の位置が崩れる。',
  ],
  listenFor: [
    '語尾に R の音色が軽く乗って終わる。弱く短い。',
    '-er, -or, -ar, -ure, -our の語尾はほぼこの音。綴りが違っても音は同じ。',
    '強勢がないため、聞き取りでは埋もれやすい。語尾が消えたように聞こえたらこの音を疑う。',
    '非 rhotic 方言では R の響きが消え、単なる /ə/ になる（comma と letter の語尾が同音になる）。',
  ],
  l1: {
    substitute: 'カタカナの長音「アー」（teacher →「ティーチャー」）',
    why:
      'カタカナ表記が語尾を長音で写すため、強勢のない短い音が長い音に置き換わる。また R の音色が母音に乗る仕組みが日本語にない。',
    symptom:
      '語尾が長く強くなり、強勢の位置が後ろにずれて聞こえる。英語では語尾こそ最も弱い部分なので、リズムが逆転する。',
    examples: ['teacher を「ティーチャー」と語尾を伸ばす', 'water を「ウォーター」と2つの長音で読む'],
  },
  contrasts: [
    {
      withId: 'nurse',
      withIpa: 'ɝ',
      difference: '音質は同一。強勢があれば /ɝ/、なければ /ɚ/。',
      listenFor: 'その音節が目立つかどうか。音そのものを聴き比べても区別できない。',
      whyHard: '音質が同じなので、音の違いを探そうとすると失敗する。強勢という別の次元を聴く必要がある。',
      pairs: [
        { a: 'pérvert（名詞）', aIpa: 'ˈpɝvɚt', b: 'pervért（動詞）', bIpa: 'pɚˈvɝt', note: '同じ語で /ɝ/ と /ɚ/ が入れ替わる' },
        { a: 'prefér', aIpa: 'prɪˈfɝ', b: 'préference', bIpa: 'ˈprɛfɚəns' },
      ],
    },
    {
      withId: 'schwa',
      withIpa: 'ə',
      difference: '/ɚ/ は R の音色を伴う。/ə/ には無い。',
      listenFor: '語尾に R の巻き込みがあるか。綴りに r があるかも手がかりになる。',
      whyHard: 'どちらも弱く短いため、注意していないと区別が付かない。非 rhotic 方言では実際に同音になる。',
      pairs: [
        { a: 'letter', aIpa: 'ˈlɛɾɚ', b: 'comma', bIpa: 'ˈkɑmə', note: '音声学で標準的に使われる対立の名前' },
        { a: 'winner', aIpa: 'ˈwɪnɚ', b: 'banana', bIpa: 'bəˈnænə' },
      ],
    },
  ],
  spellings: [
    { pattern: '-er', examples: ['teacher', 'water', 'better', 'other', 'summer'], frequency: '最頻' },
    { pattern: '-or', examples: ['doctor', 'actor', 'color', 'favor', 'mirror'], frequency: '最頻' },
    { pattern: '-ar', examples: ['dollar', 'sugar', 'grammar', 'popular'], frequency: '頻出' },
    { pattern: '-ure', examples: ['picture', 'nature', 'future', 'measure'], frequency: '頻出', note: '直前の t, d, s が口蓋化して /tʃ/ /dʒ/ /ʒ/ になる。' },
    { pattern: '-our（米綴りは -or）', examples: ['labour', 'colour', 'honour'], frequency: '少数', note: 'イギリス綴り。' },
    { pattern: '-re（英綴り）', examples: ['centre', 'theatre'], frequency: '少数', note: '米では -er。' },
    { pattern: '-yr / -ir', examples: ['martyr', 'elixir'], frequency: '例外' },
  ],
  examples: [
    { word: 'teacher', ipa: 'ˈtitʃɚ', position: '語末' },
    { word: 'water', ipa: 'ˈwɔɾɚ', position: '語末', note: 'flap T も同時に起きる' },
    { word: 'doctor', ipa: 'ˈdɑktɚ', position: '語末' },
    { word: 'perhaps', ipa: 'pɚˈhæps', position: '語頭', note: '語頭の無強勢音節にも現れる' },
    { word: 'understand', ipa: 'ˌʌndɚˈstænd', position: '語中' },
    { word: 'picture', ipa: 'ˈpɪktʃɚ', position: '語末', note: 't + ure が /tʃɚ/ に' },
  ],
  lecture: [
    '/ɝ/ を先に教えてから、「強勢がないだけのもの」として導入する。独立した新しい音として教えない。',
    'シュワーとの関係を示す。/ʌ/ : /ə/ = /ɝ/ : /ɚ/ という比例関係で整理すると、4つの音の関係が一度に片付く。',
    'カタカナの「アー」が最大の障害だと指摘する。teacher を「ティーチャー」と読むと語尾が最も強くなり、英語のリズムと逆になる。',
    '語尾を短く弱くする練習をさせる。teacher, water, doctor を、語尾を飲み込むつもりで言わせる。',
    '綴りの多様性を整理する。-er, -or, -ar, -ure, -our はすべて同じ音。綴りが5通りでも音は1つ。',
    'letter / comma の対立を示し、/ə/ との違いが R の音色だけだと確認して締める。',
  ],
  faq: [
    {
      q: '/ɚ/ と /ər/ はどう違うのか。',
      a:
        '表記の違いで同じもの。R 性を母音記号に含めるか、母音＋子音として書くかの流派の差。',
    },
    {
      q: '語尾の -er を「アー」と読んではいけないのか。',
      a:
        '通じないわけではないが、長さと強さが付くことで強勢の位置が崩れる。英語の語尾は弱く短いのが原則で、そこを守るほうが R の音色より優先度が高い。',
    },
    {
      q: '非 rhotic 方言ではどうなるか。',
      a:
        'R の音色が消えて /ə/ になる。letter と comma の語尾が同音になる。ただし次に母音が続くと r が復活する（linking R: letter of → /ˈlɛtər əv/）。',
    },
  ],
  relatedRules: ['vowel-reduction', 'palatalization', 'linking', 'us-vs-uk'],
  notes: [
    '英語で最も頻度の高い語尾の一つ。-er, -or, -ar がすべてこの音に収束する。',
    '/ʌ/ : /ə/ の関係と /ɝ/ : /ɚ/ の関係は完全に平行している。',
  ],
};
