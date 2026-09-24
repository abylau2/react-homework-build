import { useState } from "react";

export default function Contact({ developer, links }) {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  return (
    <section className="section-block contact-editorial-section" id="contact" aria-label="Contact Information">
      <div className="contact-accent-block">
        <div className="contact-top-meta">
          <span className="contact-tag">04 / CONTACT</span>
          <span className="contact-rule" aria-hidden="true" />
          <span className="contact-coord">ALMATY // 2026</span>
        </div>

        <div className="contact-main-grid">
          <div className="contact-headline-col">
            <h2 className="contact-giant-title">
              <span>LET’S</span>
              <span>CONNECT.</span>
            </h2>
            <p className="contact-note">
              Interested in cybersecurity discussions, junior SOC analyst opportunities, and collaborative tech projects.
              Sensitive personal information (phone number, home address) is omitted in accordance with academic guidelines.
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
                {copiedText === "github" ? "✓ Copied GitHub Link" : "Copy GitHub Link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
