import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Focus from "./components/Focus.jsx";
import Interests from "./components/Interests.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  DEVELOPER,
  FOCUS_AREAS,
  TECH_STACK,
  INTERESTS,
  CONTACT_LINKS,
} from "./data/portfolioData.js";

export default function App() {
  return (
    <div className="portfolio-app">
      <Header links={CONTACT_LINKS} />
      <main className="portfolio-main">
        <Hero developer={DEVELOPER} links={CONTACT_LINKS} />
        <About developer={DEVELOPER} />
        <Focus focusAreas={FOCUS_AREAS} techStack={TECH_STACK} />
        <Interests interests={INTERESTS} />
        <Contact developer={DEVELOPER} links={CONTACT_LINKS} />
      </main>
      <Footer />
    </div>
  );
}
