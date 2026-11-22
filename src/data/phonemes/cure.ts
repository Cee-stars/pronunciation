import type { Phoneme } from '../../types';

export const cure: Phoneme = {
  id: 'cure',
  ipa: 'ʊr',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'CURE',
  nickname: '唇を丸めた「ウ」から R の響きへ移る音。tour の母音',
  oneLiner:
    '唇を丸めた高・後舌の /ʊ/ の位置から、同じ息のまま R の音色に移る一つの R 性母音。R性母音5つの中で最も不安定で、どの語がこの音を持つかは話者によって違う。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌を奥に引き、/u/（goose）よりわずかに低く緩い位置に置く。そこから声を切らずに舌先を反らせるか、舌の中ほどを盛り上げる。後舌の高い位置から中舌の R 色へ舌が前へ寄る動きになる。',
    lips:
      '丸める。/ɔr/ ほど強く突き出さず、軽く寄せる程度。R 色が出る後半で丸めがゆるむ。',
    vowel: {
      height: '高',
      backness: '後舌から中舌へ',
      rounded: true,
      tension: 'lax',
      jaw: 'ほとんど下げない。口の中は狭い。',
    },
  },
  howTo: [
    '唇を軽く丸めて「ウ」と言う。日本語の「ウ」は丸めが弱いので、少し寄せる。',
    '声を切らずに、舌先を上に反らせるか舌の中ほどを盛り上げる。',
    '舌をどこにも触れさせない。触れると日本語のラ行になり、「ツ・ア」と2音に割れる。',
    '顎を下げないこと。顎が下がり唇を強く突き出すと /ɔr/ になり、poor が pour に変わる。もっとも、それで通じる話者も多い（後述の合流）。',
    'cure, pure, sure など語頭が /j/ を伴う語では「キュ」「ピュ」「シュ」の子音部分を先に作り、その後に /ʊr/ を続ける。cure は /kjʊr/ で1音節である。',
  ],
  listenFor: [
    '狭く丸い出発点。/ɔr/ と同じく丸い響きだが、口の開きが明らかに小さい。',
    '母音の中で舌が奥から中央へ寄る動き。切れ目は入らない。',
    '語によって /ʊr/ と /ɔr/ のどちらでも聞こえる。sure が shore と同音に聞こえても、それは話者がこの合流を持っているためで、聞き取りの失敗ではない。',
    '/ʊr/ が確実に残るのは tour, tourist, poor, moor, lure, curious, during など。sure と your は /ɔr/ 側へ動いた話者が多い。',
    'イギリス英語（非 rhotic）では R 色が消えて /ʊə/ になる。ただし RP ではこの /ʊə/ 自体が /ɔː/ に合流しており、sure が /ʃɔː/、poor が /pɔː/ になる話者が多数である。',
  ],
  l1: {
    substitute: 'カタカナの「ウア」「ツアー」「ュア」「ョア」（母音2つの連続、または R 色のない長音）',
    why:
      '日本語に R 性母音がなく、「ツアー」「プア」「ピュア」「シュア」のようにカタカナが2つの母音として写す。さらに日本語の「ウ」は唇の丸めがほとんどなく舌も中舌寄りなので、出発点の母音自体もずれる。',
    symptom:
      '「ウ・ア」と2モーラで読むと音節が増え、tour が2音節語に聞こえる。R 色が落ちると tour が too に、sure が shoe に近づく。カタカナ「ツアー」を直接読むと /ts/ という英語に無い子音連続まで加わる。',
    examples: [
      'tour を「ツアー」と読み、子音も母音も別物になる',
      'sure を「シュアー」と読み、R 色のない長音で終える',
      'pure を「ピュア」と読み2モーラにする',
    ],
  },
  contrasts: [
    {
      withId: 'north',
      withIpa: 'ɔr',
      difference:
        'R の音色と唇の丸めはどちらも持つ。違いは出発点の高さで、/ʊr/ は狭く高い位置、/ɔr/ は一段低く開いた位置から始まる。ただし多くの米語話者はこの区別を失っており、両者を /ɔr/ にまとめている（CURE–FORCE 合流）。',
      listenFor:
        '母音の冒頭の開き。狭く「ウ」寄りなら /ʊr/、開いて「オ」寄りなら /ɔr/。合流している話者ではこの差が存在しないため、下のペアは同音になる。',
      whyHard:
        '区別すべきかどうか自体が話者によって違うため、模範が一つに定まらない。辞書も語ごとに両方の発音を併記していることが多い。',
      pairs: [
        { a: 'poor', aIpa: 'pʊr', b: 'pour', bIpa: 'pɔr', note: '合流話者では同音。pore も同じ' },
        { a: 'sure', aIpa: 'ʃʊr', b: 'shore', bIpa: 'ʃɔr', note: 'sure は /ʃɔr/ 側へ動いた話者が多い' },
        { a: 'tour', aIpa: 'tʊr', b: 'tore', bIpa: 'tɔr', note: 'tour は /ʊr/ が比較的よく残る語' },
        { a: 'moor', aIpa: 'mʊr', b: 'more', bIpa: 'mɔr' },
        { a: 'lure', aIpa: 'lʊr', b: 'lore', bIpa: 'lɔr' },
        { a: 'your', aIpa: 'jʊr', b: 'yore', bIpa: 'jɔr', note: 'your は強形 /jʊr/、弱形 /jɚ/、/jɔr/ の3通りが共存する' },
      ],
    },
    {
      withId: 'goose',
      withIpa: 'u',
      difference:
        '出発点の舌の位置は近いが、/u/ には R の音色が一切なく、唇の丸めも強いまま最後まで保たれる。/ʊr/ はより緩い位置から始まり、舌が中央へ寄って R 色を帯びて終わる。',
      listenFor:
        '母音の終わり。丸めを保ったまま明るく切れれば /u/、こもって巻き込んで終われば /ʊr/。',
      whyHard:
        '日本語話者は語末の R 色を落とすため、tour が too に、sure が shoe に近づく。カタカナ「ツアー」「シュアー」の長音部分が /u/ の長音と区別されないことが原因。',
      pairs: [
        { a: 'tour', aIpa: 'tʊr', b: 'too', bIpa: 'tu' },
        { a: 'sure', aIpa: 'ʃʊr', b: 'shoe', bIpa: 'ʃu' },
        { a: 'moor', aIpa: 'mʊr', b: 'moo', bIpa: 'mu' },
        { a: 'boor', aIpa: 'bʊr', b: 'boo', bIpa: 'bu' },
        { a: 'lure', aIpa: 'lʊr', b: 'Lou', bIpa: 'lu' },
      ],
    },
  ],
  spellings: [
    { pattern: 'ure', examples: ['sure', 'pure', 'cure', 'endure', 'mature'], frequency: '最頻', note: '多くは直前に /j/ が入る（pure /pjʊr/、cure /kjʊr/）。話者によっては /ɔr/ で読まれる。' },
    { pattern: 'our', examples: ['tour', 'tourist', 'detour', 'gourmet'], frequency: '頻出', note: '同じ our でも four, pour, court は /ɔr/。語ごとに分かれる。' },
    { pattern: 'oor', examples: ['poor', 'moor', 'boor'], frequency: '少数', note: 'door と floor は oor でも /ɔr/ のみ。poor だけが揺れる。' },
    { pattern: 'ur + 母音', examples: ['curious', 'furious', 'during', 'rural'], frequency: '頻出', note: '強勢のある ur でも母音が続くと /ɝ/ ではなく /ʊr/ になる。curious /ˈkjʊriəs/ と curry /ˈkɝi/ の違い。' },
    { pattern: 'eur', examples: ['Europe', 'euro', 'neural'], frequency: '少数', note: 'Europe は /ˈjʊrəp/。' },
    { pattern: 'ewer / uer', examples: ['jewel', 'cruel'], frequency: '例外', note: '多くは /ʊr/ ではなく /uəl/ と分析される。辞書間で扱いが分かれる領域。' },
  ],
  examples: [
    { word: 'Europe', ipa: 'ˈjʊrəp', position: '語頭' },
    { word: 'curious', ipa: 'ˈkjʊriəs', position: '語中' },
    { word: 'tourist', ipa: 'ˈtʊrɪst', position: '語中', note: '「ツーリスト」ではなく1音節目が /tʊr/' },
    { word: 'during', ipa: 'ˈdʊrɪŋ', position: '語中', note: '/ˈdjʊrɪŋ/ の話者もいる' },
    { word: 'tour', ipa: 'tʊr', position: '語末', note: 'too /tu/、tore /tɔr/ と対比' },
    { word: 'sure', ipa: 'ʃʊr', position: '語末', note: '/ʃɔr/ の話者も多く、shore と同音になる' },
  ],
  lecture: [
    'R性母音の5つ目として置く。/ɑr/ → /ɔr/ → /ɛr/ → /ɪr/ → /ʊr/ という並びの最後で、丸めを持つ側の狭い端にあたる。同時に「この音は5つの中で最も不安定だ」と最初に断っておく。ここを隠すと、辞書で2通りの発音を見たときに学習者が混乱する。',
    'カタカナ「ツアー」「ピュア」「シュアー」を否定する。母音が2つに割れていること、tour の子音は /t/ であって /ts/ ではないことを指摘する。',
    '唇を軽く丸めて「ウ」と言わせ、声を切らずに舌を反らせる（または盛り上げる）よう指示する。出発点は /u/ よりゆるい位置だと伝える。',
    'tour / too、sure / shoe で R 色の有無を聞かせる。次に tour / tore、poor / pour で /ɔr/ との対比に移り、出発点の開きの違いを示す。',
    'ここで合流を正面から説明する。sure と poor は /ʊr/ の話者と /ɔr/ の話者がいて、後者では sure = shore、poor = pour となる（CURE–FORCE 合流）。どちらも正しく、辞書の併記はこの事実の反映である。',
    '一方で /ʊr/ が安定して残る語を挙げる。tour, tourist, during, curious, Europe, rural。これらを /ɔr/ で読むと不自然になるので、この語群だけは /ʊr/ で固定するよう指示する。',
    '最後にイギリス英語に触れる。非 rhotic では /ʊə/ になるが、RP ではその /ʊə/ 自体が /ɔː/ に合流しており、sure が /ʃɔː/ になる。つまり米英どちらでも CURE 群は縮小方向にあると締める。',
  ],
  faq: [
    {
      q: 'sure は /ʃʊr/ と /ʃɔr/ のどちらで覚えるべきか。',
      a:
        'どちらでもよい。一般米語では両方が広く使われており、/ʃɔr/ の話者のほうが多い地域もある。/ʃɔr/ を選べば shore と同音になるが、文脈で混同されることはまずない。ただし tour, tourist, during, curious のように /ʊr/ が安定している語をつられて /ɔr/ で読むのは避けること。語群ごとに扱いが違うため、sure と poor は揺れる語、tour と curious は揺れない語として分けて覚えるのが実用的である。',
    },
    {
      q: 'なぜ CURE だけこんなに不安定なのか。',
      a:
        '語数が少なく、/ʊr/ という組み合わせが音声的に不安定だからである。狭く丸い母音から R 色へ移る動きは舌の移動距離が大きく、結果として一方では口を開いて /ɔr/ へ、もう一方では /ɝ/ へ崩れていった。CURE 群は歴史的に縮小を続けており、現代英語では R性母音の中で最も語数が少ない。',
    },
    {
      q: 'cure の /kjʊr/ は1音節なのか2音節なのか。',
      a:
        '1音節である。/kj/ は1つの子音のまとまりとして母音の前に置かれるだけで、音節を作らない。カタカナ「キュア」は「キュ」と「ア」の2モーラだが、英語では cure, pure, mature の語末部分はすべて1音節である。',
    },
    {
      q: 'poor と door はなぜ扱いが違うのか。',
      a:
        '綴りは同じ oor だが、歴史的な出自が違う。door と floor はもともと FORCE 群に属し、現在は全話者が /ɔr/ で読む。poor と moor は CURE 群で、/pʊr/ と /pɔr/ の両方が存在する。綴りからは判別できないので、door と floor は /ɔr/ 固定、poor は揺れる語として個別に覚える。',
    },
  ],
  relatedRules: ['linking', 'us-vs-uk', 'mergers', 'r'],
  notes: [
    'R性母音5つの中で最も語数が少なく、最も揺れが大きい。CURE–FORCE 合流を持つ話者では /ɔr/ に吸収される。',
    'tour, tourist, during, curious, rural, Europe は /ʊr/ が安定して残る語群。sure, poor, your, moor は /ɔr/ と揺れる語群。',
    '非 rhotic 方言では /ʊə/。ただし現代 RP ではその /ʊə/ も /ɔː/ に合流しており、sure は /ʃɔː/、poor は /pɔː/ が主流。',
    '辞書が同じ語に2通りの発音を載せているのは誤記ではなく、話者間の実際の分布を反映している。',
  ],
};
