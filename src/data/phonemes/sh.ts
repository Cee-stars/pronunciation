import type { Phoneme } from '../../types';

export const sh: Phoneme = {
  id: 'sh',
  ipa: 'ʃ',
  type: 'consonant',
  group: '摩擦音',
  nickname: '日本語の「シ」の子音',
  oneLiner:
    '舌の面を後部歯茎に広く近づけ、唇をわずかに丸めて出す無声の後部歯茎摩擦音。日本語の「シ」の子音と同じなので出すこと自体は容易だが、/s/ との住み分けが課題になる。',
  articulation: {
    voicing: '無声',
    tongue:
      '舌先を /s/ より後ろに引き、舌の前面を広く硬口蓋寄りの歯茎に近づける。溝は /s/ より広く浅い。舌の両脇は上の奥歯に密着させる。',
    lips: 'わずかに丸めて前に出す。これが /s/ との視覚的な差になる。',
    consonant: {
      place: '後部歯茎',
      manner: '摩擦',
      airflow: '広い隙間から気流を通す。/s/ より通り道が広いため、低くこもった音になる。',
    },
  },
  howTo: [
    '日本語の「シ」を言い、母音を取り除いて子音だけを伸ばす。それで正しい。',
    '唇をわずかに丸める。日本語の「シ」より少し丸めるとより英語らしくなる。',
    '舌の面を広く使う。/s/ のように舌先一点に集中させない。',
    '静かにするときの「シーッ」がそのままこの音。',
  ],
  listenFor: [
    '低くこもった摩擦音。/s/ の高く細い音と対になる。',
    '音が長く続き、太い。',
    '唇が丸まっているのが見える。視覚的に判別できる数少ない子音。',
    '/tʃ/（破擦音）との違いは出だし。/ʃ/ は最初から摩擦、/tʃ/ は一度閉じてから摩擦する。',
  ],
  l1: {
    substitute: '日本語の「シ」（ほぼ同音なので干渉は小さい）',
    why:
      '日本語の「シ」の子音が /ʃ/ とほぼ一致するため、この音自体に問題は起きない。問題は逆方向で、/s/ + /i/ もこの音に吸収してしまうこと。',
    symptom:
      '/ʃ/ は通じる。ただし see を「シー」と読んで she にしてしまう誤りが起きる。誤りの方向が一方向なのが特徴。',
    examples: ['see を she と読んでしまう（/ʃ/ 側への過剰適用）'],
  },
  contrasts: [
    {
      withId: 's',
      withIpa: 's',
      difference: '/ʃ/ は舌が後ろで面を広く使い、唇を丸める。/s/ は舌先を歯茎に近づけ、唇は丸めない。',
      listenFor: '音の高さ。/ʃ/ は低くこもり、/s/ は高く鋭い。唇の形も手がかりになる。',
      whyHard: '日本語では /i/ の前で両者が /ʃi/ に統合されるため。',
      pairs: [
        { a: 'she', aIpa: 'ʃi', b: 'see', bIpa: 'si' },
        { a: 'ship', aIpa: 'ʃɪp', b: 'sip', bIpa: 'sɪp' },
        { a: 'sheet', aIpa: 'ʃit', b: 'seat', bIpa: 'sit' },
        { a: 'shell', aIpa: 'ʃɛl', b: 'sell', bIpa: 'sɛl' },
        { a: 'shore', aIpa: 'ʃɔr', b: 'sore', bIpa: 'sɔr' },
      ],
    },
    {
      withId: 'ch',
      withIpa: 'tʃ',
      difference: '/ʃ/ は最初から摩擦する。/tʃ/ は一度完全に閉じてから摩擦しながら開放する破擦音。',
      listenFor: '出だしに閉鎖があるか。/tʃ/ は頭に小さな破裂が付く。',
      whyHard: '日本語の「シ」と「チ」の差と同じ構造なので、実は判別しやすい。',
      pairs: [
        { a: 'ship', aIpa: 'ʃɪp', b: 'chip', bIpa: 'tʃɪp' },
        { a: 'share', aIpa: 'ʃɛr', b: 'chair', bIpa: 'tʃɛr' },
        { a: 'wash', aIpa: 'wɑʃ', b: 'watch', bIpa: 'wɑtʃ' },
        { a: 'cash', aIpa: 'kæʃ', b: 'catch', bIpa: 'kætʃ' },
      ],
    },
    {
      withId: 'zh',
      withIpa: 'ʒ',
      difference: '調音は同一。声帯が震えるかどうかだけが違う。',
      listenFor: '喉の振動。/ʒ/ は語頭にほとんど立たないので、出現位置も手がかりになる。',
      pairs: [
        { a: 'pressure', aIpa: 'ˈprɛʃɚ', b: 'pleasure', bIpa: 'ˈplɛʒɚ', note: '最小対立に近い有名な組' },
        { a: 'Aleutian', aIpa: 'əˈluʃən', b: 'allusion', bIpa: 'əˈluʒən' },
      ],
    },
  ],
  spellings: [
    { pattern: 'sh', examples: ['she', 'ship', 'fish', 'wash'], frequency: '最頻' },
    { pattern: '-tion', examples: ['nation', 'action', 'question', 'education'], frequency: '最頻', note: '/ʃən/。英語で最も頻度の高い接尾辞の一つ。' },
    { pattern: '-sion（子音の後）', examples: ['tension', 'mission', 'passion'], frequency: '頻出', note: '母音の後では /ʒən/（vision）。' },
    { pattern: '-cious / -tious', examples: ['delicious', 'ambitious', 'precious'], frequency: '頻出' },
    { pattern: 'ch（フランス語由来）', examples: ['machine', 'chef', 'Chicago', 'champagne'], frequency: '少数' },
    { pattern: 's（u の前）', examples: ['sugar', 'sure', 'insurance'], frequency: '例外' },
    { pattern: 'sci / ti', examples: ['conscious', 'patient'], frequency: '少数' },
  ],
  examples: [
    { word: 'she', ipa: 'ʃi', position: '語頭' },
    { word: 'should', ipa: 'ʃʊd', position: '語頭' },
    { word: 'nation', ipa: 'ˈneɪʃən', position: '語中', note: '-tion が /ʃən/' },
    { word: 'machine', ipa: 'məˈʃin', position: '語中', note: '綴り ch が /ʃ/' },
    { word: 'sugar', ipa: 'ˈʃʊɡɚ', position: '語頭', note: '綴り s が /ʃ/ になる例外語' },
    { word: 'fish', ipa: 'fɪʃ', position: '語末' },
  ],
  lecture: [
    '「この音は日本語の『シ』そのものだ」と最初に言う。容易な音は容易だと明言して負荷を下げる。',
    'そのうえで「問題はこの音が出せないことではなく、/s/ の位置にもこれを使ってしまうことだ」と誤りの方向を示す。',
    '唇をわずかに丸めると英語らしくなると補足する。視覚的に確認できる。',
    'she / see、ship / sip で /s/ との対比を聞かせる。高さの差を手がかりとして与える。',
    '/tʃ/ との差を「出だしに閉鎖があるか」で示す。ship / chip。日本語の「シ」と「チ」の差と同じだと言えば一瞬で伝わる。',
    '最後に綴りを整理する。sh 以外に -tion, -sion, -cious がすべてこの音になると示すと、読解への効果が大きい。',
  ],
  faq: [
    {
      q: 'なぜ -tion が /ʃən/ と読まれるのか。',
      a:
        '歴史的に /tj/ の連続が口蓋化して /ʃ/ になった結果。現在も同じ変化が進行形で起きており、would you が「ウジュ」になるのと同じ仕組み。綴りが変化前の形を保存している。',
    },
    {
      q: '/ʃ/ と「シ」は完全に同じか。',
      a:
        'ほぼ同じ。厳密には日本語の「シ」は舌の位置がやや前寄りで硬口蓋に近く（[ɕ]）、英語の /ʃ/ より明るい音。ただし実用上の差は小さく、代用して問題ない。',
    },
    {
      q: 'sugar と sure はなぜ s なのに /ʃ/ なのか。',
      a:
        '同じ口蓋化。かつての /sj/ が /ʃ/ に変化した。issue, insurance, tissue も同じ経路。綴りだけが古い形で残っている。',
    },
  ],
  relatedRules: ['palatalization', 's-endings'],
  notes: ['-tion, -sion, -cious をまとめて覚えると、語彙の読みが大きく整理される。'],
};
