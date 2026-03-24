import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkWithMe from './components/WorkWithMe';
import LeapLog from './components/LeapLog';
import IdeaToPlan from './components/IdeaToPlan';
import Footer from './components/Footer';
import { scrollToSectionById } from './utils/scrollToSection';

function App() {
  useEffect(() => {
    const hash = window.location.hash?.replace(/^#/, '');
    if (!hash) return;
    const id = decodeURIComponent(hash);
    const t = window.setTimeout(() => scrollToSectionById(id), 350);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkWithMe />
      <IdeaToPlan />
      <LeapLog />
      <Footer />
    </div>
  );
}

export default App;
