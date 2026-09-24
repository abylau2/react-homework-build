import { useState } from "react";

// ============================================================================
// 1. ДАННЫЕ ПРОФИЛЯ (Легко редактировать и объяснять)
// ============================================================================
const PROFILE = {
  name: "Abylau",
  title: "Frontend Developer & React Enthusiast",
  bio: "Привет! Я начинающий фронтенд-разработчик. Создаю адаптивные, быстрые и визуально приятные веб-приложения на React. Увлекаюсь современным веб-дизайном, компонентным подходом и чистым кодом.",
  location: "Planet Earth 🌍 (Almaty, KZ)",
  github: "https://github.com/abylau2",
  githubUsername: "abylau2",
  status: "Открыт к новым проектам и практике",
};

// Список навыков с категориями для фильтрации
const SKILLS = [
  { id: 1, name: "React", category: "frontend", level: "Изучаю хуки и компоненты", icon: "⚛️" },
  { id: 2, name: "JavaScript (ES6+)", category: "frontend", level: "Базовый синтаксис, массивы, async", icon: "⚡" },
  { id: 3, name: "HTML5 & Семантика", category: "frontend", level: "Доступная и чистая разметка", icon: "🌐" },
  { id: 4, name: "CSS3 & Flex/Grid", category: "frontend", level: "Адаптивная верстка, анимации", icon: "🎨" },
  { id: 5, name: "Vite", category: "tools", level: "Быстрая сборка проектов", icon: "⚡" },
  { id: 6, name: "Git & GitHub", category: "tools", level: "Ветвление, коммиты, деплой", icon: "🐙" },
  { id: 7, name: "REST API", category: "tools", level: "Запросы fetch и работа с JSON", icon: "🔌" },
  { id: 8, name: "Bento UI Design", category: "design", level: "Современные модульные интерфейсы", icon: "🍱" },
];

// Несколько фактов в секцию "Обо мне"
const FACTS = [
  { label: "Цель", value: "Стать сильным React-разработчиком", icon: "🎯" },
  { label: "Подход", value: "Практика через реальный код каждый день", icon: "💻" },
  { label: "Локация", value: PROFILE.location, icon: "📍" },
  { label: "Приватность", value: "Без личных номеров и адресов (Safe Profile)", icon: "🔒" },
];

