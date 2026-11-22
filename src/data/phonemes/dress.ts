import type { Phoneme } from '../../types';

export const dress: Phoneme = {
  id: 'dress',
  ipa: 'ɛ',
  type: 'vowel',
  group: '短母音（弛緩母音）',
  keyword: 'DRESS',
  nickname: '日本語の「エ」とほぼ同じ音',
  oneLiner:
    '舌を前に置き、口の中ほどの高さで出す前舌・中低・非円唇の弛緩母音。日本語の「エ」とほぼ一致するため、日本語話者にとって最も習得が容易な母音。',
  articulation: {
    voicing: '有声',
    tongue: '舌は前、高さは中ほど。舌先は下前歯の裏に軽く触れる。',
    lips: '丸めない。自然に開く。横に引く必要はない。',
    vowel: {
      height: '中低',
      backness: '前舌',
      rounded: false,
      tension: 'lax',
      jaw: '中程度に下げる。/ɪ/ より開き、/æ/ より狭い。',
    },
  },
  howTo: [
    '日本語の「エ」を言う。それでほぼ正しい。',
    '日本語の「エ」よりわずかに口を開く意識を持つと、より英語らしくなる（日本語の「エ」は /ɪ/ と /ɛ/ の中間寄り）。',
    '短く切る。伸ばすと /eɪ/ に聞こえてしまう。',
  ],
  listenFor: [
    '日本語の「エ」と同じ響き。判別の基準として使える唯一の母音なので、他の音の座標を示すときの参照点になる。',
    '短く切れる。伸びて最後が「イ」に動いたら /eɪ/（say の母音）。',
    '/r/ の前では別音素 /ɛr/（SQUARE）になり、音質が変わる（bed と bear の母音は同一ではない）。',
  ],
  l1: {
    substitute: '日本語の「エ」（ほぼ同音なので干渉は小さい）',
    why:
      '日本語の「エ」が英語の /ɛ/ とほぼ同じ位置にあるため、代用がそのまま正解になる。問題が起きるのは逆方向で、/æ/ や /eɪ/ もこの「エ」に吸収してしまう点。',
    symptom:
      '/ɛ/ 自体は通じる。問題は bad を bed、cake を「ケーク」のように、他の音をここに巻き込むこと。',
    examples: ['bad → bed に聞こえる（/æ/ を /ɛ/ で代用）', 'say を「セイ」と平板に読み /eɪ/ の渡りが消える'],
  },
  contrasts: [
    {
      withId: 'trap',
      withIpa: 'æ',
      difference: 'どちらも前舌・弛緩。違いは顎の下がりだけで、/æ/ が一段低い。',
      listenFor:
        '/æ/ のほうが音が長く、鼻音の前では二重母音のように揺れる。/ɛ/ は短く一定。',
      whyHard: '日本語話者は両方「エ」で代用するため、同音になる。最頻の混同。',
      pairs: [
        { a: 'bed', aIpa: 'bɛd', b: 'bad', bIpa: 'bæd' },
        { a: 'men', aIpa: 'mɛn', b: 'man', bIpa: 'mæn' },
        { a: 'pen', aIpa: 'pɛn', b: 'pan', bIpa: 'pæn' },
        { a: 'lend', aIpa: 'lɛnd', b: 'land', bIpa: 'lænd' },
        { a: 'guess', aIpa: 'ɡɛs', b: 'gas', bIpa: 'ɡæs' },
      ],
    },
    {
      withId: 'face',
      withIpa: 'eɪ',
      difference:
        '/ɛ/ は一つの位置で止まる単母音。/eɪ/ は /ɛ/ 付近から始まって舌が /ɪ/ へ上がっていく二重母音。',
      listenFor: '音の終わりが動くかどうか。最後が「イ」に向かって上がれば /eɪ/、動かなければ /ɛ/。',
      whyHard: '日本語の「エー」は長音で動かないため、/eɪ/ を「エー」で代用して /ɛ/ の長いものにしてしまう。',
      pairs: [
        { a: 'met', aIpa: 'mɛt', b: 'mate', bIpa: 'meɪt' },
        { a: 'pen', aIpa: 'pɛn', b: 'pain', bIpa: 'peɪn' },
        { a: 'let', aIpa: 'lɛt', b: 'late', bIpa: 'leɪt' },
        { a: 'sell', aIpa: 'sɛl', b: 'sail', bIpa: 'seɪl' },
        { a: 'west', aIpa: 'wɛst', b: 'waist', bIpa: 'weɪst' },
      ],
    },
    {
      withId: 'kit',
      withIpa: 'ɪ',
      difference: '舌の高さのみの差。/ɪ/ が高く /ɛ/ が低い。',
      listenFor: '顎の開き。/ɛ/ のほうが明らかに口が開いて音の重心が下がる。',
      pairs: [
        { a: 'bet', aIpa: 'bɛt', b: 'bit', bIpa: 'bɪt' },
        { a: 'ten', aIpa: 'tɛn', b: 'tin', bIpa: 'tɪn' },
        { a: 'left', aIpa: 'lɛft', b: 'lift', bIpa: 'lɪft' },
      ],
    },
  ],
  spellings: [
    { pattern: 'e + 子音（閉音節）', examples: ['bed', 'ten', 'help', 'next', 'yes'], frequency: '最頻' },
    { pattern: 'ea', examples: ['head', 'bread', 'dead', 'breath', 'weather'], frequency: '頻出', note: 'ea の最頻は /i/ なので、この群は個別に覚える。' },
    { pattern: 'a（said / says のみ）', examples: ['said', 'says'], frequency: '例外', note: 'say /seɪ/ から不規則に変化。' },
    { pattern: 'ai', examples: ['again', 'against'], frequency: '例外', note: '/əˈɡɛn/。/əˈɡeɪn/ とも読まれる。' },
    { pattern: 'ie', examples: ['friend'], frequency: '例外' },
    { pattern: 'ue', examples: ['guess', 'guest'], frequency: '少数', note: 'u は g を硬音に保つための綴り字で、読まれない。' },
    { pattern: 'eo', examples: ['leopard', 'jeopardy'], frequency: '例外' },
    { pattern: 'ai + r 以外の例外', examples: ['heifer', 'leisure'], frequency: '例外' },
  ],
  examples: [
    { word: 'egg', ipa: 'ɛɡ', position: '語頭' },
    { word: 'end', ipa: 'ɛnd', position: '語頭' },
    { word: 'bed', ipa: 'bɛd', position: '語中' },
    { word: 'help', ipa: 'hɛlp', position: '語中' },
    { word: 'better', ipa: 'ˈbɛtər', position: '語中', note: 'flap T が起きる語' },
    { word: 'measure', ipa: 'ˈmɛʒər', position: '語中' },
  ],
  lecture: [
    'まず「この音は日本語の『エ』でよい」と明言する。全部の母音が難しいと思わせないために、容易な音は容易だと先に言う。これで聞き手の負荷が下がる。',
    'そのうえで /ɛ/ を**座標の基準点**として使うと宣言する。他の母音はこの音からの相対位置で説明できる。',
    '基準からの3方向を示す。顎を下げれば /æ/、舌を上げれば /ɪ/、最後を「イ」に動かせば /eɪ/。',
    'bed / bad、bet / bit、met / mate の3ペアを順に聞かせる。1つの基準から3方向に枝が出る構造を示すと記憶に残る。',
    '注意点として「日本語話者の失敗は /ɛ/ が出せないことではなく、他の音をここに吸収してしまうこと」だと伝える。これが最も実用的な警告。',
    '最後に綴り ea（head, bread）を挙げる。ea は普通 /i/ なので、この語群だけ例外だと示しておく。',
  ],
  faq: [
    {
      q: '記号が /e/ と書かれている辞書があるのはなぜか。',
      a:
        'イギリスの辞書（とくに Longman, Cambridge）は伝統的に /e/ を使う。アメリカ系や IPA 厳密表記では /ɛ/。同じ音を指しているので、表記の流派の違いと理解してよい。',
    },
    {
      q: '日本語の「エ」と完全に同じなのか。',
      a:
        '厳密には日本語の「エ」は /ɛ/ よりわずかに高く（/ɪ/ 寄り）、英語の /ɛ/ のほうが口が開く。ただし実用上の差は小さく、代用しても誤解はほぼ生じない。精密にするなら「少し口を開けて」と足すだけでよい。',
    },
  ],
  relatedRules: ['vowel-length-before-voiced'],
  notes: [
    '米南部では鼻音の前で /ɪ/ と合流する（pen = pin）。',
    '/r/ の前は別音素 /ɛr/（SQUARE）として扱う。bed と bear の母音は同じではない。',
  ],
};
