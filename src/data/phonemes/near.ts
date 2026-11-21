import type { Phoneme } from '../../types';

export const near: Phoneme = {
  id: 'near',
  ipa: 'ɪr',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'NEAR',
  nickname: '「イ」から R の響きへ移る音。here の母音',
  oneLiner:
    '前舌・高の /ɪ/ に近い位置から、同じ息のまま R の音色に移る一つの R 性母音。/ɪ/（kit）とは別の音素であり、bid の母音と beard の母音は同じものではない。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌を前に出し、/i/（fleece）よりわずかに低く緩い位置に置く。そこから声を切らずに舌先を反らせるか、舌の中ほどを盛り上げて両脇を上奥歯に当てる。前舌の高い位置から中舌の R 色へ舌が後退するので、R性母音の中で舌の移動距離が最も大きい。',
    lips: '丸めない。横に軽く引いた形から始まり、R 色が出る後半でわずかに中立に戻る。',
    vowel: {
      height: '高（R性母音の中で最も高い）。弛緩母音だが /i/ に近く緊張して実現する話者も多い',
      backness: '前舌から中舌へ',
      rounded: false,
      tension: 'lax',
      jaw: 'ほとんど下げない。R性母音の中で最も狭い開き。',
    },
  },
  howTo: [
    '「イ」と言う。日本語の「イ」でよいが、口を横に引きすぎず軽く構える。',
    '声を切らずに、舌先を上に反らせるか舌の中ほどを盛り上げる。前に出ていた舌が中央へ引かれる感覚になる。',
    '舌をどこにも触れさせない。触れると日本語のラ行になり、「ヒ・ア」のように2音に割れる。',
    '途中で顎を下げないこと。顎が下がると /ɛr/ に寄り、beer が bear に聞こえる。',
    'カタカナ「ヒア」「ビア」のように母音を2つ並べないこと。here は1音節、beer も1音節である。',
  ],
  listenFor: [
    '狭く高い出発点。R性母音5つの中で最も口が狭く、最も明るい「イ」寄りの響きで始まる。',
    '母音の中で舌が前から中央へ滑る動き。「イ」と「R 色」の間に子音の切れ目は入らない。',
    '/ɛr/（square）との差は顎の高さだけ。here と hair、beer と bear を並べると、高いほうが /ɪr/。',
    '語末でも R 色が保たれる。here, year, clear の最後がこもって終わるかどうかが米語の目印。',
    'イギリス英語（非 rhotic）では R 色が消え、中央へ向かう二重母音 /ɪə/ になる。here が /hɪə/、beer が /bɪə/。',
  ],
  l1: {
    substitute: 'カタカナの「イア」「イヤ」「ィア」（母音2つの連続）、または「イー」＋ラ行子音',
    why:
      '日本語に R 性母音がなく、「ヒア」「ビア」「イヤリング」「クリア」のようにカタカナが2つの母音として写す。日本語では「イ」と「ア」が別モーラの別母音なので、1つの母音が音色を変えながら続くという構造自体が入らない。',
    symptom:
      '「イ・ア」と2モーラで読むと音節数が増え、here が2音節語に聞こえる。また R 色が落ちると here が /hɪə/ でも /hi/ でもない中途半端な音になり、文中で hear と he が区別できない。',
    examples: [
      'here を「ヒア」と読み2モーラにする',
      'beer を「ビア」と読み、母音部分に R の響きが乗らない',
      'year を「イヤー」と読み、語末に R 色のない長音を置く',
    ],
  },
  contrasts: [
    {
      withId: 'square',
      withIpa: 'ɛr',
      difference:
        'R の音色はどちらも持ち、舌はどちらも前舌から始まる。違いは出発点の高さだけで、/ɪr/ は高く狭い位置、/ɛr/ は一段低く開いた位置から始まる。',
      listenFor:
        '母音の始まりが「イ」寄りか「エ」寄りか。母音の後半（R 色の部分）は両者でほぼ同じなので、判別は必ず母音の冒頭で行う。',
      whyHard:
        'カタカナでは /ɪr/ が「イア」、/ɛr/ が「エア」と書き分けられるため表記上は区別できるが、どちらも母音2つに割られているため、実際の発音では両方が曖昧な2モーラになって潰れる。綴り ear が両方に現れること（hear と bear）も混乱の元。',
      pairs: [
        { a: 'beer', aIpa: 'bɪr', b: 'bear', bIpa: 'bɛr' },
        { a: 'fear', aIpa: 'fɪr', b: 'fair', bIpa: 'fɛr' },
        { a: 'hear', aIpa: 'hɪr', b: 'hair', bIpa: 'hɛr', note: 'hear と here は同音。hair と hare も同音' },
        { a: 'cheer', aIpa: 'tʃɪr', b: 'chair', bIpa: 'tʃɛr' },
        { a: 'peer', aIpa: 'pɪr', b: 'pair', bIpa: 'pɛr' },
        { a: 'steer', aIpa: 'stɪr', b: 'stair', bIpa: 'stɛr' },
      ],
    },
    {
      withId: 'fleece',
      withIpa: 'i',
      difference:
        '出発点の舌の位置は近いが、/i/ には R の音色が一切なく、舌は前舌の高い位置から動かない。/ɪr/ は同じあたりから始まって舌が中央へ引かれ、R 色を帯びて終わる。',
      listenFor:
        '母音の終わり。音色が変わらず明るいまま切れれば /i/、こもって巻き込んで終われば /ɪr/。',
      whyHard:
        '日本語話者は語末の R 色を落とすため、beer が bee に、here が he に近づく。綴りに r があることは知っていても、音として残っていないので聞き手には区別が届かない。',
      pairs: [
        { a: 'beer', aIpa: 'bɪr', b: 'bee', bIpa: 'bi' },
        { a: 'fear', aIpa: 'fɪr', b: 'fee', bIpa: 'fi' },
        { a: 'here', aIpa: 'hɪr', b: 'he', bIpa: 'hi' },
        { a: 'peer', aIpa: 'pɪr', b: 'pea', bIpa: 'pi' },
        { a: 'tear（涙）', aIpa: 'tɪr', b: 'tea', bIpa: 'ti', note: 'tear には /tɛr/（破る）もあり、綴りが同じで2語ある' },
      ],
    },
  ],
  spellings: [
    { pattern: 'eer', examples: ['beer', 'deer', 'cheer', 'career', 'engineer'], frequency: '最頻', note: 'eer はほぼ例外なく /ɪr/。最も信頼できる対応。' },
    { pattern: 'ear', examples: ['hear', 'near', 'year', 'clear', 'fear', 'beard'], frequency: '最頻', note: 'ear は綴りの中で最も多義。/ɪr/（hear）、/ɛr/（bear）、/ɝ/（earth）、/ɑr/（heart）の4通りがある。語ごとに覚える領域。' },
    { pattern: 'ere', examples: ['here', 'mere', 'sphere', 'severe', 'adhere'], frequency: '頻出', note: 'ただし there, where は /ɛr/。here と there が別の母音である点は要注意。' },
    { pattern: 'ier', examples: ['pier', 'fierce', 'pierce', 'frontier'], frequency: '頻出' },
    { pattern: 'e + r + 母音（強勢あり）', examples: ['hero', 'zero', 'serious', 'period', 'experience'], frequency: '頻出', note: '米語では /ˈhɪroʊ/ /ˈsɪriəs/。この型を /ɛr/ で読むと別語に聞こえる。' },
    { pattern: 'eir / ir', examples: ['weird', 'souvenir'], frequency: '少数' },
  ],
  examples: [
    { word: 'ear', ipa: 'ɪr', position: '語頭', note: 'earth /ɝθ/ と綴りが同系でも母音は別' },
    { word: 'hero', ipa: 'ˈhɪroʊ', position: '語中' },
    { word: 'serious', ipa: 'ˈsɪriəs', position: '語中' },
    { word: 'beard', ipa: 'bɪrd', position: '語中', note: 'bird /bɝd/、bid /bɪd/ と対比' },
    { word: 'beer', ipa: 'bɪr', position: '語末', note: 'bear /bɛr/ と対比' },
    { word: 'here', ipa: 'hɪr', position: '語末', note: 'hear と同音' },
    { word: 'year', ipa: 'jɪr', position: '語末' },
  ],
  lecture: [
    'R性母音の体系の中で「最も口が狭い側」として置く。/ɑr/ が最も開き、/ɪr/ が最も狭い。5つは R 色の前に来る母音の高さで並ぶと再確認する。',
    'カタカナ「ヒア」「ビア」を否定する。ここが最大の障害で、カタカナが母音を2つに割っているため here が2音節語として記憶されている。「1音節である」と先に宣言する。',
    '「イ」と言わせ、声を切らずに舌を反らせる（または盛り上げる）よう指示する。舌が前から中央へ引かれる感覚を確認させたうえで、beer / bee、here / he を聞かせ、日本語話者の発音では R 色が落ちて後者に近づいていることを自覚させる。',
    'beer / bear、here / hair で /ɛr/ との対比に移る。「出発点が高いか低いか」だけが違いだと示す。母音の後半は同じなので、冒頭を聴くよう指示する。',
    'bid / beard を並べ、/ɪ/ と /ɪr/ が別の音素であることを明示する。/ɪr/ は「/ɪ/ に r を足したもの」ではない。実際には /ɪr/ の出発点は /ɪ/ より高く /i/ に近い位置にあり、辞書が同じ記号を使っているのは表記上の都合である。',
    '綴りを整理する。eer はほぼ確実に /ɪr/、ere も大半が /ɪr/ だが there/where は例外。ear は4通りに読める最難関の綴りだと警告する。',
    '最後にイギリス英語では /ɪə/ になると補足する。R 色が消えて「イア」に近づくため、カタカナはむしろイギリス英語寄りだと説明すると納得が得られやすい。ただし母音が続けば R が復活する（linking R）。',
  ],
  faq: [
    {
      q: 'bid の /ɪ/ と beard の /ɪr/ は同じ母音なのか。',
      a:
        '別の音素である。辞書は表記の都合で同じ記号 ɪ を使うが、/ɪr/ の出発点は実際には /ɪ/ より高く、/i/（fleece）に近い位置で実現される。米語では r の前で /ɪ/ と /i/ の対立自体が中和するため、音素としては1つの R 性母音 /ɪr/ と扱うのが実態に合う。したがって bid の母音を伸ばして r を足しても beard にはならない。',
    },
    {
      q: 'here と there はなぜ母音が違うのか。',
      a:
        '綴りが同じ -ere でも歴史的な出自が違うためである。here は /hɪr/、there と where は /ðɛr/ /wɛr/ で、前者は NEAR 群、後者は SQUARE 群に属する。この2語だけ覚えてしまえば -ere は /ɪr/ と考えてよい。',
    },
    {
      q: 'mirror と nearer は同じ響きか。',
      a:
        '話者によって違う。一般米語では mirror /ˈmɪrɚ/ の第1音節が near の母音と同じになる話者が多く（mirror–nearer の合流）、この場合 mirror と near の母音は同一である。一方ニューヨーク市やフィラデルフィア周辺では mirror の母音がより低く、near とは別に保たれる。どちらでも通じるので、合流した側で統一して差し支えない。',
    },
    {
      q: 'イギリス英語ではどうなるか。',
      a:
        'R 色が消え、中央へ向かう二重母音 /ɪə/ になる。here は /hɪə/、beer は /bɪə/。近年の RP では /ɪə/ がさらに単母音化して長い /ɪː/ に近づく話者もいる。いずれの場合も here is のように母音が続くと r が復活する（linking R）。',
    },
  ],
  relatedRules: ['linking', 'us-vs-uk', 'mergers', 'r'],
  notes: [
    'R性母音5つのうち最も口が狭い。/ɑr/ → /ɔr/ → /ɛr/ → /ɪr/ → /ʊr/ の順に狭まる並びの4番目にあたる。',
    '非 rhotic 方言では /ɪə/。カタカナの「イア」は偶然この非 rhotic 形に近いが、米語の基準としては R 色が必要。',
    '綴り ear は /ɪr/ /ɛr/ /ɝ/ /ɑr/ の4通りに読める。hear・bear・earth・heart を代表として並べて覚えるとよい。',
  ],
};
