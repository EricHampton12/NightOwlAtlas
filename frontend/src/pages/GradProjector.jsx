import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WGU_TERM } from '../utils/wguData';
import { format, addMonths } from 'date-fns';
import styles from './GradProjector.module.css';

export default function GradProjector() {
  const { state, dispatch, remainingCUs, completedCUs, totalCUs } = useApp();
  const [pace, setPace] = useState(state.user.targetCUsPerMonth);

  const monthsToGrad = pace > 0 ? Math.ceil(remainingCUs / pace) : null;
  const gradDate = monthsToGrad ? addMonths(new Date(), monthsToGrad) : null;
  const termsNeeded = monthsToGrad ? Math.ceil(monthsToGrad / WGU_TERM.months) : null;
  const cost = termsNeeded ? termsNeeded * WGU_TERM.costPerTerm : null;

  // Compare: what if you go faster?
  const scenarios = [6, 9, 12, 15, 18, 24].map((p) => {
    const months = Math.ceil(remainingCUs / p);
    const terms = Math.ceil(months / WGU_TERM.months);
    return {
      pace: p,
      months,
      terms,
      cost: terms * WGU_TERM.costPerTerm,
      gradDate: addMonths(new Date(), months),
    };
  });

  const savePace = () => {
    dispatch({ type: 'SET_USER', payload: { targetCUsPerMonth: pace } });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Graduation Projector</h1>
          <p className="text-muted text-sm">
            Adjust your pace and see exactly when you'll graduate — and what it'll cost
          </p>
        </div>
      </header>

      {/* Pace slider */}
      <div className={`card ${styles.paceCard}`}>
        <div className={styles.paceHeader}>
          <h2 className={styles.paceTitle}>Your Monthly Pace</h2>
          <div className={styles.paceValue}>{pace} CUs/month</div>
        </div>
        <input
          type="range"
          min="3"
          max="30"
          step="3"
          value={pace}
          onChange={(e) => setPace(Number(e.target.value))}
          className={styles.slider}
        />
        <div className={styles.sliderLabels}>
          <span>3 CUs (slow)</span>
          <span>15 CUs (avg)</span>
          <span>30 CUs (max)</span>
        </div>
        <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={savePace}>
          Save Pace
        </button>
      </div>

      {/* Projection result */}
      {gradDate && (
        <div className={`card ${styles.resultCard}`}>
          <div className={styles.resultGrid}>
            <div className={styles.resultItem}>
              <div className={styles.resultIcon}>🎓</div>
              <div className={styles.resultValue}>{format(gradDate, 'MMMM yyyy')}</div>
              <div className={styles.resultLabel}>Graduation Date</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultIcon}>📅</div>
              <div className={styles.resultValue}>{monthsToGrad} months</div>
              <div className={styles.resultLabel}>Time to Finish</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultIcon}>📋</div>
              <div className={styles.resultValue}>{termsNeeded} terms</div>
              <div className={styles.resultLabel}>Terms Needed</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultIcon}>💰</div>
              <div className={styles.resultValue}>${cost?.toLocaleString()}</div>
              <div className={styles.resultLabel}>Estimated Tuition</div>
            </div>
          </div>
        </div>
      )}

      {/* Scenario comparison */}
      <div className={`card ${styles.scenarios}`}>
        <h2 className={styles.scenarioTitle}>Pace Comparison</h2>
        <p className="text-muted text-sm" style={{ marginBottom: 20 }}>
          See how changing your pace affects graduation date and total cost
        </p>
        <div className={styles.scenarioTable}>
          <div className={styles.tableHeader}>
            <span>CUs/Month</span>
            <span>Months</span>
            <span>Terms</span>
            <span>Est. Cost</span>
            <span>Grad Date</span>
          </div>
          {scenarios.map((s) => (
            <div
              key={s.pace}
              className={`${styles.tableRow} ${s.pace === pace ? styles.tableRowActive : ''}`}
              onClick={() => setPace(s.pace)}
            >
              <span className={styles.tablePace}>
                {s.pace} CUs
                {s.pace === pace && <span className={styles.currentBadge}>current</span>}
              </span>
              <span>{s.months} mo</span>
              <span>{s.terms}</span>
              <span className={styles.tableCost}>${s.cost.toLocaleString()}</span>
              <span className={styles.tableDate}>{format(s.gradDate, 'MMM yyyy')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Savings tip */}
      <div className={`card ${styles.savingsTip}`}>
        <div className={styles.tipIcon}>💡</div>
        <div>
          <div className={styles.tipTitle}>WGU Hack: Faster = Cheaper</div>
          <p className="text-muted text-sm" style={{ lineHeight: 1.7 }}>
            WGU charges per 6-month term, not per credit. Completing{' '}
            <strong style={{ color: 'var(--amber)' }}>more CUs per term</strong> means fewer
            terms and thousands less in tuition. Going from 9 CUs/month to 15 CUs/month
            can save you <strong style={{ color: 'var(--success)' }}>$4,000–$8,000+</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
