import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import styles from './Layout.module.css';

const NAV = [
  { to: '/',          label: 'Dashboard',   icon: '◉' },
  { to: '/courses',   label: 'Course Map',  icon: '◈' },
  { to: '/projector', label: 'Grad Projector', icon: '◎' },
];

export default function Layout() {
  const { progressPct, state, completedCUs, totalCUs } = useApp();

  return (
    <div className={styles.shell}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoOwl}>🦉</span>
          <div>
            <div className={styles.logoName}>NightOwl<span>Atlas</span></div>
            <div className={styles.logoSub}>WGU Companion</div>
          </div>
        </div>

        {/* Progress ring summary */}
        <div className={styles.progressCard}>
          <div className={styles.progressRing}>
            <svg viewBox="0 0 60 60" className={styles.ringsvg}>
              <circle cx="30" cy="30" r="24" className={styles.ringBg} />
              <circle
                cx="30" cy="30" r="24"
                className={styles.ringFill}
                strokeDasharray={`${(progressPct / 100) * 150.8} 150.8`}
                strokeDashoffset="0"
                transform="rotate(-90 30 30)"
              />
            </svg>
            <span className={styles.ringPct}>{progressPct}%</span>
          </div>
          <div className={styles.progressInfo}>
            <div className={styles.progressLabel}>Progress</div>
            <div className={styles.progressCUs}>{completedCUs} / {totalCUs} CUs</div>
            <div className={styles.progressProgram}>{state.user.program}</div>
          </div>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {NAV.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.navActive : ''}`
              }
            >
              <span className={styles.navIcon}>{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom - Pro badge */}
        <div className={styles.proBanner}>
          <div className={styles.proLabel}>✦ Free Plan</div>
          <p>Upgrade to Pro for AI course advisor & full Reddit access</p>
          <button className={`btn btn-primary ${styles.proBtn}`}>Upgrade — $6.99/mo</button>
        </div>
      </aside>

      {/* Main content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
