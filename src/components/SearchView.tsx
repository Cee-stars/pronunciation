import { search } from '../search';

const kindLabel: Record<string, string> = {
  phoneme: '音素',
  rule: '音声変化',
  topic: '解説',
  word: '語',
  pair: 'ミニマルペア',
};

export function SearchView({ query }: { query: string }) {
  const hits = search(query);

  return (
    <div className="home">
      <h1>「{query}」の検索結果</h1>
      {hits.length === 0 ? (
        <p className="notice">
          該当なし。IPA記号（<code>æ</code>）、ASCII での別名（<code>ae</code>）、キーワード（
          <code>TRAP</code>）、例語（<code>cat</code>）、日本語の用語（<code>シュワー</code>
          ）のいずれでも引ける。未執筆の項目はまだ出てこない。
        </p>
      ) : (
        <ul className="hits">
          {hits.map((h, i) => (
            <li key={i}>
              <a href={h.href}>
                <span className={`kind kind-${h.kind}`}>{kindLabel[h.kind] ?? h.kind}</span>
                <span className="hit-title">{h.title}</span>
                <span className="hit-sub">{h.subtitle}</span>
              </a>
              {h.snippet && <p className="hit-snip">{h.snippet}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
