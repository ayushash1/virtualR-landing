import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Prices/>
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
