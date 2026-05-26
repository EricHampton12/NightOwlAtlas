import { useApp } from '../context/AppContext';
import { difficultyLabel, difficultyColor } from '../utils/wguData';
import { useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const {
    state,
    completedCUs,
    totalCUs,
    remainingCUs,
    monthsToGrad,
    gradDate,
    estimatedCost,
    progressPct,
    completedCourses,
    inProgressCourses,
    dispatch,
  } = useApp();

  const navigate = useNavigate();

  const upcomingCourses = state.courses
    .filter((c) => !state.progress[c.id] || state.progress[c.id].status === 'not_started')
    .slice(0, 5);

  const statCards = [
    {
      label: 'CUs Completed',
      value: completedCUs,
      sub: `of ${totalCUs} total`,
      color: 'var(--success)',
      icon: '✓',
    },
    {
      label: 'CUs Remaining',
      value: remainingCUs,
      sub: `${progressPct}% done`,
      color: 'var(--amber)',
      icon: '◎',
    },
    {
      label: 'Est. Graduation',
      value: gradDate ? format(gradDate, 'MMM yyyy') : '—',
      sub: gradDate ? `in ${formatDistanceToNow(gradDate)}` : 'Set your pace',
      color: 'var(--info)',
      icon: '🎓',
    },
    {
      label: 'Est. Tuition',
      value: estimatedCost ? `$${estimatedCost.toLocaleString()}` : '—',
      sub: 'at current pace',
      color: 'var(--warning)',
      icon: '💰',
    },
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.greeting}>
            Good evening{state.user.name ? `, ${state.user.name}` : ''} 🦉
          </h1>
          <p className={styles.subheading}>
            {state.user.program} · {state.user.targetCUsPerMonth} CUs/month pace
          </p>
        </div>
        <button
          className={`btn btn-primary`}
          onClick={() => navigate('/projector')}
        >
          ◎ Adjust Pace
        </button>
      </header>

      {/* Stat cards */}
      <div className={`${styles.statGrid} stagger`}>
        {statCards.map((s) => (
          <div key={s.label} className={`card ${styles.statCard} animate-fade-up`}>
            <div className={styles.statIcon} style={{ color: s.color }}>{s.icon}</div>
            <div className={styles.statValue} style={{ color: s.color }}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className={`card ${styles.progressSection}`}>
        <div className={styles.progressHeader}>
          <span className="font-display">Degree Progress</span>
          <span className={styles.progressPct}>{progressPct}%</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className={styles.progressMeta}>
          <span className="text-muted text-sm">{completedCUs} CUs earned</span>
          <span className="text-muted text-sm">{remainingCUs} CUs to go</span>
        </div>
      </div>

      <div className={styles.twoCol}>
        {/* In Progress */}
        <div className={`card ${styles.section}`}>
          <h2 className={styles.sectionTitle}>▶ In Progress</h2>
          {inProgressCourses.length === 0 ? (
            <div className={styles.empty}>
              No courses in progress.
              <br />
              <button
                className="btn btn-ghost"
                style={{ marginTop: 12 }}
                onClick={() => navigate('/courses')}
              >
                Browse Course Map →
              </button>
            </div>
          ) : (
            <div className={styles.courseList}>
              {inProgressCourses.map((c) => (
                <div
                  key={c.id}
                  className={styles.courseRow}
                  onClick={() => navigate(`/courses/${c.id}`)}
                >
                  <div>
                    <div className={styles.courseName}>{c.name}</div>
                    <div className={styles.courseMeta}>
                      {c.code} · {c.creditUnits} CUs ·{' '}
                      <span style={{ color: difficultyColor(c.difficulty) }}>
                        {difficultyLabel(c.difficulty)}
                      </span>
                    </div>
                  </div>
                  <span className="badge badge-warning">Active</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Up Next */}
        <div className={`card ${styles.section}`}>
          <h2 className={styles.sectionTitle}>⟶ Up Next</h2>
          <div className={styles.courseList}>
            {upcomingCourses.map((c) => (
              <div
                key={c.id}
                className={styles.courseRow}
                onClick={() => navigate(`/courses/${c.id}`)}
              >
                <div>
                  <div className={styles.courseName}>{c.name}</div>
                  <div className={styles.courseMeta}>
                    {c.code} · {c.creditUnits} CUs · ~{c.avgDays} days avg
                  </div>
                </div>
                <span
                  className="badge"
                  style={{
                    background: `${difficultyColor(c.difficulty)}20`,
                    color: difficultyColor(c.difficulty),
                  }}
                >
                  {difficultyLabel(c.difficulty)}
                </span>
              </div>
            ))}
          </div>
          <button
            className="btn btn-ghost w-full"
            style={{ marginTop: 12, justifyContent: 'center' }}
            onClick={() => navigate('/courses')}
          >
            View Full Course Map →
          </button>
        </div>
      </div>

      {/* Quick tip from Reddit */}
      <div className={`card ${styles.redditTip}`}>
        <div className={styles.redditHeader}>
          <span className={styles.redditBadge}>r/WGU</span>
          <span className="text-muted text-sm">Community tip of the day</span>
        </div>
        <p className={styles.redditQuote}>
          "The best thing I did was knock out all the easy OA courses in the first
          month of my term. Banked CUs fast, built momentum, and had breathing room
          for the hard PAs later."
        </p>
        <div className={styles.redditMeta}>— u/wgu_grinder · 847 upvotes</div>
      </div>
    </div>
  );
}
