import type { Rule } from '../../types';

export const yodDropping: Rule = {
  id: 'yod-dropping',
  title: 'yod 脱落 — new が /nu/ になる',
  titleEn: 'Yod-dropping',
  genre: '方言・変種',
  oneLiner:
    'アメリカ英語では歯茎音の後の /j/ が脱落し、new が /nu/、tune が /tun/ になる。イギリス英語では /j/ が残る。英米差として最も体系的で予測しやすい現象。',
  condition: [
    '綴りが u, ew, ue, eu で、本来 /ju/ と読まれる。',
    '直前の子音が歯茎音（/t/ /d/ /n/ /s/ /z/ /θ/ /l/）である。',
    'アメリカ英語である。',
  ],
  result: '/j/ が脱落して /u/ だけになる。/nju/ → /nu/、/tjun/ → /tun/。',
  why:
    '歯茎音と /j/ はどちらも舌の前部を使うため、連続させると調音上の負担が大きい。これを避ける方向に変化した。イギリス英語では同じ環境で別の解決（/tj/ → /tʃ/ の口蓋化）を取る話者もいる。',
  examples: [
    { text: 'new', ipa: 'nu', naive: 'nju', note: '英: /njuː/' },
    { text: 'tune', ipa: 'tun', naive: 'tjun', note: '英: /tjuːn/ または /tʃuːn/' },
    { text: 'duty', ipa: 'ˈduti', naive: 'ˈdjuti', note: '英: /ˈdjuːti/。米では flap も起きて [ˈduɾi]' },
    { text: 'student', ipa: 'ˈstudənt', naive: 'ˈstjudənt' },
    { text: 'Tuesday', ipa: 'ˈtuzdeɪ', naive: 'ˈtjuzdeɪ' },
    { text: 'news', ipa: 'nuz', naive: 'njuz' },
    { text: 'music', ipa: 'ˈmjuzɪk', note: '/m/ は歯茎音でないので脱落しない。米英共通' },
    { text: 'cute', ipa: 'kjut', note: '/k/ の後も脱落しない' },
    { text: 'few', ipa: 'fju', note: '/f/ の後も脱落しない' },
  ],
  listenFor: [
    '歯茎音の直後に「ユ」の渡りが入るかどうか。入らなければ米、入れば英。',
    'news, Tuesday, student は話者の出身を判別する目印になる。',
    'music, cute, few, beautiful では米英とも /j/ が残る。ここで差は出ない。',
  ],
  exceptions: [
    '唇音（/p/ /b/ /m/ /f/）と軟口蓋音（/k/ /ɡ/ /h/）の後では脱落しない。米英ともに /ju/。',
    '/r/ の後は米英とも脱落する（rude /rud/）。',
    'アメリカでも地域や語によって揺れがある。',
  ],
  lecture: [
    'new を米英で読み分けて聞かせる。1語で差が伝わる。',
    '条件を示す。「直前が歯茎音かどうか」。歯茎音の一覧（t, d, n, s, z, θ, l）を挙げる。',
    'music, cute, few では米英とも /j/ が残ると対比する。全部が脱落するわけではないと分かる。',
    'なぜ歯茎音の後だけなのかを説明する。舌の前部を使う音の連続を避けるため。',
    '学習上は「米英語を学ぶなら歯茎音の後の /j/ は落とす」と1行で運用できると締める。',
  ],
  faq: [
    {
      q: 'どちらで発音すべきか。',
      a:
        '学んでいる変種に合わせる。米英語なら脱落させる。混在させても通じるが、news を /njuz/ と読むとイギリス寄りに聞こえる。',
    },
    {
      q: 'イギリスでは /tʃuːn/ とも聞こえるが。',
      a:
        '/tj/ が口蓋化して /tʃ/ になる変化（yod coalescence）が進んでいるため。tune が「チューン」、Tuesday が「チューズデイ」に近くなる。イギリス英語では脱落ではなく融合という別の解決が取られている。',
    },
  ],
  related: ['goose', 'palatalization', 'us-vs-uk'],
};
