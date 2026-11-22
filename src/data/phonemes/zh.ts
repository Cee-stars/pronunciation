import type { Phoneme } from '../../types';

export const zh: Phoneme = {
  id: 'zh',
  ipa: 'ʒ',
  type: 'consonant',
  group: '摩擦音',
  nickname: '/ʃ/ に声を乗せた音。英語で最も出番の少ない子音',
  oneLiner:
    '舌の面を後部歯茎に広く近づけ、唇をわずかに丸めて声帯を震わせる有声の後部歯茎摩擦音。/ʃ/ と調音は同一で違いは声の有無だけだが、英語の子音の中で最も出現頻度が低く、語頭にはほぼ立たず語中に集中するという偏った分布を持つ。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌先を /z/ より後ろに引き、舌の前面を広く硬口蓋寄りの歯茎に近づける。位置は /ʃ/ と同一。溝は /z/ より広く浅い。舌が歯茎に触れて閉鎖を作ると破擦音 /dʒ/ になるので、触れないことが核心。',
    lips: 'わずかに丸めて前に出す。/ʃ/ と同じ。視覚的な手がかりになる。',
    consonant: {
      place: '後部歯茎',
      manner: '摩擦',
      airflow:
        '広い隙間から気流を通しながら声帯を振動させる。/ʃ/ より摩擦の雑音は弱く、声の響きのほうが目立つ。気流を一度も止めない点が /dʒ/ との決定的な差。',
    },
  },
  howTo: [
    'まず /ʃ/ を伸ばす。静かにするときの「シーッ」の形を保つ。',
    'その位置を一切動かさずに声を足す。喉に指を当てて振動を確認する。これで /ʒ/ になる。',
    '2〜3秒伸ばす。伸ばせずに音が一瞬で終わるなら舌が歯茎に当たって /dʒ/ の閉鎖になっている。伸ばせるかどうかが摩擦音かどうかの判定になる。',
    '語中で練習する。この音の本拠地は語中なので、measure, vision, usually, casual のように前後に母音がある形から入る。語頭から出そうとしない。',
    '語末は借用語だけ（beige, garage, rouge）。声を保ったまま摩擦を薄れさせる。最後に「ジ」の破裂を付けないよう注意する。',
  ],
  listenFor: [
    '低くこもった有声の摩擦音。/ʃ/ と同じ太さの音に声の響きが重なった音色。',
    '出だしに閉鎖と破裂がない。伸ばせる。/dʒ/ は一瞬で立ち上がって伸ばせないので、長さが最も使いやすい判定材料。',
    '出現位置そのものが手がかりになる。語頭で聞こえた後部歯茎の有声音はまず /dʒ/ だと考えてよい。語中なら /ʒ/ の可能性が高い。',
    '-sion, -sure, -sual の綴りの位置に現れる。measure, vision, usually, casual, Asia は耳と綴りを結び付けて覚えられる。',
    '唇がわずかに丸まっているのが見える。/z/ との差は視覚的にも出る。',
  ],
  l1: {
    substitute: '日本語のジ・ジャ・ジュ・ジョの子音。語頭では破擦音 [dʑ]、語中では摩擦音 [ʑ] になる話者もいる。',
    why:
      '日本語の「ジ」は語頭では閉鎖を伴う破擦音 [dʑi]、語中では摩擦音 [ʑi] になるが、話者はこれを同じ音だと感じている。英語の /ʒ/ に最も近い日本語の音はこの語中の [ʑ] だが、カタカナ表記を介すると「ジャ・ジュ」の破擦音側が選ばれるため、/ʒ/ は一律に /dʒ/ に置き換わる。さらに /ʒ/ の出現頻度が低く、学習者が耳にする機会も少ないので、/dʒ/ との区別が未形成のまま残りやすい。',
    symptom:
      'measure が「メジャー」すなわち medger のように、vision が「ビジョン」のように聞こえ、摩擦であるべき箇所に破裂が入る。lesion と legion、confusion と Confucian の対立が崩れる。逆に /ʒ/ を /ʃ/ で代用する誤りも起き、usually が「ユーシュアリー」寄りになる。',
    examples: [
      'measure を「メジャー」と読み /dʒ/ になる',
      'television を「テレビジョン」と読み語中が破擦音になる',
      'casual を「カジュアル」と読み /dʒ/ になる',
      'genre を「ジャンル」と読み語頭が破擦音になる',
    ],
  },
  contrasts: [
    {
      withId: 'sh',
      withIpa: 'ʃ',
      difference: '調音点・調音方法・舌の形はすべて同一。声帯が震えるかどうかだけが違う。付随して /ʒ/ の摩擦のほうが弱い。',
      listenFor:
        '喉の振動。また /ʒ/ は語頭にほとんど立たないので、出現位置も手がかりになる。語末では直前の母音の長さも差になる。',
      whyHard:
        'どちらも日本語の「シ」「ジ」で代用されるため、代用した時点で /ʃ/ 対 /dʒ/ という別の対立に置き換わってしまう。有声・無声の軸そのものは日本語にもあるので、音を作れれば区別は難しくない。',
      pairs: [
        { a: 'confusion', aIpa: 'kənˈfjuʒən', b: 'Confucian', bIpa: 'kənˈfjuʃən' },
        { a: 'allusion', aIpa: 'əˈluʒən', b: 'Aleutian', bIpa: 'əˈluʃən' },
        { a: 'delusion', aIpa: 'dɪˈluʒən', b: 'dilution', bIpa: 'dɪˈluʃən' },
        { a: 'glazier', aIpa: 'ˈɡleɪʒɚ', b: 'glacier', bIpa: 'ˈɡleɪʃɚ' },
        { a: 'pleasure', aIpa: 'ˈplɛʒɚ', b: 'pressure', bIpa: 'ˈprɛʃɚ', note: '最小対立に近い有名な組' },
      ],
    },
    {
      withId: 'jh',
      withIpa: 'dʒ',
      difference:
        '調音点は同じ後部歯茎。/ʒ/ は最初から摩擦する。/dʒ/ は一度完全に閉じてから摩擦しながら開放する破擦音。違いは閉鎖の有無だけ。',
      listenFor:
        '出だしに閉鎖があるか、音を伸ばせるか。/dʒ/ は頭に小さな破裂が付き伸ばせない。/ʒ/ は立ち上がりが緩やかで伸ばせる。',
      whyHard:
        '日本語の「ジ」が語頭で破擦音 [dʑ] になるため、代用がそのまま /dʒ/ になる。日本語話者の発音では両者が同音であり、対立する語の数も少ないので誤りが自覚されにくい。',
      pairs: [
        { a: 'lesion', aIpa: 'ˈliʒən', b: 'legion', bIpa: 'ˈlidʒən' },
        { a: 'pleasure', aIpa: 'ˈplɛʒɚ', b: 'pledger', bIpa: 'ˈplɛdʒɚ', note: 'pledger は稀語だが閉鎖の有無だけで対立する' },
        { a: 'garage', aIpa: 'ɡəˈrɑʒ', b: 'garage', bIpa: 'ˈɡærɪdʒ', note: '同じ語の米英差。米は /ʒ/、英は /dʒ/ が一般的' },
        { a: 'version', aIpa: 'ˈvɚʒən', b: 'virgin', bIpa: 'ˈvɚdʒɪn', note: '母音も異なるが、閉鎖の有無を聞く練習に使える近似の組' },
      ],
    },
    {
      withId: 'z',
      withIpa: 'z',
      difference:
        'どちらも有声摩擦音で、違いは調音点だけ。/ʒ/ は舌が後ろで面を広く使い唇を丸める。/z/ は舌先を歯茎に近づけ唇は丸めない。',
      listenFor: '音の高さ。/ʒ/ は低くこもり、/z/ は高く鋭い。唇の丸めの有無も視覚的な手がかりになる。',
      whyHard:
        '日本語ではこの二つが別音素ではなく、ザ行の中で「ジ」だけが後部歯茎寄りになるという異音の関係にある。そのためどちらを使うかが母音によって自動的に決まってしまい、意識的に選ぶ経験がない。',
      pairs: [
        { a: 'composure', aIpa: 'kəmˈpoʊʒɚ', b: 'composer', bIpa: 'kəmˈpoʊzɚ' },
        { a: 'rouge', aIpa: 'ruʒ', b: 'ruse', bIpa: 'ruz' },
        { a: 'beige', aIpa: 'beɪʒ', b: 'bays', bIpa: 'beɪz' },
        { a: 'glazier', aIpa: 'ˈɡleɪʒɚ', b: 'glazer', bIpa: 'ˈɡleɪzɚ' },
        { a: 'closure', aIpa: 'ˈkloʊʒɚ', b: 'closer', bIpa: 'ˈkloʊzɚ', note: 'closer は「閉じる人」の意味の /ˈkloʊzɚ/' },
      ],
    },
  ],
  spellings: [
    {
      pattern: '-sion（母音の後）',
      examples: ['vision', 'decision', 'confusion', 'television', 'occasion', 'explosion'],
      frequency: '最頻',
      note:
        '直前が母音なら /ʒən/、子音なら /ʃən/（tension, mission, passion）。この一本の条件で -sion の読みはほぼ決まる。',
    },
    {
      pattern: 's / su（u や i の前）',
      examples: ['measure', 'pleasure', 'treasure', 'usually', 'casual', 'visual'],
      frequency: '最頻',
      note: 'かつての /zj/ が口蓋化した結果。-sure, -sual, -sury はこの型。',
    },
    {
      pattern: '-ge（フランス語由来の語末）',
      examples: ['beige', 'rouge', 'garage', 'massage', 'mirage', 'prestige'],
      frequency: '頻出',
      note: '英語本来の -ge は /dʒ/（age, page）。/ʒ/ になるのは借用語に限られ、語によっては /dʒ/ との揺れがある。',
    },
    {
      pattern: 'g（フランス語由来、語頭・語中）',
      examples: ['genre', 'gigue', 'bourgeois', 'regime'],
      frequency: '少数',
      note: '語頭に /ʒ/ が立つのは事実上この経路だけ。genre は /ˈdʒɑnrə/ と英語化した形でも発音される。',
    },
    { pattern: 'z', examples: ['azure', 'seizure', 'brazier'], frequency: '少数', note: '綴り z が /ʒ/ になる数少ない語。azure は /ˈæʒɚ/。' },
    {
      pattern: 'ti / si（equation 型）',
      examples: ['equation', 'Asia', 'Persia'],
      frequency: '例外',
      note: 'equation は /ɪˈkweɪʒən/。Asia, Persia は /ʒ/ と /ʃ/ の両方が用いられる。',
    },
    { pattern: 'j（借用語）', examples: ['Taj Mahal', 'Beijing', 'jabot'], frequency: '例外', note: '原語の音を近似した結果。英語化して /dʒ/ になる話者も多い。' },
  ],
  examples: [
    { word: 'genre', ipa: 'ˈʒɑnrə', position: '語頭', note: 'フランス語からの借用。語頭に /ʒ/ が立つ数少ない語' },
    { word: 'measure', ipa: 'ˈmɛʒɚ', position: '語中', note: '「メジャー」と読むと /dʒ/ になる代表例' },
    { word: 'vision', ipa: 'ˈvɪʒən', position: '語中', note: '-sion の直前が母音なので /ʒən/' },
    { word: 'usually', ipa: 'ˈjuʒuəli', position: '語中', note: '日常語でこの音が出る最頻の語' },
    { word: 'beige', ipa: 'beɪʒ', position: '語末', note: 'フランス語由来。語末の /ʒ/ は借用語に限られる' },
    { word: 'garage', ipa: 'ɡəˈrɑʒ', position: '語末', note: '英では /ˈɡærɪdʒ/ で /dʒ/ になる' },
  ],
  lecture: [
    'まず頻度から入る。「英語の子音で最も出番が少ないのがこの音だ」と言う。覚える範囲が狭いと分かると負荷が下がる。',
    '作り方は一手だと示す。/ʃ/ を伸ばして声を足すだけ。新しい調音点はない。喉の振動を確認させる。',
    '出現位置を地図として与える。語頭にはほぼ立たない（genre, gigue などフランス語借用のみ）。本体は語中（measure, vision, usually, casual, Asia）。語末は借用語（beige, garage, rouge）。この三段で分布を押さえる。',
    'なぜ語中に集中するのかを説明する。vision はもとの visio-n の /zj/ が口蓋化して /ʒ/ になった形で、-tion が /ʃən/ になるのと同じ変化の有声版である。/ʃ/ の項目で話した口蓋化がここでも効いていると接続する。',
    '-sion の読み分けを一本の条件で渡す。直前が母音なら /ʒən/（vision, decision）、子音なら /ʃən/（tension, mission）。これだけで大量の語の読みが決まる。',
    '日本語話者の誤りを示す。「ジ」は語頭で破擦音 [dʑ] なので /dʒ/ での代用が起きる。measure が medger に聞こえると言えば問題の形がはっきりする。ただし語中の「ジ」を [ʑ] で出す話者もおり、その音は /ʒ/ に近いので足場に使える。',
    'lesion と legion、confusion と Confucian を並べて締める。閉鎖があるか、声があるか、の二点だけを聞かせる。対立語は少ないが、対立があることを一度見せておくと音が別物として定着する。',
  ],
  faq: [
    {
      q: 'なぜ vision は /ʒ/ で tension は /ʃ/ なのか。綴りはどちらも -sion なのに。',
      a:
        '直前が母音か子音かで決まる。vision, decision, confusion は -sion の前が母音なので有声化して /ʒən/ になり、tension, mission, passion は前が子音なので /ʃən/ のまま残る。母音にはさまれた位置で有声化が起きるという、music の s が /z/ になるのと同じ原理。',
    },
    {
      q: 'measure を「メジャー」と読むとなぜ通じにくいのか。',
      a:
        '「ジャ」の子音が破擦音 /dʒ/ で、閉鎖が入るため。英語話者には measure ではなく medger のような別語として届く。/ʒ/ は閉鎖を作らず最初から擦れている音なので、伸ばせるかどうかで自分の音を点検できる。伸ばせなければ /dʒ/ になっている。',
    },
    {
      q: 'garage の語末は /ʒ/ か /dʒ/ か。',
      a:
        'どちらもある。アメリカ英語では /ɡəˈrɑʒ/ が標準的で、イギリス英語では /ˈɡærɪdʒ/ あるいは /ˈɡærɑːʒ/ が用いられる。借用語の語末 /ʒ/ は英語化の過程にあり、massage, barrage, garage のように語ごと・方言ごとに揺れている。辞書に両方載っているのはこのため。',
    },
    {
      q: '/ʒ/ を /ʃ/ で代用してはいけないのか。',
      a:
        '避けたほうがよい。対立する語の数自体は少ないので意味が壊れる場面は限られるが、measure, usually, vision のような日常語で起きるため不自然さが目立つ。しかも作るのに必要な動作は /ʃ/ に声を足すだけで、新しく覚えることがない。頻度が低いのに修正の費用も低い、という珍しい位置にある音。',
    },
  ],
  relatedRules: [
    'palatalization',
    'voicing',
    'place-of-articulation',
    'manner-of-articulation',
    'assimilation',
  ],
  notes: [
    '英語の子音の中で出現頻度は最下位。語彙の数でも発話での回数でも少なく、/ʒ/ を含む日常語は measure, pleasure, treasure, usually, casual, vision, decision, television, Asia 程度に集中する。',
    '本来の英語には /ʒ/ がなく、口蓋化（/zj/ の融合）とフランス語借用の二経路で後から生じた音。そのため語頭という本来の位置を持たない。',
    '語末の借用語（garage, massage, barrage, beige, rouge）は /ʒ/ と /dʒ/ の間で揺れており、方言差・話者差が大きい。',
    '日本語の「ジ」は語頭 [dʑ]、語中 [ʑ] の異音を持つ。語中の [ʑ] は英語の /ʒ/ に近いので、カタカナ表記を介さずに語中の音を取り出せば足場になる。',
  ],
};
