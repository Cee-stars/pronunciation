import type { Phoneme } from '../../types';

export const dh: Phoneme = {
  id: 'dh',
  ipa: 'ð',
  type: 'consonant',
  group: '摩擦音',
  nickname: '/θ/ に声を乗せた音。the の最初の音',
  oneLiner:
    '舌先を上の前歯に触れさせ、隙間から息を擦り出しながら声帯を震わせる有声の歯摩擦音。内容語には少ないが the, this, that という最高頻度の機能語を担うため、実際の発話では最もよく現れる摩擦音の一つになる。',
  articulation: {
    voicing: '有声',
    tongue:
      '舌先を平たくして上の前歯に当てる。位置は /θ/ と同じ。接触は /θ/ よりさらに軽く、舌に力を入れない。',
    lips: '関与しない。自然に開いたまま。',
    consonant: {
      place: '歯（舌先と上前歯）',
      manner: '摩擦',
      airflow:
        '舌先と上前歯の隙間から息を流しながら声帯を振動させる。摩擦自体は弱く、擦れる雑音より声の響きのほうが目立つ。',
    },
  },
  howTo: [
    'まず /θ/ を作る。舌先を上の前歯に当て、息を擦り出す。',
    'その位置を動かさずに声を加える。喉に指を当て、振動していることを確認する。',
    '2〜3秒伸ばす。伸ばせないなら舌が歯茎に当たって /d/ の閉鎖になっている。',
    'the を単独で練習せず、the apple, in the car のように後続語と続けて出す。/ð/ は流れの中のほうが出しやすい。',
    '摩擦を強く出そうとしない。/ð/ の摩擦は本来弱く、強く擦ると不自然になる。声が通っていれば足りる。',
  ],
  listenFor: [
    '低くこもった有声音。摩擦の雑音は弱く、話者によってはほとんど母音のように響く。',
    'the, this, that では子音が非常に短い。独立した音として探すのではなく、弱い有声の立ち上がりとして捉える。',
    '/d/ との違いは閉鎖の有無。/d/ には破裂の瞬間があり、/ð/ には無音区間がない。',
    'in the, with them のような連続では前後の子音に同化したり消えたりする。in the が [ɪnnə] に聞こえるのは /ð/ が /n/ に飲まれた結果。',
    '語末（with, breathe, smooth）では声が残りながら摩擦が薄れていく。「ズ」のような鋭い音は入らない。',
  ],
  l1: {
    substitute: '日本語のザ行の子音 /z/（有声歯茎摩擦音）。語頭ではダ行の /d/。',
    why:
      '日本語に歯という調音点がない。有声摩擦音で最も近いのが歯茎の /z/ なので舌先が後退する。加えてザ行の語頭は実際には破擦音 [dz] で始まるため、the が「ザ」でも「ダ」でも代用されうる。カタカナ表記が「ザ・ジス・ディス」と揺れるのは、この二方向の代用が併存していることの反映である。',
    symptom:
      '/z/ で代用すると then が Zen、breathe が breeze と別語になる。/d/ で代用すると this が dis、they が day 寄りに聞こえ、最高頻度の機能語が破裂音で途切れるため発話全体が硬く断続的になる。',
    examples: [
      'the を「ザ」と読み語頭が /z/ になる',
      'this を「ディス」と読み /d/ になる',
      'that を「ザット」と読み、子音の代用に加えて母音も余分に入る',
    ],
  },
  contrasts: [
    {
      withId: 'z',
      withIpa: 'z',
      difference:
        '/ð/ は舌先を上の前歯に当てる歯音で、摩擦は弱く広い。/z/ は舌先を歯茎に当て、舌の中央の溝に息を集める歯茎音で、摩擦が強く鋭い。',
      listenFor:
        '摩擦の鋭さと強さ。/z/ は高くはっきりと鳴り続ける。/ð/ はほとんど鳴らず、こもった声だけが聞こえる。',
      whyHard:
        '代用先が /z/ そのものなので、自分の発音では同音になっている。加えて /ð/ の摩擦が弱いため、聞き取りでも手がかりが少ない。',
      pairs: [
        { a: 'then', aIpa: 'ðɛn', b: 'Zen', bIpa: 'zɛn' },
        { a: 'breathe', aIpa: 'brið', b: 'breeze', bIpa: 'briz' },
        { a: 'clothe', aIpa: 'kloʊð', b: 'close', bIpa: 'kloʊz', note: 'close は動詞の /kloʊz/' },
        { a: 'teethe', aIpa: 'tið', b: 'tease', bIpa: 'tiz' },
        { a: 'writhe', aIpa: 'raɪð', b: 'rise', bIpa: 'raɪz' },
        { a: 'seethe', aIpa: 'sið', b: 'seize', bIpa: 'siz' },
      ],
    },
    {
      withId: 'd',
      withIpa: 'd',
      difference:
        '/ð/ は摩擦音で気流が流れ続ける。/d/ は歯茎で気流を完全に止めてから開放する破裂音。調音点も調音方法も違う。',
      listenFor:
        '閉鎖による無音と破裂があるか。/d/ は音が一瞬で立ち上がる。/ð/ は立ち上がりが緩やかで、伸ばすこともできる。',
      whyHard:
        '語頭の /ð/ は摩擦が弱く、破裂音に近く聞こえることがある。そのため日本語話者はダ行で置き換えやすい。this を「ディス」と読む誤りはこの系統。',
      pairs: [
        { a: 'they', aIpa: 'ðeɪ', b: 'day', bIpa: 'deɪ' },
        { a: 'then', aIpa: 'ðɛn', b: 'den', bIpa: 'dɛn' },
        { a: 'thy', aIpa: 'ðaɪ', b: 'die', bIpa: 'daɪ' },
        { a: 'those', aIpa: 'ðoʊz', b: 'doze', bIpa: 'doʊz' },
        { a: 'there', aIpa: 'ðɛr', b: 'dare', bIpa: 'dɛr' },
        { a: 'breathe', aIpa: 'brið', b: 'breed', bIpa: 'brid' },
      ],
    },
  ],
  spellings: [
    {
      pattern: 'th（機能語）',
      examples: ['the', 'this', 'that', 'they', 'them', 'then', 'there', 'than', 'with'],
      frequency: '最頻',
      note: '英語で最も頻度の高い語群がここに集中する。この一群を覚えるだけで /ð/ の出現の大半を押さえられる。',
    },
    {
      pattern: '語中の -ther',
      examples: ['mother', 'father', 'other', 'weather', 'together', 'rather'],
      frequency: '頻出',
      note: '語中の -ther はほぼ例外なく /ð/。either, neither, gather, leather, feather も同型。',
    },
    {
      pattern: '語末の -the（主に動詞）',
      examples: ['breathe', 'clothe', 'bathe', 'soothe', 'smooth'],
      frequency: '頻出',
      note: '名詞が無声・動詞が有声という対応がある。breath /brɛθ/ と breathe /brið/、bath /bæθ/ と bathe /beɪð/、cloth /klɔθ/ と clothe /kloʊð/。',
    },
    {
      pattern: 'th（上記以外の内容語）',
      examples: ['think', 'three', 'month', 'health', 'author'],
      frequency: '頻出',
      note: '同じ綴りだが無声の /θ/ になる。機能語と -ther 語と動詞の -the を /ð/ 側として先に覚え、残りを /θ/ と扱えば、二重字 th の読み分けはほぼ機械的に決まる。',
    },
  ],
  examples: [
    { word: 'the', ipa: 'ðə', position: '語頭', note: '母音の前では /ði/' },
    { word: 'this', ipa: 'ðɪs', position: '語頭' },
    { word: 'mother', ipa: 'ˈmʌðɚ', position: '語中' },
    { word: 'weather', ipa: 'ˈwɛðɚ', position: '語中' },
    { word: 'with', ipa: 'wɪð', position: '語末', note: '米語では /wɪθ/ も一般的' },
    { word: 'breathe', ipa: 'brið', position: '語末', note: '名詞 breath は /brɛθ/' },
  ],
  lecture: [
    '/θ/ と同じ位置の音で、違いは声の有無だけだと先に言う。新しい調音点を覚える必要はない。',
    '/θ/ を伸ばさせ、そのまま声を足させる。喉に指を当てて振動を確認させる。これで /ð/ が出る。',
    '単独で練習させず、the apple, in the car のように句で出させる。/ð/ は流れの中に現れる音なので、孤立させると不自然に強い摩擦になる。',
    '出現する語を列挙する。the, this, that, they, them, then, there, than, with。これらが英語で最も頻度の高い語群だと示すと、重要度が数で伝わる。',
    '対して /θ/ は think, three, month のような内容語に出ると対比する。辞書を引く回数は /θ/ が多く、実際に耳にする回数は /ð/ が多いという非対称を明示する。',
    'they / day と then / Zen を並べて代用の結果を示す。ダ行型とザ行型の二方向の誤りがあるため両方出す。',
    '最後に、速い発話では /ð/ が弱まったり前の子音に溶け込んだりすると伝える。in the が [ɪnnə]、with them が一語のように聞こえる。同化と脱落の規則で扱うと予告しておけば、聞き取れないことを発音の失敗と混同しない。',
  ],
  faq: [
    {
      q: 'the は「ザ」ではないのか。',
      a:
        '違う。「ザ」の子音は歯茎の /z/ で、語頭では破擦音 [dz] になる。/ð/ は歯音の摩擦音である。舌先が歯に触れるか歯茎に触れるかの差で then と Zen が別語になる。カタカナには /ð/ を書く手段がないので、表記から離れて動作で覚える。',
    },
    {
      q: '内容語に少ないのに、なぜ重要な音なのか。',
      a:
        '語彙の数と発話中の出現回数が別物だから。/ð/ を含む語は少ないが、その少数が the, this, that, they という最高頻度の機能語である。結果として会話では /ð/ のほうが /θ/ より頻繁に現れる。辞書での分布と発話での分布が逆転している音として押さえる。',
    },
    {
      q: '速い発話で the が聞こえない。',
      a:
        '弱化と同化が起きている。in the は /ɪn ðə/ から [ɪnnə] のように /ð/ が前の /n/ に同化し、with them では二つの歯音が一つに融合する。消えたのではなく前後に溶け込んでいる。同化と脱落の規則の側で詳しく扱う領域。',
    },
    {
      q: 'breath と breathe はどう違うのか。',
      a:
        '名詞 breath は /brɛθ/ で無声、動詞 breathe は /brið/ で有声。母音も変わる。bath と bathe、cloth と clothe も同じ型で、名詞が無声・動詞が有声という対応がある。綴りの e が有声化の合図になっている。',
    },
  ],
  relatedRules: [
    'voicing',
    'place-of-articulation',
    'manner-of-articulation',
    'assimilation',
    'elision',
    'linking',
  ],
  notes: [
    '/ð/ を含む内容語は mother, father, brother, other, weather, together, either, rather, gather, leather, feather のように -ther 型に集中する。',
    'with は米語では /wɪθ/ が優勢だが /wɪð/ も用いられ、後続語の有声性に影響される話者もいる。',
    'イングランドの都市方言では /ð/ が /v/ に置き換わる（th-fronting）。brother が「ブラヴァ」のように聞こえる。',
    'clothes は /kloʊðz/ の形が維持されず、標準的に /kloʊz/ と発音される。close（動詞）と同音になる。-ths / -thes の連続は英語話者も簡略化する。',
  ],
};
