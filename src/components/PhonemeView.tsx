import type { Phoneme } from '../types';
import { Say, SayAll, SayPair } from './Say';

function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
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

export function PhonemeView({ ph }: { ph: Phoneme }) {
  const keywordWords = ph.examples.slice(0, 5).map((e) => e.word);

  return (
    <article className="entry">
      <header className="entry-head">
        <div className="ipa-big">/{ph.ipa}/</div>
        <div className="entry-title">
          <div className="kw">{ph.keyword ?? ph.id}</div>
          <h2>{ph.nickname}</h2>
          <div className="grouptag">{ph.group}</div>
        </div>
      </header>

      <p className="oneliner">{ph.oneLiner}</p>

      <div className="audio-row">
        <SayAll texts={keywordWords} label="例語をまとめて再生" />
        <SayAll texts={keywordWords} label="ゆっくり再生" slow />
        <span className="audio-note">
          単独の音素は音声合成が正しく読めないため、この音を含む語を続けて再生します。
        </span>
      </div>

      <Section title="調音" hint="人に説明するときに最初に伝える部分">
        <dl className="artic">
          <dt>声帯</dt>
          <dd>{ph.articulation.voicing}</dd>
          <dt>舌</dt>
          <dd>{ph.articulation.tongue}</dd>
          <dt>唇</dt>
          <dd>{ph.articulation.lips}</dd>
          {ph.articulation.vowel && (
            <>
              <dt>舌の高さ</dt>
              <dd>{ph.articulation.vowel.height}</dd>
              <dt>舌の前後</dt>
              <dd>{ph.articulation.vowel.backness}</dd>
              <dt>円唇</dt>
              <dd>{ph.articulation.vowel.rounded ? '丸める' : '丸めない'}</dd>
              <dt>緊張度</dt>
              <dd>
                {ph.articulation.vowel.tension === 'tense' ? '緊張（tense）' : '弛緩（lax）'}
              </dd>
              <dt>顎</dt>
              <dd>{ph.articulation.vowel.jaw}</dd>
            </>
          )}
          {ph.articulation.consonant && (
            <>
              <dt>調音点</dt>
              <dd>{ph.articulation.consonant.place}</dd>
              <dt>調音方法</dt>
              <dd>{ph.articulation.consonant.manner}</dd>
              <dt>気流</dt>
              <dd>{ph.articulation.consonant.airflow}</dd>
            </>
          )}
        </dl>
      </Section>

      <Section title="作り方" hint="そのまま口頭で指示できる手順">
        <ol className="steps">
          {ph.howTo.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </Section>

      <Section title="聞き分けの手がかり" hint="何を聴けば判別できるか">
        <ul className="bullets">
          {ph.listenFor.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section title="日本語話者の干渉" hint="なぜ間違うのかを原因から">
        <dl className="artic">
          <dt>代用される音</dt>
          <dd>{ph.l1.substitute}</dd>
          <dt>原因</dt>
          <dd>{ph.l1.why}</dd>
          <dt>結果</dt>
          <dd>{ph.l1.symptom}</dd>
        </dl>
        {ph.l1.examples && (
          <ul className="bullets">
            {ph.l1.examples.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </Section>

      {ph.contrasts.map((c) => (
        <Section
          key={c.withId}
          title={`対比: /${ph.ipa}/ 対 /${c.withIpa}/`}
          hint="ミニマルペアは A→B で連続再生できる"
        >
          <dl className="artic">
            <dt>調音の違い</dt>
            <dd>{c.difference}</dd>
            <dt>聞き分け</dt>
            <dd>{c.listenFor}</dd>
            {c.whyHard && (
              <>
                <dt>難しい理由</dt>
                <dd>{c.whyHard}</dd>
              </>
            )}
          </dl>
          <table className="pairs">
            <thead>
              <tr>
                <th>/{ph.ipa}/</th>
                <th>/{c.withIpa}/</th>
                <th>連続</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              {c.pairs.map((p, i) => (
                <tr key={i}>
                  <td>
                    <Say text={p.a} /> <b>{p.a}</b> <code>/{p.aIpa}/</code>
                  </td>
                  <td>
                    <Say text={p.b} /> <b>{p.b}</b> <code>/{p.bIpa}/</code>
                  </td>
                  <td>
                    <SayPair a={p.a} b={p.b} />
                  </td>
                  <td className="small">{p.note ?? ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      ))}

      <Section title="綴り → この音" hint="スペリングからの逆引き">
        <table className="spell">
          <thead>
            <tr>
              <th>綴り</th>
              <th>頻度</th>
              <th>例</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            {ph.spellings.map((s, i) => (
              <tr key={i}>
                <td>
                  <code>{s.pattern}</code>
                </td>
                <td>
                  <span className={`freq freq-${s.frequency}`}>{s.frequency}</span>
                </td>
                <td>
                  {s.examples.map((w) => (
                    <span key={w} className="wordchip">
                      <Say text={w} /> {w}
                    </span>
                  ))}
                </td>
                <td className="small">{s.note ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="例語">
        <table className="spell">
          <thead>
            <tr>
              <th>語</th>
              <th>IPA</th>
              <th>位置</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            {ph.examples.map((e, i) => (
              <tr key={i}>
                <td>
                  <Say text={e.word} /> <b>{e.word}</b>
                </td>
                <td>
                  <code>/{e.ipa}/</code>
                </td>
                <td className="small">{e.position}</td>
                <td className="small">{e.note ?? ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="レクチャー台本" hint="この順で話せば説明が通る">
        <ol className="steps script">
          {ph.lecture.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </Section>

      {ph.faq && ph.faq.length > 0 && (
        <Section title="想定される質問">
          <dl className="faq">
            {ph.faq.map((f, i) => (
              <div key={i} className="faq-item">
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {ph.notes && ph.notes.length > 0 && (
        <Section title="補足">
          <ul className="bullets">
            {ph.notes.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </Section>
      )}

      {ph.relatedRules && ph.relatedRules.length > 0 && (
        <Section title="関連する音声変化">
          <div className="chips">
            {ph.relatedRules.map((id) => (
              <a key={id} className="chip" href={`#/rule/${id}`}>
                {id}
              </a>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}
