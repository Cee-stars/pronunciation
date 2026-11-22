import { useEffect, useState } from 'react';
import type { DayEntryRef, DayPlan } from '../data/curriculum';
import { curriculum, totalDays } from '../data/curriculum';
import { findMeta, loadEntry } from '../data/lazy';
import type { Phoneme, Rule, Topic } from '../types';
import { useAsync } from '../useAsync';
import { PhonemeView } from './PhonemeView';
import { RuleView, TopicView } from './RuleView';
import { readDays, setDayRead } from '../progress';

/** その日のエントリを1つ描画する。本体はここで初めて読み込まれる。 */
function EntryBody({ entry: r }: { entry: DayEntryRef }) {
  const state = useAsync(() => loadEntry(r.kind, r.id), [r.kind, r.id]);

  if (state.status === 'loading') {
    return (
      <div className="pending" aria-busy="true">
        読み込み中…
      </div>
    );
  }
  const value = state.value;
  if (!value) {
    return (
      <div className="pending">
        <code>
          {r.kind}:{r.id}
        </code>{' '}
        — 準備中
      </div>
    );
  }
  if (r.kind === 'phoneme') return <PhonemeView ph={value as Phoneme} />;
  if (r.kind === 'rule') return <RuleView rule={value as Rule} />;
  return <TopicView topic={value as Topic} />;
}

function ReviewLink({ entry: r }: { entry: DayEntryRef }) {
  const meta = findMeta(r.id);
  const label = meta
    ? meta.kind === 'phoneme'
      ? `/${meta.ipa}/ ${meta.nickname}`
      : meta.title
    : r.id;
  return (
    <a className="chip" href={`#/${r.kind}/${r.id}`}>
      {label}
    </a>
  );
}

export function DayView({ day }: { day: number }) {
  const plan: DayPlan | undefined = curriculum.find((d) => d.day === day);
  const [done, setDone] = useState<Set<number>>(new Set());
  useEffect(() => {
    setDone(readDays());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [day]);

  if (!plan) return <p className="notice">Day {day} は存在しません（全{totalDays}日）。</p>;

  const isDone = done.has(day);

  return (
    <div className="day">
      <nav className="daynav">
        {day > 1 && <a href={`#/day/${day - 1}`}>← Day {day - 1}</a>}
        <span className="spacer" />
        {day < totalDays && <a href={`#/day/${day + 1}`}>Day {day + 1} →</a>}
      </nav>

      <header className="dayhead">
        <div className="daynum">Day {plan.day}</div>
        <h1>{plan.title}</h1>
        <div className="grouptag">{plan.genre}</div>
      </header>

      {plan.note && <p className="dayNote">{plan.note}</p>}

      <section className="goals">
        <h3>到達目標 — 人に説明できる状態</h3>
        <ul className="checklist">
          {plan.goals.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
        {plan.earGoals && (
          <>
            <h3>到達目標 — 聞き分け</h3>
            <ul className="checklist">
              {plan.earGoals.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
            <p className="small muted">
              判定はこのアプリではなく自分で行う。採点機能は意図的に持たせていない。
            </p>
          </>
        )}
      </section>

      {plan.review && plan.review.length > 0 && (
        <section className="sec">
          <h3>
            前回までの復習<span className="hint">聞き分けは間を置かないと定着しない</span>
          </h3>
          <div className="chips">
            {plan.review.map((r, i) => (
              <ReviewLink key={i} entry={r} />
            ))}
          </div>
        </section>
      )}

      <section className="entries">
        <h3 className="entriesHead">本編 — {plan.entries.length} 項目</h3>
        {plan.entries.map((r, i) => (
          <EntryBody key={`${r.kind}:${r.id}:${i}`} entry={r} />
        ))}
      </section>

      <div className="donerow">
        <label>
          <input
            type="checkbox"
            checked={isDone}
            onChange={(e) => setDone(setDayRead(day, e.target.checked))}
          />
          Day {day} を読んだ
        </label>
      </div>

      <nav className="daynav">
        {day > 1 && <a href={`#/day/${day - 1}`}>← Day {day - 1}</a>}
        <span className="spacer" />
        {day < totalDays && <a href={`#/day/${day + 1}`}>Day {day + 1} →</a>}
      </nav>
    </div>
  );
}
