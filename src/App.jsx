import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  DEVELOPER,
  PROJECTS,
  SKILL_CATEGORIES,
  CONTACT_LINKS,
} from "./data/portfolioData.js";

export default function App() {
  return (
    <div className="portfolio-app">
      <Header links={CONTACT_LINKS} />
      <main className="portfolio-main">
        <Hero developer={DEVELOPER} links={CONTACT_LINKS} />
        <About developer={DEVELOPER} />
        <Projects projects={PROJECTS} />
        <Skills categories={SKILL_CATEGORIES} />
        <Contact developer={DEVELOPER} links={CONTACT_LINKS} />
      </main>
      <Footer />
    </div>
  );
}
