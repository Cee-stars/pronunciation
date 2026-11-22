import type { Topic } from '../../types';

export const usVsUk: Topic = {
  id: 'us-vs-uk',
  title: 'アメリカ英語とイギリス英語の差',
  titleEn: 'General American vs Received Pronunciation',
  genre: '方言・変種',
  oneLiner:
    '発音の差は無数にあるように見えて、実際は少数の体系的な違いに還元できる。最大のものは r を読むかどうかで、これ一つで印象の大半が決まる。',
  sections: [
    {
      heading: '最大の差 — rhotic か non-rhotic か',
      body: [
        'アメリカ英語は母音の後の r を発音する（rhotic）。イギリス標準発音は発音しない（non-rhotic）。car, bird, letter, hard, more — これらすべてで差が出るため、出現頻度が極めて高い。',
        '非 rhotic でも、次に母音が続くときは r が復活する（linking R: far away）。さらに本来 r が無いところにまで r を入れる話者もいる（intrusive R: idea of → アイディアロヴ）。',
      ],
      examples: [
        { text: 'car', ipa: 'kɑr', note: '英: /kɑː/' },
        { text: 'bird', ipa: 'bɝd', note: '英: /bɜːd/' },
        { text: 'teacher', ipa: 'ˈtitʃɚ', note: '英: /ˈtiːtʃə/' },
        { text: 'far away', ipa: 'fɑr əˈweɪ', note: '英でも母音が続くので r が出る' },
      ],
    },
    {
      heading: '母音の対応表',
      table: {
        caption: '同じ語に対する米英の母音',
        headers: ['語群', '米（GA）', '英（RP）', '例'],
        rows: [
          ['BATH', 'æ', 'ɑː', 'ask, bath, dance, half, can not'],
          ['LOT', 'ɑ', 'ɒ', 'hot, dog, lot'],
          ['CLOTH', 'ɔ', 'ɒ', 'cloth, off, cost'],
          ['THOUGHT', 'ɔ（または ɑ）', 'ɔː', 'thought, law'],
          ['GOAT', 'oʊ', 'əʊ', 'go, boat'],
          ['NURSE', 'ɝ', 'ɜː', 'bird, work'],
          ['letter', 'ɚ', 'ə', 'teacher, water'],
          ['NEAR', 'ɪr', 'ɪə', 'here, beer'],
          ['SQUARE', 'ɛr', 'eə / ɛː', 'air, bear'],
          ['CURE', 'ʊr', 'ʊə / ɔː', 'tour, sure'],
          ['START', 'ɑr', 'ɑː', 'car, hard'],
        ],
      },
    },
    {
      heading: 'BATH set — 語彙リストとして覚える領域',
      body: [
        'ask, bath, dance, half, path, laugh, can not, class, grass, after, example など、特定の語群だけが英で /ɑː/ になる。規則ではなく語ごとに決まっているので、該当語を覚えるしかない。',
        '北部イングランドやアイルランドでは /æ/ のままで、イギリス国内でも分かれる。',
      ],
      examples: [
        { text: 'ask', ipa: 'æsk', note: '英: /ɑːsk/' },
        { text: 'dance', ipa: 'dæns', note: '英: /dɑːns/' },
        { text: 'laugh', ipa: 'læf', note: '英: /lɑːf/' },
      ],
    },
    {
      heading: '子音の差',
      list: [
        'flap T — 米では water, better が [ɾ] になる。英では [t] のままか声門閉鎖音 [ʔ]。最も目立つ差の一つ。',
        '声門閉鎖音 — 英（ロンドン系）では母音の前でも起きる（water [ˈwɔːʔə]）。米では /n/ の前に限られる（button）。',
        'yod 脱落 — 米は new /nu/、tune /tun/。英は /njuː/、/tjuːn/（または口蓋化して /tʃuːn/）。',
        'dark L — 米では語頭以外ほぼすべて dark。英は語末・子音前のみで、母音化は主にロンドン系。',
        '語末の -ile — 米 /əl/（fertile /ˈfɝɾl̩/）、英 /aɪl/（/ˈfɜːtaɪl/）。',
      ],
    },
    {
      heading: '強勢の差',
      table: {
        headers: ['語', '米', '英'],
        rows: [
          ['address（名詞）', 'ˈædrɛs', 'əˈdrɛs'],
          ['garage', 'ɡəˈrɑʒ', 'ˈɡærɑːʒ / ˈɡærɪdʒ'],
          ['advertisement', 'ˌædvɚˈtaɪzmənt', 'ədˈvɜːtɪsmənt'],
          ['laboratory', 'ˈlæbrəˌtɔri', 'ləˈbɒrətri'],
          ['ballet', 'bæˈleɪ', 'ˈbæleɪ'],
          ['adult', 'əˈdʌlt', 'ˈædʌlt'],
        ],
      },
      body: [
        '-ary, -ory, -ery で終わる語は、米で第二強勢が残り音節が保たれるのに対し、英では潰れて音節数が減る（necessary 米4音節／英3音節、secretary も同様）。',
      ],
    },
    {
      heading: 'どちらを学ぶか',
      list: [
        'どちらでもよいが、一つに決めて混ぜないこと。rhotic で話しながら BATH set を /ɑː/ にすると、どの地域の話者でもない発音になる。',
        '聞き取りは両方できる必要がある。産出は一つでよい。',
        '本アプリはアメリカ英語を基準とし、差がある項目には各エントリの補足で明示している。',
      ],
    },
  ],
  lecture: [
    '「差は無数にあるように見えるが、体系的な違いは十数個しかない」と最初に言う。網羅不能だという印象を先に打ち消す。',
    'r の有無から入る。car, bird, teacher を両方で言って聞かせる。これ一つで印象の大半が決まると伝える。',
    '母音の対応表を見せる。語ごとに覚えるのではなく語群ごとに移ると示す。',
    'BATH set だけは規則化できず語彙リストだと明言する。例外を例外として扱う。',
    'flap T と yod 脱落を子音側の代表として挙げる。water と new の2語で足りる。',
    '強勢の差を見せる。address, garage, advertisement。同じ語で強勢が動くと別語に聞こえることを確認させる。',
    '最後に「一つに決めて混ぜない」と締める。学習方針の話で終えると実用的。',
  ],
  faq: [
    {
      q: 'アメリカ英語とイギリス英語、どちらが「正しい」のか。',
      a:
        'どちらも標準。選ぶ基準は目的（誰と話すか、どの試験を受けるか、どの教材が手に入るか）であって優劣ではない。日本では米英語の教材が多く、音源も入手しやすい。',
    },
    {
      q: '混ぜるとどうなるか。',
      a:
        '通じなくなることはないが、一貫性のない発音として聞かれる。とくに r の有無は体系の根幹なので、ここだけは統一する価値がある。',
    },
    {
      q: 'イギリス英語＝RP なのか。',
      a:
        '違う。RP はイギリスの一変種にすぎず、実際の話者は数パーセント。辞書が基準に採用しているため代表扱いされているだけで、ロンドン、北部、スコットランドはそれぞれ大きく異なる。',
    },
  ],
  related: ['nurse', 'letter', 'trap', 'thought', 'lot', 'flap-t', 'glottal-stop', 'yod-dropping', 'dark-l', 'mergers', 'linking'],
  notes: ['綴りの差（color / colour）は発音とは独立の問題で、発音の差と対応していない。'],
};
