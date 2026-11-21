/**
 * 30日カリキュラム。
 *
 * これは目次であって中身ではない。各 Day は辞典エントリの id を並べるだけで、
 * 本文を複製しない。辞典（検索・IPA表）と Day ビューは同じデータを別の導線で見せる。
 *
 * 到達目標は「説明できる状態」と「聞き分けられる状態」の二つで書く。
 * このアプリは採点をしないので、達成判定は読んだ本人が行う。
 */

export type EntryKind = 'phoneme' | 'rule' | 'topic';

export interface DayEntryRef {
  kind: EntryKind;
  id: string;
}

export interface DayPlan {
  day: number;
  /** その日の見出し */
  title: string;
  /** 所属ジャンル（12ジャンルのいずれか） */
  genre: string;
  /** 到達目標。人に説明できる状態として書く。 */
  goals: string[];
  /** 聞き分けの到達目標。判定は自己申告。 */
  earGoals?: string[];
  /** 本編で読むエントリ */
  entries: DayEntryRef[];
  /** 前日以前の復習として再掲するエントリ */
  review?: DayEntryRef[];
  /** その日の位置づけについての補足 */
  note?: string;
}

const p = (id: string): DayEntryRef => ({ kind: 'phoneme', id });
const r = (id: string): DayEntryRef => ({ kind: 'rule', id });
const t = (id: string): DayEntryRef => ({ kind: 'topic', id });

