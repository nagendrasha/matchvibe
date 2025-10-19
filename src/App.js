import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import StoriesSection from './components/StoriesSection';
import FAQSection from './components/FAQSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StoriesSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
