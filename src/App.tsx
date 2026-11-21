import { useEffect, useState } from 'react';
import { Home, PhonemeTable } from './components/Home';
import { DayView } from './components/DayView';
import { SearchView } from './components/SearchView';
import { PhonemeView } from './components/PhonemeView';
import { RuleView, TopicView } from './components/RuleView';
import { SpeechNotice } from './components/Say';
import { phonemeById, ruleById, topicById } from './data';

type Route =
  | { name: 'home' }
  | { name: 'table' }
  | { name: 'day'; day: number }
  | { name: 'phoneme'; id: string }
  | { name: 'rule'; id: string }
  | { name: 'topic'; id: string }
  | { name: 'search'; query: string };

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  if (!raw) return { name: 'home' };
  const [head, ...rest] = raw.split('/');
  const arg = decodeURIComponent(rest.join('/'));
  switch (head) {
    case 'table':
      return { name: 'table' };
    case 'day': {
      const n = Number(arg);
      return Number.isFinite(n) && n > 0 ? { name: 'day', day: n } : { name: 'home' };
    }
    case 'phoneme':
      return { name: 'phoneme', id: arg };
    case 'rule':
      return { name: 'rule', id: arg };
    case 'topic':
      return { name: 'topic', id: arg };
    case 'search':
      return { name: 'search', query: arg };
    default:
      return { name: 'home' };
  }
}

function Missing({ kind, id }: { kind: string; id: string }) {
  return (
    <div className="home">
      <h1>準備中</h1>
      <p className="notice">
        <code>
          {kind}:{id}
        </code>{' '}
        はまだ執筆されていない。30日の構成上は予定に含まれている項目で、データが入り次第この
        URL で表示される。
      </p>
      <p>
        <a className="btn" href="#/">
          目次へ戻る
        </a>
      </p>
    </div>
  );
}

export function App() {
  const [route, setRoute] = useState<Route>(parseHash);
  const [q, setQ] = useState('');

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (route.name === 'search') setQ(route.query);
  }, [route]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = q.trim();
    window.location.hash = v ? `#/search/${encodeURIComponent(v)}` : '#/';
  };

  let body: React.ReactNode;
  switch (route.name) {
    case 'home':
      body = <Home />;
      break;
    case 'table':
      body = <PhonemeTable />;
      break;
    case 'day':
      body = <DayView day={route.day} />;
      break;
    case 'phoneme': {
      const ph = phonemeById.get(route.id);
      body = ph ? <PhonemeView ph={ph} /> : <Missing kind="phoneme" id={route.id} />;
      break;
    }
    case 'rule': {
      const rule = ruleById.get(route.id);
      body = rule ? <RuleView rule={rule} /> : <Missing kind="rule" id={route.id} />;
      break;
    }
    case 'topic': {
      const tp = topicById.get(route.id);
      body = tp ? <TopicView topic={tp} /> : <Missing kind="topic" id={route.id} />;
      break;
    }
    case 'search':
      body = <SearchView query={route.query} />;
      break;
  }

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#/">
          発音辞典
        </a>
        <form className="searchform" onSubmit={submit} role="search">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="æ / ae / TRAP / cat / シュワー / 同化 …"
            aria-label="検索"
          />
          <button type="submit">検索</button>
        </form>
        <nav className="topnav">
          <a href="#/table">音素一覧</a>
          <a href="#/day/1">Day 1</a>
        </nav>
      </header>
      <main>
        <SpeechNotice />
        {body}
      </main>
      <footer className="foot">
        <p>
          採点・録音機能は意図的に持たせていない。音声は端末の音声合成（Web Speech API）を使うため、
          声質は環境によって異なる。
        </p>
      </footer>
    </div>
  );
}
