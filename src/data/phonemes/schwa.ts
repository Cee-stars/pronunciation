import type { Phoneme } from '../../types';

export const schwa: Phoneme = {
  id: 'schwa',
  ipa: 'ə',
  type: 'vowel',
  group: '短母音（弱母音）',
  keyword: 'comma / about',
  nickname: 'シュワー。強勢のない音節の曖昧母音',
  oneLiner:
    '口をほとんど動かさず、舌を中央に置いて脱力したまま出す中舌・中・非円唇の弱母音。英語で最も頻度の高い母音で、強勢のない音節の母音はほぼすべてこれに還元される。',
  articulation: {
    voicing: '有声',
    tongue: '舌は口の中央、完全に脱力。意図的な位置を取らない。',
    lips: '丸めない。開かない。前の音の形をほぼ引き継ぐ。',
    vowel: {
      height: '中',
      backness: '中舌',
      rounded: false,
      tension: 'lax',
      jaw: 'ほとんど下げない。',
    },
  },
  howTo: [
    '口を軽く開け、何も狙わずに声だけ出す。「あ」とも「う」とも言わないつもりで出す。',
    '顎・舌・唇のどれも動かさない。「努力しない」ことがこの音の作り方。',
    '極端に短く、弱くする。長さと強さを与えないことが本質。',
    '前後の子音の形に引きずられて構わない。シュワーは独自の形を主張しない音。',
  ],
  listenFor: [
    '音節が「潰れている」こと。母音の色がなく、子音と子音の間の繋ぎのように聞こえる。',
    '非常に短い。語の中で最も目立たない音節がシュワー。',
    '強勢との関係で判断する。強勢がない音節の母音は綴りが何であれシュワーになっている可能性が高い。',
    'しばしば完全に脱落する（family が /ˈfæmli/、chocolate が /ˈtʃɑklət/）。「聞こえない」ことが手がかりになる。',
  ],
  l1: {
    substitute: '綴り字どおりの日本語母音（a→ア、o→オ、u→ウ など）',
    why:
      '日本語はすべての母音が同じ強さで発音されるモーラ拍言語で、母音を弱める仕組みがない。そのため綴りに引かれて各音節に完全な母音を与えてしまう。',
    symptom:
      'about を「アバウト」、computer を「コンピューター」、today を「トゥデイ」のように全音節が等価になり、強勢の山が消える。これは個々の音の誤りより強く「日本語訛り」として認識される。',
    examples: [
      'computer /kəmˈpjutər/ を「コンピューター」と3音節等価で読む',
      'banana /bəˈnænə/ の第1・第3音節に「ア」を入れて「バナナ」になる',
    ],
  },
  contrasts: [
    {
      withId: 'strut',
      withIpa: 'ʌ',
      difference: '調音はほぼ同一。違いは強勢の有無のみ。強勢があれば /ʌ/、なければ /ə/。',
      listenFor: 'その音節が目立つか埋もれるか。音質ではなく強勢を聴く。',
      whyHard: '音質が同じなので、音を聴き比べようとすると判別できない。別の次元（強勢）を聴く必要がある。',
      pairs: [
        { a: 'above の -bove（/ʌ/）', aIpa: 'əˈbʌv', b: 'above の a-（/ə/）', bIpa: 'əˈbʌv', note: '同一語内に両方ある好例' },
        { a: 'súpper', aIpa: 'ˈsʌpər', b: 'suppóse', bIpa: 'səˈpoʊz', note: '同じ綴り sup- で強勢により音素が変わる' },
      ],
    },
    {
      withId: 'letter',
      withIpa: 'ɚ',
      difference: '/ɚ/ は R の響きを伴うシュワー。舌が後ろに丸まる（または盛り上がる）。',
      listenFor: 'R の音色があるか。あれば /ɚ/。綴りに r があるかも手がかりになる。',
      pairs: [
        { a: 'comma', aIpa: 'ˈkɑmə', b: 'commer（cial）', bIpa: 'kəˈmɝʃəl', note: '米英語では語末 a が /ə/、er が /ɚ/' },
        { a: 'sofa', aIpa: 'ˈsoʊfə', b: 'sofer（架空語）', bIpa: 'ˈsoʊfɚ', note: 'comma–letter の対立として音声学で標準的に使われる' },
      ],
    },
  ],
  spellings: [
    { pattern: 'a（強勢のない音節）', examples: ['about', 'banana', 'sofa', 'woman', 'America'], frequency: '最頻' },
    { pattern: 'e（強勢のない音節）', examples: ['taken', 'problem', 'open', 'camera', 'system'], frequency: '最頻' },
    { pattern: 'o（強勢のない音節）', examples: ['today', 'police', 'reason', 'common', 'memory'], frequency: '最頻' },
    { pattern: 'u（強勢のない音節）', examples: ['support', 'suppose', 'album', 'focus'], frequency: '頻出' },
    { pattern: 'i（強勢のない音節）', examples: ['pencil', 'possible', 'family', 'president'], frequency: '頻出', note: '/ɪ/ と表記が揺れる領域。' },
    { pattern: '-ion / -ous / -ous / -able', examples: ['nation', 'famous', 'comfortable'], frequency: '頻出' },
    { pattern: '機能語の弱形', examples: ['a', 'the', 'of', 'to', 'for', 'and', 'can', 'was'], frequency: '最頻', note: '文中では原則シュワーになる。弱形の章を参照。' },
  ],
  examples: [
    { word: 'about', ipa: 'əˈbaʊt', position: '語頭' },
    { word: 'again', ipa: 'əˈɡɛn', position: '語頭' },
    { word: 'banana', ipa: 'bəˈnænə', position: '語中', note: '第1・第3音節がシュワー' },
    { word: 'computer', ipa: 'kəmˈpjutər', position: '語頭' },
    { word: 'today', ipa: 'təˈdeɪ', position: '語頭' },
    { word: 'chocolate', ipa: 'ˈtʃɑklət', position: '語中', note: '第2音節のシュワーは脱落して2音節になる' },
  ],
  lecture: [
    'まず「英語で最も頻度の高い母音はこれ」と宣言する。重要度を先に示さないと、曖昧な音なので軽視される。',
    '次に「この音は努力して作る音ではなく、努力しないことで出る音」と定義する。作り方を教えるのではなく、やめることを教える。',
    '日本語との構造的な違いを説明する。日本語は全母音が等価、英語は強勢のある音節だけが完全な母音を持ち、残りは潰れる。この対比が理解の核心。',
    'banana で実演する。3つの a の綴りが「ə-æ-ə」になることを示すと、綴りと音が独立していることが一撃で伝わる。',
    'computer, today, about で、日本語話者が入れてしまう母音を実際に言って対比させる。誤りの実演は効果が高い。',
    '次に「シュワーは消えることもある」と進む。family /ˈfæmli/、chocolate /ˈtʃɑklət/ を示す。ここまで来ると聞き取れなかった理由が分かる。',
    '最後に機能語の弱形（of, to, and, can）に繋げる。シュワーの理解が文全体のリスニングに直結することを示して締める。',
  ],
  faq: [
    {
      q: 'シュワーは「ア」と教えてよいか。',
      a:
        '避けたほうがよい。「ア」と教えると日本語の「ア」を入れてしまい、音節が等価になるという最大の問題が残る。「母音を言わない」「口を動かさない」という否定形の指示のほうが結果が良い。',
    },
    {
      q: '辞書で /ə/ と /ɪ/ の表記が揺れるのはなぜか。',
      a:
        '強勢のない音節では両者の区別が中和する話者が多いため。pencil, possible, president などが該当する。どちらで言っても通じる領域で、辞書の方針の違いと理解してよい。',
    },
    {
      q: 'シュワーに強勢が来ることはあるか。',
      a:
        '定義上ない。強勢のある曖昧母音は /ʌ/ と表記される。ただし音質は同じなので、「シュワーに強勢が来たものが /ʌ/」と説明するのが実態に即している。',
    },
    {
      q: 'どの母音がシュワーになるか予測できるか。',
      a:
        '綴りからは予測できないが、強勢からは予測できる。「強勢のない音節の母音は原則シュワー」という規則で大半が説明できる。つまりシュワーを習得するには、まず語強勢の位置を知る必要がある。',
    },
  ],
  relatedRules: ['vowel-reduction', 'weak-forms', 'schwa-deletion', 'stress-content-function'],
  notes: [
    '英語のテキストで最も頻度の高い母音。リスニングの鍵はこの音の理解にある。',
    '語末の -er, -or, -ar は米英語では /ɚ/（R性シュワー）になる。別項目で扱う。',
    'シュワーの脱落（syncope）は速い発話で頻繁に起きる。family, every, camera, interest, different が代表例。',
  ],
};
