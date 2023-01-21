import "./App.css";
import { NavBar } from "./components/NavBar";
import { CtaSection } from "./sections/CtaSection";
import { FeatureSection } from "./sections/FeatureSection";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";
import { TestimonialSection } from "./sections/TestimonialSection";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <TestimonialSection></TestimonialSection>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
