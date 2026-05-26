import { createContext, useContext, useReducer, useEffect } from 'react';
import { getCoursesByProgram, WGU_TERM } from '../utils/wguData';

const AppContext = createContext(null);

const initialState = {
  user: {
    name: '',
    program: 'BSCS',
    startDate: new Date().toISOString(),
    targetCUsPerMonth: 12,
    termStartDate: new Date().toISOString(),
  },
  courses: [], // all courses for the program
  progress: {}, // { courseId: { status: 'complete'|'in_progress'|'not_started', startDate, endDate, notes } }
  ui: {
    activeTab: 'dashboard',
    selectedCourse: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PROGRAM': {
      const courses = getCoursesByProgram(action.payload);
      return {
        ...state,
        user: { ...state.user, program: action.payload },
        courses,
      };
    }
    case 'SET_USER':
      return { ...state, user: { ...state.user, ...action.payload } };

    case 'UPDATE_COURSE_STATUS': {
      const { courseId, status, startDate, endDate, notes } = action.payload;
      return {
        ...state,
        progress: {
          ...state.progress,
          [courseId]: { status, startDate, endDate, notes },
        },
      };
    }
    case 'SET_ACTIVE_TAB':
      return { ...state, ui: { ...state.ui, activeTab: action.payload } };

    case 'SET_SELECTED_COURSE':
      return { ...state, ui: { ...state.ui, selectedCourse: action.payload } };

    case 'LOAD_SAVED_STATE':
      return { ...initialState, ...action.payload };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    // Load from localStorage on init
    try {
      const saved = localStorage.getItem('nightowlatlas_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...init, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load saved state');
    }
    // Default: load BSCS courses
    return { ...init, courses: getCoursesByProgram(init.user.program) };
  });

  // Persist to localStorage on state change
  useEffect(() => {
    try {
      localStorage.setItem('nightowlatlas_state', JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state');
    }
  }, [state]);

  // Computed values
  const completedCourses = state.courses.filter(
    (c) => state.progress[c.id]?.status === 'complete'
  );
  const inProgressCourses = state.courses.filter(
    (c) => state.progress[c.id]?.status === 'in_progress'
  );
  const completedCUs = completedCourses.reduce((sum, c) => sum + c.creditUnits, 0);
  const totalCUs = state.courses.reduce((sum, c) => sum + c.creditUnits, 0);
  const remainingCUs = totalCUs - completedCUs;

  const monthsToGrad =
    state.user.targetCUsPerMonth > 0
      ? Math.ceil(remainingCUs / state.user.targetCUsPerMonth)
      : null;

  const gradDate = monthsToGrad
    ? new Date(Date.now() + monthsToGrad * 30 * 24 * 60 * 60 * 1000)
    : null;

  const termsNeeded = monthsToGrad ? Math.ceil(monthsToGrad / WGU_TERM.months) : null;
  const estimatedCost = termsNeeded ? termsNeeded * WGU_TERM.costPerTerm : null;

  const progressPct = totalCUs > 0 ? Math.round((completedCUs / totalCUs) * 100) : 0;

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        // Computed
        completedCourses,
        inProgressCourses,
        completedCUs,
        totalCUs,
        remainingCUs,
        monthsToGrad,
        gradDate,
        termsNeeded,
        estimatedCost,
        progressPct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
};
