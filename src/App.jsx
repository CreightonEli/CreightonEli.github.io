import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
