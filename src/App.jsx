import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import CourseMap from './pages/CourseMap';
import CourseDetail from './pages/CourseDetail';
import GradProjector from './pages/GradProjector';
import Onboarding from './pages/Onboarding';
import './styles/global.css';

function ProtectedRoute({ children }) {
  const { state } = useApp();
  if (!state.user.name) return <Navigate to="/onboarding" replace />;
  return children;
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<CourseMap />} />
            <Route path="courses/:courseId" element={<CourseDetail />} />
            <Route path="projector" element={<GradProjector />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}