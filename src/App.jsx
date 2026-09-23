const profile = {
  name: "Nazerke",
  role: "Frontend learner",
  github: "https://github.com/abylau2",
};

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to the top">
        NZ
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function ProfileIntro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow">Hello, my name is</p>
        <h1 id="intro-title">{profile.name}</h1>
        <p className="lead">
          I am a {profile.role.toLowerCase()} who enjoys turning simple ideas
          into clear and useful web pages.
        </p>
        <a className="primary-link" href="#about">
          Get to know me <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <figure className="portrait-frame">
        <img
          src={`${import.meta.env.BASE_URL}profile-illustration.svg`}
          alt="Abstract illustrated portrait representing Nazerke"
        />
        <figcaption>Learning one project at a time.</figcaption>
      </figure>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div>
        <p className="section-number">01</p>
        <h2 id="about-title">About me</h2>
      </div>
      <div className="about-copy">
        <p>
          I am learning React and modern frontend development. I like keeping
          code understandable, interfaces focused, and every project a little
          better than the previous one.
        </p>
        <p>
          Right now I am practicing reusable components, responsive layouts,
          and accessible HTML. My goal is to build websites that are pleasant
          to use and easy to maintain.
        </p>
        <ul className="skills" aria-label="Current skills">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML &amp; CSS</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="section-number">02</p>
        <h2 id="contact-title">Contact</h2>
      </div>
      <div className="contact-panel">
        <p>
          Want to see what I am building? My public projects are available on
          GitHub.
        </p>
        <a href={profile.github} target="_blank" rel="noreferrer">
          github.com/abylau2
          <span aria-hidden="true">↗</span>
        </a>
        <small>Location: Planet Earth</small>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Built with React by {profile.name}.</p>
      <a href="#top">Back to top</a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page-shell" id="top">
      <Header />
      <main>
        <ProfileIntro />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
