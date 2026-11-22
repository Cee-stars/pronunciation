import type { Phoneme } from '../../types';

export const s: Phoneme = {
  id: 's',
  ipa: 's',
  type: 'consonant',
  group: '摩擦音',
  nickname: '日本語のサ行の子音とほぼ同じ音',
  oneLiner:
    '舌先を歯茎に近づけ、狭い隙間から空気を鋭く通して出す無声の歯茎摩擦音。日本語のサ行とほぼ同じだが、「シ」の子音だけは別の音（/ʃ/）である点に注意が要る。',
  articulation: {
    voicing: '無声',
    tongue:
      '舌先を上の歯茎に近づけるが触れさせない。舌の中央に細い溝を作り、そこへ気流を集める。舌の両脇は上の奥歯に密着させて空気が漏れないようにする。',
    lips: '丸めない。自然に開く。',
    consonant: {
      place: '歯茎',
      manner: '摩擦',
      airflow: '舌の中央の溝から上前歯に向けて気流を吹きつけ、歯で乱流を起こす。音が伸ばせる。',
    },
  },
  howTo: [
    '日本語の「ス」を言い、母音を取り除いて子音だけを伸ばす。それでほぼ正しい。',
    '舌の両脇が上の奥歯に当たっているか確認する。ここが浮くと空気が横に漏れて音が鈍る。',
    '歯の隙間を狭く保つ。広いと /θ/ に近づく。',
    '/i/ の前でも舌を後ろに引かないこと。引くと「シ」になり /ʃ/ になってしまう。これが日本語話者の最大の課題。',
  ],
  listenFor: [
    '高く鋭い摩擦音。英語の子音の中で最も高い周波数成分を持つ。',
    '/ʃ/ より明らかに高く細い。/ʃ/ は低くこもる。',
    '/θ/ との違いは鋭さ。/θ/ は摩擦が弱くぼやけるが、/s/ ははっきりした鋭い音。',
    '語末の -s は直前の音が有声なら /z/ になる。綴り s を見ても音は /s/ とは限らない。',
  ],
  l1: {
    substitute: '「シ」の位置では日本語のシ（/ʃi/）',
    why:
      '日本語には /si/ という組み合わせが存在せず、サ行のイ段は自動的に /ʃi/（シ）になる。そのため英語の see, sit, seat のように /s/ + 前舌高母音が来ると、母語の規則が発動して「シー」になってしまう。/s/ 自体が出せないのではなく、特定の母音の前でだけ出せないという形の干渉。',
    symptom:
      'see が she、sit が shit、seat が sheet に聞こえる。語によっては深刻な誤解を招く。',
    examples: ['see を「シー」と読み she と同音になる', 'sea と she が区別できない'],
  },
  contrasts: [
    {
      withId: 'sh',
      withIpa: 'ʃ',
      difference:
        '/s/ は舌先を歯茎に近づける。/ʃ/ はさらに後ろ（後部歯茎）で、舌の面を広く使い、唇もわずかに丸める。',
      listenFor:
        '音の高さ。/s/ は高く細い、/ʃ/ は低くこもる。唇が丸まっているかも視覚的な手がかりになる。',
      whyHard: '日本語では /i/ の前で両者が区別されず、/ʃi/ に統合されているため。',
      pairs: [
        { a: 'see', aIpa: 'si', b: 'she', bIpa: 'ʃi' },
        { a: 'sea', aIpa: 'si', b: 'she', bIpa: 'ʃi' },
        { a: 'sip', aIpa: 'sɪp', b: 'ship', bIpa: 'ʃɪp' },
        { a: 'seat', aIpa: 'sit', b: 'sheet', bIpa: 'ʃit' },
        { a: 'sell', aIpa: 'sɛl', b: 'shell', bIpa: 'ʃɛl' },
        { a: 'same', aIpa: 'seɪm', b: 'shame', bIpa: 'ʃeɪm' },
      ],
    },
    {
      withId: 'th',
      withIpa: 'θ',
      difference: '/s/ は舌先が歯茎に近づく。/θ/ は舌先が上の前歯に触れる。より前で摩擦が弱い。',
      listenFor: '/s/ は鋭く高い。/θ/ は弱くぼやけた息漏れのような音。',
      whyHard: '日本語に /θ/ がなく、最も近い /s/ で代用されるため。',
      pairs: [
        { a: 'sink', aIpa: 'sɪŋk', b: 'think', bIpa: 'θɪŋk' },
        { a: 'sin', aIpa: 'sɪn', b: 'thin', bIpa: 'θɪn' },
        { a: 'mouse', aIpa: 'maʊs', b: 'mouth', bIpa: 'maʊθ' },
        { a: 'pass', aIpa: 'pæs', b: 'path', bIpa: 'pæθ' },
      ],
    },
    {
      withId: 'z',
      withIpa: 'z',
      difference: '調音は同一。声帯が震えるかどうかだけが違う。',
      listenFor: '喉の振動。また /z/ の前の母音は長くなる。',
      pairs: [
        { a: 'sip', aIpa: 'sɪp', b: 'zip', bIpa: 'zɪp' },
        { a: 'sue', aIpa: 'su', b: 'zoo', bIpa: 'zu' },
        { a: 'bus', aIpa: 'bʌs', b: 'buzz', bIpa: 'bʌz' },
        { a: 'price', aIpa: 'praɪs', b: 'prize', bIpa: 'praɪz' },
      ],
    },
  ],
  spellings: [
    { pattern: 's', examples: ['see', 'sun', 'best', 'this'], frequency: '最頻', note: '語中・語末では /z/ になることも多い（rose, is）。' },
    { pattern: 'ss', examples: ['pass', 'class', 'miss', 'less'], frequency: '最頻', note: 'ss は常に /s/。' },
    { pattern: 'c（e, i, y の前）', examples: ['city', 'face', 'cent', 'cycle'], frequency: '頻出', note: 'いわゆる軟音の c。a, o, u の前では /k/。' },
    { pattern: 'sc（e, i の前）', examples: ['science', 'scene', 'muscle'], frequency: '少数' },
    { pattern: 'ps-（語頭）', examples: ['psychology', 'psalm'], frequency: '例外', note: 'p は読まれない。' },
    { pattern: 'x = /ks/', examples: ['box', 'six', 'next'], frequency: '頻出', note: '1文字で2音。' },
  ],
  examples: [
    { word: 'see', ipa: 'si', position: '語頭' },
    { word: 'sit', ipa: 'sɪt', position: '語頭', note: '/ʃ/ になりやすい環境' },
    { word: 'city', ipa: 'ˈsɪɾi', position: '語頭', note: '綴り c が /s/。flap T も起きる' },
    { word: 'basket', ipa: 'ˈbæskɪt', position: '語中' },
    { word: 'bus', ipa: 'bʌs', position: '語末' },
    { word: 'next', ipa: 'nɛkst', position: '語末', note: '連結の中で /t/ が脱落しやすい' },
  ],
  lecture: [
    '最初に「/s/ 自体は日本語にある」と安心させる。サ行の子音と同じだと伝える。',
    'そのうえで「ただし『シ』だけは別の音だ」と限定する。問題が1点に絞られると対処しやすい。',
    '「シ」を言わせ、舌が後ろに下がっていることを確認させる。これが /ʃ/ だと示す。',
    '「ス」の舌の位置のまま /i/ を続けるよう指示する。「スィー」と書くと伝わりやすい。これで see が出る。',
    'see / she、sip / ship で対比を聞かせる。音の高さの差（高く細い vs 低くこもる）を手がかりとして与える。',
    '次に /θ/ との対比に移る。sink / think。/s/ は鋭く、/θ/ はぼやける。',
    '最後に綴りを整理する。c が e, i, y の前で /s/ になること（city, face）、ss は常に /s/、x は /ks/。読解に直結する。',
  ],
  faq: [
    {
      q: '「スィ」と書いて練習してよいか。',
      a:
        'よい。日本語の表記体系にない組み合わせを意識的に作るための有効な手段。ただし「スイ」と2モーラにならないよう、子音と母音を1つのまとまりとして出すこと。',
    },
    {
      q: '語末の -s はいつ /s/ でいつ /z/ か。',
      a:
        '直前の音が無声なら /s/（cats, books）、有声なら /z/（dogs, cars）、歯擦音の後は /ɪz/（buses, watches）。規則ではなく有声性の同化の結果。',
    },
    {
      q: '/s/ の後の /t/ /p/ /k/ が濁って聞こえるのはなぜか。',
      a:
        '帯気が消えるため。英語話者は帯気の有無で無声・有声を判別しているので、帯気のない [t] は日本語話者にも /d/ に近く聞こえる。stop が「スドップ」に聞こえるのは正常な聞こえ方。',
    },
  ],
  relatedRules: ['s-endings', 'aspiration', 'assimilation', 'palatalization'],
  notes: ['日本語話者の課題は /s/ 自体ではなく、/i/ の前で /ʃ/ に転じてしまう点に限定される。'],
};
