import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { difficultyLabel, difficultyColor } from '../utils/wguData';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { state } = useApp();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const course = state.courses.find(c => c.id === courseId);

  useEffect(() => {
  if (!course) return;
  setLoading(true);

  const query = encodeURIComponent(course.code);

  fetch(`https://www.reddit.com/r/WGU/search.json?q=${query}&restrict_sr=1&sort=top&t=all&limit=25`)
    .then(res => res.json())
    .then(data => {
      const posts = data.data.children
        .map(child => child.data)
        .filter(p => p.title.toLowerCase().includes(course.code.toLowerCase()))
        .map(p => ({
          id: p.id,
          title: p.title,
          url: `https://reddit.com${p.permalink}`,
          score: p.score,
          numComments: p.num_comments,
          category: categorizePost(p.title + ' ' + (p.selftext || '')),
        }));
      setResources(posts);
    })
    .finally(() => setLoading(false));
}, [courseId]);

const categorizePost = (text) => {
  const lower = text.toLowerCase();
  if (lower.includes('pass') || lower.includes('done')) return 'passed';
  if (lower.includes('tip') || lower.includes('resource') || lower.includes('study')) return 'tips';
  if (lower.includes('help') || lower.includes('stuck')) return 'help';
  if (lower.includes('oa')) return 'oa-prep';
  if (lower.includes('pa')) return 'pa-prep';
  return 'general';
};
  if (!course) return <div>Course not found.</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>

      {/* Back button */}
      <button onClick={() => navigate('/courses')} style={{ marginBottom: '1rem' }}>
        ← Back to Course Map
      </button>

      {/* Course header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1>{course.code} – {course.name}</h1>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <span style={{ color: difficultyColor(course.difficulty) }}>
            {difficultyLabel(course.difficulty)}
          </span>
          <span>{course.creditUnits} CUs</span>
          <span>~{course.avgDays} days avg</span>
          <span>{course.type}</span>
        </div>
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          {course.tags.map(t => (
            <span key={t} className="badge badge-info">{t}</span>
          ))}
        </div>
      </div>

      {/* Reddit Resources */}
      <h2>r/WGU Resources</h2>

      {loading && <p>Fetching resources from r/WGU...</p>}

      {!loading && resources.length === 0 && (
        <p className="text-muted">No external resources found for {course.code} yet.</p>
      )}

      {!loading && resources.map((r, i) => (
  <div key={i} style={{
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '0.75rem'
  }}>
    <a href={r.url} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
      {r.title}
    </a>
    <div style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '1rem' }}>
      <span>↑ {r.score}</span>
      <span>{r.numComments} comments</span>
      <span className="badge badge-info">{r.category}</span>
    </div>
  </div>
))}
    </div>
  );
}