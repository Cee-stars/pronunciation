import type { Phoneme } from '../../types';

export const north: Phoneme = {
  id: 'north',
  ipa: 'ɔr',
  type: 'vowel',
  group: 'R性母音',
  keyword: 'NORTH / FORCE',
  nickname: '唇を丸めた「オー」に R の響きが乗った音。four の母音',
  oneLiner:
    '唇を丸めた中高・後舌の /ɔ/ の位置から、同じ息のまま R の音色に移る一つの R 性母音。歴史的に別音だった NORTH 群（north, horse）と FORCE 群（force, hoarse）は一般米語では完全に合流し、どちらもこの音になる。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌を奥に引いたまま、/ɑ/ より一段高く保つ。顎は /ɑr/ ほど下げない。その位置から声を切らずに舌先を反らせるか、舌の中ほどを盛り上げる。一般米語では出発点が /ɔ/ より高く、/oʊ/ の最初に近い位置で実現される話者も多い。',
    lips:
      'はっきり丸める。R性母音の中で唇の丸めが最も強い。丸めを保ったまま R 色に移るので、唇はほとんど動かない。',
    vowel: {
      height: '中高',
      backness: '後舌',
      rounded: true,
      tension: 'tense',
      jaw: '中程度。/ɑr/ より明確に浅く、口の中が狭い。',
    },
  },
  howTo: [
    '唇を丸めて前に軽く突き出し、thought の「オー」（/ɔ/）を出す。日本語の「オ」より唇の丸めを強くする。',
    '丸めを保ったまま、声を切らずに舌先を反らせるか舌の中ほどを盛り上げる。',
    '顎を下げないこと。顎が下がると /ɑr/（car の母音）に寄り、court が cart に聞こえる。',
    '唇の丸めを R の途中で解かないこと。解くと /ɝ/ に寄り、born が burn に聞こえる。',
    '最後に「ル」を足さない。カタカナ「フォー」「ドアー」の長音部分がそのまま R 色を持つ1母音になる。',
  ],
  listenFor: [
    '唇の丸めによる暗く丸い響き。R性母音の中でこの丸さを持つのは /ɔr/ と /ʊr/ だけで、/ʊr/ よりは口が開いている。',
    '前半の「オー」が長めに保たれ、後半でこもる。2音の連続ではなく、1つの母音の中で音色が変化する。',
    '/oʊ/（goat）と違って唇が追加で動かない。/oʊ/ は丸めが途中で強まる二重母音だが、/ɔr/ の丸めは一定である。',
    'horse と hoarse、for と four が同音に聞こえる。これは聞き取りの失敗ではなく、一般米語で両群が合流しているため。',
    'イギリス英語（非 rhotic）では R 色が消えて長い /ɔː/ になる。four が /fɔː/、more が /mɔː/。',
  ],
  l1: {
    substitute: 'カタカナの長音「オー」「ォー」（R の音色なし）、または「オー」＋ラ行子音',
    why:
      '日本語に R 性母音がなく、「フォー」「ドア」「ノース」「オーダー」のようにカタカナが長音または長音＋ラ行で書く。さらに日本語の「オ」は英語の /ɔ/ より唇の丸めが弱く舌も高いため、R 色を落とした場合でも母音自体がずれる。',
    symptom:
      'R 色が落ちると four が /fɔ/ に近くなり、文中で law や saw と区別できない。唇の丸めが足りないと born が burn に、顎を下げすぎると court が cart に聞こえる。「ドアー」のようにラ行を足すと音節が1つ増える。',
    examples: [
      'more を「モア」と読み、2つの母音の連続にしてしまう',
      'four を「フォー」と読み R 色がないため for/four の語末が切れた印象になる',
      'important を「インポータント」と読み、/ɔr/ の部分に R の響きが乗らない',
    ],
  },
  contrasts: [
    {
      withId: 'thought',
      withIpa: 'ɔ',
      difference:
        '舌の位置と唇の丸めは同じ。違いは R の音色があるかないかだけ。/ɔr/ は /ɔ/ の途中から舌が反る（または盛り上がる）。',
      listenFor:
        '母音の後半がこもるか。前半は同一なので、判別は母音の終わりで行う。/ɔr/ では舌が動くぶん音色が暗い方向に沈む。',
      whyHard:
        'カタカナでは両方「オー」になる。日本語話者は R 色を落とすため、自分の発音では fought と fort が同音になっている。',
      pairs: [
        { a: 'fort', aIpa: 'fɔrt', b: 'fought', bIpa: 'fɔt' },
        { a: 'court', aIpa: 'kɔrt', b: 'caught', bIpa: 'kɔt' },
        { a: 'sort', aIpa: 'sɔrt', b: 'sought', bIpa: 'sɔt' },
        { a: 'lore', aIpa: 'lɔr', b: 'law', bIpa: 'lɔ' },
        { a: 'sore', aIpa: 'sɔr', b: 'saw', bIpa: 'sɔ' },
        { a: 'pour', aIpa: 'pɔr', b: 'paw', bIpa: 'pɔ' },
      ],
    },
    {
      withId: 'goat',
      withIpa: 'oʊ',
      difference:
        '/ɔr/ は唇の丸めを一定に保ったまま R 色へ移る1母音。/oʊ/ は丸めが途中で強まり舌が上がる二重母音で、R 色を一切持たない。',
      listenFor:
        '母音の終わりで唇が追加で丸まるか。丸まって「ウ」に寄れば /oʊ/、こもって巻き込めば /ɔr/。',
      whyHard:
        'カタカナでは /oʊ/ も「オー」、/ɔr/ も「オー」になるため両者が1つに潰れる。coat と court、load と lord が区別できなくなる。',
      pairs: [
        { a: 'more', aIpa: 'mɔr', b: 'mow', bIpa: 'moʊ' },
        { a: 'four', aIpa: 'fɔr', b: 'foe', bIpa: 'foʊ' },
        { a: 'shore', aIpa: 'ʃɔr', b: 'show', bIpa: 'ʃoʊ' },
        { a: 'cord', aIpa: 'kɔrd', b: 'code', bIpa: 'koʊd' },
        { a: 'lord', aIpa: 'lɔrd', b: 'load', bIpa: 'loʊd' },
      ],
    },
  ],
  spellings: [
    { pattern: 'or（強勢あり）', examples: ['for', 'north', 'short', 'born', 'corn', 'order'], frequency: '最頻', note: 'ただし w の後の or は /ɝ/ になる（work, word, world）。' },
    { pattern: 'ore', examples: ['more', 'store', 'before', 'score', 'restore'], frequency: '最頻' },
    { pattern: 'our', examples: ['four', 'pour', 'court', 'mourn'], frequency: '頻出', note: 'your は /jɔr/ と /jʊr/ の両方がある。tour は /tʊr/ で別群。' },
    { pattern: 'oar / oor', examples: ['board', 'roar', 'coarse', 'door', 'floor'], frequency: '頻出', note: 'door と floor は綴りが oor だが /ʊr/ ではなく /ɔr/。poor（/pʊr/ または /pɔr/）とは扱いが違う。' },
    { pattern: 'ar（w・qu の後）', examples: ['war', 'warm', 'ward', 'quarter', 'quart'], frequency: '頻出', note: '唇を丸める w の影響で ar が /ɑr/ ではなく /ɔr/ になる。規則性が高い。' },
    { pattern: 'aur / aw+r', examples: ['dinosaur', 'Laura', 'drawer'], frequency: '少数' },
  ],
  examples: [
    { word: 'order', ipa: 'ˈɔrdɚ', position: '語頭', note: '第1音節 /ɔr/、第2音節 /ɚ/ の組み合わせ' },
    { word: 'orange', ipa: 'ˈɔrɪndʒ', position: '語頭', note: '地域により /ɑr/ の話者もいる' },
    { word: 'north', ipa: 'nɔrθ', position: '語中' },
    { word: 'important', ipa: 'ɪmˈpɔrtnt', position: '語中' },
    { word: 'four', ipa: 'fɔr', position: '語末', note: 'for と同音' },
    { word: 'before', ipa: 'bɪˈfɔr', position: '語末' },
  ],
  lecture: [
    'R性母音の体系の2つ目として置く。「R 色の前に来る母音が何か」が5つを分ける唯一の軸であり、/ɑr/ より口が狭く唇が丸いのがこれだと位置づける。',
    'カタカナ「フォー」「モア」「オーダー」を否定する。長音だけでは R 色が落ち、「ア」を足すと母音が2つになると具体的に指摘する。',
    'thought の「オー」（/ɔ/）を出させ、唇の丸めを日本語の「オ」より強くするよう直す。その丸めを保ったまま舌を反らせる（または盛り上げる）よう指示する。唇が動かないことを鏡で確認させるとよい。',
    'fort / fought、sore / saw で /ɔ/ との対比を聞かせる。差は後半の R 色だけだと示す。',
    'four / foe、lord / load で /oʊ/ との対比に移る。「終わりで唇が追加で丸まるか」が判別点だと教える。日本語話者はここを最も取り違える。',
    'horse と hoarse を並べ、歴史的には別の音（NORTH と FORCE）だったが一般米語では完全に合流していると説明する。辞書で /ɔr/ と /or/ の2記号を見かける理由がこれで片づく。',
    '最後に綴りを整理する。or, ore, our, oar, oor に加え、w の後の ar（war, warm）も /ɔr/ だと示す。イギリス英語では /fɔː/ になり、母音が続くと R が復活する点を添える。',
  ],
  faq: [
    {
      q: 'horse と hoarse は違う音なのか。',
      a:
        '一般米語では同音である。歴史的には horse が NORTH 群で開いた /ɔ/、hoarse が FORCE 群で閉じた /o/ と区別されていたが、20世紀を通じて合流し、現在この区別を保つのはスコットランド、アイルランド、アメリカ南部の一部など限られた地域だけである。for と four、morning と mourning も同じ関係で、一般米語ではすべて同音になる。',
    },
    {
      q: '辞書で /ɔr/ と /or/ の両方を見かけるのはなぜか。',
      a:
        '同じ音に対する表記の流派の違いである。合流後の音が実際には /ɔ/ より高い位置で実現されることを重視する辞書は /or/ や /oʊr/ と書き、伝統的な音素表記を取る辞書は /ɔr/ と書く。本アプリは /ɔr/ で統一する。どちらを見ても指すものは1つである。',
    },
    {
      q: 'war の ar がなぜ /ɔr/ になるのか。',
      a:
        '直前の w が唇を丸める音だからである。w の丸めが続く母音を丸い方向に引き寄せた結果、ar が /ɑr/ ではなく /ɔr/ に変わった。war, warm, ward, quarter, quart がこの型である。同じ w の影響で、or のほうは逆に /ɝ/ へ動いた（work, word, world）。w の後は綴りの読み方が入れ替わると覚えると整理しやすい。',
    },
    {
      q: 'イギリス英語ではどうなるか。',
      a:
        'R 色が消えて長い /ɔː/ になる。four は /fɔː/、north は /nɔːθ/。ただし four o\'clock のように母音が続くと r が復活する（linking R）。さらに RP では /ʊə/（CURE 群）の多くが /ɔː/ に合流しているため、sure や poor が more と同じ母音になる話者も多い。',
    },
  ],
  relatedRules: ['linking', 'us-vs-uk', 'mergers', 'r'],
  notes: [
    'NORTH 群と FORCE 群の合流は一般米語で完了している。本アプリは両群をまとめて /ɔr/ として扱う。',
    '米語では /ɑ/ と /ɔ/ が合流する話者が多い（cot–caught merger）が、/ɑr/ と /ɔr/ は合流しない。cart と court は全話者で別語である。',
    '非 rhotic 方言では /ɔː/。door, floor, poor, sure までこれに合流する話者がいる。',
  ],
};