// ============================================================================
// 2. КОМПОНЕНТ: HEADER (Шапка сайта с навигацией и сменой темы)
// ============================================================================
function Header({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <a href="#hero" className="brand-logo">
        <span className="bracket">&lt;</span>
        <span className="brand-text">Abylau</span>
        <span className="bracket">/&gt;</span>
      </a>

      <nav className="nav-menu" aria-label="Основная навигация">
        <a href="#about">Обо мне</a>
        <a href="#skills">Навыки</a>
        <a href="#contact">Контакты</a>
      </nav>

      <div className="header-actions">
        {/* Кнопка смены цветовой темы */}
        <button
          type="button"
          className="btn-theme-toggle"
          onClick={onToggleTheme}
          title="Сменить тему"
        >
          {theme === "neon-cyan" ? "🌙 Неон" : "💜 Фиолетовый"}
        </button>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="btn-github"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}

// ============================================================================
// 3. КОМПОНЕНТ: HERO (Главный экран с именем, аватаром и интерактивным счетчиком)
// ============================================================================
function Hero() {
  // Простой и понятный интерактив через useState (лайки/приветствия)
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content card">
        <div className="status-pill">
          <span className="status-dot" />
          <span>{PROFILE.status}</span>
        </div>

        <h1 className="hero-title">
          Привет, я <span className="highlight-text">{PROFILE.name}</span>
        </h1>

        <p className="hero-subtitle">{PROFILE.title}</p>

        <p className="hero-desc">{PROFILE.bio}</p>

        <div className="hero-buttons">
          <a href="#about" className="btn-primary">
            Узнать больше ↓
          </a>
          <a href="#contact" className="btn-secondary">
            Связаться
          </a>
          {/* Интерактивная кнопка с понятным состоянием */}
          <button
            type="button"
            className={`btn-reaction ${hasLiked ? "reacted" : ""}`}
            onClick={handleLike}
          >
            {hasLiked ? "🎉 Спасибо!" : "👋 Поприветствовать"} ({likes})
          </button>
        </div>
      </div>

      <div className="hero-avatar-card card">
        <div className="avatar-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}abylau-avatar.svg`}
            alt={`Иллюстрация разработчика ${PROFILE.name}`}
            className="avatar-image"
          />
        </div>
        <div className="avatar-meta">
          <h3>{PROFILE.name}</h3>
          <p>{PROFILE.location}</p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. КОМПОНЕНТ: ABOUT (Секция "Обо мне" с карточками фактов)
// ============================================================================
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <span className="section-badge">01 / Инфо</span>
        <h2>Обо мне (About Me)</h2>
        <p>Кратко о моих целях, философии обучения и подходе к разработке.</p>
      </div>

      <div className="about-grid">
        <div className="card about-story">
          <h3>Мой путь в веб-разработку</h3>
          <p>
            Я изучаю React, потому что мне нравится идея разбивать сложные интерфейсы
            на простые, понятные и независимые компоненты. Это делает код аккуратным,
            а разработку — удобной и логичной.
          </p>
          <p>
            Сейчас активно практикуюсь в работе с состоянием (<strong>useState</strong>),
            пропсами, списками данных через <strong>.map()</strong> и современной
            адаптивной версткой на CSS Grid и Flexbox.
          </p>
          <div className="principles-tags">
            <span className="tag">Чистый код</span>
            <span className="tag">Компонентный подход</span>
            <span className="tag">Любознательность</span>
          </div>
        </div>

        <div className="facts-grid">
          {FACTS.map((fact, index) => (
            <div key={index} className="card fact-card">
              <span className="fact-icon">{fact.icon}</span>
              <div className="fact-info">
                <span className="fact-label">{fact.label}</span>
                <strong className="fact-value">{fact.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. КОМПОНЕНТ: SKILLS (Секция навыков с фильтрацией по категориям)
// ============================================================================
function Skills() {
  // useState для фильтрации — очень простой паттерн, легко объяснить преподавателю
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "Все навыки" },
    { key: "frontend", label: "Frontend" },
    { key: "tools", label: "Инструменты" },
    { key: "design", label: "Дизайн" },
  ];

  // Фильтруем массив: если "all" — отдаем всё, иначе только совпадения
  const displayedSkills =
    selectedCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="section skills-section" id="skills">
      <div className="section-header">
        <span className="section-badge">02 / Стек</span>
        <h2>Мои навыки (Skills)</h2>
        <p>Технологии и инструменты, которые я использую в своих проектах.</p>
      </div>

      {/* Кнопки переключения фильтра */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`filter-btn ${selectedCategory === cat.key ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Сетка карточек с навыками */}
      <div className="skills-grid">
        {displayedSkills.map((skill) => (
          <div key={skill.id} className="card skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-details">
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// 6. КОМПОНЕНТ: CONTACT (Секция контактов без приватных данных)
// ============================================================================
function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(PROFILE.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <span className="section-badge">03 / Связь</span>
        <h2>Контакты (Contact Info)</h2>
        <p>Безопасные контактные данные для связи и проверки задания.</p>
      </div>

      <div className="card contact-card">
        <div className="contact-text">
          <h3>Открыт к сотрудничеству и код-ревью</h3>
          <p>
            В соответствии с правилами приватности в задании, домашний адрес и
            личный номер телефона не публикуются. Все учебные репозитории и код
            открыты на моем профиле GitHub.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <span className="item-label">Локация:</span>
              <span className="item-val">{PROFILE.location}</span>
            </div>
            <div className="contact-item">
              <span className="item-label">GitHub:</span>
              <span className="item-val">@{PROFILE.githubUsername}</span>
            </div>
          </div>
        </div>

        <div className="contact-actions">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-full"
          >
            Перейти в GitHub Профиль ↗
          </a>
          <button
            type="button"
            className="btn-secondary btn-full"
            onClick={handleCopyGithub}
          >
            {copied ? "✓ Ссылка скопирована!" : "Скопировать ссылку на GitHub"}
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 7. КОМПОНЕНТ: FOOTER (Подвал)
// ============================================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} {PROFILE.name} · React SPA Homework</span>
        <a href="#hero" className="back-to-top">
          Наверх ↑
        </a>
      </div>
    </footer>
  );
}

// ============================================================================
// ГЛАВНЫЙ КОМПОНЕНТ: APP (Сборка всего приложения)
// ============================================================================
export default function App() {
  const [theme, setTheme] = useState("neon-cyan");

  const toggleTheme = () => {
    setTheme(theme === "neon-cyan" ? "neon-purple" : "neon-cyan");
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <div className="glow-effect" />
      <div className="content-wrapper">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
