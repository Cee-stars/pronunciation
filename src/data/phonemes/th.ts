import type { Phoneme } from '../../types';

export const th: Phoneme = {
  id: 'th',
  ipa: 'θ',
  type: 'consonant',
  group: '摩擦音',
  nickname: '舌先を上の前歯に当てて息だけを出す音',
  oneLiner:
    '舌先を上の前歯に触れさせ、その隙間から息を擦り出す無声の歯摩擦音。歯という調音点が日本語の体系に存在しないため、歯茎の /s/ または /t/ に置き換わる。',
  articulation: {
    voicing: '無声',
    tongue:
      '舌先を平たくして上の前歯に当てる。歯の間からわずかに出しても、上前歯の裏に当てるだけでもよい。舌に力を入れず、舌先の縁から息が漏れる状態を保つ。',
    lips: '関与しない。自然に開いたまま。丸めると /f/ や /ʃ/ の方向へずれるので丸めない。',
    consonant: {
      place: '歯（舌先と上前歯）',
      manner: '摩擦',
      airflow:
        '舌先と上前歯の隙間から息を薄く広く流す。/s/ のように舌の中央に溝を作って息を一点に集めない。',
    },
  },
  howTo: [
    '舌先を軽く上の前歯に当てる。鏡で舌先が歯に触れているのが見える位置にする。',
    '接触を保ったまま息を吐く。舌先と歯の間から弱く擦れる音が出る。',
    '3秒伸ばす。途中で音が止まるなら舌が歯茎まで下がって /t/ の閉鎖を作っている。',
    '音が鋭く一点から出るなら舌先が引っ込んで /s/ になっている。舌先を前に出し、音を鈍く広くする。',
    '歯の間から舌を出すか裏に当てるかは好みで決めてよい。英語話者も個人差がある。初めは出す方が位置を目で確認できる。',
  ],
  listenFor: [
    '弱くて鈍い、こもった息の音。/s/ の高く鋭い音とは音質が明確に違う。',
    '音量が小さい。英語の子音の中で最も目立たない音の一つで、騒音下や速い発話では消えかける。',
    '語末（month, both, with）では母音が終わった後に短い息だけが残る。母音を足さない。',
    '話者の口元が見えるときは舌先が歯の間や歯の際に見える。視覚情報がこの音では最も確実な手がかりになる。',
    '/t/ との違いは閉鎖があるかどうか。/t/ は無音の後に破裂が来る。/θ/ は無音を挟まず摩擦が続く。',
  ],
  l1: {
    substitute: '日本語のサ行の子音 /s/（無声歯茎摩擦音）。語によってはタ行の /t/。',
    why:
      '日本語に歯という調音点がない。無声摩擦音のうち最も近いのが歯茎の /s/ なので、舌先が歯から歯茎へ数ミリ後退する。閉鎖で代用すれば /t/ になる。カタカナ表記が「シンク」「スリー」とサ行に寄るのも、「セオリー」のように定着しているのも同じ代用の反映である。',
    symptom:
      '/s/ で代用すると think が sink、thick が sick、mouth が mouse と実在の別語になる。/t/ で代用すると調音方法まで変わって音の輪郭が別になり、thin が tin に聞こえる。どちらも文脈が助けない場面では誤解に直結する。',
    examples: [
      'think を「シンク」と読み sink と同音になる',
      'three を「スリー」と読み語頭が /s/ になる',
      'month の語末を「マンス」と読み /s/ になる',
    ],
  },
  contrasts: [
    {
      withId: 's',
      withIpa: 's',
      difference:
        '/θ/ は舌先を上の前歯に当てる歯音で、息が薄く広く流れる。/s/ は舌先を上の歯茎に当て、舌の中央の溝に息を集める歯茎音。舌先の位置の差は数ミリしかない。',
      listenFor:
        '音の鋭さ。/s/ は高く細く突き刺さる音、/θ/ は低く鈍く広がる音。音量も /θ/ のほうが小さい。',
      whyHard:
        '日本語話者の代用先がまさに /s/ なので、自分の発音では両者が同音になっている。さらに /θ/ は音量が小さいため、聞き取りの側でも /s/ に吸収されやすい。',
      pairs: [
        { a: 'think', aIpa: 'θɪŋk', b: 'sink', bIpa: 'sɪŋk' },
        { a: 'thick', aIpa: 'θɪk', b: 'sick', bIpa: 'sɪk' },
        { a: 'thing', aIpa: 'θɪŋ', b: 'sing', bIpa: 'sɪŋ' },
        { a: 'mouth', aIpa: 'maʊθ', b: 'mouse', bIpa: 'maʊs', note: '語末でも対立する' },
        { a: 'path', aIpa: 'pæθ', b: 'pass', bIpa: 'pæs' },
        { a: 'thought', aIpa: 'θɔt', b: 'sought', bIpa: 'sɔt' },
      ],
    },
    {
      withId: 't',
      withIpa: 't',
      difference:
        '調音点が歯か歯茎かという違いに加え、調音方法が摩擦か破裂かという違いもある。二重に異なる音。',
      listenFor:
        '閉鎖の有無。/t/ では息が一度完全に止まり、開放の破裂が聞こえる。/θ/ では息が止まらず流れ続ける。',
      whyHard:
        '舌先を歯に当てようとして力が入ると、そのまま閉鎖になって /t/ が出てしまう。破裂音は目立つため、/s/ の代用より誤りが際立つ。',
      pairs: [
        { a: 'thin', aIpa: 'θɪn', b: 'tin', bIpa: 'tɪn' },
        { a: 'thick', aIpa: 'θɪk', b: 'tick', bIpa: 'tɪk' },
        { a: 'three', aIpa: 'θri', b: 'tree', bIpa: 'tri' },
        { a: 'path', aIpa: 'pæθ', b: 'pat', bIpa: 'pæt' },
        { a: 'bath', aIpa: 'bæθ', b: 'bat', bIpa: 'bæt' },
        { a: 'thigh', aIpa: 'θaɪ', b: 'tie', bIpa: 'taɪ' },
      ],
    },
    {
      withId: 'f',
      withIpa: 'f',
      difference:
        '調音方法はどちらも無声摩擦音で同じ。違いは狭めを舌先と歯で作るか、下唇と歯で作るかだけ。',
      listenFor:
        '耳では非常に近く、音響的な差は小さい。口元が見えるなら舌が出ているか下唇が上がっているかで判別する。イングランド南部の都市方言では /θ/ が実際に /f/ に合流している。',
      whyHard:
        '両方とも日本語にない調音点であり、どちらも「息が擦れる弱い音」という同じカテゴリーに入ってしまう。区別すべき軸が体験として存在しない。',
      pairs: [
        { a: 'thin', aIpa: 'θɪn', b: 'fin', bIpa: 'fɪn' },
        { a: 'three', aIpa: 'θri', b: 'free', bIpa: 'fri' },
        { a: 'thought', aIpa: 'θɔt', b: 'fought', bIpa: 'fɔt' },
        { a: 'thirst', aIpa: 'θɝst', b: 'first', bIpa: 'fɝst' },
        { a: 'death', aIpa: 'dɛθ', b: 'deaf', bIpa: 'dɛf' },
        { a: 'oath', aIpa: 'oʊθ', b: 'oaf', bIpa: 'oʊf' },
      ],
    },
  ],
  spellings: [
    {
      pattern: 'th（内容語）',
      examples: ['think', 'three', 'bath', 'month', 'healthy', 'author'],
      frequency: '最頻',
      note: '二重字 th は /θ/ と /ð/ の両方を表すが、分布は予測できる。機能語（the, this, that）と語中の -ther 型（mother, other, weather）が /ð/、それ以外の内容語の大半が /θ/。',
    },
    {
      pattern: 'th（有声の /ð/ になる組）',
      examples: ['the', 'this', 'mother', 'weather', 'breathe'],
      frequency: '頻出',
      note: '同じ綴りで /θ/ ではなく /ð/ になる。機能語と -ther 語、動詞の -the を先に /ð/ 側として覚え、残りを /θ/ と扱えば綴りからの判断がほぼ機械的になる。',
    },
    {
      pattern: '語末の -ths',
      examples: ['months', 'myths', 'depths', 'sixths'],
      frequency: '頻出',
      note: '/θs/ という連続が生じ、英語で最も発音が難しい語末連続の一つになる。英語話者自身も簡略化する。',
    },
    {
      pattern: 'th が /t/ になる語',
      examples: ['Thomas', 'Thailand', 'thyme', 'Anthony'],
      frequency: '例外',
      note: '固有名詞と借用語に集中する。語ごとに覚える領域。',
    },
    {
      pattern: 'phth',
      examples: ['phthisis', 'diphthong'],
      frequency: '例外',
      note: 'diphthong は /ˈdɪfθɔŋ/ と /ˈdɪpθɔŋ/ の両方が使われる。',
    },
  ],
  examples: [
    { word: 'think', ipa: 'θɪŋk', position: '語頭' },
    { word: 'three', ipa: 'θri', position: '語頭', note: '/θr/ の連続は難所の一つ' },
    { word: 'author', ipa: 'ˈɔθɚ', position: '語中', note: '語中の -th- だが /ð/ ではない' },
    { word: 'birthday', ipa: 'ˈbɝθdeɪ', position: '語中' },
    { word: 'month', ipa: 'mʌnθ', position: '語末', note: '複数 months は /mʌnθs/ で簡略化されやすい' },
    { word: 'both', ipa: 'boʊθ', position: '語末' },
  ],
  lecture: [
    'まず「日本語に歯という調音点がない」と構造から述べる。/f/ /v/ の唇歯と並ぶ、二つある空き枠の片方だと位置づける。',
    '舌先を上の前歯に当てさせ、鏡で見せる。歯の間から少し出す形が最も確認しやすい。',
    'その状態で息を出させ、3秒伸ばさせる。音が止まれば /t/、鋭くなれば /s/ と、崩れ方を先に教えておくと自己修正できる。',
    'think / sink と thin / tin を両方出す。/s/ 型と /t/ 型の二方向の誤りがあるため、片方だけでは足りない。',
    '「歯の間に出すか裏に当てるか」はどちらでもよいと明言する。英語話者にも個人差があり、ここで迷わせる必要はない。',
    '語末 month, both で母音を足さずに終わらせる。続いて months, sixths のような -ths を出し、英語話者も簡略化すると伝えて負荷を下げる。',
    '最後に分布を示す。/θ/ は think, three, month のような内容語に現れ、/ð/ は the, this, that のような機能語に現れる。辞書で引く回数は /θ/ が多く、耳にする回数は /ð/ が多いという非対称を押さえる。',
  ],
  faq: [
    {
      q: '舌は歯の間から出すのか、裏に当てるのか。',
      a:
        'どちらでもよい。英語話者にも個人差があり、歯間に出す話者と上前歯の裏に当てる話者がいる。音響的な差は小さく、聞き手は区別しない。学習の初期は舌が見える歯間の形のほうが位置を自覚しやすい。',
    },
    {
      q: '/s/ で代用しても通じるか。',
      a:
        '通じない場面がある。think / sink、mouth / mouse、path / pass のように実在の別語になるため、文脈が助けない場合に誤解が生じる。/f/ を日本語のフ [ɸ] で代用しても多くの場合通じるのとは対照的で、修正の優先度はこちらが高い。',
    },
    {
      q: 'months, clothes, sixths が発音できない。',
      a:
        '英語話者も完全には発音していない。clothes は /kloʊz/ と /ð/ を落とす形が標準的で、months は /mʌns/、sixths も /sɪksθ/ 程度まで簡略化される。-ths は英語で最も複雑な語末子音連続に属する。子音連続の簡略化という規則の側で扱う現象なので、無理に全部の音を出そうとしなくてよい。',
    },
    {
      q: 'ロンドンの英語で think が fink に聞こえる。',
      a:
        'th-fronting という現象で、/θ/ が /f/ に、/ð/ が /v/ に置き換わる。ロンドン英語やイングランド南部の都市方言で広く見られ、進行中の変化である。学習の目標にはしないが、知っておくと聞き取りで戸惑わない。',
    },
  ],
  relatedRules: [
    'place-of-articulation',
    'manner-of-articulation',
    'voicing',
    'cluster-simplification',
    's-endings',
  ],
  notes: [
    '/θ/ は英語の子音の中でも習得が最も遅い音の一つで、英語を母語とする子どもでも 6〜7 歳頃まで /f/ や /s/ で代用する。日本語話者固有の難しさではなく、調音そのものが難しい音である。',
    'th-fronting（/θ/ → /f/）はイングランドの都市方言で進行中。/θ/ という音素を失いつつある方言もある。',
    '-ths（months, sixths, depths, truths）は英語で最も複雑な語末子音連続に属し、母語話者も簡略化する。cluster-simplification の側で扱う。',
    'with は話者により /wɪθ/ と /wɪð/ の両方があり、米語では /wɪθ/ が優勢。同じ語で有声・無声が揺れる珍しい例。',
    '名詞と動詞で無声・有声が分かれる組がある（breath /brɛθ/ と breathe /brið/、bath と bathe、cloth と clothe）。無声側がこの音素。',
  ],
};
