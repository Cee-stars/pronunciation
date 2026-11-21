import type { Phoneme } from '../../types';

export const fleece: Phoneme = {
  id: 'fleece',
  ipa: 'i',
  type: 'vowel',
  group: '長母音（緊張母音）',
  keyword: 'FLEECE',
  nickname: '張った「イー」',
  oneLiner:
    '舌を最も高く前に押し上げ、唇を横に引いて出す前舌・高・非円唇の緊張母音。日本語の「イ」に近いが、より舌を押し込み長く安定する。',
  articulation: {
    voicing: '有声',
    tongue: '舌の前部を硬口蓋に向けて最も高く押し上げる。舌の両脇が上奥歯にしっかり触れる。舌に力を入れる。',
    lips: '横に引く。笑ったときの形に近い。丸めない。',
    vowel: {
      height: '高（最も高い）',
      backness: '前舌（最も前）',
      rounded: false,
      tension: 'tense',
      jaw: 'ほとんど下げない。歯の間が狭い。',
    },
  },
  howTo: [
    '日本語の「イ」を言う。すでにかなり近い。',
    '唇を横に引き、舌をさらに上と前へ押し込む。舌の両脇が上の奥歯に当たっているか確認する。',
    '力を抜かずに伸ばす。長さではなく「張っている」状態を保つことが本質。',
    '/ɪ/ との違いは力の有無。脱力したら /ɪ/ になる。',
  ],
  listenFor: [
    '鋭く張った明るい響き。/ɪ/ の「ぼやけた響き」と対になる。',
    '長く安定する。音の途中で質が変わらない。',
    '語末に立てる（city, happy, see）。語末の「イ」は常にこちら。',
    '無声子音の前では短くなる（seat は seed より短い）。長さだけで /ɪ/ と判別すると、ここで誤る。',
  ],
  l1: {
    substitute: '日本語の「イ」（やや緊張の弱い高前舌母音）',
    why:
      '日本語の「イ」は英語の /i/ に比較的近いため、代用しても通じやすい。問題は逆方向で、/ɪ/ も同じ「イ」で代用してしまい、2つの音素が1つに潰れること。',
    symptom:
      '/i/ 自体は通じる。ただし日本語の「イ」は英語の /i/ より舌が低く短いため、ship と sheep がどちらも中間の音になり、どちらとも取れなくなる。',
    examples: ['sheep を「シープ」と読み /ɪ/ 寄りになる', 'eat と it が同じ音になる'],
  },
  contrasts: [
    {
      withId: 'kit',
      withIpa: 'ɪ',
      difference:
        '/i/ は舌を最も高く前へ押し込む緊張母音。/ɪ/ は脱力して舌が一段低く中寄りになる弛緩母音。',
      listenFor:
        'まず長さ、次に響きの鋭さ。/i/ は金属的に張り、/ɪ/ はぼやける。長さは無声子音の前で縮むので、最終的には響きで判別する。',
      whyHard: '日本語の「イ」が1つしかなく、2つの英語音素がそこへ吸収されるため。',
      pairs: [
        { a: 'seat', aIpa: 'sit', b: 'sit', bIpa: 'sɪt' },
        { a: 'sheep', aIpa: 'ʃip', b: 'ship', bIpa: 'ʃɪp' },
        { a: 'feet', aIpa: 'fit', b: 'fit', bIpa: 'fɪt' },
        { a: 'leave', aIpa: 'liv', b: 'live', bIpa: 'lɪv', note: 'live は動詞なら /lɪv/、形容詞なら /laɪv/' },
        { a: 'eat', aIpa: 'it', b: 'it', bIpa: 'ɪt' },
        { a: 'green', aIpa: 'ɡrin', b: 'grin', bIpa: 'ɡrɪn' },
      ],
    },
  ],
  spellings: [
    { pattern: 'ee', examples: ['see', 'tree', 'need', 'green', 'feel'], frequency: '最頻' },
    { pattern: 'ea', examples: ['eat', 'sea', 'read', 'teach', 'clean'], frequency: '最頻', note: 'ea は /ɛ/（head）になる語群もある。' },
    { pattern: 'e（開音節）', examples: ['be', 'he', 'me', 'these', 'even'], frequency: '頻出' },
    { pattern: '-y / -ey（語末・無強勢）', examples: ['happy', 'city', 'money', 'key'], frequency: '最頻', note: '辞書により /i/ と /ɪ/ で表記が揺れる（happY tensing）。' },
    { pattern: 'ie', examples: ['believe', 'piece', 'field', 'chief'], frequency: '頻出' },
    { pattern: 'ei', examples: ['receive', 'ceiling', 'either'], frequency: '少数', note: 'c の後は ei という綴り字規則。' },
    { pattern: 'i（外来語）', examples: ['machine', 'police', 'ski', 'pizza'], frequency: '少数' },
    { pattern: 'eo / ae', examples: ['people', 'Caesar'], frequency: '例外' },
  ],
  examples: [
    { word: 'eat', ipa: 'it', position: '語頭' },
    { word: 'even', ipa: 'ˈivən', position: '語頭' },
    { word: 'see', ipa: 'si', position: '語末' },
    { word: 'machine', ipa: 'məˈʃin', position: '語中' },
    { word: 'believe', ipa: 'bəˈliv', position: '語中' },
    { word: 'happy', ipa: 'ˈhæpi', position: '語末', note: '無強勢の語末 -y' },
  ],
  lecture: [
    '「日本語の『イ』はこちら側だ」と最初に位置づける。既知の音がどちらかを確定させると、/ɪ/ が「新しい音」として扱える。',
    '違いは長さではなく緊張度だと明言する。「短く言えばいい」という誤解を先に潰す。',
    '唇を横に引き、舌の両脇が上の奥歯に当たる感覚を確認させる。これが tense の実体。',
    'seat / sit、sheep / ship を聞かせる。まず長さで入る。',
    '次に「無声子音の前では /i/ も短くなる」と但し書きを入れ、seat と seed を比べさせる。長さだけに頼らせない。',
    '最後に語末の話をする。city, happy の -y は /i/ で、語末に /ɪ/ は立たない。綴り -y の読みが一括で整理される。',
  ],
  faq: [
    {
      q: 'なぜ米式では /iː/ と書かないのか。',
      a:
        '英語の対立の本質が長さではなく緊張度だという立場を取るため。長さは結果として付いてくるもので、無声子音の前では短くなる。記号に長さを書き込むと、その例外を説明できなくなる。',
    },
    {
      q: 'happy の語尾は /i/ か /ɪ/ か。',
      a:
        '歴史的には /ɪ/ だったが、現代の多くの話者は /i/ に近く発音する（happY tensing）。辞書は方針によって分かれる。どちらでも通じる領域。',
    },
    {
      q: 'ea と ee の読み分けに規則はあるか。',
      a:
        'ee はほぼ例外なく /i/。ea は /i/（eat, sea）が多数だが /ɛ/（head, bread）の語群があり、綴りからは決まらない。ea は語ごとに覚える領域。',
    },
  ],
  relatedRules: ['happy-tensing', 'vowel-length-before-voiced'],
  notes: ['/i/ は語末に立てる数少ない母音の一つ。/ɪ/ /ɛ/ /æ/ /ʊ/ /ʌ/ は語末に立てない。'],
};
