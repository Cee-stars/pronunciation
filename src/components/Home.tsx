import { useEffect, useState } from 'react';
import { curriculum, totalDays } from '../data/curriculum';
import { phonemes, phonemesByGroup, rules, topics } from '../data';
import { readDays } from '../progress';

export function Home() {
  const [done, setDone] = useState<Set<number>>(new Set());
  useEffect(() => {
    setDone(readDays());
  }, []);

  const next = curriculum.find((d) => !done.has(d.day)) ?? curriculum[curriculum.length - 1];
  const written = phonemes.length + rules.length + topics.length;

  return (
    <div className="home">
      <section className="hero">
        <h1>発音辞典</h1>
        <p className="lead">
          英語発音の知識を引ける辞典。採点も録音もしない。目的は二つだけ——
          <b>調べたことが必ず載っている</b>こと、<b>読んだ内容をそのまま人に説明できる</b>こと。
        </p>
        <div className="herorow">
          <a className="btn primary" href={`#/day/${next.day}`}>
            {done.size === 0 ? 'Day 1 から始める' : `続きから — Day ${next.day}`}
          </a>
          <a className="btn" href="#/table">
            音素一覧から引く
          </a>
        </div>
        <p className="small muted">
          進捗 {done.size} / {totalDays} 日 · 収録エントリ {written} 件（執筆中）
        </p>
      </section>

      <section className="sec">
        <h3>
          30日の構成<span className="hint">Day は目次。辞典の中身は検索からも引ける</span>
        </h3>
        <ol className="daylist">
          {curriculum.map((d) => (
            <li key={d.day} className={done.has(d.day) ? 'read' : ''}>
              <a href={`#/day/${d.day}`}>
                <span className="dl-day">Day {d.day}</span>
                <span className="dl-title">{d.title}</span>
                <span className="dl-genre">{d.genre}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec">
        <h3>音素</h3>
        {phonemesByGroup().map(({ group, items }) => (
          <div key={group} className="ipagroup">
            <h4>{group}</h4>
            <div className="chips">
              {items.map((ph) => (
                <a key={ph.id} className="chip ipachip" href={`#/phoneme/${ph.id}`}>
                  <b>/{ph.ipa}/</b> {ph.keyword ?? ph.id}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export function PhonemeTable() {
  return (
    <div className="home">
      <h1>音素一覧</h1>
      <p className="lead">記号をクリックすると項目に移動する。検索欄からは IPA・別名・例語でも引ける。</p>
      {phonemesByGroup().map(({ group, items }) => (
        <div key={group} className="ipagroup">
          <h4>{group}</h4>
          <table className="spell">
            <thead>
              <tr>
                <th>IPA</th>
                <th>キーワード</th>
                <th>通称</th>
                <th>一文定義</th>
              </tr>
            </thead>
            <tbody>
              {items.map((ph) => (
                <tr key={ph.id}>
                  <td>
                    <a href={`#/phoneme/${ph.id}`}>
                      <b>/{ph.ipa}/</b>
                    </a>
                  </td>
                  <td className="small">{ph.keyword ?? ph.id}</td>
                  <td className="small">{ph.nickname}</td>
                  <td className="small">{ph.oneLiner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
