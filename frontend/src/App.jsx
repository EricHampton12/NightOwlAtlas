import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { supabase } from './lib/supabaseClient.js';
import Layout from './components/shared/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CourseMap from './pages/CourseMap.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import GradProjector from './pages/GradProjector.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import './styles/global.css';

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Still loading
  if (session === undefined) return null;

  // Not logged in
  if (!session) return <Navigate to="/login" replace />;

  // Logged in but no name set yet — show onboarding
  return children;
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
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