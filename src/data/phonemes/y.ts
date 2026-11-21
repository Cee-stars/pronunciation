import type { Phoneme } from '../../types';

export const y: Phoneme = {
  id: 'y',
  ipa: 'j',
  type: 'consonant',
  group: '接近音',
  nickname: '「イ」から滑り出す渡り音。記号は j',
  oneLiner:
    '舌を前の高い位置に上げた /i/ の形から、次の母音へ滑り出す有声の接近音。綴りは y だが IPA の記号は j である点に注意が要る。',
  articulation: {
    voicing: '有声',
    tongue: '舌の前部を硬口蓋に向けて高く上げる。/i/ と同じ位置。接触はしない。',
    lips: '丸めない。横にやや引いた自然な形。',
    consonant: {
      place: '硬口蓋',
      manner: '接近',
      airflow: '舌と硬口蓋の間を狭めるが摩擦は起こさない。その位置から次の母音へ移る動きが音になる。',
    },
  },
  howTo: [
    '「イ」の形を作る。舌の前を高く上げる。',
    'その位置から間を置かずに次の母音へ動かす。',
    '止まらないこと。止まると /i/ という独立した母音になり、音節が増える。',
    '日本語のヤ行（ヤ・ユ・ヨ）と同じ音なので、出すこと自体は容易。',
  ],
  listenFor: [
    '母音の前に短い「イ」の渡りが入る。',
    '単独では取り出せず、常に次の母音と一体になっている。',
    '/u/ の前では「ユ」に聞こえる（music, cute, few）。これが最も頻度の高い現れ方。',
    'アメリカ英語では歯茎音の後で脱落する（new, tune, student）。イギリスでは残る。',
  ],
  l1: {
    substitute: '日本語のヤ行（ほぼ同音なので干渉は小さい）',
    why:
      '日本語のヤ行子音が /j/ と一致するため、音そのものに問題は起きない。ただし日本語に /ji/ /je/ が存在しないため、year, yes の語頭で母音を足したり、ear との区別が崩れたりする。',
    symptom:
      'year が「イヤー」と2モーラになり、ear との区別が消える。yes は日本語の「イエス」の影響で2拍になりやすい。',
    examples: ['year を「イヤー」と読み ear と混同される', 'yesterday を「イエスタデイ」と拍を分けて読む'],
  },
  contrasts: [
    {
      withId: 'jh',
      withIpa: 'dʒ',
      difference:
        '/j/ は接近音で、どこも閉じずに滑る。/dʒ/ は破擦音で、一度完全に閉鎖してから摩擦しながら開放する。',
      listenFor: '出だしに閉鎖と破裂があるか。/dʒ/ には頭に詰まる感じがある。',
      whyHard: '英語の綴り y と j、日本語の「ヤ」と「ジャ」が視覚的に紛らわしいため。',
      pairs: [
        { a: 'yet', aIpa: 'jɛt', b: 'jet', bIpa: 'dʒɛt' },
        { a: 'year', aIpa: 'jɪr', b: 'jeer', bIpa: 'dʒɪr' },
        { a: 'yam', aIpa: 'jæm', b: 'jam', bIpa: 'dʒæm' },
        { a: 'yoke', aIpa: 'joʊk', b: 'joke', bIpa: 'dʒoʊk' },
        { a: 'use（動詞）', aIpa: 'juz', b: 'juice', bIpa: 'dʒus', note: '厳密な最小対立ではないが対比に有効' },
      ],
    },
  ],
  spellings: [
    { pattern: 'y（語頭）', examples: ['yes', 'you', 'year', 'young', 'yellow'], frequency: '最頻' },
    { pattern: 'u / ew / eu（/ju/ として）', examples: ['music', 'cute', 'few', 'Europe', 'unit'], frequency: '最頻', note: '唇音・軟口蓋音の後では米英とも /j/ が残る。' },
    { pattern: 'i（母音の前）', examples: ['onion', 'union', 'million', 'familiar'], frequency: '頻出' },
    { pattern: 'j（外来語）', examples: ['hallelujah', 'fjord'], frequency: '例外', note: '英語の j は通常 /dʒ/。' },
  ],
  examples: [
    { word: 'yes', ipa: 'jɛs', position: '語頭' },
    { word: 'you', ipa: 'ju', position: '語頭' },
    { word: 'year', ipa: 'jɪr', position: '語頭', note: 'ear /ɪr/ と対比' },
    { word: 'music', ipa: 'ˈmjuzɪk', position: '語中', note: '/mj/ の連続' },
    { word: 'few', ipa: 'fju', position: '語中' },
    { word: 'onion', ipa: 'ˈʌnjən', position: '語中' },
  ],
  lecture: [
    'まず記号の注意から入る。「綴りは y だが IPA では j と書く」。ここを先に言わないと辞書を読んだときに混乱する。',
    '音そのものは日本語のヤ行と同じだと伝える。容易な音は容易だと明言する。',
    '問題は2点に限られると示す。/ji/ /je/ が日本語に無いこと、そして /ju/ の扱い。',
    'year / ear を聞かせる。日本語話者は year を2モーラにしがちなので、1音節で始めることを確認させる。',
    'music, cute, few の /ju/ を示す。これが /j/ の最も多い現れ方だと伝える。',
    'yet / jet で /dʒ/ との差を聞かせる。閉鎖があるかどうかが判別点。',
    '最後に yod 脱落に触れる。米では new, tune, student で /j/ が落ち、英では残る。既に書かれている yod 脱落の項目へ送って締める。',
  ],
  faq: [
    {
      q: 'なぜ記号が j なのか。',
      a:
        'IPA はドイツ語など多くのヨーロッパ言語の綴り習慣に従っており、そこでは j がこの音を表す。英語の綴り j が /dʒ/ を表すのは英語側の特殊事情。IPA は英語専用の体系ではないので、英語の綴りに合わせていない。',
    },
    {
      q: '/ju/ は1音か2音か。',
      a:
        '子音 /j/ ＋母音 /u/ の2音。ただし音節としては1つで、music は2音節（mu-sic）。日本語の「ミュ」と同じ扱いと考えてよい。',
    },
    {
      q: 'year と ear はどう区別するのか。',
      a:
        '語頭に /j/ の渡りがあるかどうか。year は舌が高い位置から始まって下がる動きがあり、ear は最初から /ɪ/ の位置にある。日本語話者は「イヤー」と2拍にしがちだが、year は1音節。',
    },
  ],
  relatedRules: ['yod-dropping', 'palatalization', 'linking', 'fleece'],
  notes: [
    '母音間のリンキングで /j/ が挿入される（he is → /hi jɪz/）。Day 21 で扱う。',
    '/i/ の前には立てない（*yi- という連続が英語に存在しない）。',
  ],
};
