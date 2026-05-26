import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DEGREE_PROGRAMS } from '../utils/wguData';

function Calendar({ value, onChange }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(value ? new Date(value) : today);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const selectDay = (day) => {
    const selected = new Date(year, month, day);
    onChange(selected.toISOString().split('T')[0]);
  };

  const selectedDate = value ? new Date(value + 'T00:00:00') : null;
  const isSelected = (day) =>
    selectedDate &&
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month &&
    selectedDate.getDate() === day;

  const isToday = (day) =>
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day;

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '1rem',
      background: 'var(--surface)',
      marginBottom: '1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button onClick={prevMonth} style={{
          background: 'none', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '0.25rem 0.6rem',
          color: 'var(--text)', cursor: 'pointer', fontSize: '1rem'
        }}>‹</button>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select
            value={month}
            onChange={e => setViewDate(new Date(year, Number(e.target.value), 1))}
            style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '6px', padding: '0.25rem 0.5rem',
              color: 'var(--text)', cursor: 'pointer',
            }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(2000, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <select
            value={year}
            onChange={e => setViewDate(new Date(Number(e.target.value), month, 1))}
            style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '6px', padding: '0.25rem 0.5rem',
              color: 'var(--text)', cursor: 'pointer',
            }}
          >
            {Array.from({ length: 10 }, (_, i) => today.getFullYear() - 2 + i).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <button onClick={nextMonth} style={{
          background: 'none', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '0.25rem 0.6rem',
          color: 'var(--text)', cursor: 'pointer', fontSize: '1rem'
        }}>›</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '0.5rem' }}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', padding: '0.25rem' }}>
            {d}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
        {cells.map((day, i) => (
          <button
            key={i}
            onClick={() => day && selectDay(day)}
            style={{
              padding: '0.5rem 0',
              borderRadius: '6px',
              border: 'none',
              background: isSelected(day)
                ? 'var(--primary)'
                : isToday(day)
                ? 'var(--primary-subtle, rgba(99,102,241,0.15))'
                : 'transparent',
              color: isSelected(day) ? '#fff' : day ? 'var(--text)' : 'transparent',
              cursor: day ? 'pointer' : 'default',
              fontWeight: isToday(day) ? 600 : 400,
              fontSize: '0.9rem',
            }}
          >
            {day || ''}
          </button>
        ))}
      </div>

      {value && (
        <div style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Selected: {new Date(value + 'T00:00:00').toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      )}
    </div>
  );
}

export default function Onboarding() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', program: '', termStart: '' });

  const bachelorsIT = Object.values(DEGREE_PROGRAMS).filter(p => p.level === 'bachelors' && p.college === 'IT');
  const bachelorsBusiness = Object.values(DEGREE_PROGRAMS).filter(p => p.level === 'bachelors' && p.college === 'Business');
  const masters = Object.values(DEGREE_PROGRAMS).filter(p => p.level === 'masters');

  const handleSubmit = () => {
    dispatch({
      type: 'SET_USER',
      payload: { name: form.name, program: form.program, termStart: form.termStart },
    });
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '480px', width: '100%' }}>

        {/* Progress bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              height: '4px', flex: 1, borderRadius: '2px',
              background: s <= step ? 'var(--primary)' : 'var(--border)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {/* Step 1 - Name */}
        {step === 1 && (
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Welcome to NightOwl Atlas</h1>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>
              Let's get your degree plan set up. What's your name?
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{
                width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                border: '1px solid var(--border)', background: 'var(--surface)',
                color: 'var(--text)', fontSize: '1rem', marginBottom: '1.5rem',
              }}
            />
            <button
              onClick={() => setStep(2)}
              disabled={!form.name.trim()}
              style={{
                width: '100%', padding: '0.75rem', borderRadius: '8px',
                background: 'var(--primary)', color: '#fff', border: 'none',
                fontSize: '1rem', cursor: form.name.trim() ? 'pointer' : 'not-allowed',
                opacity: form.name.trim() ? 1 : 0.5,
              }}
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 - Degree Program */}
        {step === 2 && (
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Your Degree Program</h1>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>
              Which program are you enrolled in?
            </p>
            <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '1.5rem' }}>
              {[
                { label: "IT Bachelor's", programs: bachelorsIT },
                { label: "Business Bachelor's", programs: bachelorsBusiness },
                { label: "Master's", programs: masters },
              ].map(({ label, programs }) => (
                <div key={label} style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {label}
                  </p>
                  {programs.map(prog => (
                    <button
                      key={prog.id}
                      onClick={() => setForm({ ...form, program: prog.id })}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                        border: `2px solid ${form.program === prog.id ? 'var(--primary)' : 'var(--border)'}`,
                        background: form.program === prog.id ? 'var(--primary-subtle, rgba(99,102,241,0.1))' : 'var(--surface)',
                        color: 'var(--text)', textAlign: 'left', cursor: 'pointer',
                        marginBottom: '0.5rem', transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{prog.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {prog.totalCUs} CUs · {prog.level === 'masters' ? "Master's" : "Bachelor's"}
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => setStep(1)} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)', cursor: 'pointer' }}>
                ← Back
              </button>
              <button onClick={() => setStep(3)} disabled={!form.program} style={{ flex: 2, padding: '0.75rem', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: form.program ? 'pointer' : 'not-allowed', opacity: form.program ? 1 : 0.5 }}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 - Term Start Date */}
        {step === 3 && (
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Term Start Date</h1>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>
              When did your current term begin?
            </p>
            <Calendar
              value={form.termStart}
              onChange={termStart => setForm({ ...form, termStart })}
            />
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => setStep(2)} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--text)', cursor: 'pointer' }}>
                ← Back
              </button>
              <button onClick={handleSubmit} disabled={!form.termStart} style={{ flex: 2, padding: '0.75rem', borderRadius: '8px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: form.termStart ? 'pointer' : 'not-allowed', opacity: form.termStart ? 1 : 0.5 }}>
                Let's Go 🦉
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}