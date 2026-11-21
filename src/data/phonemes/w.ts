import type { Phoneme } from '../../types';

export const w: Phoneme = {
  id: 'w',
  ipa: 'w',
  type: 'consonant',
  group: '接近音',
  nickname: '唇を丸めて始める渡り音',
  oneLiner:
    '唇を強く丸め、舌の後ろを上げた /u/ の形から、次の母音へ滑り出す有声の接近音。音そのものは /u/ とほぼ同じで、違いは音節の中心になるか、中心へ向かう渡りになるかという機能だけ。',
  articulation: {
    voicing: '有声',
    tongue: '舌の後ろを軟口蓋に向けて上げる。/u/ と同じ位置。舌先はどこにも触れない。',
    lips: '強く丸めて前に突き出す。これが最大の特徴で、視覚的に確認できる。',
    consonant: {
      place: '両唇・軟口蓋（二重調音）',
      manner: '接近',
      airflow: '唇と舌の後ろの2か所で同時に狭めるが、摩擦が起きるほどは狭めない。狭めた形から次の母音へ移る動きそのものが音になる。',
    },
  },
  howTo: [
    '唇を丸めて /u/ の形を作る。前に突き出す。',
    'その形から、間を置かずに次の母音へ唇を開いていく。',
    '動き自体が音になるので、/u/ の位置で止まらないこと。止まると2音節になる。',
    '日本語の「ワ」は唇の丸めが弱い。意識して丸める。',
  ],
  listenFor: [
    '語頭に唇の丸めから始まる動きがある。話者の口を見れば分かる。',
    '単独では取り出せない。常に次の母音とひとつながりになっている。',
    '/r/ と紛らわしい。どちらも唇が丸まるが、/r/ は舌が盛り上がり、/w/ は舌の後ろが上がる。',
    'wh- の綴りは大多数の話者で /w/。which と witch は同音。',
  ],
  l1: {
    substitute: '日本語の「ワ」、または母音の /u/',
    why:
      '日本語には /wa/ しか残っていない。/wi/ /we/ /wo/ は歴史的に失われ、現代日本語では「ウィ」「ウェ」「ウォ」と2モーラの外来語音として扱われる。そのため week, west, wood が「ウィーク」「ウエスト」「ウッド」と2拍に分解される。',
    symptom:
      'we が「ウィー」と2モーラになり、音節数が増える。また唇の丸めが弱いため /w/ が聞こえず、wood が good に近づく話者もいる。',
    examples: ['west を「ウエスト」と3モーラで読む', 'woman を「ウーマン」と伸ばす'],
  },
  contrasts: [
    {
      withId: 'v',
      withIpa: 'v',
      difference:
        '/w/ は両唇を丸めて近づけるだけで、歯を使わない。/v/ は下唇を上の前歯に当てて摩擦させる。',
      listenFor: '摩擦音が聞こえるかどうか。/v/ にはざらついた摩擦があり、/w/ は滑らか。',
      whyHard: '日本語にどちらも無く、カタカナでは両方「ウ」「ヴ」で書かれるため。',
      pairs: [
        { a: 'west', aIpa: 'wɛst', b: 'vest', bIpa: 'vɛst' },
        { a: 'wine', aIpa: 'waɪn', b: 'vine', bIpa: 'vaɪn' },
        { a: 'wet', aIpa: 'wɛt', b: 'vet', bIpa: 'vɛt' },
        { a: 'worse', aIpa: 'wɝs', b: 'verse', bIpa: 'vɝs' },
        { a: 'wary', aIpa: 'ˈwɛri', b: 'vary', bIpa: 'ˈvɛri' },
      ],
    },
    {
      withId: 'r',
      withIpa: 'r',
      difference:
        'どちらも唇が丸まるが、舌が違う。/w/ は舌の後ろが上がる。/r/ は舌の中ほどが盛り上がるか舌先が反る。',
      listenFor: '舌の響きの有無。/r/ にはこもった巻き込む音色があり、/w/ にはない。',
      whyHard: '唇の丸めという最も目立つ手がかりが共通しているため。',
      pairs: [
        { a: 'wed', aIpa: 'wɛd', b: 'red', bIpa: 'rɛd' },
        { a: 'wake', aIpa: 'weɪk', b: 'rake', bIpa: 'reɪk' },
        { a: 'wing', aIpa: 'wɪŋ', b: 'ring', bIpa: 'rɪŋ' },
        { a: 'west', aIpa: 'wɛst', b: 'rest', bIpa: 'rɛst' },
        { a: 'wide', aIpa: 'waɪd', b: 'ride', bIpa: 'raɪd' },
      ],
    },
  ],
  spellings: [
    { pattern: 'w', examples: ['we', 'want', 'wood', 'away', 'between'], frequency: '最頻' },
    { pattern: 'wh', examples: ['what', 'when', 'where', 'which', 'white'], frequency: '頻出', note: '大多数の話者で /w/。一部の地域では /ʍ/（無声）を保つ。' },
    { pattern: 'u（qu, gu の中）', examples: ['queen', 'quick', 'language', 'persuade'], frequency: '頻出', note: 'qu は /kw/。1文字ではなく2音。' },
    { pattern: 'o', examples: ['one', 'once'], frequency: '例外', note: '/wʌn/。綴りに w がないのに /w/ で始まる。' },
    { pattern: '黙字の w', examples: ['write', 'wrong', 'answer', 'two', 'sword'], frequency: '少数', note: 'wr- の w は読まれない。' },
  ],
  examples: [
    { word: 'we', ipa: 'wi', position: '語頭' },
    { word: 'want', ipa: 'wɑnt', position: '語頭' },
    { word: 'one', ipa: 'wʌn', position: '語頭', note: '綴りに w がない' },
    { word: 'queen', ipa: 'kwin', position: '語中', note: 'qu が /kw/' },
    { word: 'always', ipa: 'ˈɔlweɪz', position: '語中' },
    { word: 'between', ipa: 'bɪˈtwin', position: '語中' },
  ],
  lecture: [
    '「この音は /u/ とほぼ同じ形だ」と最初に言う。新しい口の形を覚える必要はないと分かる。',
    '違いは機能だけだと説明する。音節の中心になれば母音、中心へ向かう渡りになれば子音。',
    '唇を丸めて /u/ の形から母音へ動かす、という手順で出させる。止まらずに動くことが条件。',
    '日本語に /wa/ しか残っていないことを指摘する。/wi/ /we/ /wo/ が失われたので「ウィ」「ウェ」が2モーラになる、と原因を示す。',
    'we, west, wood を1音節で言う練習をさせる。「ウ」と母音を分けないこと。',
    'wed / red で /r/ との対比を聞かせる。唇は両方丸まるので、舌の響きで判別すると伝える。',
    '最後に綴りを整理する。wh- は /w/（which = witch）、qu は /kw/、wr- の w は読まない、one は綴りに無い /w/ で始まる。',
  ],
  faq: [
    {
      q: 'which と witch は本当に同音か。',
      a:
        '大多数のアメリカ英語話者では同音。スコットランド、アイルランド、アメリカ南部の一部では wh- を無声の /ʍ/ で発音して区別する話者が残っているが、少数派。学習上は同音として扱ってよい。',
    },
    {
      q: '/w/ は子音なのか母音なのか。',
      a:
        '調音としては母音 /u/ とほぼ同じだが、音節の中心になれないので子音として機能する。この種の音を半母音または渡り音と呼ぶ。a と an の使い分けでも子音扱いになる（a woman）。',
    },
    {
      q: '「ウィ」と書いて練習してよいか。',
      a:
        '表記としては有効だが、2モーラにならないよう注意が要る。「ウ」と「ィ」を別々の拍で言うと we が2音節になる。唇の丸めから母音へ一息で動く、という動作として捉えるほうが確実。',
    },
  ],
  relatedRules: ['linking', 'goose', 'phonotactics'],
  notes: [
    '母音間のリンキングで /w/ が挿入される（go on → /ɡoʊ wɑn/）。Day 21 で扱う。',
    '/u/ の前には立てない（*wu- という連続が英語に存在しない）。',
  ],
};
