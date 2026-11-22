import type { SearchRecord } from './types';
import { phonemes, rules, topics } from './data';

/**
 * 統合検索。
 *
 * 全ジャンルのデータを SearchRecord に平坦化して引く。入口を問わない:
 *   "æ" / "ae" / "トラップ" / "TRAP"  → 音素 /æ/
 *   "water" / "better"               → 例語として含むエントリと flap T
 *   "同化" / "assimilation"          → ルール
 *   "ough"                           → 綴りパターン
 */

/** IPA 記号を ASCII で打てるようにするための別名。 */
const asciiAliases: Record<string, string[]> = {
  trap: ['ae', 'ash'],
  kit: ['ih', 'i-short', 'short i'],
  dress: ['eh', 'e'],
  strut: ['uh', 'v-turned'],
  foot: ['uu', 'u-short', 'short u'],
  schwa: ['schwa', 'shuwa', 'syuwa', 'e-turned'],
  fleece: ['ii', 'long i', 'i-long'],
  goose: ['uw', 'long u', 'u-long'],
  lot: ['ah', 'a-script'],
  thought: ['aw', 'open-o', 'oh'],
  face: ['ey', 'ei'],
  price: ['ay', 'ai'],
  choice: ['oy', 'oi'],
  mouth: ['ow', 'au'],
  goat: ['ou', 'o'],
  nurse: ['er', 'ur', 'r-colored'],
  letter: ['schwar', 'er-weak'],
  start: ['ar'],
  north: ['or'],
  near: ['ir'],
  square: ['air', 'er-square'],
  cure: ['ur-cure'],
  th: ['theta', 'th'],
  dh: ['eth', 'dh', 'th-voiced'],
  sh: ['esh', 'sh'],
  zh: ['ezh', 'zh'],
  ch: ['tsh', 'ch'],
  jh: ['dzh', 'j', 'jh'],
  ng: ['eng', 'ng'],
  y: ['j', 'yod'],
};

/** 日本語の通称（カタカナで引かれることを想定）。 */
const jaAliases: Record<string, string[]> = {
  trap: ['トラップ', 'あとえの中間', 'エの口でア'],
  kit: ['キット', 'みじかいイ', 'よわいイ'],
  dress: ['ドレス', 'エ'],
  strut: ['ストラット', 'みじかいア'],
  foot: ['フット', 'みじかいウ'],
  schwa: ['シュワー', 'シュワ', 'あいまいぼいん', '曖昧母音', '弱母音'],
};

