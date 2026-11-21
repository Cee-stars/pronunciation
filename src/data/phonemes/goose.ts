import type { Phoneme } from '../../types';

export const goose: Phoneme = {
  id: 'goose',
  ipa: 'u',
  type: 'vowel',
  group: '長母音（緊張母音）',
  keyword: 'GOOSE',
  nickname: '唇を突き出す「ウー」',
  oneLiner:
    '舌の後ろを最も高く上げ、唇を強く丸めて前に突き出す後舌・高・円唇の緊張母音。日本語の「ウ」は唇を丸めないため、この円唇が最大の差になる。',
  articulation: {
    voicing: '有声',
    tongue: '舌の後部を軟口蓋に向けて最も高く押し上げる。舌先は下前歯から離れ、後ろに引く。',
    lips: '強く丸めて前に突き出す。小さな円を作る。これが日本語との最大の違い。',
    vowel: {
      height: '高（最も高い）',
      backness: '後舌',
      rounded: true,
      tension: 'tense',
      jaw: 'ほとんど下げない。',
    },
  },
  howTo: [
    '唇をすぼめて前に突き出す。ストローをくわえる形を作る。',
    'その形のまま舌の後ろを上げ、声を出す。',
    '唇の形を崩さずに伸ばす。日本語の「ウー」は唇が平らなので、形を保つことを意識する。',
    '/ʊ/ との違いは唇の丸めの強さと舌の押し込み。脱力すると /ʊ/ になる。',
  ],
  listenFor: [
    '唇が突き出ているため、音が前でこもって鳴る。深く丸い響き。',
    '長く安定する。/ʊ/ は短く切れる。',
    '語末に立てる（do, two, blue）。語末の「ウ」は常にこちら。',
    'アメリカ英語では舌がやや前寄りになっており（u-fronting）、日本語の「ウ」に近づいて聞こえる話者も多い。',
  ],
  l1: {
    substitute: '日本語の「ウ」（非円唇・中舌寄り）',
    why:
      '日本語の「ウ」は唇を丸めない。英語の /u/ の最大の特徴である円唇が欠けるため、音色が明確に違う。また舌の位置も日本語は中舌寄りで、英語の後舌ほど奥に引かない。',
    symptom:
      'fool が full に近づき、/ʊ/ との区別が消える。また円唇がないため、全体に平板で薄い響きになる。',
    examples: ['food を「フード」と唇を丸めずに読む', 'pool と pull が同音になる'],
  },
  contrasts: [
    {
      withId: 'foot',
      withIpa: 'ʊ',
      difference:
        '/u/ は舌を最も高く後ろへ押し込み、唇を強く突き出す緊張母音。/ʊ/ は脱力して舌が一段低く中寄りになり、唇の丸めも弱い。',
      listenFor: '長さと唇の響き。/u/ は長く深く鳴り、/ʊ/ は短くこもる。',
      whyHard: '日本語の「ウ」が両者の中間にあり、しかも非円唇なので円唇の差が手がかりにならない。',
      pairs: [
        { a: 'fool', aIpa: 'ful', b: 'full', bIpa: 'fʊl' },
        { a: 'pool', aIpa: 'pul', b: 'pull', bIpa: 'pʊl' },
        { a: 'Luke', aIpa: 'luk', b: 'look', bIpa: 'lʊk' },
        { a: 'suit', aIpa: 'sut', b: 'soot', bIpa: 'sʊt' },
        { a: 'wooed', aIpa: 'wud', b: 'would', bIpa: 'wʊd' },
      ],
    },
  ],
  spellings: [
    { pattern: 'oo', examples: ['food', 'moon', 'soon', 'cool', 'school'], frequency: '最頻', note: 'oo は /ʊ/（book）の語群もある。' },
    { pattern: 'u（開音節・/j/ を伴うことがある）', examples: ['music', 'student', 'duty', 'June'], frequency: '頻出', note: '米では /ju/ が /u/ になる語がある（student /ˈstudənt/）。' },
    { pattern: 'ue / ui', examples: ['blue', 'true', 'fruit', 'juice'], frequency: '頻出' },
    { pattern: 'ew', examples: ['new', 'few', 'grew', 'knew'], frequency: '頻出', note: '米では new が /nu/、英では /njuː/。' },
    { pattern: 'o', examples: ['do', 'to', 'who', 'move', 'lose'], frequency: '頻出' },
    { pattern: 'ou', examples: ['soup', 'group', 'you', 'through'], frequency: '頻出' },
    { pattern: 'wo / oe', examples: ['two', 'shoe', 'canoe'], frequency: '例外' },
  ],
  examples: [
    { word: 'food', ipa: 'fud', position: '語中' },
    { word: 'blue', ipa: 'blu', position: '語末' },
    { word: 'two', ipa: 'tu', position: '語末' },
    { word: 'school', ipa: 'skul', position: '語中' },
    { word: 'student', ipa: 'ˈstudənt', position: '語中', note: '英では /ˈstjuːdənt/' },
    { word: 'through', ipa: 'θru', position: '語末' },
  ],
  lecture: [
    '唇から入る。「日本語のウは唇を丸めない、英語のウは丸める」と言い、実際に両方やらせる。差が一目で分かる。',
    'ストローをくわえる形、と具体的な形を与える。抽象的な「丸める」より確実に伝わる。',
    'その形を保ったまま伸ばさせる。日本語話者は途中で唇が緩むので、そこを指摘する。',
    'fool / full、pool / pull で /ʊ/ との対比を聞かせる。',
    '語末に立てるのは /u/ だけだと伝える（do, two, blue）。綴り -o, -ue, -ew の読みが整理される。',
    '最後に yod の話を補足する。new, student, duty が米で /u/、英で /ju/ になること。英米差として示しておくと混乱しない。',
  ],
  faq: [
    {
      q: 'アメリカ英語の /u/ は本当に後舌なのか。',
      a:
        '伝統的な記述では後舌だが、現代のアメリカ英語では舌が前寄りに移動している（u-fronting）。goose が [ɡʉs] に近い話者も多い。結果として日本語の「ウ」に近づいているが、円唇は保たれている点が違う。',
    },
    {
      q: 'new は /nu/ と /nju/ のどちらか。',
      a:
        'アメリカ英語では /nu/（yod 脱落）、イギリス英語では /njuː/。米でも tune, duty, Tuesday などで同じ脱落が起きる。ただし music, cute, few では米英とも /j/ が残る。歯茎音（t, d, n, s, l）の後でだけ脱落する規則。',
    },
  ],
  relatedRules: ['yod-dropping', 'vowel-length-before-voiced'],
  notes: ['アメリカ英語では u-fronting が進行中で、世代差・地域差が大きい。'],
};
