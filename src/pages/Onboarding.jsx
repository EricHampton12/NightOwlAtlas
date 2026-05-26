import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DEGREE_PROGRAMS } from '../utils/wguData';

export default function Onboarding() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    program: '',
    termStart: '',
  });

  const handleSubmit = () => {
    dispatch({
      type: 'SET_USER',
      payload: {
        name: form.name,
        program: form.program,
        termStart: form.termStart,
      },
    });
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '480px', width: '100%' }}>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              height: '4px',
              flex: 1,
              borderRadius: '2px',
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
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '1rem',
                marginBottom: '1.5rem',
              }}
            />
            <button
              onClick={() => setStep(2)}
              disabled={!form.name.trim()}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                background: 'var(--primary)',
                color: '#fff',
                border: 'none',
                fontSize: '1rem',
                cursor: form.name.trim() ? 'pointer' : 'not-allowed',
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {Object.values(DEGREE_PROGRAMS).map(prog => (
                <button
                  key={prog.id}
                  onClick={() => setForm({ ...form, program: prog.id })}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: `2px solid ${form.program === prog.id ? 'var(--primary)' : 'var(--border)'}`,
                    background: form.program === prog.id ? 'var(--primary-subtle, rgba(99,102,241,0.1))' : 'var(--surface)',
                    color: 'var(--text)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{prog.name}</div>
                  <div className="text-muted" style={{ fontSize: '0.85rem' }}>{prog.totalCUs} CUs</div>
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!form.program}
                style={{
                  flex: 2,
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'var(--primary)',
                  color: '#fff',
                  border: 'none',
                  cursor: form.program ? 'pointer' : 'not-allowed',
                  opacity: form.program ? 1 : 0.5,
                }}
              >
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
            <input
              type="date"
              value={form.termStart}
              onChange={e => setForm({ ...form, termStart: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '1rem',
                marginBottom: '1.5rem',
              }}
            />
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => setStep(2)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'transparent',
                  color: 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.termStart}
                style={{
                  flex: 2,
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'var(--primary)',
                  color: '#fff',
                  border: 'none',
                  cursor: form.termStart ? 'pointer' : 'not-allowed',
                  opacity: form.termStart ? 1 : 0.5,
                }}
              >
                Let's Go 🦉
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}