function normalize(s: string): string {
  return (
    s
      .toLowerCase()
      .trim()
      // カタカナ → ひらがな
      .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
      // 全角英数 → 半角
      .replace(/[！-～]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
      // 記号・空白を落とす
      .replace(/[\s/[\]（）()「」『』・,.;:!?"'’”]/g, '')
  );
}

let cache: SearchRecord[] | null = null;

/** 全データを検索レコードに平坦化する。初回のみ構築してキャッシュする。 */
export function buildIndex(): SearchRecord[] {
  if (cache) return cache;
  const out: SearchRecord[] = [];

  for (const ph of phonemes) {
    const words = ph.examples.map((e) => e.word);
    const spellingWords = ph.spellings.flatMap((s) => s.examples);
    const pairWords = ph.contrasts.flatMap((c) => c.pairs.flatMap((p) => [p.a, p.b]));
    // 語の中で音素が現れる位置が早いほど加点する。
    // think /θɪŋk/ は /θ/ と /ŋ/ の両方を含むが、頭にある /θ/ の項目を先に出す。
    const keyBonus: Record<string, number> = {};
    for (const e of ph.examples) {
      const at = e.ipa.indexOf(ph.ipa);
      const bonus = at < 0 ? 0 : Math.max(0, 6 - at);
      const k = normalize(e.word);
      keyBonus[k] = Math.max(keyBonus[k] ?? 0, bonus);
    }

    const prose = [
      ph.oneLiner,
      ph.articulation.tongue,
      ph.articulation.lips,
      ...ph.howTo,
      ...ph.listenFor,
      ph.l1.substitute,
      ph.l1.why,
      ph.l1.symptom,
      ...(ph.l1.examples ?? []),
      ...ph.contrasts.flatMap((c) => [c.difference, c.listenFor, c.whyHard ?? '']),
      ...ph.spellings.map((x) => x.note ?? ''),
      ...ph.examples.map((e) => e.note ?? ''),
      ...ph.lecture,
      ...(ph.faq ?? []).flatMap((f) => [f.q, f.a]),
      ...(ph.notes ?? []),
    ].join(' ');
    out.push({
      kind: 'phoneme',
      id: ph.id,
      href: `#/phoneme/${ph.id}`,
      title: `/${ph.ipa}/`,
      subtitle: `${ph.keyword ?? ph.id} — ${ph.nickname}`,
      snippet: ph.oneLiner,
      keys: [
        ph.ipa,
        ph.id,
        ph.keyword ?? '',
        ph.nickname,
        ph.group,
        ...(asciiAliases[ph.id] ?? []),
        ...(jaAliases[ph.id] ?? []),
        ...words,
        ...ph.spellings.map((s) => s.pattern),
      ].filter(Boolean),
      // 綴りパターンの例語と対比相手の語は副次扱い。
      // 代表例語として持つエントリが、例示や対比で触れるだけのエントリより上に来る。
      secondaryKeys: [...spellingWords, ...pairWords],
      text: prose,
      keyBonus,
    });

    // 例語を単独のレコードとしても登録する。"water" で引いたときに語として出す。
    for (const e of ph.examples) {
      out.push({
        kind: 'word',
        id: ph.id,
        href: `#/phoneme/${ph.id}`,
        title: e.word,
        subtitle: `/${e.ipa}/`,
        snippet: `${e.position}に /${ph.ipa}/ を含む${e.note ? ` — ${e.note}` : ''}`,
        keys: [e.word, e.ipa],
      });
    }

    // ミニマルペアも引けるようにする。聞き分けの入口。
    for (const c of ph.contrasts) {
      for (const p of c.pairs) {
        out.push({
          kind: 'pair',
          id: ph.id,
          href: `#/phoneme/${ph.id}`,
          title: `${p.a} / ${p.b}`,
          subtitle: `/${ph.ipa}/ 対 /${c.withIpa}/`,
          snippet: c.listenFor,
          keys: [p.a, p.b, `${p.a}${p.b}`, p.aIpa, p.bIpa],
        });
      }
    }
  }

  for (const rule of rules) {
    out.push({
      kind: 'rule',
      id: rule.id,
      href: `#/rule/${rule.id}`,
      title: rule.title,
      subtitle: `${rule.genre}${rule.titleEn ? ` — ${rule.titleEn}` : ''}`,
      snippet: rule.oneLiner,
      keys: [
        rule.title,
        rule.titleEn ?? '',
        rule.id,
        rule.genre,
        ...rule.examples.map((e) => e.text),
        ...rule.examples.map((e) => e.ipa),
      ].filter(Boolean),
      text: [
        rule.oneLiner,
        ...rule.condition,
        rule.result,
        rule.why,
        ...rule.listenFor,
        ...(rule.exceptions ?? []),
        ...rule.lecture,
        ...(rule.faq ?? []).flatMap((f) => [f.q, f.a]),
        ...(rule.notes ?? []),
        ...rule.examples.map((e) => e.note ?? ''),
      ].join(' '),
    });
    for (const e of rule.examples) {
      out.push({
        kind: 'word',
        id: rule.id,
        href: `#/rule/${rule.id}`,
        title: e.text,
        subtitle: `/${e.ipa}/`,
        snippet: `${rule.title}の例${e.note ? ` — ${e.note}` : ''}`,
        keys: [e.text, e.ipa],
      });
    }
  }

  for (const tp of topics) {
    out.push({
      kind: 'topic',
      id: tp.id,
      href: `#/topic/${tp.id}`,
      title: tp.title,
      subtitle: `${tp.genre}${tp.titleEn ? ` — ${tp.titleEn}` : ''}`,
      snippet: tp.oneLiner,
      keys: [
        tp.title,
        tp.titleEn ?? '',
        tp.id,
        tp.genre,
        ...tp.sections.map((s) => s.heading),
        ...tp.sections.flatMap((s) => s.list ?? []),
      ].filter(Boolean),
      text: [
        tp.oneLiner,
        ...tp.sections.flatMap((s) => s.body ?? []),
        ...tp.sections.flatMap((s) => s.list ?? []),
        ...tp.sections.flatMap((s) => s.table?.rows.flat() ?? []),
        ...tp.sections.flatMap((s) => (s.examples ?? []).map((e) => `${e.text} ${e.note ?? ''}`)),
        ...(tp.lecture ?? []),
        ...(tp.faq ?? []).flatMap((f) => [f.q, f.a]),
        ...(tp.notes ?? []),
      ].join(' '),
    });
  }

  cache = out;
  return out;
}

export interface SearchHit extends SearchRecord {
  score: number;
}

/**
 * 一致スコア。
 *   主キー（見出し・IPA・別名・代表例語）          完全100 / 先頭70 / 部分40
 *   副次キー（綴りの例語・対比相手の語）            完全55  / 先頭35 / 部分20
 *   本文（解説・台本・FAQ）                       部分12
 * 自分の例語として持つエントリが、対比相手として言及するだけのエントリより上に来る。
 */
function matchIn(keys: string[] | undefined, q: string, scores: [number, number, number]): number {
  let best = 0;
  for (const key of keys ?? []) {
    const k = normalize(key);
    if (!k) continue;
    if (k === q) best = Math.max(best, scores[0]);
    else if (k.startsWith(q)) best = Math.max(best, scores[1]);
    else if (k.includes(q)) best = Math.max(best, scores[2]);
  }
  return best;
}

function scoreOf(record: SearchRecord, q: string): number {
  let best = Math.max(
    matchIn(record.keys, q, [100, 70, 40]),
    matchIn(record.secondaryKeys, q, [55, 35, 20]),
  );
  if (best === 0) {
    const t = normalize(record.title + record.subtitle + (record.snippet ?? '') + (record.text ?? ''));
    if (t.includes(q)) best = 12;
  }
  if (best === 0) return 0;
  const kindWeight: Record<SearchRecord['kind'], number> = {
    phoneme: 12,
    rule: 10,
    topic: 8,
    word: 4,
    pair: 2,
  };
  // 語・ミニマルペアのレコードは所属エントリへの入口にすぎないので、
  // 同じ語に一致した本体エントリより上に来ないよう一律に割り引く。
  const scale = record.kind === 'word' || record.kind === 'pair' ? 0.6 : 1;
  return best * scale + kindWeight[record.kind] + (record.keyBonus?.[q] ?? 0);
}

export function search(query: string, limit = 40): SearchHit[] {
  const q = normalize(query);
  if (!q) return [];
  const hits: SearchHit[] = [];
  for (const record of buildIndex()) {
    const score = scoreOf(record, q);
    if (score > 0) hits.push({ ...record, score });
  }
  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  // 同じエントリの語レコードが大量に並ぶのを防ぐ
  const seen = new Map<string, number>();
  const filtered: SearchHit[] = [];
  for (const h of hits) {
    const k = `${h.kind}:${h.id}`;
    const n = seen.get(k) ?? 0;
    if (h.kind !== 'phoneme' && h.kind !== 'rule' && h.kind !== 'topic' && n >= 3) continue;
    seen.set(k, n + 1);
    filtered.push(h);
    if (filtered.length >= limit) break;
  }
  return filtered;
}
