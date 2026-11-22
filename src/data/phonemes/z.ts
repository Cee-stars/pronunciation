import type { Phoneme } from '../../types';

export const z: Phoneme = {
  id: 'z',
  ipa: 'z',
  type: 'consonant',
  group: '摩擦音',
  nickname: '/s/ に声を乗せた音。ザ行だが語頭の「ザ」とは別物',
  oneLiner:
    '舌先を歯茎に近づけ、中央の溝から気流を通しながら声帯を震わせる有声の歯茎摩擦音。/s/ と調音は完全に同一で違いは声の有無だけだが、日本語の語頭のザ行が破擦音 [dz] である点と、語末の -s の大半が実はこの音である点の二つが課題になる。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌先を上の歯茎に近づけるが触れさせない。位置は /s/ と同一。舌の中央に細い溝を作って気流を集め、両脇は上の奥歯に密着させる。触れて閉鎖を作ると破擦音 [dz] になってしまうので、「近づけるが当てない」が核心。',
    lips: '丸めない。自然に開く。ただし /u/ が続く語（zoo）では母音側の丸めが先に始まる。',
    consonant: {
      place: '歯茎',
      manner: '摩擦',
      airflow:
        '舌の中央の溝から上前歯に気流を吹きつけて乱流を起こしながら、同時に声帯を振動させる。気流を一度も止めない点が [dz] との決定的な差。音は伸ばせる。',
    },
  },
  howTo: [
    'まず /s/ を伸ばす。位置を一切動かさずに声を足す。喉に指を当てて振動を確認する。これで /z/ になる。',
    '語頭は「ズ」「ザ」と言わずに、摩擦だけで始める。舌先が歯茎に当たって一瞬止まっていないか確認する。止まれば [dz] で、zoo が「ヅー」寄りになる。',
    '語中から語頭へ移す。日本語でも語中のザ行は摩擦音なので、easy, music の子音はすでに正しく出ている。easy の -sy の部分だけを取り出し、そのまま zoo, zero につなぐ。',
    '/zi/ を別扱いで練習する。日本語のザ行イ段は「ジ」で破擦音なので、/z/ + /i/ は作ったことがない組み合わせ。/s/ + /i/（スィ）と同じ要領で「ズィー」の形から zip, easy, busy を出す。',
    '語末を伸ばして止める。peas, is, was で、声を保ったまま摩擦を薄れさせる。最後を強く擦ると /s/ になり peas が peace になる。',
  ],
  listenFor: [
    '高くはっきり鳴り続ける摩擦に、声の響きが重なった音。/s/ と同じ周波数帯だが、低い声の成分が同時にある。',
    '出だしに閉鎖の瞬間がない。英語の /z/ は最初から擦れている。頭に小さな破裂が付いていればそれは [dz]。',
    '直前の母音が長い。語末の有声・無声は、実際には子音そのものより前の母音の長さで判定されている（peace と peas、price と prize）。',
    '語末の /z/ は声が途中で切れて無声化することが多い。子音の有声性だけを探すと取り逃がすので、母音長とセットで聞く。',
    '綴り -s の語末は、直前の音が有声なら /z/。dogs, cars, is, was, has, does はすべて /z/ で、綴りの s を見て /s/ と決めつけないこと。',
  ],
  l1: {
    substitute:
      '日本語のザ行の子音。語頭では破擦音 [dz]、語中では摩擦音 [z]。イ段では「ジ」すなわち [dʑi] に転じる。',
    why:
      '日本語のザ行は環境で姿を変える。語頭では閉鎖を伴う破擦音 [dz] になり、語中・語間では摩擦音 [z] になる。日本語話者はこの二つを同じ音だと感じているため、英語の語頭 /z/ にも母語の規則どおり [dz] を当ててしまう。さらにザ行イ段は /zi/ が存在せず「ジ」[dʑi] になるので、sa 行で /si/ が作れないのと同じ構造の空白がここにもある。加えて日本語の「ズ」の母音は非円唇の [ɯ] なので、zoo の円唇も崩れる。',
    symptom:
      'zoo が「ヅー」、zero が「ヅィーロ」のように聞こえ、摩擦音であるべき語頭に破裂が入るため /dʒ/ と混同される。語末では無声化して peas が peace、prize が price、his が hiss に聞こえ、複数形・三単現・be 動詞の判別が崩れる。',
    examples: [
      'zoo を「ズー」と読み語頭が [dz] になる',
      'zip を「ジップ」と読み /dʒ/ 側に寄る',
      'peas を「ピース」と読み peace と同音になる',
      'is, was, has の語末を「ス」で終える',
    ],
  },
  contrasts: [
    {
      withId: 's',
      withIpa: 's',
      difference:
        '調音点・調音方法・舌の形はすべて同一。声帯が震えるかどうかだけが違う。付随して /z/ のほうが摩擦が弱く、直前の母音が長くなる。',
      listenFor:
        '喉の振動と、直前の母音の長さ。語末では母音長のほうが確実な手がかりになる。peas の母音は peace より明確に長い。',
      whyHard:
        '語頭では日本語話者の /z/ が [dz] になるため /s/ とは別方向にずれ、語末では無声化して /s/ と同音になる。位置によって誤りの出方が逆になるので、語頭と語末を別に扱う必要がある。',
      pairs: [
        { a: 'zip', aIpa: 'zɪp', b: 'sip', bIpa: 'sɪp' },
        { a: 'zoo', aIpa: 'zu', b: 'sue', bIpa: 'su' },
        { a: 'buzz', aIpa: 'bʌz', b: 'bus', bIpa: 'bʌs' },
        { a: 'prize', aIpa: 'praɪz', b: 'price', bIpa: 'praɪs' },
        { a: 'peas', aIpa: 'piz', b: 'peace', bIpa: 'pis', note: '母音長が判定の主役になる代表例' },
        { a: 'raise', aIpa: 'reɪz', b: 'race', bIpa: 'reɪs' },
      ],
    },
    {
      withId: 'dh',
      withIpa: 'ð',
      difference:
        '/z/ は舌先を歯茎に近づけ、中央の溝に気流を集める歯茎音で、摩擦が強く鋭い。/ð/ は舌先を上の前歯に当てる歯音で、摩擦は弱く広い。',
      listenFor:
        '摩擦の鋭さと強さ。/z/ は高くはっきり鳴り続ける。/ð/ はほとんど鳴らず、こもった声だけが聞こえる。',
      whyHard:
        '日本語に歯という調音点がないため、/ð/ の代用先がこの /z/ そのものになる。自分の発音では両者が同音になっており、聞き取りでも /ð/ の摩擦が弱くて手がかりが少ない。',
      pairs: [
        { a: 'Zen', aIpa: 'zɛn', b: 'then', bIpa: 'ðɛn' },
        { a: 'breeze', aIpa: 'briz', b: 'breathe', bIpa: 'brið' },
        { a: 'close', aIpa: 'kloʊz', b: 'clothe', bIpa: 'kloʊð', note: 'close は動詞の /kloʊz/' },
        { a: 'tease', aIpa: 'tiz', b: 'teethe', bIpa: 'tið' },
        { a: 'rise', aIpa: 'raɪz', b: 'writhe', bIpa: 'raɪð' },
        { a: 'seize', aIpa: 'siz', b: 'seethe', bIpa: 'sið' },
      ],
    },
    {
      withId: 'jh',
      withIpa: 'dʒ',
      difference:
        '/z/ は最初から摩擦する歯茎摩擦音。/dʒ/ は後部歯茎で気流を完全に止めてから摩擦しながら開放する破擦音。閉鎖の有無と調音点の両方が違う。',
      listenFor:
        '出だしに閉鎖と破裂があるか。/dʒ/ は音が一瞬で立ち上がり、頭に小さな破裂が付く。/z/ は立ち上がりが緩やかで、いくらでも伸ばせる。',
      whyHard:
        '日本語の語頭のザ行が破擦音 [dz] である時点で、日本語話者の「ザ」はすでに破擦音という特徴を /dʒ/ と共有している。さらにザ行イ段は「ジ」[dʑi] で調音点まで後部歯茎寄りになるため、/zi/ はほぼ /dʒi/ に吸収される。',
      pairs: [
        { a: 'zoo', aIpa: 'zu', b: 'Jew', bIpa: 'dʒu' },
        { a: 'zest', aIpa: 'zɛst', b: 'jest', bIpa: 'dʒɛst' },
        { a: 'zone', aIpa: 'zoʊn', b: 'Joan', bIpa: 'dʒoʊn' },
        { a: 'buzz', aIpa: 'bʌz', b: 'budge', bIpa: 'bʌdʒ' },
        { a: 'fuzz', aIpa: 'fʌz', b: 'fudge', bIpa: 'fʌdʒ' },
        { a: 'raise', aIpa: 'reɪz', b: 'rage', bIpa: 'reɪdʒ' },
      ],
    },
  ],
  spellings: [
    {
      pattern: '-s（有声音の後の語末）',
      examples: ['dogs', 'cars', 'is', 'was', 'has', 'does', 'plays', 'knows'],
      frequency: '最頻',
      note:
        '綴り s から /z/ を引く経路が、実は /z/ の最大の供給源。複数形・三単現・所有格・be 動詞がすべてここに入るため、発話中の出現回数では z 綴りの語を大きく上回る。',
    },
    {
      pattern: 's（母音間・語中）',
      examples: ['easy', 'music', 'busy', 'visit', 'present', 'result'],
      frequency: '最頻',
      note: '母音にはさまれた s は有声化しやすい。ただし basic, basket のように /s/ のまま残る語もあり、機械的には決まらない。',
    },
    {
      pattern: '-se（語末）',
      examples: ['rose', 'nose', 'these', 'please', 'use', 'close'],
      frequency: '頻出',
      note:
        'use と close は名詞が /s/、動詞が /z/ になる（use 名詞 /jus/・動詞 /juz/、close 形容詞 /kloʊs/・動詞 /kloʊz/）。品詞で読みが変わる語群として覚える。',
    },
    { pattern: 'z', examples: ['zoo', 'zero', 'zebra', 'lazy', 'size'], frequency: '頻出', note: '綴りと音が一対一で対応する唯一の経路。' },
    { pattern: 'zz', examples: ['buzz', 'jazz', 'puzzle', 'fizz'], frequency: '少数', note: 'zz は常に /z/。pizza のみ例外で /ts/。' },
    {
      pattern: 'x = /ɡz/',
      examples: ['exact', 'exam', 'example', 'exist', 'exhaust'],
      frequency: '少数',
      note: '1文字で2音。強勢が x の後ろにあると /ɡz/、前にあると /ks/（exit は /ˈɛksɪt/）。',
    },
    {
      pattern: 'ss / cz',
      examples: ['scissors', 'dessert', 'possess', 'czar'],
      frequency: '例外',
      note: 'scissors は /ˈsɪzɚz/、dessert は /dɪˈzɚt/。綴りからは予測できない個別語。',
    },
  ],
  examples: [
    { word: 'zoo', ipa: 'zu', position: '語頭', note: '[dz] になりやすい最も代表的な語' },
    { word: 'zero', ipa: 'ˈziroʊ', position: '語頭' },
    { word: 'easy', ipa: 'ˈizi', position: '語中', note: '語中なので日本語話者も摩擦音で出せる。語頭の足場に使う' },
    { word: 'music', ipa: 'ˈmjuzɪk', position: '語中', note: '綴り s が /z/' },
    { word: 'dogs', ipa: 'dɔɡz', position: '語末', note: '直前が有声なので -s は /z/' },
    { word: 'peas', ipa: 'piz', position: '語末', note: 'peace /pis/ より母音が長い' },
  ],
  lecture: [
    '「/s/ と同じ位置で声を足すだけ」と先に言う。新しい調音点を覚える必要はないと明示して負荷を下げる。',
    '/s/ を伸ばさせ、そのまま声を加えさせる。喉に指を当てて振動を確認させる。ここまでは容易に通る。',
    '次に「日本語のザ行は語頭だけ別の音だ」と限定する。語頭の「ザ」「ズ」は閉鎖を伴う破擦音 [dz] で、語中の「ザ」は摩擦音 [z] である。同じ音だと思っていたものが二つだと示す。',
    'easy, music を言わせ、ここでは正しく出ていることを確認させる。その摩擦だけを切り出して zoo, zero へつなぐ。語中から語頭へ運ぶのが最短経路。',
    '/zi/ を別に扱う。日本語には /zi/ がなく「ジ」になる。/s/ の「スィ」と同じ要領で zip, busy を作らせる。/s/ の課題と同型だと言えば一度で伝わる。',
    '語末に移る。英語で /z/ が最も多く現れるのは語末で、複数形・三単現・is / was / has / does がすべてここに入る。出現頻度の大半が語末だという事実を数で伝える。',
    'peace と peas を並べ、判別の主役が母音の長さであることを示す。有声子音の前で母音が伸びるという規則へ接続し、語末 -s の読み分け（無声の後は /s/、有声の後は /z/、歯擦音の後は /ɪz/）で締める。',
  ],
  faq: [
    {
      q: 'zoo は「ズー」でよいか。',
      a:
        'よくない。日本語の語頭の「ズ」は舌先が歯茎に当たって一度気流が止まる破擦音 [dzɯ] で、英語の /z/ は最初から擦れている摩擦音である。さらに日本語の「ウ」は唇を丸めないので母音もずれる。「ヅー」に近い音になり /dʒ/ と混同される。語中の「ザ」（easy の子音）が正しい形なので、そこから語頭に持ってくるのが実際的な直し方。',
    },
    {
      q: '語末の -s はいつ /s/ でいつ /z/ か。',
      a:
        '直前の音が無声なら /s/（cats, books）、有声なら /z/（dogs, cars）、歯擦音の後は /ɪz/（buses, watches）。規則を覚えるというより、無声の後で声を続けられないという有声性の同化の結果なので、意識せず出せる形が正解になっている。/z/ の側が多数であることに注意。',
    },
    {
      q: '語末の /z/ がよく無声に聞こえる。聞き間違いか。',
      a:
        '聞き間違いではない。英語話者も語末の有声摩擦音の声を最後まで保たず、途中で無声化することが多い。では何で区別しているかというと直前の母音の長さで、/z/ の前の母音は /s/ の前より明確に長い。peace と peas の差は子音ではなく母音にある。子音の有声性を探すのをやめて母音長を聞くと急に取れるようになる。',
    },
    {
      q: 'example の x はなぜ「グズ」のように聞こえるのか。',
      a:
        '綴り x が /ɡz/ の2音を表しているため。強勢が x の後ろの音節にあると有声化して /ɡz/ になり（exact, exam, exist）、x の前にあると /ks/ のまま（exit, excellent）。綴り1文字が2音に対応し、さらに強勢で有声性が変わる例。',
    },
  ],
  relatedRules: [
    's-endings',
    'voicing',
    'vowel-length-before-voiced',
    'assimilation',
    'place-of-articulation',
    'manner-of-articulation',
    'linking',
  ],
  notes: [
    '日本語話者の課題は /z/ 自体ではなく、語頭で破擦音になること、/i/ の前で「ジ」になること、語末で無声化することの三点に限定される。語中は元から正しい。',
    '語末 /z/ の重要性は語彙数ではなく出現回数にある。複数形・三単現・所有格・is / was / has / does がすべてこの音を担うため、発話では最頻の摩擦音の一つになる。',
    '-s 綴りの読み分けは s-endings の規則で体系的に扱う。ここでは /z/ 側が多数派であることだけ押さえればよい。',
    'アメリカ英語では文字 z の名称が zee、イギリス英語では zed。綴りの読み上げで差が出る。',
  ],
};
