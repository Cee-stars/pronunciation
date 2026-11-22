import type { Phoneme } from '../../types';

export const square: Phoneme = {
  id: 'square',
  ipa: 'ɛr',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'SQUARE',
  nickname: '「エ」から R の響きへ移る音。air の母音',
  oneLiner:
    '前舌・中低の /ɛ/ に近い位置から、同じ息のまま R の音色に移る一つの R 性母音。/ɛ/（dress）とは別の音素であり、bed の母音と bear の母音は同じものではない。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌を前に出し、/ɛ/ の高さか、話者によってはそれより少し高い位置に置く。そこから声を切らずに舌先を反らせるか、舌の中ほどを盛り上げて両脇を上奥歯に当てる。/ɪr/ と同じ前舌からの出発だが、顎が一段下がっている点が違う。',
    lips: '丸めない。自然に横へ開いた形。R 色が出る後半でもほとんど動かない。',
    vowel: {
      height: '中低（/ɪr/ より一段低く、/ɑr/ より高い）',
      backness: '前舌から中舌へ',
      rounded: false,
      tension: 'lax',
      jaw: '中程度。指1本が縦に入る程度。',
    },
  },
  howTo: [
    '「エ」と言う。舌先が下前歯の裏に触れ、舌全体が前にある状態を作る。',
    '声を切らずに、舌先を上に反らせるか舌の中ほどを盛り上げる。前にあった舌が中央へ引かれる。',
    '舌をどこにも触れさせない。触れると日本語のラ行になり、「エ・ア」と2音に割れる。',
    '顎を上げすぎないこと。上げると /ɪr/ に寄り、bear が beer に聞こえる。',
    'カタカナ「エア」「ベアー」のように母音を並べないこと。air も bear も1音節である。',
  ],
  listenFor: [
    '中くらいの開きの明るい「エ」から始まり、後半でこもる。出発点の高さが /ɪr/ と /ɑr/ の中間にある。',
    '母音の途中に子音の切れ目がない。切れ目が聞こえればそれは日本語のラ行。',
    'Mary, marry, merry が3語とも同じに聞こえる。一般米語ではこの3語がすべて /ˈmɛri/ に合流している。',
    '語末でも R 色が保たれる。there, where, care の最後がこもって終わる。',
    'イギリス英語（非 rhotic）では R 色が消え、中央へ向かう二重母音 /eə/ になる。近年の RP ではさらに単母音化して長い /ɛː/ になる話者が多い。air が /ɛː/。',
  ],
  l1: {
    substitute: 'カタカナの「エア」「エアー」「ェア」（母音2つの連続）',
    why:
      '日本語に R 性母音がなく、「エア」「ベア」「シェア」「ペア」のようにカタカナが2つの母音として写す。日本語では「エ」と「ア」が別モーラの別母音であるため、1つの母音が音色を変えながら続くという構造が入らない。さらに日本語の「エ」は /ɛ/ とほぼ同じ音なので、出発点だけは正しく出せてしまい、その先に別の母音を足して解決した気になりやすい。',
    symptom:
      '「エ・ア」と2モーラで読むと音節が増え、air が2音節語に聞こえる。R 色が落ちると care が /kɛ/ に近くなり、文中で説明なしには通じない。',
    examples: [
      'air を「エア」と読み2モーラにする',
      'share を「シェアー」と読み、R 色のない長音で終える',
      'parent を「ペアレント」と読み、第1音節に余分な母音を足す',
    ],
  },
  contrasts: [
    {
      withId: 'dress',
      withIpa: 'ɛ',
      difference:
        '舌の前後と高さはほぼ同じ。違いは R の音色があるかないかだけ。ただし別音素であり、/ɛr/ の母音部分は /ɛ/ よりやや高く長い。',
      listenFor:
        '母音の後半がこもって巻き込むか。前半だけでは区別できないので、判別は母音の終わりで行う。',
      whyHard:
        '日本語話者は「エ」で両方を代用するため、R 色の有無が自分の発音から消えている。綴り e と ea が両方に現れることも手がかりを与えない（bed と bear）。',
      pairs: [
        { a: 'bared', aIpa: 'bɛrd', b: 'bed', bIpa: 'bɛd' },
        { a: 'dared', aIpa: 'dɛrd', b: 'dead', bIpa: 'dɛd' },
        { a: 'fared', aIpa: 'fɛrd', b: 'fed', bIpa: 'fɛd' },
        { a: 'shared', aIpa: 'ʃɛrd', b: 'shed', bIpa: 'ʃɛd' },
        { a: 'spared', aIpa: 'spɛrd', b: 'sped', bIpa: 'spɛd' },
      ],
    },
    {
      withId: 'near',
      withIpa: 'ɪr',
      difference:
        'R の音色はどちらも持ち、舌はどちらも前舌から始まる。違いは出発点の高さだけで、/ɛr/ は顎が一段下がった位置、/ɪr/ は狭く高い位置から始まる。',
      listenFor:
        '母音の冒頭が「エ」寄りか「イ」寄りか。母音の後半は両者でほぼ同じなので、冒頭だけを聴く。',
      whyHard:
        'カタカナは「エア」と「イア」で書き分けるが、どちらも母音2つに割れているため、実際の発音では両方が曖昧な2モーラになって潰れる。綴り ear が両群に現れること（bear と hear）も混乱を増やす。',
      pairs: [
        { a: 'air', aIpa: 'ɛr', b: 'ear', bIpa: 'ɪr' },
        { a: 'bare', aIpa: 'bɛr', b: 'beer', bIpa: 'bɪr', note: 'bare と bear は同音' },
        { a: 'dare', aIpa: 'dɛr', b: 'dear', bIpa: 'dɪr', note: 'dear と deer は同音' },
        { a: 'mare', aIpa: 'mɛr', b: 'mere', bIpa: 'mɪr' },
        { a: 'stare', aIpa: 'stɛr', b: 'steer', bIpa: 'stɪr' },
        { a: 'where', aIpa: 'wɛr', b: 'weir', bIpa: 'wɪr' },
      ],
    },
  ],
  spellings: [
    { pattern: 'air', examples: ['air', 'hair', 'fair', 'chair', 'pair', 'stairs'], frequency: '最頻' },
    { pattern: 'are', examples: ['care', 'share', 'bare', 'square', 'compare', 'prepare'], frequency: '最頻', note: 'ただし are（be 動詞）は /ɑr/。それ以外の -are はすべて /ɛr/。' },
    { pattern: 'ear', examples: ['bear', 'pear', 'wear', 'swear', 'tear（破る）'], frequency: '頻出', note: 'ear の大半は /ɪr/ なので、この語群は1語ずつ覚える領域になる。' },
    { pattern: 'ere', examples: ['there', 'where'], frequency: '少数', note: '-ere の大半は /ɪr/（here, mere, sphere）。この2語だけが /ɛr/。' },
    { pattern: 'er + 母音（強勢あり）', examples: ['very', 'merry', 'berry', 'America', 'error'], frequency: '頻出', note: '米語では /ˈvɛri/ /ˈmɛri/。merry は Mary と同音になる。' },
    { pattern: 'arr + 母音', examples: ['marry', 'carry', 'barrel', 'Harry'], frequency: '頻出', note: 'Mary–marry–merry 合流を持つ話者（米語の多数派）では /ɛr/。非合流話者では /ær/。' },
    { pattern: 'eir / aire', examples: ['their', 'heir', 'millionaire'], frequency: '少数', note: 'their と there は同音。' },
  ],
  examples: [
    { word: 'air', ipa: 'ɛr', position: '語頭', note: 'ear /ɪr/ と対比' },
    { word: 'area', ipa: 'ˈɛriə', position: '語頭' },
    { word: 'careful', ipa: 'ˈkɛrfəl', position: '語中' },
    { word: 'parent', ipa: 'ˈpɛrənt', position: '語中', note: '米語では第1音節が /ɛr/。「ペアレント」ではない' },
    { word: 'bear', ipa: 'bɛr', position: '語末', note: 'beer /bɪr/ と対比。綴り ear だが /ɪr/ ではない' },
    { word: 'chair', ipa: 'tʃɛr', position: '語末', note: 'cheer /tʃɪr/ と対比' },
    { word: 'where', ipa: 'wɛr', position: '語末', note: 'here /hɪr/ とは母音が違う' },
  ],
  lecture: [
    'R性母音の体系の中で /ɪr/ の一段下として置く。「R 色の前に来る母音の高さ」で5つが並ぶという枠を再確認し、/ɛr/ はその中間にあたると位置づける。',
    'カタカナ「エア」「シェア」を否定する。母音が2つに割れていること、音節が1つであることをまず宣言する。',
    '「エ」と言わせる。日本語の「エ」はこの音の出発点としてほぼ正しいと伝えて安心させ、そのうえで声を切らずに舌を反らせる（または盛り上げる）よう指示する。「エ」のあとに別の母音を足すのではなく、同じ母音のまま舌を動かすのだと繰り返す。',
    'bared / bed、shared / shed で /ɛ/ との対比を聞かせる。差は後半の R 色だけだと示し、/ɛ/ と /ɛr/ が別の音素であることをここで明言する。bed の母音を伸ばして r を足しても bear にはならない。',
    'air / ear、bare / beer で /ɪr/ との対比に移る。出発点の高さだけが違い、判別は母音の冒頭で行うと教える。',
    'Mary / marry / merry を並べる。一般米語では3語すべてが /ˈmɛri/ で同音になると示し、ニューヨーク市・フィラデルフィア周辺やイギリス英語では3語が別だと補足する。辞書に /ær/ 表記が出てくる理由がこれで片づく。',
    '最後に綴りを整理する。air と are が最頻、ear は語ごと、-ere は there/where だけが例外。イギリス英語では /eə/ あるいは長い /ɛː/ になると添え、母音が続けば R が復活する（linking R）と繋ぐ。',
  ],
  faq: [
    {
      q: 'bed の /ɛ/ と bear の /ɛr/ は同じ母音なのか。',
      a:
        '別の音素である。辞書は表記の都合で同じ記号 ɛ を使うが、/ɛr/ の母音部分は /ɛ/ よりやや高く、長さも長い。米語では r の前で /ɛ/ /æ/ /eɪ/ の対立が中和するため、音素としては1つの R 性母音 /ɛr/ と扱うのが実態に合う。bed の母音を伸ばして r を足す、という組み立て方では bear にならない。',
    },
    {
      q: 'Mary, marry, merry は同じ発音なのか。',
      a:
        'アメリカ英語の多数派では3語すべて /ˈmɛri/ で完全に同音である（Mary–marry–merry 合流）。合流していないのはニューヨーク市、フィラデルフィア周辺、ボストン周辺の伝統的な話し方、そしてイギリス英語で、これらでは Mary /ˈmɛəri/、marry /ˈmæri/、merry /ˈmeri/ の3つが別になる。アメリカ南部の一部にも非合流の話者がいる。学習の基準としては合流した側で統一してよく、聞き取りの際に3語が同じに聞こえても誤りではない。',
    },
    {
      q: 'their と there と they are の短縮形は、すべて同音か。',
      a:
        '一般米語では3語すべて /ðɛr/ で同音である。綴りが3通りに分かれているだけで音の違いはない。書き分けは文法の問題であって発音の問題ではない。',
    },
    {
      q: 'イギリス英語ではどうなるか。',
      a:
        'R 色が消え、中央へ向かう二重母音 /eə/ になる。air は /eə/、bear は /beə/。さらに現代の RP では /eə/ の単母音化が進み、長い /ɛː/ で実現される話者が多い。いずれの場合も there is のように母音が続くと r が復活する（linking R）。',
    },
  ],
  relatedRules: ['linking', 'us-vs-uk', 'mergers', 'r'],
  notes: [
    'R性母音5つの並び（/ɑr/ → /ɔr/ → /ɛr/ → /ɪr/ → /ʊr/）のちょうど中間の開きにあたる。',
    '非 rhotic 方言では /eə/、現代 RP では長い /ɛː/。',
    'Mary–marry–merry 合流は米語の多数派。非合流地域は北東部の都市圏とイギリス英語。',
    '綴り ear は /ɪr/ /ɛr/ /ɝ/ /ɑr/ の4通りに読める。bear はそのうち /ɛr/ の代表語。',
  ],
};
