import "./App.css";
import { NavBar } from "./components/NavBar";
import { CtaSection } from "./Sections/CtaSection";
import { FeatureSection } from "./Sections/FeatureSection";
import { Footer } from "./Sections/Footer";
import { HeroSection } from "./Sections/HeroSection";
import { TestimonialSection } from "./Sections/TestimonialSection";

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
