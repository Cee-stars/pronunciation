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
        ...spellingWords,
        ...pairWords,
        ...ph.spellings.map((s) => s.pattern),
      ].filter(Boolean),
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
    });
  }

  cache = out;
  return out;
}

export interface SearchHit extends SearchRecord {
  score: number;
}

/** 一致スコア。完全一致 > 先頭一致 > 部分一致。種別でも重みを付ける。 */
function scoreOf(record: SearchRecord, q: string): number {
  let best = 0;
  for (const key of record.keys) {
    const k = normalize(key);
    if (!k) continue;
    if (k === q) best = Math.max(best, 100);
    else if (k.startsWith(q)) best = Math.max(best, 70);
    else if (k.includes(q)) best = Math.max(best, 40);
  }
  if (best === 0) {
    const t = normalize(record.title + record.subtitle + (record.snippet ?? ''));
    if (t.includes(q)) best = 15;
  }
  if (best === 0) return 0;
  const kindWeight: Record<SearchRecord['kind'], number> = {
    phoneme: 12,
    rule: 10,
    topic: 8,
    word: 4,
    pair: 2,
  };
  return best + kindWeight[record.kind];
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
