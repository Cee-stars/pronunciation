import type { Phoneme } from '../../types';

export const kit: Phoneme = {
  id: 'kit',
  ipa: 'ɪ',
  type: 'vowel',
  group: '短母音（弛緩母音）',
  keyword: 'KIT',
  nickname: '力を抜いた「イ」',
  oneLiner:
    '舌を高い位置に上げるが、/i/ ほど前にも高くにも押し込まない、前寄り・高・非円唇の弛緩母音。日本語の「イ」より脱力していて、「イ」と「エ」の中間に聞こえる。',
  articulation: {
    voicing: '有声',
    tongue: '舌は高めだが /i/ より一段低く、やや後ろ。舌に力を入れない。舌の両脇が上奥歯に軽く触れる程度。',
    lips: '丸めない。/i/ のように横に引かない。自然な脱力した形。',
    vowel: {
      height: '高（やや下がった高さ）',
      backness: '前舌（/i/ より中寄り）',
      rounded: false,
      tension: 'lax',
      jaw: 'ほとんど下げない。わずかに開く。',
    },
  },
  howTo: [
    '日本語の「イ」を言う。',
    '舌と唇の力を抜く。唇を横に引くのをやめ、舌を少し落として後ろに緩める。',
    '音が「イ」から「エ」のほうに一歩動いた位置で止める。これが /ɪ/。',
    '長さを伸ばさない。伸ばすと /i/ に寄って聞こえるので、短く軽く切る。',
  ],
  listenFor: [
    '脱力した曖昧な響き。/i/ の「張った鋭い響き」と対になる。',
    '短い。/i/ は明確に長く、/ɪ/ はぱっと切れる。長さが最も分かりやすい手がかり。',
    '語末では出ない（英語の /ɪ/ は語末に立たない）。語末の「イ」は /i/。',
    '強勢のない音節では /ə/ と交替しやすく、話者によって曖昧になる（rabbit の第2音節）。',
  ],
  l1: {
    substitute: '日本語の「イ」（緊張した高前舌母音）',
    why:
      '日本語の「イ」は英語の /i/ に近い緊張母音で、/ɪ/ に当たる弛緩母音が日本語の体系に存在しない。そのため /ɪ/ も /i/ も同じ「イ」に吸収される。',
    symptom:
      'sit が seat、fit が feet、live が leave に聞こえる。綴りの短さに関係なく全部「イー」寄りになるため、文全体が間延びして聞こえる。',
    examples: ['sit を「シート」寄りに読み seat と混同される', 'ship を sheep と取られる'],
  },
  contrasts: [
    {
      withId: 'fleece',
      withIpa: 'i',
      difference:
        '/i/ は舌をさらに高く前に押し上げ、唇を横に引く緊張母音。/ɪ/ は脱力して舌が一段下がり中寄りになる弛緩母音。長さも /i/ が明確に長い。',
      listenFor:
        'まず長さ。/i/ は伸び、/ɪ/ は切れる。次に響きの鋭さ。/i/ は金属的に張り、/ɪ/ はぼやける。',
      whyHard: '日本語の「イ」が /i/ 側に寄っているため、/ɪ/ が「短い『イ』」ではなく「別の音」だと認識されにくい。',
      pairs: [
        { a: 'sit', aIpa: 'sɪt', b: 'seat', bIpa: 'sit' },
        { a: 'fit', aIpa: 'fɪt', b: 'feet', bIpa: 'fit' },
        { a: 'ship', aIpa: 'ʃɪp', b: 'sheep', bIpa: 'ʃip' },
        { a: 'live', aIpa: 'lɪv', b: 'leave', bIpa: 'liv' },
        { a: 'bitch', aIpa: 'bɪtʃ', b: 'beach', bIpa: 'bitʃ', note: '取り違えると問題になる代表例' },
        { a: 'hill', aIpa: 'hɪl', b: 'heal', bIpa: 'hil' },
      ],
    },
    {
      withId: 'dress',
      withIpa: 'ɛ',
      difference: 'どちらも前舌・弛緩。違いは舌の高さだけで、/ɪ/ が高く /ɛ/ が一段低い。',
      listenFor: '音の重心。/ɪ/ は口の上のほう、/ɛ/ は中ほどで鳴る。顎の下がり方が /ɛ/ のほうが大きい。',
      pairs: [
        { a: 'bit', aIpa: 'bɪt', b: 'bet', bIpa: 'bɛt' },
        { a: 'pin', aIpa: 'pɪn', b: 'pen', bIpa: 'pɛn', note: '米南部では両者が合流する（pin-pen merger）' },
        { a: 'lift', aIpa: 'lɪft', b: 'left', bIpa: 'lɛft' },
        { a: 'tin', aIpa: 'tɪn', b: 'ten', bIpa: 'tɛn' },
      ],
    },
  ],
  spellings: [
    {
      pattern: 'i + 子音（閉音節）',
      examples: ['sit', 'big', 'this', 'king', 'bridge'],
      frequency: '最頻',
    },
    {
      pattern: 'y（語中）',
      examples: ['gym', 'myth', 'system', 'crystal'],
      frequency: '頻出',
    },
    {
      pattern: 'e（強勢のない音節）',
      examples: ['decide', 'begin', 'return', 'exam'],
      frequency: '頻出',
      note: '話者により /ə/ とも実現される。辞書は /ɪ/ と /ə/ で表記が揺れる。',
    },
    {
      pattern: '-age / -ate / -ace（強勢のない語尾）',
      examples: ['village', 'climate', 'palace', 'private'],
      frequency: '頻出',
    },
    { pattern: 'ui', examples: ['build', 'guilt', 'circuit'], frequency: '少数' },
    { pattern: 'ee / ea', examples: ['been', 'breeches'], frequency: '例外', note: 'been は米で /bɪn/ とも /bin/ とも。' },
    { pattern: 'o', examples: ['women'], frequency: '例外' },
    { pattern: 'a', examples: ['damage', 'orange'], frequency: '例外', note: '語尾の弱化による。' },
  ],
  examples: [
    { word: 'it', ipa: 'ɪt', position: '語頭' },
    { word: 'if', ipa: 'ɪf', position: '語頭' },
    { word: 'big', ipa: 'bɪɡ', position: '語中' },
    { word: 'this', ipa: 'ðɪs', position: '語中' },
    { word: 'minute', ipa: 'ˈmɪnɪt', position: '語中', note: '両音節とも /ɪ/' },
    { word: 'business', ipa: 'ˈbɪznəs', position: '語頭', note: '綴りの u は読まれない' },
  ],
  lecture: [
    '最初に「英語には『イ』が2種類ある」と宣言し、長短ではなく緊張度の差だと先に言う。長短だと伝えると「短く言えばいい」と誤解され、/i/ を短く切るだけの発音になる。',
    '日本語の「イ」を言わせ、それは英語の /i/ 側だと位置づける。「すでに知っている音は /i/、知らない音が /ɪ/」という整理をする。',
    '「唇を引くのをやめて、舌の力を抜いて」と指示する。脱力が鍵なので、力を入れる指示は一切しない。',
    'sit / seat で長さの差を聞かせる。長さは最も分かりやすい手がかりなので最初に使う。',
    '次に ship / sheep で響きの差（鋭いかぼやけるか）を聞かせる。長さだけに頼らせない。',
    'bit / bet で /ɛ/ との高さの差を示し、/ɪ/ が「/i/ と /ɛ/ の間」という座標にあることを確定させる。',
    '最後に「語末には /ɪ/ は立たない」と伝える。city, happy の語尾は /i/ だと示すと、綴り -y への対応が整理される。',
  ],
  faq: [
    {
      q: '/ɪ/ は「イとエの中間」と説明していいか。',
      a:
        '位置としては正しい（舌の高さが /i/ と /ɛ/ の間にある）。ただし「エ」寄りに言わせすぎると /ɛ/ になるので、「イから力を抜いた音」という指示のほうが実際には当たりやすい。両方併用するとよい。',
    },
    {
      q: '辞書で /i/ と /ɪ/ の表記が揺れている語があるのはなぜか。',
      a:
        '強勢のない音節では両者の区別が中和する話者がいるため（happy の語尾、been、pretty など）。この現象を happY tensing と呼ぶ。地域差・世代差があり、どちらでも通じる領域。',
    },
    {
      q: '長さだけで区別してはいけないのか。',
      a:
        '実用上は長さが最も有効な手がかりだが、長さだけに頼ると問題が出る。英語では無声子音の前で母音が短縮するため、seat の /i/ は sit の /ɪ/ と長さが近づく。最終的には響きの差で判別する必要がある。',
    },
  ],
  relatedRules: ['vowel-reduction', 'happy-tensing', 'vowel-length-before-voiced'],
  notes: [
    '米南部では /ɪ/ と /ɛ/ が鼻音の前で合流する（pin = pen）。',
    '強勢のない /ɪ/ は /ə/ と交替しやすく、辞書間で表記が一致しない。',
  ],
};
