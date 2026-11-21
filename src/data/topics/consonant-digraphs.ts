import type { Topic } from '../../types';

export const consonantDigraphs: Topic = {
  id: 'consonant-digraphs',
  title: '子音字と二重字の読み',
  titleEn: 'Consonant letters and consonant digraphs',
  genre: 'スペリング逆引き',
  oneLiner:
    '2文字で1つの子音を表す綴り（sh, th, ch, ph, ng…）と、片方が読まれない綴り（wr, kn, gn, mb…）の対応表。母音の二重字と違って予測可能性が高く、覚える条件は数個しかない。',
  sections: [
    {
      heading: 'この章の引き方',
      body: [
        '子音の二重字は母音の二重字よりはるかに素直である。sh は常に /ʃ/、ph は常に /f/、wr は常に /r/。読みが分かれるのは ch・th・gh・ng・x・sc の6つだけで、しかもそのうち th と ng には予測できる条件がある。',
        '子音の二重字には2種類あることを先に区別しておくとよい。1つは2文字で1つの新しい音を表すもの（sh=/ʃ/、th=/θ ð/、ng=/ŋ/）。もう1つは片方が黙字で、残った1文字の音だけが残るもの（wr=/r/、kn=/n/、mb=/m/）。後者は黙字の章と内容が重なる。',
      ],
      table: {
        caption: '全体の早見表。詳細は各節へ',
        headers: ['綴り', '読み', '代表例', '予測可能性'],
        rows: [
          ['ch', '/tʃ/ ・ /k/ ・ /ʃ/', 'chair / school / machine', '語源で分かれる'],
          ['sh', '/ʃ/', 'she, fish', '例外なし'],
          ['th', '/θ/ ・ /ð/', 'think / this', '条件あり（下記）'],
          ['ph', '/f/', 'phone, graph', 'ほぼ例外なし'],
          ['gh', '黙字 ・ /f/ ・ /ɡ/', 'night / laugh / ghost', '位置で分かれる'],
          ['ng', '/ŋ/ ・ /ŋɡ/', 'sing / finger', '形態素境界で決まる'],
          ['nk', '/ŋk/', 'think, bank', '例外なし'],
          ['qu', '/kw/ ・ /k/', 'queen / unique', 'ほぼ /kw/'],
          ['x', '/ks/ ・ /ɡz/ ・ /z/', 'box / exam / xylophone', '強勢と位置で決まる'],
          ['wh', '/w/ ・ /h/', 'what / who', 'who 系のみ /h/'],
          ['wr', '/r/', 'write, wrong', '例外なし'],
          ['kn', '/n/', 'knife, know', '例外なし'],
          ['gn', '/n/', 'gnome, sign', '語頭と語末のみ'],
          ['mb', '/m/', 'climb, thumb', '語末のみ'],
          ['tch', '/tʃ/', 'watch, kitchen', '例外なし'],
          ['dge', '/dʒ/', 'bridge, judge', '例外なし'],
          ['sc', '/sk/ ・ /s/ ・ /ʃ/', 'scale / scene / conscious', '次の文字で決まる'],
          ['ps', '/s/ ・ /ps/', 'psychology / lapse', '語頭のみ /s/'],
        ],
      },
    },
    {
      heading: 'ch — 3通り（語源で分かれる）',
      table: {
        headers: ['読み', '例語', '頻度', '語源'],
        rows: [
          ['/tʃ/', 'chair, church, cheese, child, much, teach, watch', '最頻', '本来の英語語彙'],
          ['/k/', 'school, chemistry, character, stomach, ache, Christmas, echo, technology', '頻出', 'ギリシャ語由来'],
          ['/ʃ/', 'machine, chef, Chicago, champagne, brochure, mustache', '少数', 'フランス語由来'],
          ['黙字', 'yacht', '例外', 'オランダ語由来'],
        ],
      },
      body: [
        'ch の3通りは語源で分かれており、学術的・専門的な語（chemistry, chronology, psychology の ch 系）は /k/、料理やファッションなど比較的新しいフランス語からの借用は /ʃ/、それ以外の日常語は /tʃ/ になる。',
        '手がかりとして使えるのは、/k/ の語に ch- + 子音字という形が多いこと（Christmas, chrome, chronic）と、-ch で終わる日常語はほぼ /tʃ/ であること。それ以外は語ごとに覚える。',
      ],
      examples: [
        { text: 'chair', ipa: 'tʃɛr', note: 'ch = /tʃ/' },
        { text: 'school', ipa: 'skul', note: 'ch = /k/' },
        { text: 'machine', ipa: 'məˈʃin', note: 'ch = /ʃ/' },
        { text: 'stomach', ipa: 'ˈstʌmək' },
        { text: 'chef', ipa: 'ʃɛf' },
      ],
    },
    {
      heading: 'sh — /ʃ/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['sh', '/ʃ/', 'she, ship, shop, fish, wash, English, shoulder', '最頻（例外なし）'],
          ['-tion / -ssion', '/ʃən/', 'nation, action, mission', '別綴りだが同じ音'],
          ['-sure', '/ʒər/', 'measure, pleasure', '有声化する'],
        ],
      },
      body: [
        'sh は例外がない。注意すべきは読みではなく音の方で、日本語の「シ」は /ʃi/ に近いが、「シャ・シュ・ショ」の子音部分は英語の /ʃ/ より硬口蓋寄りである。また she /ʃi/ と sea /si/ の区別が崩れやすい。',
        'なお s が同じ /ʃ/ を表す綴りは他にもある（sugar, sure, tension, pressure）。これは綴りからの逆引きでは s 単独の項として扱う部分である。',
      ],
      examples: [
        { text: 'she', ipa: 'ʃi' },
        { text: 'fish', ipa: 'fɪʃ' },
        { text: 'sure', ipa: 'ʃʊr', note: 'sh と書かずに /ʃ/' },
      ],
    },
    {
      heading: 'th — /θ/ と /ð/（予測できる条件がある）',
      body: [
        'th は綴りが1種類しかないのに音が2つある（無声の /θ/ と有声の /ð/）。辞書を引かないと決まらないと思われがちだが、実際には次の3条件でほぼ決まる。',
      ],
      table: {
        caption: '/ð/ になる3条件。これに当てはまらなければ /θ/',
        headers: ['条件', '例語', '備考'],
        rows: [
          ['機能語（冠詞・代名詞・接続詞など）', 'the, this, that, these, those, they, them, their, there, then, than, though, thus', '例外なし。すべて /ð/'],
          ['-ther の語', 'mother, father, brother, other, another, weather, together, rather, either, neither, further', '例外なし。すべて /ð/'],
          ['動詞の語末 -the', 'breathe, bathe, clothe, soothe, loathe', '名詞形は /θ/ と対立する'],
        ],
      },
      list: [
        '上の3条件以外の内容語はほぼ /θ/: think, thank, three, thing, thousand, Thursday, theory, north, south, month, bath, math, mouth, teeth, both, death, health, truth, author, nothing, something, method。',
        '語頭の th で /ð/ になるのは機能語に限られる。つまり「the / this / that / they… 以外の語頭 th は /θ/」と言い切れる。',
        '語末が -the（e あり）なら /ð/、-th（e なし）なら /θ/。これも強い手がかりになる。',
        '少数の例外: with は米で /wɪð/ と /wɪθ/ の両方、smooth は /smuð/、booth は /buθ/。',
        '別の読み: Thomas, Thames, thyme は th = /t/（例外。固有名詞と1語のみ）。',
      ],
      examples: [
        { text: 'think', ipa: 'θɪŋk', note: '内容語 → /θ/' },
        { text: 'this', ipa: 'ðɪs', note: '機能語 → /ð/' },
        { text: 'mother', ipa: 'ˈmʌðər', note: '-ther → /ð/' },
        { text: 'breath（名詞）', ipa: 'brɛθ' },
        { text: 'breathe（動詞）', ipa: 'brið', note: '-the → /ð/。母音も変わる' },
        { text: 'bath', ipa: 'bæθ' },
        { text: 'bathe', ipa: 'beɪð' },
        { text: 'thyme', ipa: 'taɪm', note: 'th = /t/。time と同音' },
      ],
    },
    {
      heading: 'ph — /f/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['ph', '/f/', 'phone, photo, graph, elephant, physics, alphabet, nephew', '最頻'],
          ['ph（形態素境界）', '/p/ + /h/ または /p/', 'shepherd, uphill, upholster', '少数'],
          ['ph', '/v/', 'Stephen, nephew（英の一部）', '例外'],
        ],
      },
      body: [
        'ph = /f/ はギリシャ語起源の語に現れる綴りで、例外はほぼない。f と ph のどちらで書くかは語源の問題であって、音の問題ではない。',
        '例外は形態素境界だけである。shepherd は sheep + herd、uphill は up + hill なので、ph が2文字の二重字ではなく p と h の並びになっている。綴りを形態素に切ってから読みを決めるという原則がここで効く。',
      ],
      examples: [
        { text: 'phone', ipa: 'foʊn' },
        { text: 'graph', ipa: 'ɡræf' },
        { text: 'shepherd', ipa: 'ˈʃɛpərd', note: 'sheep + herd。二重字ではない' },
        { text: 'uphill', ipa: 'ʌpˈhɪl', note: 'up + hill' },
      ],
    },
    {
      heading: 'gh — 位置で決まる',
      table: {
        headers: ['位置', '読み', '例語', '頻度'],
        rows: [
          ['語頭', '/ɡ/', 'ghost, ghetto, ghastly', '少数（この綴りの語は少ない）'],
          ['語中（母音の後）', '黙字（前の母音を長くする）', 'night, light, right, high, weigh, straight, neighbor, daughter, bought', '最頻'],
          ['語末', '/f/', 'laugh, cough, tough, rough, enough, trough', '少数（この8語前後）'],
          ['語末', '黙字', 'though, through, dough, plough, bough', '少数'],
          ['語中（形態素境界）', '/ɡ/', 'spaghetti, aghast, doghouse', '少数'],
        ],
      },
      body: [
        'gh は語頭なら /ɡ/、語中なら黙字と、ほぼ位置で決まる。問題は語末で、/f/ になるか黙字になるかは -ough の語群の中で割れる。これが -ough の章で扱う内容そのものである。',
        'gh がこれほど厄介な理由は歴史にある。gh はかつて /x/（ドイツ語の Bach の ch に近い、軟口蓋の摩擦音）という実在の音を表していた。この音が英語から消える過程が語によって違い（無音化した語、/f/ に変わった語）、しかし綴りだけが昔のまま固定された。',
      ],
      examples: [
        { text: 'ghost', ipa: 'ɡoʊst', note: '語頭 → /ɡ/' },
        { text: 'night', ipa: 'naɪt', note: '語中 → 黙字' },
        { text: 'laugh', ipa: 'læf', note: '語末 → /f/' },
        { text: 'though', ipa: 'ðoʊ', note: '語末 → 黙字' },
        { text: 'spaghetti', ipa: 'spəˈɡɛti' },
      ],
    },
    {
      heading: 'ng — /ŋ/ か /ŋɡ/ か（形態素境界で決まる）',
      body: [
        'ng の2通りは、英語の綴りの中で最もきれいに説明できる分かれ方である。-ng が形態素の終わりなら /ŋ/、1つの形態素の内部なら /ŋɡ/ になる。',
        'singer は sing + er なので /ˈsɪŋər/、finger は finger という1語で切れ目がないので /ˈfɪŋɡər/。この対立が /ŋ/ を独立した音素と認める根拠にもなっている。',
      ],
      table: {
        headers: ['綴り', '読み', '例語', '条件'],
        rows: [
          ['-ng（語末）', '/ŋ/', 'sing, long, king, thing, young, wrong, among', '形態素の終わり'],
          ['-ng- （動詞 + er / ing）', '/ŋ/', 'singer, ringer, hanger, banging, longing', '形態素境界あり'],
          ['-ng- （1形態素内部）', '/ŋɡ/', 'finger, anger, hunger, single, English, angle, jungle, language', '切れ目なし'],
          ['比較級 -er / -est', '/ŋɡ/', 'longer, longest, stronger, strongest, younger', '境界があるが例外的に /ŋɡ/'],
          ['-nge', '/ndʒ/', 'change, strange, danger, angel, orange, arrange', 'e が g を軟音にする'],
          ['-ng（語頭）', '英語にはない', '—', '日本語の「ンガ」とは違い語頭に立てない'],
        ],
      },
      list: [
        '覚える例外は比較級の3語（longer, stronger, younger とその最上級）だけ。形容詞 long + er は /ˈlɔŋɡər/ だが、動詞 long + ing は /ˈlɔŋɪŋ/ と割れる。',
        'hanger（掛けるもの、hang + er）は /ˈhæŋər/、hunger（1形態素）は /ˈhʌŋɡər/。綴りが似ていても形態素を見れば決まる。',
        '-nge は g の後に e があるため g が /dʒ/ になり、n は /n/ のまま。つまり ng の二重字ではなく n + ge として読む。',
      ],
      examples: [
        { text: 'sing', ipa: 'sɪŋ' },
        { text: 'singer', ipa: 'ˈsɪŋər', note: 'sing + er → /ŋ/ のみ' },
        { text: 'finger', ipa: 'ˈfɪŋɡər', note: '1形態素 → /ŋɡ/' },
        { text: 'longer', ipa: 'ˈlɔŋɡər', note: '比較級は例外的に /ŋɡ/' },
        { text: 'change', ipa: 'tʃeɪndʒ', note: 'n + ge' },
      ],
    },
    {
      heading: 'nk — /ŋk/',
      table: {
        headers: ['綴り', '読み', '例語', '備考'],
        rows: [
          ['nk', '/ŋk/', 'think, thank, bank, drink, pink, sink, ankle, blanket', '例外なし'],
          ['nc + k/q', '/ŋk/', 'uncle, anchor, conquer', 'n の綴りが nk でなくても同じ'],
        ],
      },
      body: [
        'nk は常に /ŋk/ で、/nk/ にはならない。n が後続の /k/ に引かれて軟口蓋の鼻音 /ŋ/ になる同化であり、ng = /ŋɡ/ と同じ現象の無声版である。',
        '日本語話者にとってこれは易しい部分である。日本語でも「あんこ」の「ん」は /ŋ/ になるので、同じ現象が母語にある。think を「シンク」と書いたときの「ン」がすでに /ŋ/ である。',
      ],
      examples: [
        { text: 'think', ipa: 'θɪŋk' },
        { text: 'uncle', ipa: 'ˈʌŋkəl', note: '綴りは nc でも音は /ŋk/' },
      ],
    },
    {
      heading: 'qu — /kw/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['qu', '/kw/', 'queen, quick, question, quiet, quite, equal, require', '最頻'],
          ['-que（語末）', '/k/', 'unique, antique, technique, boutique, plaque', '頻出'],
          ['qu（フランス語由来）', '/k/', 'conquer, mosquito, liquor, queue', '少数'],
        ],
      },
      body: [
        'q は英語では必ず u を伴い、qu で /kw/ を表す。q 単独の綴りは借用語以外にない。',
        '語末の -que は /k/ で、フランス語綴りをそのまま持ち込んだもの。unique /juˈnik/ のように語末の e も読まれない。',
      ],
      examples: [
        { text: 'queen', ipa: 'kwin' },
        { text: 'unique', ipa: 'juˈnik' },
        { text: 'queue', ipa: 'kju', note: '5文字で /kju/ の3音' },
      ],
    },
    {
      heading: 'x — /ks/ ・ /ɡz/ ・ /z/',
      table: {
        headers: ['読み', '条件', '例語', '頻度'],
        rows: [
          ['/ks/', '語末、または後ろの母音に強勢がない', 'box, six, fox, next, taxi, mix, exit, exercise', '最頻'],
          ['/ɡz/', 'ex- の後ろの母音に強勢がある', 'exam, exact, example, exist, exhaust, examine, executive', '頻出'],
          ['/z/', '語頭', 'xylophone, xerox, xenophobia', '少数'],
          ['/kʃ/', '-xious / -xury', 'anxious, luxury, noxious', '少数'],
        ],
      },
      body: [
        'x の /ks/ と /ɡz/ の分かれは強勢で決まるという、はっきりした条件を持つ。ex- の後ろの音節に強勢があれば有声化して /ɡz/、なければ /ks/ のまま。exit /ˈɛksɪt/ と exam /ɪɡˈzæm/ を並べると一目で分かる。',
        'これは有声音に挟まれた無声音が有声化する同化で、ed 語尾や s 語尾の有声同化と同じ種類の現象である。',
        '語頭の x はギリシャ語起源の語に限られ、/z/ になる。/ks/ で始まる語は英語の音韻構造上許されないため。',
      ],
      examples: [
        { text: 'box', ipa: 'bɑks' },
        { text: 'exit', ipa: 'ˈɛksɪt', note: '強勢が前 → /ks/' },
        { text: 'exam', ipa: 'ɪɡˈzæm', note: '強勢が後ろ → /ɡz/' },
        { text: 'example', ipa: 'ɪɡˈzæmpəl' },
        { text: 'xylophone', ipa: 'ˈzaɪləfoʊn', note: '語頭 → /z/' },
        { text: 'luxury', ipa: 'ˈlʌkʃəri' },
      ],
    },
    {
      heading: 'wh — /w/ か /h/ か',
      table: {
        headers: ['綴り', '読み', '例語', '備考'],
        rows: [
          ['wh', '/w/', 'what, when, where, which, why, white, wheel, while, whisper', '最頻。h は読まれない'],
          ['wh + o', '/h/', 'who, whose, whom, whole, whoever', 'w は読まれない'],
          ['wh', '/hw/', 'what, when（一部の地域・保守的な発音）', '南部や年配の話者に残る'],
        ],
      },
      body: [
        'wh は2通りだが、分かれ方は単純で「次が o なら /h/、それ以外は /w/」でほぼ尽きる。who / whose / whom / whole の4語を覚えれば残りは全部 /w/。',
        'かつて wh は /hw/（息を伴う w）と発音され、witch /wɪtʃ/ と which /hwɪtʃ/ が区別されていた。現代の標準米語ではこの区別は失われ、どちらも /wɪtʃ/ になる。地域によっては /hw/ が残っている。',
      ],
      examples: [
        { text: 'what', ipa: 'wʌt' },
        { text: 'who', ipa: 'hu' },
        { text: 'whole', ipa: 'hoʊl', note: 'hole と同音' },
      ],
    },
    {
      heading: '片方が黙字になる二重字 — wr / kn / gn / mb',
      table: {
        headers: ['綴り', '読み', '位置', '例語'],
        rows: [
          ['wr-', '/r/', '語頭のみ', 'write, wrong, wrist, wrap, wreck, wrinkle, wrestle'],
          ['kn-', '/n/', '語頭のみ', 'knife, know, knee, knock, knot, knight, knowledge, knuckle'],
          ['gn-', '/n/', '語頭', 'gnome, gnaw, gnat, gnash'],
          ['-gn', '/n/', '語末', 'sign, design, align, assign, campaign, foreign, reign'],
          ['-mb', '/m/', '語末のみ', 'climb, comb, thumb, lamb, bomb, tomb, womb, numb, dumb'],
        ],
      },
      body: [
        'この4つはすべて例外がなく、片方を読まないだけでよい。いずれもかつては両方の文字が発音されていた綴りで、knife は /knaɪf/、write は /wraɪt/ と子音2つで始まっていた。英語がそうした語頭の組み合わせを許さなくなったため、前の子音が落ちて綴りだけが残った。',
        '重要な補足として、これらの黙字は派生形で復活することがある。sign /saɪn/ の g は読まれないが、signature /ˈsɪɡnətʃər/ では読まれる。bomb /bɑm/ の b は bombard /bɑmˈbɑrd/ で復活する。音節構造が変わって発音できる位置に移るためで、綴りが無意味に残っているのではないことが分かる。',
      ],
      examples: [
        { text: 'write', ipa: 'raɪt', note: 'right と同音' },
        { text: 'knife', ipa: 'naɪf' },
        { text: 'sign', ipa: 'saɪn' },
        { text: 'signature', ipa: 'ˈsɪɡnətʃər', note: 'g が復活する' },
        { text: 'climb', ipa: 'klaɪm' },
        { text: 'bomb', ipa: 'bɑm' },
        { text: 'bombard', ipa: 'bɑmˈbɑrd', note: 'b が復活する' },
      ],
    },
    {
      heading: 'tch / dge — 短母音の後の /tʃ/ /dʒ/',
      table: {
        headers: ['綴り', '読み', '例語', '条件'],
        rows: [
          ['-tch', '/tʃ/', 'watch, catch, match, kitchen, switch, butcher, ditch', '短母音の直後'],
          ['-ch', '/tʃ/', 'teach, reach, coach, much, rich, church', '長母音の後、または子音の後'],
          ['-dge', '/dʒ/', 'bridge, judge, edge, badge, ridge, knowledge, budget', '短母音の直後'],
          ['-ge', '/dʒ/', 'page, large, change, huge, village', '長母音の後、または子音の後'],
        ],
      },
      body: [
        'tch と dge は、直前の母音が短いことを示すための綴りである。catch /kætʃ/ と teach /titʃ/ を比べると、音としては同じ /tʃ/ だが、綴りは母音の長短を書き分けている。',
        'したがって逆引きとしては有用な情報を持つ。-tch や -dge を見たら、直前の母音は短音（/æ ɛ ɪ ɑ ʌ/）だと判断できる。これは母音字1文字の読みを決める手がかりになる。',
      ],
      examples: [
        { text: 'watch', ipa: 'wɑtʃ', note: '短母音 + tch' },
        { text: 'teach', ipa: 'titʃ', note: '長母音 + ch' },
        { text: 'bridge', ipa: 'brɪdʒ', note: '短母音 + dge' },
        { text: 'page', ipa: 'peɪdʒ', note: '長母音 + ge' },
        { text: 'knowledge', ipa: 'ˈnɑlɪdʒ' },
      ],
    },
    {
      heading: 'sc / ps',
      table: {
        headers: ['綴り', '読み', '条件', '例語'],
        rows: [
          ['sc + a/o/u/子音', '/sk/', '硬音', 'scale, score, scuba, screen, school, escape'],
          ['sc + e/i/y', '/s/', 'c が軟音化して s と重なる', 'scene, science, scissors, scent, muscle, descend, fascinate'],
          ['sc', '/ʃ/', '-scious / -science', 'conscious, conscience, luscious'],
          ['ps-（語頭）', '/s/', 'p は読まれない', 'psychology, psalm, pseudo, psychiatry'],
          ['-ps（語中・語末）', '/ps/', '両方読む', 'lapse, collapse, capsule, eclipse, chips'],
        ],
      },
      body: [
        'sc は後ろの文字で決まる。e / i / y の前では c が /s/ になるので、s と重なって /s/ 1つになる。scene /sin/ が seen と同音になるのはこのため。それ以外では /sk/。',
        'ps は語頭では p が読まれず /s/ になる。これも kn や wr と同じで、英語が語頭の /ps/ を許さないため。語中や語末では両方読む（lapse /læps/）。',
      ],
      examples: [
        { text: 'scale', ipa: 'skeɪl' },
        { text: 'scene', ipa: 'sin', note: 'seen と同音' },
        { text: 'scissors', ipa: 'ˈsɪzərz', note: 'c も2つ目の s も黙字扱い' },
        { text: 'conscious', ipa: 'ˈkɑnʃəs' },
        { text: 'psychology', ipa: 'saɪˈkɑlədʒi', note: '語頭 ps → /s/' },
        { text: 'lapse', ipa: 'læps', note: '語末 ps → /ps/' },
      ],
    },
    {
      heading: '予測可能性のまとめ',
      table: {
        caption: '母音の二重字と違い、ほとんどが条件つきで決まる',
        headers: ['段階', '綴り', '対処'],
        rows: [
          ['例外なし', 'sh, nk, wr, kn, mb, tch, dge, ph', '読みを1つ覚えれば終わり'],
          ['位置で決まる', 'gh（語頭 /ɡ/・語中 黙字）, gn, ps, wh（o の前 /h/）', '位置の条件を覚える'],
          ['条件で決まる', 'th（機能語・-ther・動詞 -the なら /ð/）, ng（形態素境界なら /ŋ/）, x（強勢で /ks/ か /ɡz/）, sc（次の文字）', '条件を覚える。これが本章の中心'],
          ['語源で分かれる', 'ch（/tʃ/ /k/ /ʃ/）', '語ごとに覚える。ただし3通りしかない'],
          ['予測不能', '語末の gh（/f/ か 黙字）', '-ough の章で個別に'],
        ],
      },
      body: [
        '子音の二重字で本当に語ごとの暗記が必要なのは ch と語末の gh だけである。母音の二重字（ow, ou, ough）と比べると負担は小さい。th と ng に条件があることを知っているかどうかが、この章を使えるかどうかの分かれ目になる。',
      ],
    },
  ],
  lecture: [
    '最初に「子音の二重字は母音より素直だ」と言う。母音の章で ow や ou に苦しんだ直後なので、安心感が学習の推進力になる。',
    '二重字には2種類あると区別して見せる。新しい音を作るもの（sh, th, ng）と、片方が黙字になるもの（wr, kn, mb）。この区別があると、後者は黙字の章と同じ扱いでよいと分かる。',
    'th の /ð/ 3条件（機能語・-ther・動詞 -the）を必ず教える。「th は辞書を引かないと分からない」と思っている人が多いので、条件で決まると示すと驚かれる。ここが本章で最も価値のある情報。',
    'ng の /ŋ/ と /ŋɡ/ を singer と finger で対比する。形態素境界という概念が1組の例で伝わり、比較級の例外（longer）も同時に片付く。',
    'x の /ks/ と /ɡz/ を exit と exam で対比する。強勢が条件だと分かるので、同じ ex- でも読みが違う理由が納得できる。',
    'ch の3通りを語源で整理する。/k/ はギリシャ語、/ʃ/ はフランス語、残りが /tʃ/。覚える語数の見積もりが立つ。',
    '最後に、黙字が派生形で復活する例（sign / signature、bomb / bombard）を見せる。綴りが無駄に残っているのではないと分かり、黙字の章への橋渡しになる。',
  ],
  faq: [
    {
      q: 'th の /θ/ と /ð/ は本当に条件で決まるのか。',
      a: 'ほぼ決まる。機能語（the, this, that, they, there, then, than, though）、-ther で終わる語（mother, father, other, weather, together）、動詞の語末 -the（breathe, bathe, clothe）が /ð/ で、それ以外の内容語は /θ/。残る揺れは with（米で両方）、smooth、固有名詞程度である。',
    },
    {
      q: 'ch が /k/ になるかどうかを語源なしで判別できるか。',
      a: '完全には無理だが、目安はある。ch- の直後が子音字なら /k/（Christmas, chrome, chronic）。学術語・専門語であれば /k/ の可能性が高い（chemistry, technology, architecture, mechanic, psychology 系の ch）。日常語の -ch 語末はほぼ /tʃ/。この3つで大半は当たる。',
    },
    {
      q: 'ng の /ŋɡ/ と /ŋ/ の違いは聞き分けられるのか。',
      a: '聞き分けられる。finger では /ŋ/ の後にはっきりと /ɡ/ の破裂が入り、singer では入らない。日本語話者は逆に、どちらも「ング」と読んで /ɡ/ を入れてしまう傾向があるので、sing を /sɪŋɡ/ と言わないことが課題になる。',
    },
    {
      q: 'wh を /hw/ と発音するのは古いのか。',
      a: '標準米語では /w/ が普通で、/hw/ は地域的・世代的な特徴として残っている。辞書は /w/ を第一に示し、/hw/ を併記することが多い。学習者としては /w/ を採用してよい。ただし who 系の /h/ はこれとは別の話で、こちらは全話者共通である。',
    },
  ],
  related: [
    'vowel-digraphs',
    'silent-letters',
    'ough',
    's-endings',
    'ipa-basics',
    'assimilation',
    'voicing',
    'palatalization',
    'us-vs-uk',
    'th',
    'dh',
    'ch',
    'sh',
    'ng',
    'f',
    'v',
    'k',
    'g',
    's',
    'z',
  ],
  notes: [
    'IPA は一般米語（General American）で示した。',
    'wh の /hw/ 発音、often の /t/ の有無などは話者差があり、辞書も複数の読みを併記する。',
    'ch の語源別の整理は傾向であり、例外はある（例: machine は /ʃ/ だがフランス語経由の古い借用 chair は /tʃ/）。',
  ],
};