export const curriculum: DayPlan[] = [
  {
    day: 1,
    title: 'IPA と音素の考え方',
    genre: '調音の基礎',
    goals: [
      'IPA が何のための記号体系かを一文で説明できる',
      '音素表記 /x/ と音声表記 [x] の違いを、同じ音を例に挙げて説明できる',
      '「音素」と「異音」の違いを、/t/ の複数の読み方を例に説明できる',
      '辞書によって記号が違う理由（流派の差）を説明できる',
    ],
    entries: [t('ipa-basics'), t('phoneme-vs-allophone'), t('dictionary-notation')],
    note: '音素の話に入る前に、記号の読み方と「同じ音素が複数の音で実現される」という枠組みを先に置く。これがないと flap T や帯気の説明が成立しない。',
  },
  {
    day: 2,
    title: '調音の地図 — 口の中の座標系',
    genre: '調音の基礎',
    goals: [
      '調音点を前から後ろへ順に挙げ、それぞれの代表音を言える',
      '調音方法6種を、気流の止め方の違いとして説明できる',
      '有声と無声の違いを、喉に手を当てて確認させる形で説明できる',
      '母音を「舌の高さ・前後・円唇・緊張度」の4軸で記述できる',
      '英語の語頭に立てる子音連結の制限を説明できる',
    ],
    entries: [
      t('place-of-articulation'),
      t('manner-of-articulation'),
      t('voicing'),
      t('vowel-axes'),
      t('phonotactics'),
    ],
    review: [t('phoneme-vs-allophone')],
    note: 'ここで座標系を作る。以降すべての音素はこの座標の中の一点として説明される。',
  },
  {
    day: 3,
    title: '/ɪ/ と /i/ — 緊張と弛緩',
    genre: '音素（母音）',
    goals: [
      'tense と lax の違いを、長さではなく舌の力で説明できる',
      '/ɪ/ が /i/ と /ɛ/ の間の座標にあることを図で示せる',
      '日本語の「イ」がどちら側にあるかを説明できる',
      '語末に /ɪ/ が立たないことと、-y の読みを関連づけて説明できる',
    ],
    earGoals: ['sit / seat, ship / sheep を音声だけで10回連続判別できる'],
    entries: [p('kit'), p('fleece')],
    review: [t('vowel-axes')],
  },
  {
    day: 4,
    title: '/ɛ/ と /æ/ — 基準点とその一段下',
    genre: '音素（母音）',
    goals: [
      '/ɛ/ を日本語の「エ」を基準に説明し、そこから3方向（/æ/ /ɪ/ /eɪ/）への移動で他音を説明できる',
      '/æ/ を「エの口でアと言う」手順で他人に出させられる',
      '/æ/ が日本語にない理由を母音体系の空白として説明できる',
      '鼻音の前での /æ/ の変化（æ-tensing）に触れられる',
    ],
    earGoals: ['bad / bed, man / men を10回連続判別できる', 'cat / cot で /æ/ と /ɑ/ を判別できる'],
    entries: [p('dress'), p('trap')],
    review: [p('kit')],
  },
  {
    day: 5,
    title: '/ʌ/ /ɑ/ /ɔ/ — 「ア」に聞こえる3つの音',
    genre: '音素（母音）',
    goals: [
      '日本語の「ア」が3つのどれに最も近いかを説明できる',
      '/ʌ/ と /ɑ/ を口の開きと長さの差として説明できる',
      'cot–caught merger を説明し、自分がどちらの体系で話すか宣言できる',
      '/ʌ/ が強勢を失うと /ə/ になる関係を説明できる',
    ],
    earGoals: ['cut / cot, luck / lock, color / collar を判別できる'],
    entries: [p('strut'), p('lot'), p('thought')],
    review: [p('trap')],
  },
  {
    day: 6,
    title: '/ʊ/ と /u/ — 唇の丸めと脱力',
    genre: '音素（母音）',
    goals: [
      '/ʊ/ の出現語が限られていることを示し、代表語群を列挙できる',
      'FOOT-STRUT split を説明し、put と but で読みが分かれる理由を言える',
      '綴り oo の3層（/u/ / /ʊ/ / /ʌ/）を整理して示せる',
      '日本語の「ウ」が円唇でないことが /u/ の習得に与える影響を説明できる',
    ],
    earGoals: ['full / fool, pull / pool, look / Luke を判別できる'],
    entries: [p('foot'), p('goose')],
    review: [p('strut')],
  },
  {
    day: 7,
    title: 'シュワーと母音の弱化 — 英語のリズムの正体',
    genre: '音素（母音）/ 強勢',
    goals: [
      'シュワーが英語で最頻の母音であることと、その理由を強勢構造から説明できる',
      '「作る音ではなく、努力しないことで出る音」として指導できる',
      'banana の3つの a が ə-æ-ə になることを示せる',
      'モーラ拍（日本語）と強勢拍（英語）の違いを説明できる',
      'シュワーが脱落する語（family, chocolate）を挙げられる',
    ],
    earGoals: ['computer, today, about で何音節に聞こえるかを数えられる'],
    entries: [p('schwa'), r('vowel-reduction'), r('schwa-deletion')],
    review: [p('strut')],
    note: 'この日が全30日の中で最も実用的な効果が大きい。個々の音素より先にここを理解すると、リスニングが一段変わる。',
  },
  {
    day: 8,
    title: '二重母音5つ — 動く母音',
    genre: '音素（母音）',
    goals: [
      '二重母音が「2つの音の連続」ではなく「1つの滑らかな移動」であることを説明できる',
      '5つそれぞれの始点と終点を座標で示せる',
      '日本語の長音「エー」「オー」で代用すると何が失われるかを説明できる',
      '日本語の「アイ」「アウ」との違い（2拍か1拍か）を説明できる',
    ],
    earGoals: ['met / mate, let / late, boat / bought を判別できる'],
    entries: [p('face'), p('price'), p('choice'), p('mouth'), p('goat'), r('canadian-raising')],
    review: [p('dress'), p('thought')],
  },
  {
    day: 9,
    title: 'R性母音① /ɝ/ と /ɚ/ — bird と letter',
    genre: '音素（母音）',
    goals: [
      'R性母音が「母音＋子音」ではなく一つの母音であることを説明できる',
      '舌を丸める型（retroflex）と盛り上げる型（bunched）の2通りを示せる',
      '強勢ありの /ɝ/ と強勢なしの /ɚ/ の関係を /ʌ/–/ə/ と並行させて説明できる',
      '非 rhotic（イギリス）との差を説明できる',
    ],
    earGoals: ['cut / curt, bud / bird, hut / hurt を判別できる'],
    entries: [p('nurse'), p('letter')],
    review: [p('schwa'), p('strut')],
  },
  {
    day: 10,
    title: 'R性母音② — start / north / near / square / cure',
    genre: '音素（母音）',
    goals: [
      '5つの R性母音を、R の前に来る母音の違いとして整理できる',
      '/ɛ/ と /ɛr/ が別音素であることを bed / bear で示せる',
      'Mary–marry–merry の合流を説明できる',
      '非 rhotic 方言でこれらがどうなるかを説明できる',
    ],
    earGoals: ['beer / bear, far / four を判別できる'],
    entries: [p('start'), p('north'), p('near'), p('square'), p('cure')],
    review: [p('nurse')],
    note: 'ここで母音22個が完了する。以降は子音。',
  },
  {
    day: 11,
    title: '無声破裂音 /p/ /t/ /k/ と帯気',
    genre: '音素（子音）',
    goals: [
      '破裂音の3段階（閉鎖・保持・解放）を説明できる',
      '帯気（aspiration）が起きる条件を説明できる',
      '日本語の「パ・タ・カ」との帯気の差を説明できる',
      '/s/ の後で帯気が消えること（spin と pin）を示せる',
    ],
    earGoals: ['語末の /p/ /t/ /k/ が解放されない例を聞き取れる'],
    entries: [p('p'), p('t'), p('k'), r('aspiration')],
    review: [t('manner-of-articulation')],
  },
  {
    day: 12,
    title: '有声破裂音 /b/ /d/ /g/ と未解放',
    genre: '音素（子音）',
    goals: [
      '有声と無声の差が「声帯振動の開始時期（VOT）」であることを説明できる',
      '語末の有声破裂音が、直前の母音の長さで判別されることを説明できる',
      '日本語話者が語末に母音を足してしまう理由を説明できる',
      '未解放（held）の破裂音を説明できる',
    ],
    earGoals: ['bat / bad, cap / cab を、母音の長さを手がかりに判別できる'],
    entries: [p('b'), p('d'), p('g'), r('vowel-length-before-voiced')],
    review: [p('t')],
  },
  {
    day: 13,
    title: '/t/ の全異音 — 同じ文字が6通りに読まれる',
    genre: '音声変化',
    goals: [
      '/t/ の異音を条件ごとに6通り挙げられる（帯気・無帯気・flap・声門閉鎖・未解放・脱落）',
      'flap T の条件（母音間・直後が無強勢）を正確に述べられる',
      'water, better, important, button を、それぞれどの異音かで分類できる',
      '異音の概念が Day 1 の枠組みとどう繋がるかを説明できる',
    ],
    earGoals: ['water / better / city の flap を聞き取れる', 'important / mountain の声門閉鎖を聞き取れる'],
    entries: [r('t-allophones'), r('flap-t'), r('glottal-stop')],
    review: [p('t'), t('phoneme-vs-allophone')],
    note: '聞き取れない原因として最大の比重を占める項目。音素1つに1日を充てる価値がある。',
  },
  {
    day: 14,
    title: '摩擦音① /f/ /v/ /θ/ /ð/ — 日本語にない4つ',
    genre: '音素（子音）',
    goals: [
      '/f/ と日本語のフ（両唇摩擦）の違いを調音点で説明できる',
      '/v/ を /b/ で代用すると何が起きるかを説明できる',
      '/θ/ /ð/ の舌の位置を、歯に当てる位置として指導できる',
      '/θ/ を /s/ で代用した場合の最小対立語を挙げられる',
    ],
    earGoals: ['think / sink, thin / sin, boat / vote を判別できる'],
    entries: [p('f'), p('v'), p('th'), p('dh')],
    review: [t('place-of-articulation')],
  },
  {
    day: 15,
    title: '摩擦音② /s/ /z/ /ʃ/ /ʒ/ /h/',
    genre: '音素（子音）',
    goals: [
      '/s/ と /ʃ/ の調音点の差を説明できる',
      '日本語の「シ」が /ʃi/ であり /si/ が存在しないことを説明できる',
      '/ʒ/ が英語で出現する位置の偏り（語中中心）を説明できる',
      '/h/ が母音によって音色を変える（hue, who）ことに触れられる',
    ],
    earGoals: ['see / she, sip / ship を判別できる'],
    entries: [p('s'), p('z'), p('sh'), p('zh'), p('h')],
    review: [p('th')],
  },
  {
    day: 16,
    title: '破擦音 /tʃ/ /dʒ/ と口蓋化',
    genre: '音素（子音）/ 音声変化',
    goals: [
      '破擦音が「破裂＋摩擦」の複合であることを説明できる',
      '日本語の「チ」「ジ」との差を説明できる',
      '/t/+/j/ → /tʃ/ の口蓋化が起きる条件を説明できる',
      'would you, got you, miss you の変化を分解して示せる',
    ],
    earGoals: ['速い発話の would you / did you を聞き取れる'],
    entries: [p('ch'), p('jh'), r('palatalization')],
    review: [p('sh')],
  },
  {
    day: 17,
    title: '鼻音 /m/ /n/ /ŋ/ と鼻音解放',
    genre: '音素（子音）',
    goals: [
      '鼻音3つを調音点の違いで整理できる',
      '日本語の「ン」が環境で変わる（撥音の異音）ことと、英語で3つが独立音素であることの違いを説明できる',
      '/ŋ/ が語頭に立たないことを説明できる',
      'button, sudden の鼻音解放を説明できる',
    ],
    earGoals: ['sum / sun / sung を判別できる'],
    entries: [p('m'), p('n'), p('ng'), r('nasal-lateral-release')],
    review: [r('glottal-stop')],
  },
  {
    day: 18,
    title: '/l/ と dark L',
    genre: '音素（子音）/ 音声変化',
    goals: [
      '/l/ の側面解放（舌の両脇から空気が出る）を説明できる',
      'light L と dark L の条件（母音の前か後か）を説明できる',
      'dark L が母音化して「オ」に聞こえる現象を説明できる',
      'milk, help, call が聞き取れない理由を説明できる',
    ],
    earGoals: ['feel / fill, milk の L を聞き取れる'],
    entries: [p('l'), r('dark-l')],
    review: [r('nasal-lateral-release')],
  },
  {
    day: 19,
    title: '/r/ — 英語で最も難しい子音',
    genre: '音素（子音）',
    goals: [
      '/r/ が「舌をどこにも触れさせない」接近音であることを説明できる',
      '2つの作り方（retroflex / bunched）を提示できる',
      '日本語のラ行（歯茎たたき音）との違いを、接触の有無で説明できる',
      '/r/ と /l/ の差を、舌先の接触と唇の丸めで説明できる',
    ],
    earGoals: ['right / light, road / load, pray / play を10回連続判別できる'],
    entries: [p('r')],
    review: [p('l'), p('nurse')],
    note: '/r/ と /l/ の対比が日本語話者にとって最大の課題。1日を /r/ 単独に充てる。',
  },
  {
    day: 20,
    title: '/w/ /j/ — 渡り音',
    genre: '音素（子音）',
    goals: [
      '/w/ /j/ が母音と同じ調音なのに子音として機能する理由を説明できる',
      '日本語に /wi/ /we/ /wo/ /ji/ /je/ が無いことによる干渉を説明できる',
      'yod 脱落（new, tune の英米差）を説明できる',
      '母音間に /j/ /w/ が挿入されるリンキングに触れられる',
    ],
    earGoals: ['wood / good, year / ear を判別できる'],
    entries: [p('w'), p('y')],
    review: [p('r')],
    note: 'ここで子音24個が完了し、全46音素が終わる。',
  },
  {
    day: 21,
    title: 'リンキング — 語の境界が消える',
    genre: '音声変化',
    goals: [
      '子音→母音のリンキングを例で示せる',
      '母音→母音で /j/ /w/ が挿入される条件を説明できる',
      'linking R と intrusive R を区別できる',
      '「単語を1つずつ発音しない」ことが聞き取りにどう影響するかを説明できる',
    ],
    earGoals: ['an apple, pick it up, go on を1音の塊として聞き取れる'],
    entries: [r('linking')],
    review: [p('w'), p('y')],
  },
  {
    day: 22,
    title: '脱落 — 音が消える条件',
    genre: '音声変化',
    goals: [
      '子音連結中の /t/ /d/ 脱落の条件を説明できる',
      '同一子音の融合（gemination）を説明できる',
      '機能語の /h/ 脱落を説明できる',
      'シュワー脱落と合わせ、音節数が変わる例を挙げられる',
    ],
    earGoals: ['next day, must be, tell him を聞き取れる'],
    entries: [r('elision'), r('cluster-simplification')],
    review: [r('schwa-deletion')],
  },
  {
    day: 23,
    title: '同化 — 隣の音に引きずられる',
    genre: '音声変化',
    goals: [
      '調音点の同化（ten books → tem books）を説明できる',
      '有声性の同化（-s, -ed の読み分け）を説明できる',
      '逆行同化と順行同化を区別できる',
      '同化が「怠惰」ではなく調音の経済性の結果だと説明できる',
    ],
    earGoals: ['in person, good boy, have to の同化を聞き取れる'],
    entries: [r('assimilation')],
    review: [r('palatalization')],
  },
  {
    day: 24,
    title: '語強勢の規則',
    genre: '強勢・リズム',
    goals: [
      '英語の語強勢が原則として予測可能であることを示せる',
      '強勢を引き寄せる接尾辞と、強勢を動かさない接尾辞を区別できる',
      '-ic, -ity, -ion, -ate の強勢位置を規則として述べられる',
      '第1強勢と第2強勢の違いを説明できる',
    ],
    earGoals: ['3音節以上の語で強勢位置を聞き取れる'],
    entries: [r('word-stress-rules'), r('suffix-stress-shift')],
    review: [p('schwa')],
  },
  {
    day: 25,
    title: '強勢の対立 — 名詞と動詞、複合語と句',
    genre: '強勢・リズム',
    goals: [
      '名詞と動詞で強勢が動く語（record, present, object）を説明できる',
      '複合語と句の強勢の差（greenhouse / green house）を説明できる',
      '強勢の位置が意味を変えることを例で示せる',
    ],
    earGoals: ['récord / recórd を判別できる', 'blackboard / black board を判別できる'],
    entries: [r('noun-verb-stress'), r('compound-stress')],
    review: [r('word-stress-rules')],
  },
  {
    day: 26,
    title: '文強勢とリズム',
    genre: '強勢・リズム',
    goals: [
      '内容語と機能語の区別を挙げられる',
      '強勢拍リズムとモーラ拍リズムの違いを説明できる',
      '対比強勢・新情報の強勢を説明できる',
      '同じ文で強勢位置を変えると意味が変わることを示せる',
    ],
    earGoals: ['文中でどの語が強く読まれたかを聞き取れる'],
    entries: [r('sentence-stress'), r('rhythm'), r('stress-content-function')],
    review: [r('vowel-reduction')],
  },
  {
    day: 27,
    title: '弱形 — 機能語の本当の音',
    genre: '強勢・リズム',
    goals: [
      '主要な機能語の弱形を列挙できる（of, to, and, for, can, was, have, them）',
      '強形が使われる条件（文末・対比・強調）を説明できる',
      '弱形がリスニングの障害になる理由を説明できる',
      'gonna, wanna, kinda を弱形の延長として説明できる',
    ],
    earGoals: ['a lot of, want to, going to, should have を聞き取れる'],
    entries: [r('weak-forms')],
    review: [p('schwa'), r('sentence-stress')],
  },
  {
    day: 28,
    title: 'イントネーション',
    genre: 'イントネーション',
    goals: [
      '下降調・上昇調・下降上昇調の機能を説明できる',
      'Yes/No 疑問文と wh 疑問文の型の差を説明できる',
      '付加疑問の2つの読み（確認か同意要求か）を区別できる',
      'フォーカスによって強勢とピッチが動くことを説明できる',
      '日本語話者の文末平板化を指摘できる',
    ],
    earGoals: ['同じ文の上昇・下降で意味の差を聞き取れる'],
    entries: [r('falling-rising'), r('question-intonation'), r('tag-questions'), r('focus-information')],
    review: [r('sentence-stress')],
  },
  {
    day: 29,
    title: 'スペリングから音へ — 逆引き',
    genre: 'スペリング逆引き',
    goals: [
      '母音字の二重字（ea, oo, ou, ough）の読みを分類して示せる',
      '-ed の3通り、-s の3通りの読み分けを有声性の同化から説明できる',
      'magic e と開音節/閉音節の規則を説明できる',
      '黙字のパターン（kn, wr, mb, gh）を挙げられる',
    ],
    earGoals: ['初見の語の読みを綴りから推測し、辞書で検証できる'],
    entries: [
      r('vowel-digraphs'),
      r('consonant-digraphs'),
      r('ed-endings'),
      r('s-endings'),
      r('magic-e'),
      r('silent-letters'),
      r('ough'),
    ],
    review: [r('assimilation')],
  },
  {
    day: 30,
    title: '英米差・合流・辞書の読み方',
    genre: '方言・変種',
    goals: [
      'rhotic と non-rhotic の差を説明できる',
      'BATH set, LOT-CLOTH split を語群として示せる',
      'cot–caught, Mary–marry–merry の合流を説明できる',
      '辞書ごとの表記の違いを読み替えられる',
      'カタカナ語と原語のズレを体系的に説明できる',
    ],
    earGoals: ['米英の話者を母音から判別できる'],
    entries: [r('us-vs-uk'), r('mergers'), r('jp-katakana-gaps')],
    review: [p('trap'), p('nurse'), p('thought')],
    note: '最終日。ここまでで12ジャンル全体が一巡する。',
  },
];

export const totalDays = curriculum.length;
