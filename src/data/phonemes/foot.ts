import type { Phoneme } from '../../types';

export const foot: Phoneme = {
  id: 'foot',
  ipa: 'ʊ',
  type: 'vowel',
  group: '短母音（弛緩母音）',
  keyword: 'FOOT',
  nickname: '力を抜いた「ウ」',
  oneLiner:
    '舌を後ろの高い位置に置くが押し込まず、唇もわずかしか丸めない後舌・高・円唇の弛緩母音。/u/ の脱力版で、「ウ」と「オ」の中間に聞こえる。',
  articulation: {
    voicing: '有声',
    tongue: '舌の後ろを上げるが、/u/ ほど高く奥には押し込まない。一段低く、やや中寄り。力を入れない。',
    lips: 'わずかに丸める。/u/ のように前に突き出さない。',
    vowel: {
      height: '高（やや下がった高さ）',
      backness: '後舌（/u/ より中寄り）',
      rounded: true,
      tension: 'lax',
      jaw: 'ほとんど下げない。',
    },
  },
  howTo: [
    '日本語の「ウ」を言う（日本語の「ウ」は唇を丸めないので、すでに脱力している）。',
    '唇をわずかに丸める。突き出さず、軽く寄せるだけ。',
    '舌の後ろを少し上げるが、押し込まない。',
    '短く切る。伸ばすと /u/ に聞こえる。',
  ],
  listenFor: [
    '短く、こもった曖昧な響き。/u/ の「唇を突き出した明るく長い響き」と対になる。',
    '短い。/u/ は明確に長い。長さが最も有効な手がかり。',
    '出現する語が少なく、ほぼ決まった語群に限られる（put, book, good, could, would, should, look, foot, full, pull, sugar, woman）。語彙で覚えるのが実用的。',
    '語末には立たない。語末の「ウ」は /u/。',
  ],
  l1: {
    substitute: '日本語の「ウ」（非円唇・中舌寄り）',
    why:
      '日本語の「ウ」は唇を丸めない中舌寄りの音で、英語の /ʊ/ と /u/ のどちらとも完全には一致しない。ただし /ʊ/ のほうが近いため、/ʊ/ の代用としては比較的通じる。問題は /u/ も同じ「ウ」で代用してしまうこと。',
    symptom:
      'full と fool、pull と pool が同音になる。また「ウー」と伸ばすと /u/ 側に寄り、book が「ブーク」のようになる。',
    examples: ['full を fool と取られる', 'book を「ブック」と読み、促音で子音を補ってしまう'],
  },
  contrasts: [
    {
      withId: 'goose',
      withIpa: 'u',
      difference:
        '/u/ は舌を最も高く後ろへ押し込み、唇を強く前に突き出す緊張母音。/ʊ/ は脱力して舌が一段低く中寄りになり、唇の丸めも弱い。長さも /u/ が明確に長い。',
      listenFor: 'まず長さ。次に唇の響き。/u/ は唇が突き出て音が前で鳴り、/ʊ/ はこもる。',
      whyHard: '日本語の「ウ」が両者の中間にあり、しかも唇を丸めないため、円唇の差が手がかりにならない。',
      pairs: [
        { a: 'full', aIpa: 'fʊl', b: 'fool', bIpa: 'ful' },
        { a: 'pull', aIpa: 'pʊl', b: 'pool', bIpa: 'pul' },
        { a: 'could', aIpa: 'kʊd', b: 'cooed', bIpa: 'kud' },
        { a: 'look', aIpa: 'lʊk', b: 'Luke', bIpa: 'luk' },
        { a: 'soot', aIpa: 'sʊt', b: 'suit', bIpa: 'sut' },
        { a: 'would', aIpa: 'wʊd', b: 'wooed', bIpa: 'wud' },
      ],
    },
    {
      withId: 'strut',
      withIpa: 'ʌ',
      difference: '/ʊ/ は唇を丸め舌を後ろの高い位置に置く。/ʌ/ は唇を丸めず舌は中央で低い。',
      listenFor: '唇の丸めと音の高さ。/ʊ/ はこもって高く、/ʌ/ は開いて乾いた響き。',
      whyHard: '綴り u と oo で両方が現れ（put /ʊ/ と but /ʌ/、book /ʊ/ と blood /ʌ/）、綴りから判別できない。',
      pairs: [
        { a: 'put', aIpa: 'pʊt', b: 'putt', bIpa: 'pʌt', note: '綴りが1字違いで音が別' },
        { a: 'look', aIpa: 'lʊk', b: 'luck', bIpa: 'lʌk' },
        { a: 'book', aIpa: 'bʊk', b: 'buck', bIpa: 'bʌk' },
        { a: 'stood', aIpa: 'stʊd', b: 'stud', bIpa: 'stʌd' },
      ],
    },
  ],
  spellings: [
    { pattern: 'oo', examples: ['book', 'good', 'look', 'foot', 'wood', 'cook'], frequency: '最頻', note: 'oo の最頻は /u/ なので、この群は語彙として覚える。' },
    { pattern: 'u + 子音', examples: ['put', 'full', 'push', 'pull', 'sugar', 'bush'], frequency: '頻出', note: '多くは唇音 p, b, f, s の後に来る。' },
    { pattern: 'ou（ould の3語）', examples: ['could', 'would', 'should'], frequency: '頻出', note: 'l は読まれない。' },
    { pattern: 'o', examples: ['woman', 'wolf'], frequency: '例外', note: 'women の第1音節は /ɪ/ になるので対比して覚える。' },
  ],
  examples: [
    { word: 'book', ipa: 'bʊk', position: '語中' },
    { word: 'good', ipa: 'ɡʊd', position: '語中' },
    { word: 'put', ipa: 'pʊt', position: '語中' },
    { word: 'woman', ipa: 'ˈwʊmən', position: '語頭', note: '複数形 women は /ˈwɪmɪn/' },
    { word: 'should', ipa: 'ʃʊd', position: '語中', note: '弱形では /ʃəd/' },
    { word: 'sugar', ipa: 'ˈʃʊɡər', position: '語頭', note: 's が /ʃ/ で読まれる数少ない語' },
  ],
  lecture: [
    '最初に「この音は出現する語が少ない」と伝える。全体像が小さいと分かると負荷が下がり、語彙リストとして処理できる。',
    '代表語群を先に見せる: put, book, good, look, foot, full, pull, could, would, should, woman, sugar。これでほぼ網羅できる。',
    '音の作り方は「日本語の『ウ』に軽く唇の丸めを足して短く切る」と指示する。日本語話者には比較的容易な音。',
    'full / fool、pull / pool で /u/ との長さの差を聞かせる。これが実用上最重要の対比。',
    'book / buck で /ʌ/ との差も示す。綴り oo と u が両方の音に跨っていることを明示する。',
    '最後に綴りの罠を整理する。oo は普通 /u/（food, moon）だが、book, good 群は /ʊ/。blood, flood だけ /ʌ/。この3層構造を示すと oo の読みが整理される。',
  ],
  faq: [
    {
      q: '/ʊ/ と /u/ は長さだけの差と教えてよいか。',
      a:
        '実用上は長さで区別が付くが、本質は緊張度と唇の丸めの強さ。長さだけに頼ると、無声子音の前で短縮した /u/（suit）を /ʊ/ と誤判定する。長さを入口にして、最終的に唇と響きで判別させるとよい。',
    },
    {
      q: 'なぜ put と but で綴り u の読みが違うのか。',
      a:
        '歴史的には両方 /ʊ/ だったが、17世紀に FOOT-STRUT split が起き、多くの語で /ʊ/ が /ʌ/ に変化した。唇音（p, b, f, w）の後では変化が起きにくかったため put, full, push が /ʊ/ のまま残った。この条件を知っていると予測が効く。',
    },
    {
      q: 'イギリス英語でも同じか。',
      a:
        '記号も音質もほぼ同じ。ただしイギリス北部では FOOT-STRUT split が起きておらず、put と putt が同音（どちらも /ʊ/）になる。',
    },
  ],
  relatedRules: ['vowel-length-before-voiced'],
  notes: [
    '出現頻度の低い母音で、該当語は語彙リストとして扱うのが実用的。',
    'sure, poor, tour などは /ʊr/（CURE）として別項目で扱う。',
  ],
};
