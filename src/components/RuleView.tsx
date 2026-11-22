import type { Rule, Topic } from '../types';
import { Say, SayAll } from './Say';

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="sec">
      <h3>
        {title}
        {hint && <span className="hint">{hint}</span>}
      </h3>
      {children}
    </section>
  );
}

export function RuleView({ rule }: { rule: Rule }) {
  return (
    <article className="entry">
      <header className="entry-head">
        <div className="entry-title">
          <div className="kw">{rule.genre}</div>
          <h2>{rule.title}</h2>
          {rule.titleEn && <div className="grouptag">{rule.titleEn}</div>}
        </div>
      </header>

      <p className="oneliner">{rule.oneLiner}</p>

      <div className="audio-row">
        <SayAll texts={rule.examples.map((e) => e.text)} label="例をまとめて再生" />
        <SayAll texts={rule.examples.map((e) => e.text)} label="ゆっくり再生" slow />
      </div>

      <Section title="適用条件" hint="すべて満たしたときに起きる">
        <ol className="steps">
          {rule.condition.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </Section>

      <Section title="何が起きるか">
        <p>{rule.result}</p>
      </Section>

      <Section title="なぜ起きるか" hint="原因を言えると説明が一段深くなる">
        <p>{rule.why}</p>
      </Section>

      <Section title="例" hint="素のまま並べた形と、実際の音の対比">
        <table className="spell">
          <thead>
            <tr>
              <th>綴り</th>
              <th>実際の音</th>
              <th>素の形</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            {rule.examples.map((e, i) => (
              <tr key={i}>
                <td>
                  <Say text={e.text} /> <b>{e.text}</b>
                </td>
                <td>
                  <code>/{e.ipa}/</code>
                </td>
                <td className="small">{e.naive ? <code>/{e.naive}/</code> : ''}</td>
                <td className="small">{e.note ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="聞き分けの手がかり">
        <ul className="bullets">
          {rule.listenFor.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      {rule.exceptions && rule.exceptions.length > 0 && (
        <Section title="例外・適用されない場合">
          <ul className="bullets">
            {rule.exceptions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="レクチャー台本" hint="この順で話せば説明が通る">
        <ol className="steps script">
          {rule.lecture.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </Section>

      {rule.faq && rule.faq.length > 0 && (
        <Section title="想定される質問">
          <dl className="faq">
            {rule.faq.map((f, i) => (
              <div key={i} className="faq-item">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {rule.notes && rule.notes.length > 0 && (
        <Section title="補足">
          <ul className="bullets">
            {rule.notes.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  );
}

export function TopicView({ topic }: { topic: Topic }) {
  return (
    <article className="entry">
      <header className="entry-head">
        <div className="entry-title">
          <div className="kw">{topic.genre}</div>
          <h2>{topic.title}</h2>
          {topic.titleEn && <div className="grouptag">{topic.titleEn}</div>}
        </div>
      </header>

      <p className="oneliner">{topic.oneLiner}</p>

      {topic.sections.map((s, i) => (
        <Section key={i} title={s.heading}>
          {s.body?.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {s.list && (
            <ul className="bullets">
              {s.list.map((x, j) => (
                <li key={j}>{x}</li>
              ))}
            </ul>
          )}
          {s.table && (
            <table className="spell">
              {s.table.caption && <caption>{s.table.caption}</caption>}
              <thead>
                <tr>
                  {s.table.headers.map((h, j) => (
                    <th key={j}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.table.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {s.examples && (
            <table className="spell">
              <thead>
                <tr>
                  <th>例</th>
                  <th>音</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {s.examples.map((e, j) => (
                  <tr key={j}>
                    <td>
                      <Say text={e.text} /> <b>{e.text}</b>
                    </td>
                    <td>
                      <code>/{e.ipa}/</code>
                    </td>
                    <td className="small">{e.note ?? ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Section>
      ))}

      {topic.lecture && topic.lecture.length > 0 && (
        <Section title="レクチャー台本">
          <ol className="steps script">
            {topic.lecture.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </Section>
      )}

      {topic.faq && topic.faq.length > 0 && (
        <Section title="想定される質問">
          <dl className="faq">
            {topic.faq.map((f, i) => (
              <div key={i} className="faq-item">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}
    </article>
  );
}
