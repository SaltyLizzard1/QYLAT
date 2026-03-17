import Header from './components/Header';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import WorkWithMe from './components/WorkWithMe';
import LeapLog from './components/LeapLog';
import IdeaToPlan from './components/IdeaToPlan';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkWithMe />
      <LeapLog />
      <IdeaToPlan />
      <MyStory />
      <Footer />
    </div>
  );
}

export default App;
