import type { Rule } from '../../types';

export const suffixStressShift: Rule = {
  id: 'suffix-stress-shift',
  title: '接尾辞による強勢移動',
  titleEn: 'Stress-shifting suffixes',
  genre: '強勢・リズム',
  oneLiner:
    '英語の接尾辞は強勢に対する振る舞いで3種類に分かれる。強勢を動かさない中立型、自分が強勢を取る吸収型、直前の音節に強勢を引き寄せる移動型である。この3分類を知っていれば、派生語の強勢位置は辞書を引かずに決まり、母音の弱化も自動的に決まる。',
  condition: [
    '語が語幹＋接尾辞の構造を持っている（派生語である）。単純語には適用されない。',
    '接尾辞がどの型かを判定できる。中立型（-ness, -less, -ful, -ly, -er, -ing, -ed, -ment, -able, -hood, -ship）、吸収型（-ee, -eer, -ese, -ique, -esque, -oon, -ette）、移動型（-ic, -ity, -ion, -ional, -ical, -ious, -ify, -graphy, -logy, -ian, -ial）。',
    '移動型の場合は、接尾辞の直前の音節が特定できる。音節の切り方を間違えると位置も1つずれる。',
    '語幹の元の強勢位置が分かっている。中立型では語幹の位置がそのまま残り、移動型では語幹の位置が捨てられる。',
    '複数の接尾辞が重なる場合は外側（最後）の接尾辞が勝つ（nation → national → nationality では最終的に -ity の規則が効く）。',
  ],
  result:
    '中立型では語幹の強勢がそのまま残り、音節が増えても山の位置は動かない。吸収型では接尾辞自身が第一強勢を取り、語幹の元の強勢は第二強勢に格下げされるか消える。移動型では接尾辞の直前の音節に第一強勢が移り、語幹の元の強勢位置は無強勢になって母音が /ə/ に還元される。いずれの場合も強勢が動けば母音が丸ごと入れ替わるため、派生語は語幹と同じ音の並びを持たない。photograph /ˈfoʊtəˌɡræf/ と photography /fəˈtɑɡrəfi/ は綴りを共有していても、共通する母音が1つもない。',
  why:
    '接尾辞の3分類は、英語語彙の二層構造の反映である。中立型の接尾辞は古英語期からの固有語層に属し、語幹を独立した語として扱うため強勢に干渉しない。移動型・吸収型はラテン語・フランス語経由で入った層に属し、語末から数えて強勢を決めるロマンス語の規則を持ち込んでいる。だから移動型接尾辞は「語末からの距離」で位置を決め、結果として直前の音節に強勢が落ちる。吸収型はフランス語で語末強勢だった語をそのまま受け入れたもので、-ee, -eer, -ese, -esque はいずれもフランス語の語末強勢の痕跡である。学習者にとって重要なのは由来ではなく、この分類が派生語の母音を自動的に決めてしまうという事実である。',
  examples: [
    {
      text: 'happy → happiness / care → careless / beautiful / quickly（中立型）',
      ipa: 'ˈhæpi → ˈhæpinəs / ˈkɛr → ˈkɛrləs / ˈbjutəfəl / ˈkwɪkli',
      naive: 'hæpiˈnɛs / kɛrˈlɛs（接尾辞に強勢を置く誤り）',
      note: '-ness, -less, -ful, -ly は強勢に触らない。音節が増えても山は第1音節に残り、増えた音節は全部谷になる。',
    },
    {
      text: 'develop → development / agree → agreement / teach → teacher',
      ipa: 'dɪˈvɛləp → dɪˈvɛləpmənt / əˈɡri → əˈɡrimənt / ˈtitʃ → ˈtitʃər',
      note: '-ment, -er も中立型。語幹がもともと第2音節強勢なら、派生後も第2音節のまま。中立型は「語幹を調べれば終わり」という点で最も扱いやすい。',
    },
    {
      text: 'employ → employee / engineer / Japanese（吸収型）',
      ipa: 'ɪmˈplɔɪ → ˌɛmplɔɪˈi / ˌɛndʒəˈnɪr / ˌdʒæpəˈniz',
      naive: 'ɪmˈplɔɪi / ˈɛndʒəˌnɪr / ˈdʒæpəniz',
      note: '-ee, -eer, -ese は接尾辞自身が第一強勢を取る。語幹側は第二強勢に下がる（employ の -ploy- の /ɔɪ/ は音色を保つが山ではなくなる）。',
    },
    {
      text: 'unique / picturesque / balloon / cartoon / cigarette（吸収型）',
      ipa: 'juˈnik / ˌpɪktʃəˈrɛsk / bəˈlun / kɑrˈtun / ˌsɪɡəˈrɛt',
      naive: 'ˈjunik / ˈpɪktʃərɛsk / ˈbælun / ˈkɑrtun',
      note: '-ique, -esque, -oon, -ette も語末に強勢を引く。日本語に入った形（ユニーク、バルーン、カートゥーン、シガレット）は語頭強勢なので干渉が強い。',
    },
    {
      text: 'photograph / photography / photographic（移動型 -graphy, -ic）',
      ipa: 'ˈfoʊtəˌɡræf / fəˈtɑɡrəfi / ˌfoʊtəˈɡræfɪk',
      naive: 'ˈfoʊtoʊɡræf / ˈfoʊtoʊɡræfi / ˈfoʊtoʊɡræfɪk',
      note: 'この3語がこの項目の中心例。-graphy は直前の -tog- に、-ic は直前の -graph- に強勢を引く。結果として母音は oʊ–ə–æ → ə–ɑ–ə → oʊ–ə–æ と総入れ替えになる（母音の弱化の項と同じ例）。',
    },
    {
      text: 'economy / economic / economics / economical',
      ipa: 'ɪˈkɑnəmi / ˌɛkəˈnɑmɪk / ˌɛkəˈnɑmɪks / ˌɛkəˈnɑmɪkəl',
      naive: 'ˌɛkəˈnɑmi / ɪˈkɑnəmɪk',
      note: '-y の形では第2音節、-ic / -ics / -ical が付くと第3音節。第1音節の e は /ɪ/ → /ɛ/ に開き、第2音節の o は /ɑ/ → /ə/ に潰れる。語幹が同じでも音が共有されない典型。',
    },
    {
      text: 'politics / political / politician',
      ipa: 'ˈpɑlətɪks / pəˈlɪtɪkəl / ˌpɑləˈtɪʃən',
      naive: 'pəˈlɪtɪks / ˈpɑlətɪkəl / pəˈlɪtɪʃən',
      note: '3語で強勢が第1→第2→第3音節と1つずつ動く。-ical は直前の -li- に、-ian は直前の -ti- に引く。politician では -tic- が /tɪʃ/ に変わる口蓋化も同時に起きる。',
    },
    {
      text: 'atom / atomic',
      ipa: 'ˈætəm / əˈtɑmɪk',
      naive: 'ˈætəmɪk',
      note: '移動型 -ic の最小例。2音節から3音節になり、強勢が第1→第2音節へ。同時に a が /æ/ → /ə/、o が /ə/ → /ɑ/ と交換される。',
    },
    {
      text: 'Japan / Japanese',
      ipa: 'dʒəˈpæn / ˌdʒæpəˈniz',
      naive: 'ˈdʒæpæn / dʒəˈpæniz',
      note: '吸収型 -ese。Japan では第1音節が /ə/、Japanese では第1音節が第二強勢を得て /æ/ が復活し、第2音節が /ə/ に潰れる。母音が入れ替わる方向まで予測できる。',
    },
    {
      text: 'nation / national / nationality',
      ipa: 'ˈneɪʃən / ˈnæʃənəl / ˌnæʃəˈnæləti',
      naive: 'ˈneɪʃənəl / ˈnæʃənæləti',
      note: '-al は位置を動かさないが母音は短くした（neɪ → næ）。さらに -ity が付くと強勢は -al の直前へ移る。接尾辞が重なったときは外側が勝つことを示す例。',
    },
    {
      text: 'electric / electricity / electrician',
      ipa: 'ɪˈlɛktrɪk / ˌɪlɛkˈtrɪsəti / ˌɪlɛkˈtrɪʃən',
      note: '-ity, -ian はいずれも直前の音節に強勢を引くので、-tric- が山になる。同時に /k/ が /s/ /ʃ/ に変わる子音交替も起きる。',
    },
    {
      text: 'biology / technology / personality / solidify',
      ipa: 'baɪˈɑlədʒi / tɛkˈnɑlədʒi / ˌpɝsəˈnæləti / səˈlɪdəfaɪ',
      note: '-logy, -ity, -ify も移動型。接尾辞を見つけてその直前を山にする、という同一の操作でどれも解ける。',
    },
  ],
  listenFor: [
    '同系語を並べて聴く。同じ語幹を持つ語で山の位置が動いていれば移動型の接尾辞が働いている。-ic, -ity, -ion, -ical, -graphy, -logy が聞こえたら、その直前に山があると予測して待ち構える。',
    '語末に強い山が来るかを聴く。-ee, -eer, -ese, -oon, -esque は語末が最も長く大きく響く。日本語話者の耳はここを語頭強勢で予測しがちなので、意識して語末を待つ。',
    '中立型では「語幹の響きがそのまま残っている」ことを確認する。careless, happiness は care, happy の響きを保つ。残っていれば中立型、崩れていれば移動型である。',
    '移動型が付いた語では、語幹の元の強勢位置が /ə/ に潰れていることを聴く。photography の第1音節、atomic の第1音節が「色のない短い音」になっているかが判定点になる。',
    '子音の変化も同時に起きていないか聴く。-ity, -ian, -ion の前では /k/ → /s/ /ʃ/、/t/ → /ʃ/ といった交替が頻繁に起こる（electric → electricity、politics → politician）。',
  ],
  exceptions: [
    '-able は原則中立だが、語幹が短いと強勢が揺れる語がある（admirable /ˈædmərəbəl/ は admire /ədˈmaɪr/ の位置を保たない）。',
    '-ic の例外として Arabic /ˈærəbɪk/、Catholic /ˈkæθəlɪk/、politic /ˈpɑlətɪk/、arithmetic（名詞 /əˈrɪθmətɪk/）がある。-ic が常に直前を引くわけではない。',
    '-ment は名詞化では中立だが、動詞の -ment（implement /ˈɪmpləˌmɛnt/ 対名詞 /ˈɪmpləmənt/）では語末母音の扱いが変わる。',
    '-ee でも committee /kəˈmɪti/、coffee /ˈkɔfi/ は吸収型として振る舞わない。綴りが -ee であることと接尾辞 -ee であることは別である。',
    '-y, -al, -ous は語によって中立にも移動型にもなる。photograph → photography は移動、nation → national は位置保持。接尾辞の綴りだけでは決まらない層が残る。',
    '吸収型接尾辞を持つ語も、文中で対比のない位置に来ると語末強勢が弱まり、語頭の第二強勢のほうが目立つことがある（Japanese の引用形と文中形）。',
  ],
  lecture: [
    '最初に「接尾辞は3種類しかない」と枠を与える。学習者は派生語ごとに強勢を覚え直していると思っているので、分類が3つで済むと聞くだけで負荷が下がる。',
    '中立型から始める。-ness, -less, -ful, -ly, -er, -ing, -ed, -ment は語幹に触らない。happy → happiness、care → careless を板書し、山が動かず谷が増えるだけだと示す。ここは直感と一致するので短く済ませる。',
    '吸収型に進む。-ee, -eer, -ese, -ique, -esque, -oon は接尾辞自身が山になる。employee, engineer, Japanese, unique, balloon を読み上げ、日本語に入った形（エンジニア、ジャパニーズ、ユニーク、バルーン）と対比させる。日本語形はすべて語頭強勢なので、干渉がはっきり見える。',
    '移動型が本題だと宣言する。-ic, -ity, -ion, -ical, -ious, -ify, -graphy, -logy は「自分の直前の音節に強勢を呼ぶ」。操作は1つだけで、接尾辞を見つけてその左隣を山にする、と手順の形で渡す。',
    'photograph → photography → photographic を実演する。綴りは1文字も変わらないのに母音が総入れ替えになることを、3語を並べて読み上げて示す。ここが講義の山で、母音の弱化の項と同じ例を使うのは意図的だと言い添える。',
    'economy / economic / economics、politics / political / politician、nation / national / nationality を続けて出す。3語セットを3つ見せると、個別の暗記ではなく操作だと腑に落ちる。',
    '接尾辞が重なったら外側が勝つ、と整理する。nation → national（位置保持）→ nationality（-ity が直前へ引く）。重なりの処理を示しておくと長い語でも自力で解ける。',
    '最後に例外を2つだけ挙げて締める。Arabic, Catholic は -ic でも動かない。committee の -ee は吸収型ではない。「綴りが接尾辞に見えても接尾辞でないことがある」と確認して終わる。',
  ],
  faq: [
    {
      q: '移動型の「直前の音節」はどう数えるのか。',
      a:
        '音節で数える。文字ではない。photography なら pho-tog-ra-phy で -graphy の直前は -tog-。economic なら e-co-nom-ic で -ic の直前は -nom-。音節の切り方が曖昧な語では、強勢の来る位置から逆算して切ると一致する。',
    },
    {
      q: '接尾辞の型は覚えるしかないのか。',
      a:
        '覚える量は多くない。中立型はいずれも古英語起源で、付けても元の語が透けて見える（happiness に happy が見える）。移動型・吸収型はラテン・フランス語起源で、付くと語幹の響きが崩れる。「語幹がそのまま聞こえるか」を基準にすると、型は後から推定できる。',
    },
    {
      q: '強勢が動いたとき、母音の変化まで覚える必要があるか。',
      a:
        '覚える必要はない。強勢が動けば母音は自動的に決まる。山になった音節は完全母音、谷になった音節は /ə/。photography の第1音節が /ə/ になるのは規則の帰結であって、別に記憶する項目ではない。覚えるのは強勢の位置だけでよい。',
    },
    {
      q: '-ion が付くと必ず直前に強勢が来るのか。',
      a:
        'ほぼ必ず来る。-ion, -ian, -ial, -ious, -ity はこの点で非常に安定していて、例外が少ない。educate → education、inform → information、decide → decision、president → presidential のように、-ion / -ial の直前に山が立つ。-ic より信頼できる規則群である。',
    },
  ],
  related: [
    'word-stress-rules',
    'noun-verb-stress',
    'compound-stress',
    'vowel-reduction',
    'schwa',
    'rhythm',
    'sentence-stress',
    'palatalization',
  ],
  notes: [
    '語彙を増やす段階でこの3分類を知っていると、派生語を1語ずつ覚える必要がなくなる。語幹1つと接尾辞の型で派生形全体の発音が決まるため、学習効率への寄与が大きい。',
    '移動型接尾辞の前では子音の交替（口蓋化）も頻繁に起きる。politics → politician の /k/ → /ʃ/、electric → electricity の /k/ → /s/。強勢の移動と同時に起きるため、派生語が語幹と似て聞こえない理由は二重である。',
    '第二強勢の位置は第一強勢から2音節以上離れたところに立つ。Japanese /ˌdʒæpəˈniz/ の語頭、economic /ˌɛkəˈnɑmɪk/ の語頭がこれで、ここは還元されない。',
    '英音と米音で揺れる派生語がある。-ary, -ory の扱い（necessary 英 /ˈnɛsəsəri/、米 /ˈnɛsəˌsɛri/）、laboratory（英 /ləˈbɒrətri/、米 /ˈlæbrəˌtɔri/）が代表例。',
  ],
};
