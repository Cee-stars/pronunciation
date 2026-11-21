import type { Phoneme } from '../../types';

export const strut: Phoneme = {
  id: 'strut',
  ipa: 'ʌ',
  type: 'vowel',
  group: '短母音（弛緩母音）',
  keyword: 'STRUT',
  nickname: '短く鋭い「ア」',
  oneLiner:
    '口の中央・やや後ろで、顎をあまり下げずに短く出す中舌・中低・非円唇の弛緩母音。強勢のある音節に現れ、強勢がなくなると /ə/ になる。',
  articulation: {
    voicing: '有声',
    tongue: '舌は中央、やや後ろ寄り。平らにして力を入れない。前にも後ろにも寄せない。',
    lips: '丸めない。自然に少し開く。',
    vowel: {
      height: '中低',
      backness: '中舌',
      rounded: false,
      tension: 'lax',
      jaw: '軽く下げる。/ɑ/ の半分程度。',
    },
  },
  howTo: [
    '口を軽く開け、舌を口の中央で平らに置く（どこにも寄せない）。',
    '力を抜いたまま短く声を出す。「ア」と「ウ」の中間のような、曖昧で短い音になる。',
    '顎を下げすぎないこと。下げると /ɑ/（father の母音）になる。',
    '唇を丸めないこと。丸めると /ʊ/ や /ɔ/ に寄る。',
  ],
  listenFor: [
    '短く鋭く切れる。/ɑ/ の「口を開けて伸ばす暗い響き」と対になる。',
    '曖昧でどの日本語母音にも当てはまらない響き。「ア」とも「ウ」とも取れる。',
    '必ず強勢のある音節に現れる。強勢がない「ア」のような音は /ə/。この分布の違いが判別に使える。',
    '/ɝ/（nurse の母音）と違い、R の響き（舌が後ろに丸まる音色）が一切ない。',
  ],
  l1: {
    substitute: '日本語の「ア」（口を大きく開けた中舌低母音）',
    why:
      '日本語の「ア」は /ʌ/ より顎が下がっていて /ɑ/ に近い位置にある。そのため /ʌ/ と /ɑ/ の区別が失われる。カタカナ表記も「ア」で統一されるため区別を意識する機会がない（cut「カット」/ cot「コット」の揺れ）。',
    symptom:
      'cut が cot、hut が hot に近づく。また /ʌ/ を伸ばすと日本語の「アー」になり、強勢の軽さが失われて単語のリズムが崩れる。',
    examples: ['bus を「バス」と伸ばして読む', 'come を cum ではなく「カム」と平板に読み /ɑ/ 寄りになる'],
  },
  contrasts: [
    {
      withId: 'lot',
      withIpa: 'ɑ',
      difference:
        '/ɑ/ は顎を大きく下げて舌を後ろに引く。/ʌ/ は顎をあまり下げず舌は中央。長さも /ɑ/ が長く /ʌ/ は短い。',
      listenFor:
        '口の開きと長さ。/ɑ/ は開いて長く暗い。/ʌ/ は狭く短く乾いた響き。日本語の「ア」は /ɑ/ 側にある。',
      whyHard: '日本語の「ア」が /ɑ/ 寄りなので、/ʌ/ が「別の音」として認識されない。',
      pairs: [
        { a: 'cut', aIpa: 'kʌt', b: 'cot', bIpa: 'kɑt' },
        { a: 'hut', aIpa: 'hʌt', b: 'hot', bIpa: 'hɑt' },
        { a: 'nut', aIpa: 'nʌt', b: 'not', bIpa: 'nɑt' },
        { a: 'cup', aIpa: 'kʌp', b: 'cop', bIpa: 'kɑp' },
        { a: 'luck', aIpa: 'lʌk', b: 'lock', bIpa: 'lɑk' },
        { a: 'color', aIpa: 'ˈkʌlər', b: 'collar', bIpa: 'ˈkɑlər' },
      ],
    },
    {
      withId: 'schwa',
      withIpa: 'ə',
      difference:
        '音質はほぼ同じで、違いは強勢の有無。強勢があれば /ʌ/、なければ /ə/。音素としては別だが調音はほぼ同一。',
      listenFor:
        '音そのものではなく、その音節が目立つかどうかを聴く。目立てば /ʌ/、埋もれていれば /ə/。',
      whyHard: '音質が同じなので「違う音を探そう」とすると失敗する。強勢という別の次元を聴く必要がある。',
      pairs: [
        { a: 'ábove（第2音節が /ʌ/）', aIpa: 'əˈbʌv', b: 'about（第1音節が /ə/）', bIpa: 'əˈbaʊt', note: '同じ語内で両方現れる例: above /əˈbʌv/' },
        { a: 'suppórt の sup-', aIpa: 'səˈpɔrt', b: 'súpper の sup-', bIpa: 'ˈsʌpər', note: '同じ綴りで強勢の有無により音素が変わる' },
      ],
    },
    {
      withId: 'nurse',
      withIpa: 'ɝ',
      difference: '/ɝ/ は舌を後ろに丸める（または盛り上げる）R性母音。/ʌ/ には R の要素がない。',
      listenFor: '音色がこもって巻き込むように響くか。R の響きがあれば /ɝ/。',
      whyHard: '綴り u で両方が現れる（cut /ʌ/ と curt /ɝ/）ため、綴りからは判別できない。',
      pairs: [
        { a: 'cut', aIpa: 'kʌt', b: 'curt', bIpa: 'kɝt' },
        { a: 'bud', aIpa: 'bʌd', b: 'bird', bIpa: 'bɝd' },
        { a: 'hut', aIpa: 'hʌt', b: 'hurt', bIpa: 'hɝt' },
        { a: 'bun', aIpa: 'bʌn', b: 'burn', bIpa: 'bɝn' },
      ],
    },
  ],
  spellings: [
    { pattern: 'u + 子音（閉音節・強勢あり）', examples: ['cut', 'bus', 'sun', 'much', 'under'], frequency: '最頻' },
    { pattern: 'o', examples: ['come', 'some', 'love', 'month', 'mother', 'front'], frequency: '頻出', note: '綴り o で /ʌ/ になる語群。中英語の綴り字改変に由来し、数が多い。' },
    { pattern: 'ou', examples: ['country', 'couple', 'young', 'touch', 'enough', 'double'], frequency: '頻出' },
    { pattern: 'oo', examples: ['blood', 'flood'], frequency: '例外', note: 'oo の2語のみ。' },
    { pattern: 'oe', examples: ['does'], frequency: '例外' },
  ],
  examples: [
    { word: 'up', ipa: 'ʌp', position: '語頭' },
    { word: 'under', ipa: 'ˈʌndər', position: '語頭' },
    { word: 'bus', ipa: 'bʌs', position: '語中' },
    { word: 'love', ipa: 'lʌv', position: '語中', note: '綴り o で /ʌ/' },
    { word: 'money', ipa: 'ˈmʌni', position: '語中' },
    { word: 'enough', ipa: 'ɪˈnʌf', position: '語中', note: '-ough が /ʌf/' },
  ],
  lecture: [
    '最初に「日本語の『ア』は英語では /ɑ/ のほうだ」と位置づける。これを言わないと /ʌ/ を既知の「ア」に当てはめられてしまう。',
    '/ʌ/ は「口をあまり開けない短い音」だと形で伝える。顎を下げない、唇を丸めない、舌をどこにも寄せない、の3つの否定形で指示すると出やすい。',
    'cut / cot を聞かせる。口の開きと長さの差だと説明する。',
    'color / collar を出す。綴りが全く違うのに母音だけの差で最小対立になっている例として効果が高い。',
    '次に「強勢がなくなるとこの音は /ə/ になる」と伝え、同一語内で両方現れる above /əˈbʌv/ を示す。これで /ʌ/ と /ə/ の関係が分布の問題だと分かる。',
    '最後に綴りを整理する。u だけでなく o（come, love）と ou（country, enough）でも /ʌ/ になる、と示すと読解に直結する。',
  ],
  faq: [
    {
      q: '/ʌ/ と /ə/ は結局同じ音なのか。',
      a:
        '調音はほぼ同じで、多くの音声学者は「強勢のある /ə/ が /ʌ/ である」と扱う。辞書が別記号を使うのは強勢の有無を表記で示すため。教えるときは「同じ音だが、強勢があるかないかで名前が変わる」と説明すると混乱が少ない。',
    },
    {
      q: 'イギリス英語では違うのか。',
      a:
        'RP の /ʌ/ は米よりやや後ろで低く、日本語の「ア」に近づく。またイギリス北部ではこの音素自体が存在せず、cut と put がどちらも /ʊ/ になる（FOOT-STRUT split がない）。',
    },
    {
      q: 'なぜ come, love は綴り o なのに /ʌ/ なのか。',
      a:
        '中英語期に u と v と n の縦線が手書きで判別しづらかったため、u を o に書き換えた綴り字習慣に由来する。love, come, son, monk などが該当する。理由を添えると語群として記憶しやすい。',
    },
  ],
  relatedRules: ['vowel-reduction', 'stress-content-function'],
  notes: [
    'イギリス北部には FOOT-STRUT split がなく、/ʌ/ と /ʊ/ が区別されない。',
    '強勢を失うと /ə/ に還元される。音素としては別だが実体は連続している。',
  ],
};
