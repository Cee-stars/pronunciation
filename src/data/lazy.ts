import type { EntryMeta, Phoneme, Rule, Topic } from '../types';
import { phonemeMeta, ruleMeta, topicMeta } from './meta.generated';

/**
 * エントリ本体の遅延読み込み。
 *
 * 1エントリ = 1ファイル = 1チャンクになるよう import.meta.glob を使う。
 * Day を開いたらその日のエントリだけ、音素ページを開いたらその音素だけを取りに行く。
 * 一覧に必要な見出し類は meta.generated.ts に分離してあるので、本体を読まずに描画できる。
 *
 * src/data/index.ts は全エントリを eager に集めた索引だが、アプリからは参照しない
 * （参照するとチャンク分割が無意味になる）。メタデータ生成とリンク検査の入力専用。
 */

type Loader = () => Promise<Record<string, unknown>>;

const phonemeMods = import.meta.glob('./phonemes/*.ts') as Record<string, Loader>;
const ruleMods = import.meta.glob(['./rules/*.ts', '!./rules/index.ts']) as Record<string, Loader>;
const topicMods = import.meta.glob(['./topics/*.ts', '!./topics/index.ts']) as Record<string, Loader>;

/** ファイル名がそのままエントリ id になっている（trap.ts → trap、flap-t.ts → flap-t）。 */
function byFileName(mods: Record<string, Loader>): Map<string, Loader> {
  const map = new Map<string, Loader>();
  for (const [filePath, load] of Object.entries(mods)) {
    const id = filePath.split('/').pop()!.replace(/\.ts$/, '');
    map.set(id, load);
  }
  return map;
}

const phonemeLoaders = byFileName(phonemeMods);
const ruleLoaders = byFileName(ruleMods);
const topicLoaders = byFileName(topicMods);

/** 各ファイルは型以外にエントリの const を1つだけ export する。名前は一定しないので値で拾う。 */
function pickEntry(mod: Record<string, unknown>): unknown {
  return Object.values(mod).find(
    (v) => v !== null && typeof v === 'object' && 'id' in (v as object),
  );
}

const cache = new Map<string, unknown>();

async function load<T>(kind: string, id: string, loaders: Map<string, Loader>): Promise<T | undefined> {
  const key = `${kind}:${id}`;
  if (cache.has(key)) return cache.get(key) as T;
  const loader = loaders.get(id);
  if (!loader) return undefined;
  const entry = pickEntry(await loader()) as T | undefined;
  if (entry) cache.set(key, entry);
  return entry;
}

export const loadPhoneme = (id: string) => load<Phoneme>('phoneme', id, phonemeLoaders);
export const loadRule = (id: string) => load<Rule>('rule', id, ruleLoaders);
export const loadTopic = (id: string) => load<Topic>('topic', id, topicLoaders);

export function loadEntry(kind: string, id: string): Promise<Phoneme | Rule | Topic | undefined> {
  if (kind === 'phoneme') return loadPhoneme(id);
  if (kind === 'rule') return loadRule(id);
  if (kind === 'topic') return loadTopic(id);
  return Promise.resolve(undefined);
}

/** 検索は全文を見るので全エントリを要する。初回検索時に一度だけ読み込む。 */
let allPromise: Promise<{ phonemes: Phoneme[]; rules: Rule[]; topics: Topic[] }> | null = null;

export function loadAll() {
  if (!allPromise) {
    allPromise = Promise.all([
      Promise.all([...phonemeLoaders.keys()].map((id) => loadPhoneme(id))),
      Promise.all([...ruleLoaders.keys()].map((id) => loadRule(id))),
      Promise.all([...topicLoaders.keys()].map((id) => loadTopic(id))),
    ]).then(([phonemes, rules, topics]) => ({
      phonemes: phonemes.filter((x): x is Phoneme => !!x),
      rules: rules.filter((x): x is Rule => !!x),
      topics: topics.filter((x): x is Topic => !!x),
    }));
  }
  return allPromise;
}

/* ───────────────────────── メタデータ（本体を読まずに使える） ───────────────────────── */

export const phonemeMetaById = new Map(phonemeMeta.map((m) => [m.id, m]));
export const ruleMetaById = new Map(ruleMeta.map((m) => [m.id, m]));
export const topicMetaById = new Map(topicMeta.map((m) => [m.id, m]));

export { phonemeMeta, ruleMeta, topicMeta };

/** id がどの種別かを引く。相互参照のリンク解決に使う。 */
export function findMeta(id: string): EntryMeta | undefined {
  return phonemeMetaById.get(id) ?? ruleMetaById.get(id) ?? topicMetaById.get(id);
}

/** 音素をグループ別にまとめる（ホームと音素一覧の表示用）。 */
export function phonemeMetaByGroup(): { group: string; items: EntryMeta[] }[] {
  const order: string[] = [];
  const buckets = new Map<string, EntryMeta[]>();
  for (const m of phonemeMeta) {
    const g = m.group ?? '';
    if (!buckets.has(g)) {
      buckets.set(g, []);
      order.push(g);
    }
    buckets.get(g)!.push(m);
  }
  return order.map((group) => ({ group, items: buckets.get(group)! }));
}
