import type { Phoneme } from '../../types';

export const jh: Phoneme = {
  id: 'jh',
  ipa: 'dʒ',
  type: 'consonant',
  group: '破擦音',
  nickname: '日本語の「ジャ・ジ・ジュ」の子音',
  oneLiner:
    '舌を後部歯茎に完全に密着させて気流を止め、声を出したまま摩擦に逃がして開放する有声の破擦音。日本語の「ジ／ヂ」の子音 [dʑ] とほぼ同じだが、その「ジ」が /ʒ/ も兼ねているため vision と virgin の区別が崩れる。',
  articulation: {
    voicing: '有声',
    tongue:
      '/tʃ/ と同じ位置・同じ動き。舌先と舌の前面を後部歯茎に当てて閉鎖し、/ʒ/ の狭い通り道を通して開放する。閉鎖の最中も声帯を震わせ続ける。',
    lips: 'わずかに丸めて前に出す。/ʒ/ /tʃ/ と同じ。',
    consonant: {
      place: '後部歯茎',
      manner: '破擦',
      airflow:
        '完全な閉鎖 → 摩擦としての開放を、有声のまま一息で行う。閉鎖を省くと /ʒ/ になり、摩擦を省くと /d/ になる。',
    },
  },
  howTo: [
    '日本語の「ジャ」を言い、母音を切り落として子音だけを残す。語頭の「ジャ」は破擦音 [dʑ] なので jar にそのまま使える。',
    '閉鎖を必ず作る。語中では日本語の「ジ」が摩擦だけの [ʑ] になりやすく、それをそのまま使うと major が /ˈmeɪʒɚ/ に聞こえる。',
    '声帯を止めない。閉鎖している間も喉を震わせ続けるのが /tʃ/ との唯一の違い。',
    '語末（age, bridge, change, large）では母音を足さずに子音で終える。閉鎖から摩擦に抜けて、そこで止める。',
    '鏡で唇の丸めを確認する。日本語の「ジ」より少し丸めると英語らしくなる。',
  ],
  listenFor: [
    '喉の振動。無声の /tʃ/ との差はここだけ。batch と badge。',
    '出だしの一瞬の閉鎖。/ʒ/ は閉鎖がなく最初から摩擦で鳴り出す。legion と lesion。',
    '語末で母音が付かずに終わる。bridge は1音節で、「ブリッジ」の2音節にはならない。',
    '直前の母音が長い。有声子音の前なので rich より ridge のほうが母音が明確に伸びる。',
    '語頭に立つ頻度が高い（just, job, July）。これは /ʒ/ との大きな違いで、/ʒ/ は語頭にほとんど立たない。',
  ],
  l1: {
    substitute: '日本語の「ジ／ヂ」[dʑ]。語末では「ジ」＋母音。',
    why:
      '日本語の「ジ」が /dʒ/ と /ʒ/ の両方の受け皿になっている。日本語には閉鎖を伴う [dʑ] と摩擦だけの [ʑ] の対立がなく、語頭では破擦寄り、語中では摩擦寄りという単なる異音の差にすぎないため、両者を別の音として扱う枠組みが存在しない。加えて日本語は子音で語を終えられないので、語末の /dʒ/ には母音が付く。',
    symptom:
      'vision と virgin、measure と major が同じ音になる。語末では age が「エイジ」、bridge が「ブリッジ」と2音節になり、語の輪郭がぼやける。語頭はほぼ問題なく通じる。',
    examples: [
      'vision と virgin が同音になる',
      'television の /ʒ/ を /dʒ/ で出す（逆に measure を /ˈmeɪdʒɚ/ 寄りに言う）',
      'bridge を「ブリッジ」と読み母音が足される',
      'large を「ラージ」、change を「チェンジ」と読み語末が母音で終わる',
    ],
  },
  contrasts: [
    {
      withId: 'ch',
      withIpa: 'tʃ',
      difference: '調音は同一。声帯が震えるかどうかだけが違う。/dʒ/ が有声、/tʃ/ が無声。',
      listenFor:
        '喉の振動と、直前の母音の長さ。有声の /dʒ/ の前では母音が長くなるので、語末ではこちらのほうが頼りになる手がかり。',
      whyHard: '語頭では「ジ」と「チ」で区別できるが、語末に母音を足すと長さの手がかりまで消えてしまう。',
      pairs: [
        { a: 'jeep', aIpa: 'dʒip', b: 'cheap', bIpa: 'tʃip' },
        { a: 'joke', aIpa: 'dʒoʊk', b: 'choke', bIpa: 'tʃoʊk' },
        { a: 'ridge', aIpa: 'rɪdʒ', b: 'rich', bIpa: 'rɪtʃ', note: '語末。母音の長さが決定的' },
        { a: 'badge', aIpa: 'bædʒ', b: 'batch', bIpa: 'bætʃ' },
        { a: 'edge', aIpa: 'ɛdʒ', b: 'etch', bIpa: 'ɛtʃ' },
        { a: 'lunge', aIpa: 'lʌndʒ', b: 'lunch', bIpa: 'lʌntʃ' },
      ],
    },
    {
      withId: 'zh',
      withIpa: 'ʒ',
      difference:
        '/dʒ/ は閉鎖から摩擦へ開放する破擦音。/ʒ/ は閉鎖なしで最初から摩擦する摩擦音。調音点も有声性も同じで、違いは閉鎖の有無だけ。',
      listenFor:
        '出だしに閉鎖があるか。/ʒ/ は音を伸ばせるが /dʒ/ は伸ばせない。出現位置も手がかりで、語頭は /dʒ/、-sion / -sure の内部は /ʒ/ が多い。',
      whyHard:
        '日本語の「ジ」が両方を引き受けるため、区別する枠組みがない。日本語話者の /dʒ/ 関連の誤りで最も多いのがこの対立の消失。',
      pairs: [
        { a: 'legion', aIpa: 'ˈlidʒən', b: 'lesion', bIpa: 'ˈliʒən', note: '最も明快な最小対立' },
        { a: 'virgin', aIpa: 'ˈvɝdʒən', b: 'version', bIpa: 'ˈvɝʒən', note: '弱母音が同じになる話者では完全な最小対立' },
        { a: 'pledger', aIpa: 'ˈplɛdʒɚ', b: 'pleasure', bIpa: 'ˈplɛʒɚ' },
        { a: 'ledger', aIpa: 'ˈlɛdʒɚ', b: 'leisure', bIpa: 'ˈlɛʒɚ', note: 'leisure は米で /ˈliʒɚ/ とも。その場合は母音も違う' },
      ],
    },
    {
      withId: 'd',
      withIpa: 'd',
      difference:
        '/d/ は歯茎で閉鎖し破裂で開放する破裂音。/dʒ/ は後部歯茎で閉鎖し摩擦で開放する破擦音。閉鎖の位置と開放の仕方が違う。',
      listenFor: '閉鎖を解いた後に摩擦が続くか。/d/ は破裂だけで終わり、/dʒ/ は短い「ジュ」が続く。',
      whyHard:
        '語境界の口蓋化で /d/ + /j/ が /dʒ/ に融合するため、did you が did Joe のように聞こえて語の切れ目を見失う。',
      pairs: [
        { a: 'jam', aIpa: 'dʒæm', b: 'dam', bIpa: 'dæm' },
        { a: 'jeep', aIpa: 'dʒip', b: 'deep', bIpa: 'dip' },
        { a: 'jug', aIpa: 'dʒʌɡ', b: 'dug', bIpa: 'dʌɡ' },
        { a: 'jet', aIpa: 'dʒɛt', b: 'debt', bIpa: 'dɛt' },
        { a: 'jeer', aIpa: 'dʒɪr', b: 'dear', bIpa: 'dɪr' },
      ],
    },
  ],
  spellings: [
    {
      pattern: 'j',
      examples: ['jump', 'just', 'job', 'enjoy', 'July'],
      frequency: '最頻',
      note: '綴り j は例外なく /dʒ/。音から綴りを、綴りから音を一意に決められる珍しい文字。',
    },
    {
      pattern: 'g + e / i / y（soft g）',
      examples: ['gentle', 'giant', 'gym', 'danger', 'magic', 'general'],
      frequency: '最頻',
      note: 'ただし get, give, girl, gift, begin, gear は /ɡ/ のままの例外。いずれも古いゲルマン系の語で、soft g の規則はラテン・フランス語由来の語に効く。',
    },
    {
      pattern: '-dge',
      examples: ['bridge', 'judge', 'edge', 'badge', 'knowledge'],
      frequency: '頻出',
      note: 'この綴りは必ず /dʒ/。直前が短母音であることも同時に示している。',
    },
    {
      pattern: '-ge / -age（語末）',
      examples: ['age', 'change', 'large', 'village', 'message'],
      frequency: '頻出',
      note: '強勢のない -age は /ɪdʒ/（village, package）。フランス語からの新しい借用語だけが /ɑʒ/ になる（garage, massage, mirage）。',
    },
    {
      pattern: 'd + u / i（口蓋化）',
      examples: ['education', 'soldier', 'gradual', 'individual'],
      frequency: '少数',
      note: '元の /dj/ が融合した結果。綴りが変化前の形を保存している。',
    },
    {
      pattern: 'gg / dj',
      examples: ['suggest', 'exaggerate', 'adjust', 'adjective'],
      frequency: '少数',
    },
  ],
  examples: [
    { word: 'jump', ipa: 'dʒʌmp', position: '語頭' },
    { word: 'giant', ipa: 'ˈdʒaɪənt', position: '語頭', note: 'g + i なので soft g' },
    { word: 'major', ipa: 'ˈmeɪdʒɚ', position: '語中', note: '閉鎖を省くと measure に近づく' },
    { word: 'soldier', ipa: 'ˈsoʊldʒɚ', position: '語中', note: '元は /dj/。口蓋化の化石' },
    { word: 'bridge', ipa: 'brɪdʒ', position: '語末', note: '-dge は常に /dʒ/。1音節で終える' },
    { word: 'village', ipa: 'ˈvɪlɪdʒ', position: '語末', note: '強勢のない -age は /ɪdʒ/' },
  ],
  lecture: [
    'まず「『ジャ・ジ・ジュ・ジョ』の子音とほぼ同じだ」と言う。語頭の jar, just, July はこれで足りると確定させる。',
    '次に定義を入れる。これは破擦音で、閉鎖を摩擦で開放する単一の音素。/d/ + /ʒ/ の連続ではなく、内部に音節の境目も入らない。/tʃ/ の有声版だと位置づける。',
    'ここから本題に入る。日本語の「ジ」は /dʒ/ と /ʒ/ の両方を引き受けてしまう。legion と lesion、virgin と version を並べて、英語では別の語になることを示す。違いは閉鎖の有無の一点だけだと言う。',
    '語中が崩れやすいことを指摘する。日本語の語中の「ジ」は摩擦だけの [ʑ] になりやすく、major がそのまま measure 寄りになる。「語中でも閉鎖を作る」と具体的に指示する。',
    '次に語末。age, bridge, change, large と並べると頻度の高さが見える。日本語は子音で語を終えられないので「ジ」が付くが、ここは閉鎖から摩擦に抜けて止めるだけでよいと示す。ridge と rich で直前の母音の長さの差も聞かせる。',
    '綴りを整理する。j は常に /dʒ/。-dge は必ず /dʒ/。g + e/i/y も /dʒ/ だが get, give, girl は例外。語末の -age は弱まって /ɪdʒ/。この4本で大半の語が説明できる。',
    '最後に口蓋化へつなぐ。education, soldier は元が /dj/ で、did you が「ディヂュ」になるのと同じ変化だと言えば、化石化した綴りと現代の連結が一本の線でつながる。',
  ],
  faq: [
    {
      q: '日本語の「ジ」で代用して通じるか。',
      a:
        '語頭はほぼ問題なく通じる。日本語の語頭の「ジ」は破擦音 [dʑ] で /dʒ/ とほぼ同じだから。崩れるのは二か所で、語中（摩擦だけになって /ʒ/ に寄る）と語末（母音が足される）。この二つを意識するだけで精度が大きく上がる。',
    },
    {
      q: 'vision と virgin はどう区別するのか。',
      a:
        '閉鎖の有無だけで区別する。vision の /ʒ/ は舌が触れずに摩擦だけ、virgin の /dʒ/ は舌を後部歯茎に一度完全に当ててから摩擦に抜ける。自分で出すときは「ジ」の前に小さく「ッ」を入れる感覚にすると閉鎖が入る。聞き分けでは、音を伸ばせるのが /ʒ/、一瞬で切れるのが /dʒ/。',
    },
    {
      q: 'g はいつ /dʒ/ になるのか。',
      a:
        'e, i, y の前では /dʒ/（gentle, giant, gym, danger）。それ以外の母音と子音の前では /ɡ/（go, gas, glad）。ただし get, give, girl, gift, begin, gear, giggle は古いゲルマン系の語で /ɡ/ のまま残っている。soft g の規則はラテン語・フランス語経由の語彙に効く規則なので、語源が違えば効かない。-dge と j は例外なしで常に /dʒ/。',
    },
    {
      q: '語末の -age はなぜ語によって読みが違うのか。',
      a:
        '借用の時期が違う。古くから英語に入った語は強勢が前に移り、-age が弱まって /ɪdʒ/ になった（village, message, package, courage）。比較的新しいフランス語からの借用語はフランス語風の強勢と音を保ち、/ɑʒ/ になる（garage, massage, mirage, collage）。新しい借用語ほどフランス語に近い、と覚えると整理できる。',
    },
  ],
  relatedRules: ['palatalization', 'yod-dropping', 's-endings'],
  notes: [
    '英語の破擦音は /tʃ/ と /dʒ/ の二つだけ。この二つだけが「閉鎖 + 摩擦」で一音をなす。',
    '語末の /dʒ/ は頻度が非常に高い（age, change, large, bridge, judge, village）。語末に母音を足す癖はここで最も目立つ。',
    '/ʒ/ はほとんど語中にしか立たない一方、/dʒ/ は語頭・語中・語末すべてに立つ。出現位置そのものが両者の判別材料になる。',
    'イギリス英語では duke, dune が /dʒuːk/ /dʒuːn/ になる話者がいる（yod の合体）。アメリカ英語は /j/ を落として /duk/ とする。',
  ],
};
