import { useState } from "react";

export default function Contact({ developer, links }) {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2200);
    }
  };

  return (
    <section className="section-block contact-editorial-section" id="contact" aria-label="Contact Information">
      <div className="contact-accent-block">
        <div className="contact-top-meta">
          <span className="contact-tag">04 / CONTACT INFORMATION</span>
          <span className="contact-rule" aria-hidden="true" />
          <span className="contact-coord">NO SENSITIVE DATA · 2026</span>
        </div>

        <div className="contact-main-grid">
          <div className="contact-headline-col">
            <h2 className="contact-giant-title">
              <span>LET’S</span>
              <span>CONNECT.</span>
            </h2>
            <p className="contact-note">
              Open to junior frontend roles, collaboration, and code review.
              In strict accordance with homework privacy guidelines, private phone numbers and personal home addresses are omitted.
            </p>
          </div>

          <div className="contact-channels-col">
            <div className="contact-links-list">
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-meta">
                  <span className="channel-num">01</span>
                  <span className="channel-name">GitHub</span>
                </div>
                <span className="channel-handle">github.com/abylau2</span>
                <span className="channel-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-meta">
                  <span className="channel-num">02</span>
                  <span className="channel-name">Instagram</span>
                </div>
                <span className="channel-handle">@abylau</span>
                <span className="channel-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href={`mailto:${links.email}`}
                className="contact-channel-item"
              >
                <div className="channel-meta">
                  <span className="channel-num">03</span>
                  <span className="channel-name">Email</span>
                </div>
                <span className="channel-handle">{links.email}</span>
                <span className="channel-arrow" aria-hidden="true">↗</span>
              </a>

              <div className="contact-channel-item static-channel">
                <div className="channel-meta">
                  <span className="channel-num">04</span>
                  <span className="channel-name">Address</span>
                </div>
                <span className="channel-handle">Planet Earth (Almaty, KZ)</span>
                <span className="channel-arrow" aria-hidden="true">🪐</span>
              </div>
            </div>

            <div className="contact-copy-actions">
              <button
                type="button"
                className="editorial-action-btn"
                onClick={() => handleCopy(links.email, "email")}
              >
                {copiedText === "email" ? "✓ Copied Email" : "Copy Email Address"}
              </button>
              <button
                type="button"
                className="editorial-action-btn"
                onClick={() => handleCopy(links.github, "github")}
              >
                {copiedText === "github" ? "✓ Copied GitHub" : "Copy GitHub Link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
