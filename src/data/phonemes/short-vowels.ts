import type { Phoneme } from '../../types';

/**
 * 短母音（弛緩母音 lax vowels）6つ。
 * 日本語の5母音に潰されやすい音の集まりで、L1干渉がもっとも激しい領域。
 */
export const shortVowels: Phoneme[] = [
  {
    id: 'trap',
    ipa: 'æ',
    type: 'vowel',
    group: '短母音（弛緩母音）',
    keyword: 'TRAP',
    nickname: '「エ」の口で「ア」と言う音',
    oneLiner:
      '舌を前に出したまま顎を大きく下げて出す、前舌・低・非円唇の弛緩母音。日本語に対応する音がないため「ア」と「エ」の両方に聞こえる。',
    articulation: {
      voicing: '有声',
      tongue: '舌先は下前歯の裏に触れたまま、舌全体を前方に保つ。舌の後ろは上げない。',
      lips: '丸めない。横にわずかに引き、口角は上げない。',
      vowel: {
        height: '低（最も低い位置の一つ）',
        backness: '前舌',
        rounded: false,
        tension: 'lax',
        jaw: '大きく下げる。指2本が縦に入る程度。',
      },
    },
    howTo: [
      '「エ」と言う形を作る（舌が前に来て、舌先が下前歯の裏に当たる）。',
      '舌の位置を動かさないまま、顎だけを下に落とす。',
      'その状態で声を出す。「エ」から「ア」に向かう途中で止まった音になる。',
      '舌が後ろに引っ込むと /ɑ/（father の母音）になってしまうので、舌先が前歯の裏から離れないか確認する。',
    ],
    listenFor: [
      '明るく平べったい響き。/ɑ/ の「暗く奥に落ちた響き」と対になる。',
      '日本語の「ア」より音が長めに伸び、語末が鼻にかかる話者も多い（man, bad）。',
      '/e/ より顎が下がるため、音の重心が低い。「エ」と聞こえたら舌が高すぎる。',
      'アメリカ英語では /n/ /m/ /ŋ/ の前で鼻音化して二重母音のように聞こえる（man が「メァン」寄り）。',
    ],
    l1: {
      substitute: '日本語の「ア」（中舌・低）、語によっては「エ」',
      why:
        '日本語の母音体系に前舌低母音がなく、/æ/ は「ア」と「エ」の中間に位置するため、既知の2音のどちらかに吸収される。カタカナ表記が「ア」と「ャ」で揺れている（キャット／カット）のもこの反映。',
      symptom:
        '「ア」で代用すると /ɑ/ と同じになり cat が cot、bad が body の第1音節に近く聞こえる。「エ」で代用すると bad が bed に聞こえる。',
      examples: ['cat を「カット」と読み cot と同音になる', 'bad を「ベッド」寄りに読み bed と混同される'],
    },
    contrasts: [
      {
        withId: 'lot',
        withIpa: 'ɑ',
        difference:
          '/æ/ は舌が前、/ɑ/ は舌が後ろ。顎の下がり方はほぼ同じなので、違いは舌の前後だけ。',
        listenFor:
          '響きの明暗。/æ/ は明るく前で鳴り、/ɑ/ は暗く喉の奥で鳴る。口を開けて「ア」と言ったとき奥に落ちていれば /ɑ/。',
        whyHard: '日本語の「ア」が両者のほぼ中間にあるため、どちらにも等距離で聞こえる。',
        pairs: [
          { a: 'cat', aIpa: 'kæt', b: 'cot', bIpa: 'kɑt' },
          { a: 'hat', aIpa: 'hæt', b: 'hot', bIpa: 'hɑt' },
          { a: 'sack', aIpa: 'sæk', b: 'sock', bIpa: 'sɑk' },
          { a: 'bam', aIpa: 'bæm', b: 'bomb', bIpa: 'bɑm' },
          { a: 'cap', aIpa: 'kæp', b: 'cop', bIpa: 'kɑp' },
        ],
      },
      {
        withId: 'dress',
        withIpa: 'ɛ',
        difference:
          '舌の前後はどちらも前舌で同じ。違いは顎の下がり（舌の高さ）だけで、/æ/ のほうが一段低い。',
        listenFor:
          '音の重心の高さ。/ɛ/ は口の中ほどで鳴り短く切れる。/æ/ は顎が落ちて音が長く、鼻に抜ける感じが出る。',
        whyHard: '両方「エ」で代用すると完全に同音になる。日本語話者の混同としては最頻。',
        pairs: [
          { a: 'bad', aIpa: 'bæd', b: 'bed', bIpa: 'bɛd' },
          { a: 'sad', aIpa: 'sæd', b: 'said', bIpa: 'sɛd', note: 'said は綴りに反して /ɛ/' },
          { a: 'man', aIpa: 'mæn', b: 'men', bIpa: 'mɛn' },
          { a: 'pan', aIpa: 'pæn', b: 'pen', bIpa: 'pɛn' },
          { a: 'gas', aIpa: 'gæs', b: 'guess', bIpa: 'gɛs' },
        ],
      },
    ],
    spellings: [
      {
        pattern: 'a + 子音（閉音節）',
        examples: ['cat', 'bad', 'man', 'happy', 'travel', 'apple'],
        frequency: '最頻',
        note: '最も基本的な対応。magic e が付くと /eɪ/ になる（cat → Kate）。',
      },
      {
        pattern: 'ai',
        examples: ['plaid'],
        frequency: '例外',
      },
      {
        pattern: 'au',
        examples: ['laugh', 'aunt'],
        frequency: '例外',
        note: 'aunt は方言差が大きく /ɑnt/ とも読まれる。',
      },
    ],
    examples: [
      { word: 'apple', ipa: 'ˈæpəl', position: '語頭' },
      { word: 'ask', ipa: 'æsk', position: '語頭', note: '英RPでは /ɑːsk/' },
      { word: 'cat', ipa: 'kæt', position: '語中' },
      { word: 'hand', ipa: 'hænd', position: '語中', note: '鼻音の前で鼻音化が強い' },
      { word: 'family', ipa: 'ˈfæməli', position: '語中' },
      { word: 'animal', ipa: 'ˈænəməl', position: '語頭' },
    ],
    lecture: [
      'まず「この音は日本語にない」と宣言する。「ア」と「エ」のどちらでもないと先に言わないと、聞き手は既知の音に当てはめてしまう。',
      '口の形から入る。「エ」と言わせて、そのとき舌先が下の前歯の裏に当たっていることを確認させる。',
      '「舌はそのまま、顎だけ落として」と指示する。これだけで /æ/ が出る。多くの人はここで出せる。',
      '出た音を cat / hat で確認し、次に舌を奥に引いて cot / hot と対比させる。前後の違いが /æ/ と /ɑ/ だと示す。',
      '最後に bad / bed で高さの違いを示す。これで /æ/ が「前・低」の位置だと座標として伝わる。',
      '鼻音の前（man, hand）では音が変わって聞こえると補足する。教科書の音と実際の音のズレを先に説明しておくと混乱を防げる。',
    ],
    faq: [
      {
        q: 'カタカナで「キャット」と書くのは正しいのか。',
        a:
          '「ア」より近い。「キャ」は /kj/ + /a/ で舌が前に来るため、/æ/ の前舌性を部分的に再現できている。ただし /j/ の渡り音が余計に入るので、そのまま読むと音節が崩れる。近似として使い、最終形にはしない。',
      },
      {
        q: 'イギリス英語でも同じか。',
        a:
          '記号は同じ /æ/ だが、RP では伝統的に /æ/ がより高く（/ɛ/ 寄り）、近年は逆に低くなっている。さらに ask, bath, dance など特定の語群（BATH set）は RP で /ɑː/ になり、米英で音素自体が異なる。',
      },
      {
        q: '/æ/ は長いのか短いのか。',
        a:
          '分類は短母音（弛緩母音）だが、実際の持続時間は長い。アメリカ英語では有声子音の前でとくに伸びる（bad の /æ/ は bat より明確に長い）。「短母音」という名前は長さではなく緊張度の分類だと説明すること。',
      },
    ],
    relatedRules: ['pre-nasal-raising', 'vowel-length-before-voiced'],
    notes: [
      '米英語では /æ/ は鼻音の前で [eə] に近く上昇する話者が多い（æ-tensing）。地域差が大きい。',
      'BATH set（ask, bath, dance, half, can\'t 等）は米 /æ/ / 英 /ɑː/ で分かれる。語彙リストとして覚える領域。',
    ],
  },
];
