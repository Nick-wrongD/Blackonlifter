import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrainingModes from './components/TrainingModes';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <TrainingModes />
      <Footer />
    </>
  );
}
