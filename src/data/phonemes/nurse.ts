import type { Phoneme } from '../../types';

export const nurse: Phoneme = {
  id: 'nurse',
  ipa: 'ɝ',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'NURSE',
  nickname: 'R の響きを持つ母音。bird の母音',
  oneLiner:
    '舌を丸めるか盛り上げるかして R の音色を伴わせた、強勢のある中舌母音。「母音＋子音の r」ではなく、最初から最後まで R の響きを持つ一つの母音である。',
  articulation: {
    voicing: '有声',
    tongue:
      '2通りの作り方がある。(1) 反り舌型: 舌先を上に反らせ、どこにも触れさせない。(2) 盛り上げ型: 舌先は下げたまま舌の中ほどを盛り上げ、両脇を上奥歯に押し付ける。どちらでも同じ音になる。',
    lips: 'わずかに丸める。突き出すほどではないが、平らでもない。',
    vowel: {
      height: '中',
      backness: '中舌',
      rounded: true,
      tension: 'tense',
      jaw: 'ほとんど下げない。口の中は狭い。',
    },
  },
  howTo: [
    'まず「アー」と言う。',
    '声を出したまま、舌先を上に反らせるか、舌の中ほどを持ち上げる。どちらでもよい。',
    '音がこもって巻き込むように変われば、それが /ɝ/。',
    '舌をどこにも触れさせないこと。触れると /r/ の子音や /l/ になる。',
    '最後まで同じ音色を保つ。「アー」から「ル」へ動かすのは誤り。これは一つの母音であって2音の連続ではない。',
  ],
  listenFor: [
    'こもった、口の奥で巻き込むような音色。他のどの母音とも音質が違うので、慣れれば判別は容易。',
    '最初から最後まで音色が一定。途中で変化しない。',
    '強勢のある音節に現れる。強勢がなければ /ɚ/。',
    'イギリス英語（非 rhotic）では R の響きがなく、単なる長い中舌母音 /ɜː/ になる。bird が「バード」ではなく「バード」の r 抜きに聞こえる。',
  ],
  l1: {
    substitute: '日本語の「アー」＋ラ行子音、またはカタカナの長音「アー」「ウー」',
    why:
      '日本語に R 性母音が存在しない。カタカナ表記が「バード」「ワーク」のように長音＋子音で書かれるため、母音と子音が別々の2要素だと認識される。',
    symptom:
      '「アー」の後に日本語のラ行（たたき音）を足してしまい、2つの音の連続になる。また R の音色が母音部分に乗らないため、bud と bird の区別が消える。',
    examples: ['bird を「バード」と読み、母音部分に R の響きがない', 'work を「ワーク」と読んで2モーラにする'],
  },
  contrasts: [
    {
      withId: 'strut',
      withIpa: 'ʌ',
      difference: '/ɝ/ は R の音色を伴い舌が反るか盛り上がる。/ʌ/ には R の要素が一切なく舌は平ら。',
      listenFor: 'こもって巻き込む響きがあるか。あれば /ɝ/。',
      whyHard: '綴り u が両方に現れる（cut と curt）。綴りからは判別できない。',
      pairs: [
        { a: 'bird', aIpa: 'bɝd', b: 'bud', bIpa: 'bʌd' },
        { a: 'curt', aIpa: 'kɝt', b: 'cut', bIpa: 'kʌt' },
        { a: 'hurt', aIpa: 'hɝt', b: 'hut', bIpa: 'hʌt' },
        { a: 'burn', aIpa: 'bɝn', b: 'bun', bIpa: 'bʌn' },
        { a: 'shirt', aIpa: 'ʃɝt', b: 'shut', bIpa: 'ʃʌt' },
      ],
    },
    {
      withId: 'letter',
      withIpa: 'ɚ',
      difference: '音質は同一。違いは強勢の有無のみ。強勢があれば /ɝ/、なければ /ɚ/。',
      listenFor: 'その音節が目立つかどうか。/ʌ/ と /ə/ の関係とまったく同じ構造。',
      pairs: [
        { a: 'pervért（動詞・第2音節に強勢）', aIpa: 'pɚˈvɝt', b: 'pérvert（名詞）', bIpa: 'ˈpɝvɚt', note: '同じ語で両方が現れる' },
        { a: 'prefér', aIpa: 'prɪˈfɝ', b: 'préference', bIpa: 'ˈprɛfɚəns', note: '強勢移動で /ɝ/ が /ɚ/ になる' },
      ],
    },
  ],
  spellings: [
    { pattern: 'ur', examples: ['turn', 'burn', 'hurt', 'nurse', 'church'], frequency: '最頻' },
    { pattern: 'ir', examples: ['bird', 'first', 'girl', 'shirt', 'third'], frequency: '最頻' },
    { pattern: 'er（強勢あり）', examples: ['her', 'term', 'serve', 'person', 'nerve'], frequency: '最頻' },
    { pattern: 'or（w の後）', examples: ['work', 'word', 'world', 'worse', 'worth'], frequency: '頻出', note: 'w の後の or は /ɔr/ ではなく /ɝ/ になる。規則性が高い。' },
    { pattern: 'ear', examples: ['earth', 'learn', 'heard', 'search', 'early'], frequency: '頻出' },
    { pattern: 'our', examples: ['journey', 'courage', 'nourish'], frequency: '少数' },
  ],
  examples: [
    { word: 'early', ipa: 'ˈɝli', position: '語頭' },
    { word: 'earth', ipa: 'ɝθ', position: '語頭' },
    { word: 'bird', ipa: 'bɝd', position: '語中' },
    { word: 'work', ipa: 'wɝk', position: '語中', note: 'w の後の or' },
    { word: 'nurse', ipa: 'nɝs', position: '語中' },
    { word: 'her', ipa: 'hɝ', position: '語末', note: '弱形では /ɚ/ や /hɚ/' },
  ],
  lecture: [
    '最初に「これは母音である」と強く宣言する。カタカナが「アー＋ル」に分解させるので、ここを崩しておかないと以降が通じない。',
    '「アー」と言わせ、声を出したまま舌を反らせる（または盛り上げる）よう指示する。2通りあることを伝え、出しやすいほうでよいと言う。',
    '舌をどこにも触れさせないことを強調する。触れると日本語のラ行になる。',
    '音色が最初から最後まで一定であることを確認させる。「アー」→「ル」と動かしていたら誤り。',
    'bird / bud、curt / cut で /ʌ/ との対比を聞かせる。R の音色の有無が唯一の差だと示す。',
    '綴りを整理する。ur, ir, er, ear はすべて /ɝ/ で、綴りが4通りあっても音は1つだと示すと負荷が下がる。w の後の or（work, word, world）も加える。',
    '最後にイギリス英語では R の響きが無いと補足し、Day 10 と Day 30 に繋ぐ。',
  ],
  faq: [
    {
      q: '反り舌型と盛り上げ型のどちらで覚えるべきか。',
      a:
        'どちらでもよい。英語母語話者も個人によって分かれており、音響的にはほぼ区別が付かない。出しやすいほうを選べばよい。盛り上げ型のほうが舌の緊張が少なく、長く続けやすいという人が多い。',
    },
    {
      q: '/ɝ/ と /ər/ はどう違うのか。',
      a:
        '表記の違いで、同じものを指す。/ɝ/ は「R 性を持つ一つの母音」として書く方式、/ər/ は「母音＋子音」として書く方式。辞書によって流派が分かれる。音としては一つのまとまりなので、本アプリは /ɝ/ を採る。',
    },
    {
      q: 'イギリス英語ではどうなるか。',
      a:
        'R の響きが消え、長い中舌母音 /ɜː/ になる。bird は /bɜːd/。ただし次に母音が続くと r が復活する（linking R）。',
    },
  ],
  relatedRules: ['vowel-reduction', 'us-vs-uk'],
  notes: [
    '英語で唯一、R の音色を持つ強勢母音。',
    '非 rhotic 方言（イギリス南部、オーストラリアなど）では /ɜː/ になる。',
  ],
};
