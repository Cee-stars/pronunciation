import type { Phoneme } from '../../types';

export const ch: Phoneme = {
  id: 'ch',
  ipa: 'tʃ',
  type: 'consonant',
  group: '破擦音',
  nickname: '日本語の「チ」の子音',
  oneLiner:
    '舌を後部歯茎にいったん完全に密着させて気流を止め、それを摩擦に逃がしながら開放する無声の破擦音。/t/ と /ʃ/ を足した連続ではなく、全体で一つの音素として振る舞う。',
  articulation: {
    voicing: '無声',
    tongue:
      '舌先と舌の前面を後部歯茎（/ʃ/ と同じ位置）に押し当てて一度完全に閉じる。離すときは一気に開かず、/ʃ/ の狭い通り道を残したまま息を逃がす。舌の両脇は上の奥歯に密着させる。',
    lips: 'わずかに丸めて前に出す。/ʃ/ と同じ唇の形になる。',
    consonant: {
      place: '後部歯茎',
      manner: '破擦',
      airflow:
        '完全な閉鎖 → 摩擦としての開放、という2段階を一息で行う。閉鎖の解放が破裂ではなく摩擦になることが破擦音の定義。',
    },
  },
  howTo: [
    '日本語の「チ」を言い、母音「イ」を切り落として子音だけを残す。それでほぼ正しい音になる。',
    '舌を後部歯茎に当てて息を完全に止める。この閉鎖を省くと /ʃ/ になってしまう。',
    '離すときに口を一気に開かない。/ʃ/ の隙間を通して息を漏らしながら開放する。',
    '/t/ と /ʃ/ を別々に続けて言わない。二つに分けて言えてしまったら、それはこの音ではなく別物になっている。',
    '唇をわずかに丸める。語末（watch, much）では母音を足さずにそのまま終える。',
  ],
  listenFor: [
    '出だしに一瞬の無音がある。これが閉鎖。/ʃ/ は最初から摩擦が鳴り出すので、ここが最大の手がかり。',
    '摩擦の部分が /ʃ/ より短く、鋭く切れる。伸ばせない音。',
    '一つのかたまりとして聞こえ、内部に音節の切れ目を感じない。white shoes には切れ目があり、why choose にはない。',
    '喉が震えない。/dʒ/ との差は有声性だけ。cheap と jeep。',
    '語末では子音のまま終わる。母音が足されていないかを自分の発音でも確認する。',
  ],
  l1: {
    substitute: '日本語の「チ」[tɕ]。さらに /ti/ /tu/ の位置にも「チ」「ツ」が出てしまう。',
    why:
      '日本語の「チ」の子音 [tɕ] は /tʃ/ とほぼ一致するため、この音自体には問題が起きない。問題は逆方向で、日本語のタ行には /ti/ /tu/ がなく、ti が「チ」、tu が「ツ」になるため、本来 /t/ + 母音である語にまで破擦音を持ち込んでしまう。',
    symptom:
      '/tʃ/ 自体は通じる。代わりに team が cheam、tea が chi に近く聞こえ、two や tool には /ts/ が入る。誤りの方向が /tʃ/ 側への過剰適用になるのが特徴。',
    examples: [
      'team を「チーム」と読み cheam に聞こえる',
      'ticket を「チケット」と読む',
      'two / tool を「ツー」「ツール」と読み /ts/ が入る',
      'watch を「ウォッチ」と読み語末に母音が足される',
    ],
  },
  contrasts: [
    {
      withId: 'sh',
      withIpa: 'ʃ',
      difference:
        '/tʃ/ は出だしに完全な閉鎖がある破擦音。/ʃ/ は閉鎖なしで最初から摩擦する摩擦音。調音点と唇の形は同じ。',
      listenFor: '出だしに閉鎖（一瞬の無音と小さな破裂）があるか。音を伸ばせるのは /ʃ/ だけ。',
      whyHard: '日本語の「シ」と「チ」の差とまったく同じ構造なので、実はこの対比は判別しやすい。',
      pairs: [
        { a: 'chip', aIpa: 'tʃɪp', b: 'ship', bIpa: 'ʃɪp' },
        { a: 'chair', aIpa: 'tʃɛr', b: 'share', bIpa: 'ʃɛr' },
        { a: 'cheap', aIpa: 'tʃip', b: 'sheep', bIpa: 'ʃip' },
        { a: 'watch', aIpa: 'wɑtʃ', b: 'wash', bIpa: 'wɑʃ' },
        { a: 'catch', aIpa: 'kætʃ', b: 'cash', bIpa: 'kæʃ' },
      ],
    },
    {
      withId: 'jh',
      withIpa: 'dʒ',
      difference: '調音は同一。声帯が震えるかどうかだけが違う。/tʃ/ が無声、/dʒ/ が有声。',
      listenFor:
        '喉の振動。加えて直前の母音の長さ。有声の /dʒ/ の前では母音が明確に長くなる（rich と ridge）。',
      whyHard:
        '日本語では「チ」と「ジ」として区別できているので対立自体は理解しやすい。崩れるのは語末で、母音を足すと両方「ジ」寄りに潰れる。',
      pairs: [
        { a: 'cheap', aIpa: 'tʃip', b: 'jeep', bIpa: 'dʒip' },
        { a: 'choke', aIpa: 'tʃoʊk', b: 'joke', bIpa: 'dʒoʊk' },
        { a: 'chin', aIpa: 'tʃɪn', b: 'gin', bIpa: 'dʒɪn' },
        { a: 'rich', aIpa: 'rɪtʃ', b: 'ridge', bIpa: 'rɪdʒ', note: '語末。母音の長さも手がかりになる' },
        { a: 'batch', aIpa: 'bætʃ', b: 'badge', bIpa: 'bædʒ' },
        { a: 'etch', aIpa: 'ɛtʃ', b: 'edge', bIpa: 'ɛdʒ' },
      ],
    },
    {
      withId: 't',
      withIpa: 't',
      difference:
        '/t/ は歯茎で閉鎖し破裂で開放する破裂音。/tʃ/ は後部歯茎で閉鎖し摩擦で開放する破擦音。開放の仕方が違う。',
      listenFor:
        '閉鎖を解いた後に摩擦が続くか。/t/ は破裂だけで終わり、/tʃ/ は破裂の後に短い「シュ」が付く。',
      whyHard:
        '日本語に /ti/ /tu/ がないため、/t/ + 前舌母音の位置に「チ」「ツ」が自動的に入ってしまう。日本語話者にとってはこちらが本当の難所。',
      pairs: [
        { a: 'chin', aIpa: 'tʃɪn', b: 'tin', bIpa: 'tɪn' },
        { a: 'cheese', aIpa: 'tʃiz', b: 'teas', bIpa: 'tiz' },
        { a: 'chop', aIpa: 'tʃɑp', b: 'top', bIpa: 'tɑp' },
        { a: 'chalk', aIpa: 'tʃɔk', b: 'talk', bIpa: 'tɔk' },
        { a: 'catch', aIpa: 'kætʃ', b: 'cat', bIpa: 'kæt', note: '語末での対比' },
      ],
    },
  ],
  spellings: [
    {
      pattern: 'ch',
      examples: ['chair', 'cheese', 'much', 'teacher', 'church'],
      frequency: '最頻',
      note: 'ただし ch は /k/（school, chemistry, character）や /ʃ/（machine, chef）にもなる。綴り ch から音は一意に決まらない。',
    },
    {
      pattern: '-tch（短母音の直後）',
      examples: ['watch', 'catch', 'kitchen', 'match', 'pitch'],
      frequency: '頻出',
      note: '短母音の直後では -tch、長母音や子音の後では -ch（coach, teach, branch）。綴りの住み分けが規則的。',
    },
    {
      pattern: '-ture',
      examples: ['nature', 'picture', 'future', 'culture', 'adventure'],
      frequency: '頻出',
      note: '元の /tjʊr/ が口蓋化した結果。綴りが変化前の形を保存している。',
    },
    {
      pattern: 'tu / ti（口蓋化した位置）',
      examples: ['question', 'actual', 'situation', 'virtue', 'fortune'],
      frequency: '頻出',
      note: '-tion の大半は /ʃən/ だが、s の後の -stion だけ /stʃən/ になる（question, suggestion）。',
    },
    {
      pattern: 'c / cz（外来語）',
      examples: ['cello', 'ciao', 'Czech'],
      frequency: '例外',
      note: 'イタリア語・チェコ語由来の少数語。',
    },
  ],
  examples: [
    { word: 'chair', ipa: 'tʃɛr', position: '語頭' },
    { word: 'church', ipa: 'tʃɝtʃ', position: '語頭', note: '語頭と語末の両方に /tʃ/ が立つ' },
    { word: 'teacher', ipa: 'ˈtitʃɚ', position: '語中' },
    { word: 'nature', ipa: 'ˈneɪtʃɚ', position: '語中', note: '綴り -ture。口蓋化の化石' },
    { word: 'question', ipa: 'ˈkwɛstʃən', position: '語中', note: '-stion は /ʃ/ ではなく /tʃ/' },
    { word: 'watch', ipa: 'wɑtʃ', position: '語末', note: '短母音の後なので -tch 綴り' },
  ],
  lecture: [
    'まず「この音は日本語の『チ』の子音とほぼ同じだ」と言う。出せる音だと先に確定させて負荷を下げる。',
    '次に定義を入れる。これは破擦音、つまり「閉鎖を破裂ではなく摩擦で開放する音」であり、/t/ + /ʃ/ の連続ではなく一つの音素だと説明する。chair の頭は /t/ と /ʃ/ に切り分けられず、音節の境目もこの内部には入らない。',
    'white shoes と why choose を並べて聞かせる。前者は /t/ と /ʃ/ が別の語に属する本物の連続、後者は一つの破擦音。実際に音が違うことを耳で確認させると、「一つの音」という主張が理屈ではなく事実になる。',
    'ship と chip で /ʃ/ との差を示す。手がかりは「出だしに閉鎖があるか」の一点だけでよい。',
    'cheap と jeep、rich と ridge で /dʒ/ との差（有声性と直前の母音の長さ）を示す。',
    'ここで本当の難所に移る。日本語には /ti/ /tu/ がないため、team が「チーム」、two が「ツー」になる。/tʃ/ が出せることが逆に罠になると説明する。chin と tin で対比する。',
    '最後に綴りを整理する。ch は /tʃ/ だが school, chemistry, character では /k/、machine, chef では /ʃ/。-tch は短母音の後。-ture と -stion は口蓋化の結果。ここまで言うと読解に直接効く。',
  ],
  faq: [
    {
      q: '/tʃ/ は /t/ と /ʃ/ を続けて言えばよいのではないか。',
      a:
        '違う。破擦音は閉鎖から摩擦への開放を一息で行う単一の音素で、内部を二つに割ることができない。証拠は三つある。第一に音節の境目がこの内部に落ちない（kit-chen は /kɪ-tʃən/ で切れ、/kɪt-ʃən/ とは切れない）。第二に white shoes（本物の /t/ + /ʃ/）と why choose（/tʃ/）は実際に別の音として聞こえる。第三に日本語の「チ」も同じ単一音 [tɕ] で、日本語話者はすでにこの区別を体で持っている。',
    },
    {
      q: 'ch はいつ /k/ と読むのか。',
      a:
        '語源で決まる。ギリシャ語由来の語では /k/（school, chemistry, character, architect, stomach, ache, mechanic）、フランス語由来の比較的新しい借用語では /ʃ/（machine, chef, Chicago, champagne）、英語の基層にある古い語では /tʃ/（chair, church, cheese, child）。学術語の匂いがしたら /k/ を疑う、という当たりの付け方が実用的。',
    },
    {
      q: 'watch にはなぜ t が入っているのか。',
      a:
        '短母音の直後で /tʃ/ を表すときに -tch と書く綴り習慣による（watch, catch, kitchen, match, pitch）。長母音や二重母音、子音の後では -ch と書く（coach, teach, branch, much）。発音は同じで、綴りが直前の母音の種類を示している。',
    },
    {
      q: '日本語の「チ」と完全に同じ音か。',
      a:
        'ほぼ同じ。厳密には日本語の「チ」は [tɕ] で、舌がより前の硬口蓋寄りに当たり、唇の丸めが弱い。英語の /tʃ/ はもう少し後ろで、唇をわずかに丸める。差は小さく、代用して問題は起きない。',
    },
  ],
  relatedRules: ['palatalization', 'yod-dropping', 't-allophones'],
  notes: [
    '英語の破擦音は /tʃ/ と /dʒ/ の二つだけ。この二つだけが「閉鎖 + 摩擦」で一音をなす。',
    'イギリス英語では tune が /tʃuːn/ になる話者がいる（yod の合体）。アメリカ英語は /j/ を落として /tun/ とするため、/tʃ/ の出現位置自体が米英で違う。詳細は yod 脱落の項を参照。',
    '-tch, -ture, -stion をまとめて押さえると、綴りから /tʃ/ を予測できる範囲が一気に広がる。',
  ],
};
