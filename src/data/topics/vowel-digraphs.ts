import type { Topic } from '../../types';

export const vowelDigraphs: Topic = {
  id: 'vowel-digraphs',
  title: '母音字と二重字の読み',
  titleEn: 'Vowel letters and vowel digraphs',
  genre: 'スペリング逆引き',
  oneLiner:
    '綴りを左に置いて音を引くための表。母音字1文字は閉音節で短い音になり、母音字2文字（二重字）はそれぞれ固有の読みを持つが、ea・oo・ou・ow のように複数の読みを持つものは頻度と例外を分けて覚える必要がある。',
  sections: [
    {
      heading: 'この章の引き方',
      body: [
        'この章は「音から綴りを探す」のではなく「綴りから音を探す」ための章である。表の左端は常に綴り、右側がその読みと頻度になっている。知らない語に出会ったとき、まず母音字のかたまりを切り出し、その綴りの行を引く。',
        '英語の母音の綴りは完全には規則化できない。しかし「規則で読めるもの」「主要な読みが2〜3通りに限られるもの」「語ごとに覚えるしかないもの」の3段階に分けることはできる。この分類を知っていれば、暗記すべき量は見た目よりずっと小さい。',
        'この章の頻度表示は次の4段階で書く。最頻＝その綴りを見たらまずこの読みを試す。頻出＝実用語彙に相当数ある。少数＝十数語程度。例外＝個別に覚える語。',
      ],
    },
    {
      heading: '母音字1文字・閉音節（短音）',
      table: {
        caption: '母音字 + 子音字で音節が閉じている場合。最も基本的で例外が少ない',
        headers: ['綴り', '読み', '例語', 'キーワード'],
        rows: [
          ['a + 子音', '/æ/', 'cat, hand, map, bad', 'TRAP'],
          ['e + 子音', '/ɛ/', 'bed, ten, red, send', 'DRESS'],
          ['i + 子音', '/ɪ/', 'sit, big, win, fish', 'KIT'],
          ['o + 子音', '/ɑ/', 'hot, stop, box, lock', 'LOT'],
          ['u + 子音', '/ʌ/', 'cut, bus, sun, luck', 'STRUT'],
        ],
      },
      body: [
        '閉音節とは、母音の後ろに子音が来てその音節が終わる形を指す。cat の a は後ろに t があって閉じているので /æ/、cate のように後ろに e が付いて開くと /eɪ/ になる。この切り替えが magic e の章の主題である。',
        '日本語話者にとっての難所は a 行と u 行である。/æ/ と /ʌ/ と /ɑ/ はすべてカタカナでは「ア」になるため、綴りから読みを引けても、引いた音を区別して出せない。綴りの段階では a=/æ/、u=/ʌ/、o=/ɑ/ と機械的に対応することを先に固めておくとよい。',
      ],
      examples: [
        { text: 'cat', ipa: 'kæt', note: 'a + 子音 → /æ/' },
        { text: 'cut', ipa: 'kʌt', note: 'u + 子音 → /ʌ/' },
        { text: 'cot', ipa: 'kɑt', note: 'o + 子音 → /ɑ/' },
      ],
    },
    {
      heading: '二重字 早見表',
      table: {
        caption: 'まずここを引く。詳細と例外は以下の各節に分けて置いた',
        headers: ['綴り', '主な読み', '代表例', '予測可能性'],
        rows: [
          ['ai', '/eɪ/', 'rain, wait', '高い'],
          ['ay', '/eɪ/', 'day, play', '高い（語末）'],
          ['ea', '/i/ ・ /ɛ/ ・ /eɪ/', 'eat / head / great', '低い（3通り）'],
          ['ee', '/i/', 'see, tree', '非常に高い'],
          ['ei', '/i/ ・ /eɪ/', 'receive / eight', '中'],
          ['ie', '/i/ ・ /aɪ/', 'field / pie', '中（位置で分かれる）'],
          ['oa', '/oʊ/', 'boat, road', '非常に高い'],
          ['oo', '/u/ ・ /ʊ/ ・ /ʌ/', 'food / book / blood', '低い（3通り）'],
          ['ou', '/aʊ/ ・ /u/ ・ /ʌ/ ・ /oʊ/', 'out / soup / country / soul', '非常に低い'],
          ['ow', '/aʊ/ ・ /oʊ/', 'now / know', '低い（ほぼ五分五分）'],
          ['oi', '/ɔɪ/', 'oil, coin', '非常に高い'],
          ['oy', '/ɔɪ/', 'boy, enjoy', '非常に高い（語末）'],
          ['au', '/ɔ/', 'author, cause', '高い'],
          ['aw', '/ɔ/', 'law, draw', '非常に高い'],
          ['ew', '/u/ ・ /ju/', 'new / few', '高い'],
          ['ui', '/u/ ・ /ɪ/', 'fruit / build', '中'],
        ],
      },
    },
    {
      heading: 'ai / ay — /eɪ/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['ai（語中）', '/eɪ/', 'rain, wait, train, paint, main', '最頻'],
          ['ay（語末）', '/eɪ/', 'day, say, play, away, stay', '最頻'],
          ['ai', '/ɛ/', 'said, again, against', '例外'],
          ['ai', '/æ/', 'plaid', '例外'],
          ['air', '/ɛr/', 'air, fair, hair, chair', '頻出'],
        ],
      },
      body: [
        'ai と ay は同じ /eɪ/ を表し、語中は ai、語末は ay で書くという位置による書き分けになっている。day / daily のように語形が変わると ai に替わるのもこの原則による。綴りから音を引く場合、この2つはほぼ迷わない。',
        '例外は said と again の系列だけで、どちらも超高頻度語なので実質的に個別暗記になる。say は /seɪ/ だが says は /sɛz/、said も /sɛd/ と、同じ語族の中で揺れていることに注意する。',
      ],
      examples: [
        { text: 'rain', ipa: 'reɪn' },
        { text: 'day', ipa: 'deɪ' },
        { text: 'said', ipa: 'sɛd', note: '例外。say /seɪ/ とずれる' },
        { text: 'says', ipa: 'sɛz', note: '同じく例外' },
        { text: 'again', ipa: 'əˈɡɛn', note: '米では /əˈɡeɪn/ も聞く' },
      ],
    },
    {
      heading: 'ea — 3通り（この綴りが最大の難所のひとつ）',
      table: {
        caption: '頻度順。綴りだけでは決まらないので、代表語群ごと覚える',
        headers: ['読み', '例語', '頻度', '手がかり'],
        rows: [
          ['/i/', 'eat, sea, team, read, clean, speak, please', '最頻', 'まずこれを試す'],
          ['/ɛ/', 'head, bread, dead, breath, weather, ready, health', '頻出', '身体・日常の短い語に多い'],
          ['/eɪ/', 'great, break, steak', '例外（3語）', 'この3語だけと覚えてよい'],
          ['ear → /ɪr/', 'ear, hear, near, clear, year', '頻出', 'r の前'],
          ['ear → /ɝ/', 'earth, learn, heard, early, search', '頻出', 'r の前。上と対立する'],
          ['ear → /ɛr/', 'bear, pear, wear, swear', '少数', 'r の前。3つ目の分かれ'],
          ['/ə/（弱音節）', 'ocean, sergeant', '少数', '強勢がない位置'],
        ],
      },
      body: [
        'ea は /i/ が最頻だが、/ɛ/ も実用語彙に多数ある。この2つは綴りから予測できない。read のように現在形 /rid/ と過去形 /rɛd/ で同じ綴りが2通りに読まれる語さえある。',
        '/eɪ/ は great・break・steak の3語に実質限られる。3語だけと言い切ってよいので、むしろ覚えやすい部分である。',
        'ear の3通り（/ɪr/ ・ /ɝ/ ・ /ɛr/）は別の難所で、ear /ɪr/ と earth /ɝθ/ が同じ綴り出しで違う読みになる。これも語ごとに覚える。',
      ],
      examples: [
        { text: 'eat', ipa: 'it', note: 'ea = /i/' },
        { text: 'head', ipa: 'hɛd', note: 'ea = /ɛ/' },
        { text: 'great', ipa: 'ɡreɪt', note: 'ea = /eɪ/' },
        { text: 'read（現在）', ipa: 'rid' },
        { text: 'read（過去）', ipa: 'rɛd', note: '綴りが同じまま読みが変わる' },
        { text: 'ear', ipa: 'ɪr' },
        { text: 'earth', ipa: 'ɝθ' },
        { text: 'bear', ipa: 'bɛr' },
      ],
    },
    {
      heading: 'ee — /i/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['ee', '/i/', 'see, tree, feel, need, green, sleep, coffee', '最頻（ほぼ例外なし）'],
          ['eer', '/ɪr/', 'beer, deer, cheer, career', '頻出'],
          ['ee', '/ɪ/', 'been（米の弱形）', '例外'],
        ],
      },
      body: [
        'ee は二重字の中で最も安定していて、迷う必要がない。ea との違いは重要で、ea は /i/ か /ɛ/ か決まらないのに対し、ee は常に /i/ である。meat /mit/ と meet /mit/ が同音になるのはこのため。',
        'been は米では強形 /bin/、弱形 /bɪn/ の両方が聞かれる。英では /biːn/ が標準。',
      ],
      examples: [
        { text: 'see', ipa: 'si' },
        { text: 'meet', ipa: 'mit', note: 'meat /mit/ と同音' },
        { text: 'beer', ipa: 'bɪr' },
      ],
    },
    {
      heading: 'ei / ie — 位置と i-before-e の韻',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['ei（c の後）', '/i/', 'receive, ceiling, deceive, receipt', '頻出'],
          ['ei', '/eɪ/', 'eight, weight, vein, neighbor, reign', '頻出'],
          ['ei', '/aɪ/', 'height, either（一方の読み）', '少数'],
          ['ei（弱音節）', '/ɪ/', 'foreign, sovereign, forfeit', '少数'],
          ['ie（語中）', '/i/', 'field, believe, piece, chief, niece', '最頻'],
          ['ie（語末）', '/aɪ/', 'pie, tie, die, lie, tried', '最頻'],
          ['ie', '/ɛ/', 'friend', '例外'],
          ['ie（弱音節）', '/i/', 'movie, cookie, calorie', '頻出'],
        ],
      },
      body: [
        'ie は位置で決まる部分が大きい。語中なら /i/（field, piece）、語末なら /aɪ/（pie, tie）。これは ay / ai の書き分けと同じ発想で、語末の i を書きたくないため ie にしているだけである。',
        'ei は c の後で /i/、それ以外では /eɪ/ が多い。これが i before e の韻の内容そのものである。',
      ],
      list: [
        '韻の本文: i before e, except after c — つまり /i/ と読むときは ie と書き、ただし c の後では ei と書く。',
        '守る例: believe, field, piece, achieve, niece / receive, ceiling, deceive, conceive。',
        '破る例（c の後でないのに ei）: seize, weird, either, neither, leisure, protein, caffeine, species。',
        '破る例（c の後なのに ie）: science, ancient, sufficient, efficient, conscience, glacier, species。',
        '注意: この韻は「/i/ と読む場合」にしか効かない。eight や height のように /i/ でない語は最初から対象外で、例外として数えるのは誤り。',
      ],
      examples: [
        { text: 'receive', ipa: 'rɪˈsiv', note: 'c の後 → ei' },
        { text: 'believe', ipa: 'bɪˈliv', note: 'c 以外 → ie' },
        { text: 'eight', ipa: 'eɪt', note: '/i/ ではないので韻の対象外' },
        { text: 'height', ipa: 'haɪt' },
        { text: 'seize', ipa: 'siz', note: '真の例外' },
        { text: 'weird', ipa: 'wɪrd', note: '真の例外' },
        { text: 'friend', ipa: 'frɛnd' },
        { text: 'pie', ipa: 'paɪ' },
      ],
    },
    {
      heading: 'oa — /oʊ/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['oa', '/oʊ/', 'boat, coat, road, soap, goal, coast, load', '最頻'],
          ['oar / oor', '/ɔr/', 'board, roar, door, floor', '頻出'],
          ['oa', '/ɔ/', 'broad, abroad', '例外'],
        ],
      },
      body: [
        'oa は ee や oi と並んで安定した二重字で、ほぼ常に /oʊ/ である。例外は broad の系列だけ。',
        '日本語話者の注意点は読みを引いた後にある。/oʊ/ は「オ」から「ウ」へ移動する二重母音であり、「オー」と伸ばすと別の音になる。',
      ],
      examples: [
        { text: 'boat', ipa: 'boʊt' },
        { text: 'road', ipa: 'roʊd' },
        { text: 'broad', ipa: 'brɔd', note: '例外' },
      ],
    },
    {
      heading: 'oo — 3通り',
      table: {
        caption: '頻度順',
        headers: ['読み', '例語', '頻度', '手がかり'],
        rows: [
          ['/u/', 'food, moon, soon, school, room, pool, tooth, choose', '最頻', 'まずこれを試す'],
          ['/ʊ/', 'book, look, good, foot, cook, wood, wool, stood, took', '頻出', '-ook はほぼ全部 /ʊ/'],
          ['/ʌ/', 'blood, flood', '例外（2語）', 'この2語だけ'],
          ['/ɔr/（oor）', 'door, floor, poor', '少数', 'r の前'],
        ],
      },
      body: [
        '/u/ と /ʊ/ の分かれは綴りからは決まらないが、部分的な規則性はある。-ook で終わる語はほぼ /ʊ/（book, look, cook, took, hook, shook, brook）で、ここだけは予測できる。-oot は foot /fʊt/ が /ʊ/、boot /but/ と root /rut/ が /u/ と割れる。',
        '/ʌ/ は blood と flood の2語に限られる。これも「2語だけ」と言い切れる部分である。',
        'なお /u/ と /ʊ/ の区別そのものは日本語話者にとって難しい。綴りから読みを引けても、引いた音を区別して出すには緊張度の理解が必要になる。',
      ],
      examples: [
        { text: 'food', ipa: 'fud', note: 'oo = /u/' },
        { text: 'book', ipa: 'bʊk', note: 'oo = /ʊ/' },
        { text: 'blood', ipa: 'blʌd', note: 'oo = /ʌ/' },
        { text: 'foot', ipa: 'fʊt' },
        { text: 'boot', ipa: 'but', note: 'foot と1字違いで読みが違う' },
        { text: 'door', ipa: 'dɔr' },
      ],
    },
    {
      heading: 'ou — 英語の母音二重字で最も読みが散る',
      table: {
        caption: 'ough は別章（-ough の全パターン）で扱う',
        headers: ['読み', '例語', '頻度', '備考'],
        rows: [
          ['/aʊ/', 'out, house, loud, about, sound, mouth, count, found', '最頻', 'まずこれを試す'],
          ['/ʌ/', 'country, young, touch, double, trouble, cousin, enough', '頻出', '高頻度語が多い'],
          ['/u/', 'soup, group, you, through, route, wound（名詞・傷）', '少数', ''],
          ['/oʊ/', 'soul, shoulder, though, dough, boulder', '少数', ''],
          ['/ʊ/', 'could, would, should', '例外（3語）', '助動詞のみ'],
          ['/ə/（弱音節）', 'famous, nervous, serious, dangerous', '最頻（-ous）', '接尾辞 -ous は常に /əs/'],
          ['/ɔr/（our）', 'four, course, your, pour', '頻出', 'r の前'],
          ['/aʊər/（our）', 'hour, flour, sour, our', '少数', 'r の前'],
          ['/ər/（our・弱音節）', 'colour, favour, neighbour', '英式綴りのみ', '米式は -or'],
        ],
      },
      body: [
        'ou は主要な読みが5通り以上あり、頻度で絞っても予測は効かない。strong には規則がないと割り切って、語ごとに覚えるのが現実的である。',
        'ただし2つだけ規則がある。接尾辞 -ous は常に弱音節で /əs/（famous /ˈfeɪməs/）。そして could / would / should の3語の /ʊ/ は助動詞に限られる。この2つを先に外せば、残りは暗記対象として扱える量になる。',
      ],
      examples: [
        { text: 'out', ipa: 'aʊt' },
        { text: 'soup', ipa: 'sup' },
        { text: 'country', ipa: 'ˈkʌntri' },
        { text: 'soul', ipa: 'soʊl' },
        { text: 'could', ipa: 'kʊd' },
        { text: 'famous', ipa: 'ˈfeɪməs', note: '-ous = /əs/' },
        { text: 'hour', ipa: 'aʊər', note: 'h は黙字' },
      ],
    },
    {
      heading: 'ow — /aʊ/ か /oʊ/ か（本当に予測できない）',
      table: {
        headers: ['読み', '例語', '頻度'],
        rows: [
          ['/aʊ/', 'now, how, down, town, cow, brown, flower, power, crowd, allow', 'およそ半分'],
          ['/oʊ/', 'know, show, snow, low, grow, slow, throw, own, blow, window, yellow', 'およそ半分'],
        ],
      },
      body: [
        'ow は実用語彙でおおよそ半々に割れる。英語の綴りの中でも最も予測の効かない部分のひとつで、「どちらかを試して外れたらもう一方」という以上の方法がない。辞書を引くしかない綴りだと正直に言うべきところである。',
        'わずかな傾向はある。2音節語の語末の -ow は /oʊ/ が多い（window, yellow, follow, borrow, narrow, tomorrow）。一方、1音節語は完全に割れる（now /naʊ/ と know /noʊ/、how /haʊ/ と low /loʊ/）。',
        'さらに同じ綴りで2通りに読む語がある。bow は「お辞儀」なら /baʊ/、「弓・リボン」なら /boʊ/。row は「列」なら /roʊ/、「口論」なら /raʊ/。sow は「種をまく」なら /soʊ/、「雌豚」なら /saʊ/。綴りからは決して決まらない。',
      ],
      examples: [
        { text: 'now', ipa: 'naʊ' },
        { text: 'know', ipa: 'noʊ', note: '1字違いで真逆。k は黙字' },
        { text: 'window', ipa: 'ˈwɪndoʊ', note: '2音節語の語末 → /oʊ/ 傾向' },
        { text: 'bow（お辞儀）', ipa: 'baʊ' },
        { text: 'bow（弓）', ipa: 'boʊ' },
      ],
    },
    {
      heading: 'oi / oy — /ɔɪ/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['oi（語中）', '/ɔɪ/', 'oil, coin, voice, join, point, boil, noise', '最頻'],
          ['oy（語末・母音の前）', '/ɔɪ/', 'boy, toy, joy, enjoy, employ, royal, loyal', '最頻'],
          ['oi（弱音節）', '/ə/', 'tortoise, porpoise', '例外'],
          ['oi', '/waɪ/', 'choir', '例外'],
        ],
      },
      body: [
        'oi と oy は ai / ay と同じ位置による書き分けで、語中が oi、語末が oy。読みは /ɔɪ/ でほぼ固定なので、二重字の中では最も安全に引ける。',
        '日本語の「オイ」は2拍で切れるが、/ɔɪ/ は /ɔ/ から /ɪ/ への1つの移動である。coin が「コイン」3拍にならないよう注意する。',
      ],
      examples: [
        { text: 'coin', ipa: 'kɔɪn' },
        { text: 'enjoy', ipa: 'ɪnˈdʒɔɪ' },
        { text: 'choir', ipa: 'ˈkwaɪər', note: '例外。綴りからは読めない' },
      ],
    },
    {
      heading: 'au / aw — /ɔ/',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['au', '/ɔ/', 'author, autumn, cause, because, August, caught, taught', '最頻'],
          ['aw（語末・子音の前）', '/ɔ/', 'law, saw, draw, dawn, lawn, awful, crawl', '最頻'],
          ['au', '/æ/', 'laugh, aunt（米の一部）', '例外'],
          ['au', '/ɑ/', 'aunt（英・米の一部）', '少数'],
          ['au（弱音節）', '/ə/', 'because（弱形）, restaurant', '少数'],
        ],
      },
      body: [
        'au と aw はどちらも /ɔ/ で、位置で書き分けるだけである。aw は語末か子音の前、au はそれ以外。読みの予測可能性は高い。',
        '米英語の多くの話者では /ɔ/ と /ɑ/ が合流している（cot-caught merger）ため、caught /kɔt/ が cot /kɑt/ と同音になる話者もいる。辞書の /ɔ/ をそのまま /ɑ/ で読んでも通じるが、辞書表記としては /ɔ/ を引く。',
      ],
      examples: [
        { text: 'author', ipa: 'ˈɔθər' },
        { text: 'law', ipa: 'lɔ' },
        { text: 'laugh', ipa: 'læf', note: '例外。gh = /f/ も重なる' },
      ],
    },
    {
      heading: 'ew / ui',
      table: {
        headers: ['綴り', '読み', '例語', '頻度'],
        rows: [
          ['ew', '/u/', 'new, knew, flew, grew, crew, chew, threw', '最頻（米）'],
          ['ew', '/ju/', 'few, view, review, nephew', '頻出'],
          ['ew', '/oʊ/', 'sew, shew', '例外'],
          ['ui', '/u/', 'fruit, suit, juice, recruit', '頻出'],
          ['ui（gu / bu の後）', '/ɪ/', 'build, built, guilt, guitar, biscuit, circuit', '頻出'],
          ['ui', '/aɪ/', 'guide, guile（u は黙字で magic e）', '少数'],
          ['ui', '/wɪ/', 'quick, quit（qu の一部）', '別扱い'],
        ],
      },
      body: [
        'ew の /u/ と /ju/ の分かれは、前の子音で決まる。/n t d θ l/ の後では米英語は j を落とすため new /nu/、knew /nu/。/f v m p k h/ の後では j が残り few /fju/、view /vju/。英英語は new /njuː/ と j を保つので、ここは英米差になる。',
        'ui は少し特殊で、/u/ と読む場合（fruit）と、u が g を硬音に保つための黙字で i だけが読まれる場合（build, guitar）に分かれる。後者は u を「読まない文字」として外してから i の読みを決めると考えると整理できる。',
      ],
      examples: [
        { text: 'new', ipa: 'nu', note: '米。英 njuː' },
        { text: 'few', ipa: 'fju' },
        { text: 'sew', ipa: 'soʊ', note: '例外。few と同じ綴りで真逆' },
        { text: 'fruit', ipa: 'frut' },
        { text: 'build', ipa: 'bɪld', note: 'u は黙字' },
        { text: 'guitar', ipa: 'ɡɪˈtɑr', note: 'u は g を /ɡ/ に保つための文字' },
      ],
    },
    {
      heading: '予測できる綴りと、できない綴りの切り分け',
      table: {
        caption: 'この章の結論。暗記すべき対象はこの表の下2段に限られる',
        headers: ['段階', '綴り', '対処'],
        rows: [
          ['ほぼ規則どおり', 'ee, oa, oi, oy, ai, ay, au, aw, 母音字1文字＋子音', '規則で読む。例外語だけ個別に覚える'],
          ['位置で決まる', 'ie（語中 /i/・語末 /aɪ/）, ei（c の後 /i/）, ew（前の子音で /u/ か /ju/）', '条件を覚える'],
          ['読みが2〜3通り', 'ea（/i/ /ɛ/ /eɪ/）, oo（/u/ /ʊ/ /ʌ/）, ui（/u/ /ɪ/）', '語群ごとに覚える。少ない側（great/break/steak、blood/flood）を先に覚えると残りが片付く'],
          ['予測不能', 'ow（/aʊ/ か /oʊ/）, ou（5通り以上）, ough', '語ごとに辞書を引く。規則はないと割り切る'],
        ],
      },
      body: [
        '「英語の綴りは不規則だ」で止めてしまうと、不規則な部分の量が見えないまま丸暗記になる。実際には不規則なのは ow・ou・ough と、各綴りの例外語数十語だけで、残りは規則で読める。この切り分けを示すことが、綴り逆引き章の最大の役割である。',
      ],
    },
  ],
  lecture: [
    'まず「この章は綴りから音を引く章だ」と宣言する。表の左端が常に綴りであることを見せると、使い方が一瞬で伝わる。',
    '母音字1文字の閉音節（a=/æ/, e=/ɛ/, i=/ɪ/, o=/ɑ/, u=/ʌ/）を最初に固める。ここが全部の土台で、magic e の章もこの5行との対比で成り立つ。',
    '次に安定した二重字（ee, oa, oi, oy, ai, ay, au, aw）をまとめて片付ける。「この8つは迷わなくてよい」と言い切ると、残りに集中できる。',
    'ea と oo を「3通りある綴り」として並べて見せる。そして少ない側（great/break/steak の3語、blood/flood の2語）を先に覚えさせる。覚える量が具体的な数になるので手が止まらない。',
    'i before e の韻を紹介し、必ず「/i/ と読むときだけの規則だ」と条件を付ける。この条件を言わないと eight や height を例外と誤解させてしまう。',
    'ow を出して「これは半々に割れる。規則はない」と正直に言う。bow / row / sow の二重読みを見せると、綴りだけでは決まらないことが実感として伝わる。',
    '最後に予測可能性の4段階表で締める。不規則な部分は ow・ou・ough と例外語に限られる、という量の感覚を残すのが目的。',
  ],
  faq: [
    {
      q: 'ea が /i/ か /ɛ/ か見分ける方法は本当にないのか。',
      a: 'ない。語源をたどれば説明はつくが（/ɛ/ 側は中英語で早く短化した語群）、現代語の綴りを見て判定する手がかりにはならない。head / bread / dead / breath / weather / ready / health / heavy / pleasant のような高頻度の /ɛ/ 語を一塊で覚え、それ以外は /i/ と推定するのが実務的な方法になる。',
    },
    {
      q: 'ow が /aʊ/ か /oʊ/ か、本当に五分五分なのか。',
      a: 'おおよそ半々である。わずかな傾向として、2音節語の語末（window, yellow, follow, borrow, tomorrow）は /oʊ/ に偏る。しかし1音節語は now / know、how / low のように完全に割れるので、傾向として使えるのは語末の -ow だけである。',
    },
    {
      q: '母音字1文字でも閉音節でない場合はどう読むのか。',
      a: '音節が開いている（後ろに子音が来ない）場合は、その文字の名前の音になる。ta-ble の a は /eɪ/、mu-sic の u は /ju/。この開音節と閉音節の対立が magic e の仕組みそのものなので、magic e の章と合わせて読むとよい。',
    },
    {
      q: '弱音節の母音はこの表で引けるか。',
      a: '引けない。強勢のない音節の母音はほぼすべて /ə/ か /ɪ/ に潰れるため、綴りが何であれ読みは同じになる。about の a、famous の ou、pencil の i はすべて弱母音である。この表は強勢のある音節の母音に対して使う。',
    },
  ],
  related: [
    'magic-e',
    'ough',
    'silent-letters',
    'consonant-digraphs',
    'ipa-basics',
    'us-vs-uk',
    'trap',
    'fleece',
    'goose',
    'foot',
    'strut',
    'lot',
    'thought',
    'face',
    'goat',
  ],
  notes: [
    'IPA は一般米語（General American）で示した。英英語では ou / au 系（thought, caught）が /ɔː/、oa / ow 系が /əʊ/、ew が /juː/ を保つなどの差がある。',
    '米英語の多くの話者で /ɔ/ と /ɑ/ は合流している。本章で /ɔ/ と書いた語を /ɑ/ で発音する話者も多数いる。',
    '頻度表示（最頻・頻出・少数・例外）は実用語彙での出現語数の目安であり、厳密な統計値ではない。',
  ],
};
