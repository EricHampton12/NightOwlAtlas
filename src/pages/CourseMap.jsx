import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { difficultyLabel, difficultyColor } from '../utils/wguData';
import styles from './CourseMap.module.css';

const STATUS_OPTS = ['all', 'not_started', 'in_progress', 'complete'];
const STATUS_LABELS = {
  all: 'All',
  not_started: 'Not Started',
  in_progress: 'In Progress',
  complete: 'Complete',
};

export default function CourseMap() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const getCourseStatus = (courseId) =>
    state.progress[courseId]?.status || 'not_started';

  const filtered = state.courses.filter((c) => {
    const status = getCourseStatus(c.id);
    const matchesFilter = filter === 'all' || status === filter;
    const matchesSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Group by category
  const grouped = filtered.reduce((acc, c) => {
    if (!acc[c.category]) acc[c.category] = [];
    acc[c.category].push(c);
    return acc;
  }, {});

  const handleStatusChange = (e, courseId) => {
    e.stopPropagation();
    const status = e.target.value;
    dispatch({
      type: 'UPDATE_COURSE_STATUS',
      payload: {
        courseId,
        status,
        startDate: status === 'in_progress' ? new Date().toISOString() : undefined,
        endDate: status === 'complete' ? new Date().toISOString() : undefined,
      },
    });
  };

  const statusBadge = (status) => {
    const map = {
      complete: { cls: 'badge-success', label: '✓ Done' },
      in_progress: { cls: 'badge-warning', label: '▶ Active' },
      not_started: { cls: 'badge-info', label: '○ Upcoming' },
    };
    const { cls, label } = map[status] || map.not_started;
    return <span className={`badge ${cls}`}>{label}</span>;
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Course Map</h1>
          <p className="text-muted text-sm">{state.courses.length} courses · {state.user.program}</p>
        </div>
      </header>

      {/* Filters */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <div className={styles.filterTabs}>
          {STATUS_OPTS.map((s) => (
            <button
              key={s}
              className={`${styles.filterTab} ${filter === s ? styles.filterActive : ''}`}
              onClick={() => setFilter(s)}
            >
              {STATUS_LABELS[s]}
            </button>
          ))}
        </div>
      </div>

      {/* Course groups */}
      {Object.entries(grouped).map(([category, courses]) => (
        <div key={category} className={styles.category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.courseGrid}>
            {courses.map((c) => {
              const status = getCourseStatus(c.id);
              return (
                <div
                  key={c.id}
                  className={`${styles.courseCard} ${styles[`status_${status}`]}`}
                  onClick={() => navigate(`/courses/${c.id}`)}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.courseCode}>{c.code}</span>
                    {statusBadge(status)}
                  </div>

                  <div className={styles.courseName}>{c.name}</div>

                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaDot} style={{ background: difficultyColor(c.difficulty) }} />
                      {difficultyLabel(c.difficulty)}
                    </span>
                    <span className={styles.metaItem}>{c.creditUnits} CUs</span>
                    <span className={styles.metaItem}>~{c.avgDays}d</span>
                  </div>

                  <div className={styles.cardTags}>
                    {c.tags.slice(0, 3).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>

                  {/* Status selector */}
                  <select
                    className={styles.statusSelect}
                    value={status}
                    onChange={(e) => handleStatusChange(e, c.id)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="not_started">Not Started</option>
                    <option value="in_progress">In Progress</option>
                    <option value="complete">Complete</option>
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className={styles.empty}>
          No courses found. Try adjusting your search or filter.
        </div>
      )}
    </div>
  );
}
