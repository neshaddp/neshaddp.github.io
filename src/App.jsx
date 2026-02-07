import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  profile,
  nav,
  news,
  projects,
  publications,
  teaching,
  awards,
  service,
  contactForm,
  socialLinks
} from "./content";

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "home");

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.4, 0.6] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map((x) => parseInt(x, 10));
  const dt = new Date(y, (m || 1) - 1, d || 1);
  return dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

export default function App() {
  const sectionIds = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(sectionIds);

  const [menuOpen, setMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState(null);
  const [openNews, setOpenNews] = useState(null);

  const [showAllNews, setShowAllNews] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sortedNews = useMemo(() => [...(news || [])].sort((a, b) => (a.date < b.date ? 1 : -1)), []);
  const visibleNews = showAllNews ? sortedNews : sortedNews.slice(0, 6);

  const visibleProjects = showAllProjects ? (projects || []) : (projects || []).slice(0, 4);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenProject(null);
        setOpenNews(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app">
      <TopGlow />

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Go to top">
            <span className="brandDot" />
            <span className="brandText">{profile.name}</span>
          </a>

          <nav className="navLinks" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`navLink ${active === n.id ? "active" : ""}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="navActions">
            <a className="btn small" href={profile.cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>

            <button className="iconBtn burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="menuBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setMenuOpen(false)}
          >
            <motion.div
              className="menuPanel"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseDown={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="menuTop">
                <span className="muted">Menu</span>
                <button className="iconBtn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  ✕
                </button>
              </div>

              <div className="menuLinks">
                {nav.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className={`menuLink ${active === n.id ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}
              </div>

              <div className="menuActions">
                <a className="btn" href={profile.cvUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="container heroGrid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <h1 className="h1">
                <span className="accent">{profile.name}</span>
              </h1>

              <p className="kicker">{profile.title}</p>
              {Array.isArray(profile.subtitle) ? (
                <div className="leadStack">
                  {profile.subtitle.map((para, i) => (
                    <p className="lead leadJustify" key={i}>{para}</p>
                  ))}
                </div>
              ) : (
                <p className="lead leadJustify">{profile.subtitle}</p>
              )}


              {/* Requested: remove ALL buttons/links from Home hero */}
  
            </motion.div>

            <motion.aside
              className="profileCard"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            >
              <div className="profileImageWrap">
                <img
                  className="profileImage"
                  src={profile.headshotUrl}
                  alt={`${profile.name} portrait`}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              <div className="profileMeta">
                <div className="profileName">{profile.name}</div>
                <div className="muted">{profile.affiliation}</div>
                <div className="muted">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* NEWS */}
        <Section id="news" title="News" subtitle="Click an item for details. Use “Show all” to expand the full timeline.">
          <div className="newsTopRow">
            <div className="muted">
              Showing {visibleNews.length} of {sortedNews.length}
            </div>

            {sortedNews.length > 6 ? (
              <button className="btn small ghost" type="button" onClick={() => setShowAllNews((v) => !v)}>
                {showAllNews ? "Collapse" : "Show all news"}
              </button>
            ) : null}
          </div>

          <div className="newsList">
            {visibleNews.map((n, idx) => (
              <motion.button
                key={n.id}
                className="newsItem"
                onClick={() => setOpenNews(n)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
              >
                <div className="newsLeft">
                  <div className="newsDate">{formatDate(n.date)}</div>
                  <div className="newsTitle">{n.title}</div>
                  <div className="muted">{n.summary}</div>
                </div>

                {n.images?.length ? (
                  <div className="newsThumb">
                    <img src={n.images[0]} alt={n.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  </div>
                ) : (
                  <div className="newsThumb placeholder" aria-hidden="true" />
                )}
              </motion.button>
            ))}
          </div>
        </Section>

        {/* RESEARCH */}
        <Section id="research" title="Research" subtitle="Selected projects — click a card for details.">
          <div className="newsTopRow">
            <div className="muted">
              Showing {visibleProjects.length} of {(projects || []).length}
            </div>

            {(projects || []).length > 4 ? (
              <button className="btn small ghost" type="button" onClick={() => setShowAllProjects((v) => !v)}>
                {showAllProjects ? "Collapse" : "Show all projects"}
              </button>
            ) : null}
          </div>

          <div className="grid">
            {visibleProjects.map((p, idx) => (
              <motion.button
                key={p.id}
                className="projectCard"
                onClick={() => setOpenProject(p)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <div className="projectMedia">
                  <img src={p.image} alt={p.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <div className="projectMediaOverlay" />
                </div>

                <div className="projectBody">
                  <div className="projectTop">
                    <h3 className="h4">{p.title}</h3>
                    <span className="pill">{p.timeframe}</span>
                  </div>

                  <p className="muted">{p.summary}</p>

                  <div className="tagRow">
                    {p.tags.slice(0, 4).map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Section>

        {/* PUBLICATIONS */}
        <Section id="publications" title="Publications" subtitle="Selected items (you can add full BibTeX later).">
          <div className="card">
            <ul className="pubs">
              {publications.map((pub) => (
                <li key={pub.title} className="pub">
                  <div className="pubTop">
                    <span className="pubTitle">{pub.title}</span>
                    <span className="pill">{pub.status}</span>
                  </div>
                  <div className="pubMeta muted">{pub.venue}</div>

                  {pub.links?.length ? (
                    <div className="pubLinks">
                      {pub.links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* TEACHING */}
        <Section id="teaching" title="Teaching" subtitle="Courses, labs, and tutoring roles.">
          <div className="twoCol">
            {teaching.map((t) => (
              <motion.div
                key={t.place}
                className="card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="rowTop">
                  <h3 className="h4">{t.place}</h3>
                  <span className="pill">{t.timeframe}</span>
                </div>
                <ul className="bullets">
                  {t.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* AWARDS */}
        <Section id="awards" title="Honors & Awards" subtitle="Selected awards and recognitions.">
          <div className="card">
            <div className="cols">
              {awards.map((a) => (
                <div key={a} className="awardItem">• {a}</div>
              ))}
            </div>
          </div>
        </Section>

        {/* SERVICE */}
        <Section id="service" title="Service & Memberships" subtitle="Professional memberships and roles.">
          <div className="card">
            <ul className="bullets">
              {service.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" subtitle="Send a message directly from the website.">
          <div className="twoCol">
            <div className="card">
              <h3 className="h4">Email</h3>
              <p className="muted">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>

              <div className="spacer" />

              <h3 className="h4">Affiliation</h3>
              <p className="muted">{profile.affiliation}</p>

              {/* Social icons row */}
              <div className="spacer" />
              <h3 className="h4">Profiles</h3>
              <div className="socialRow">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    className="socialIcon"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
              <p className="muted tiny">Update URLs in <code>src/content.js</code>.</p>
            </div>

            <ContactForm />
          </div>
        </Section>

        <Footer />
      </main>

      <AnimatePresence>
        {openProject ? (
          <DetailModal
            kind="Project"
            title={openProject.title}
            subtitle={openProject.role}
            pill={openProject.timeframe}
            images={openProject.image ? [openProject.image] : []}
            summary={openProject.summary}
            bullets={openProject.bullets || []}
            links={openProject.links || []}
            onClose={() => setOpenProject(null)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {openNews ? (
          <DetailModal
            kind="News"
            title={openNews.title}
            subtitle={formatDate(openNews.date)}
            pill="Update"
            images={openNews.images || []}
            summary={openNews.summary}
            bullets={openNews.details || []}
            links={openNews.links || []}
            onClose={() => setOpenNews(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );

  function ContactForm() {
    const [name, setName] = useState("");
    const [fromEmail, setFromEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState({ kind: "idle", text: "" });

    async function onSubmit(e) {
      e.preventDefault();
      setStatus({ kind: "loading", text: "Sending..." });

      const fullSubject = `${contactForm.subjectPrefix}: ${subject || "Message"}`;
      const payload = { name, email: fromEmail, subject: fullSubject, message };

      if (contactForm.endpoint) {
        try {
          const res = await fetch(contactForm.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error("Network error");

          setStatus({ kind: "success", text: "Message sent. Thank you!" });
          setName(""); setFromEmail(""); setSubject(""); setMessage("");
        } catch {
          setStatus({ kind: "error", text: "Could not send. Please try again or email me directly." });
        }
        return;
      }

      const mailtoSubject = encodeURIComponent(fullSubject);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\n${message}`);
      window.location.href = `mailto:${contactForm.emailTo}?subject=${mailtoSubject}&body=${body}`;
      setStatus({ kind: "success", text: "Opening your email app..." });
    }

    return (
      <div className="card">
        <h3 className="h4">Send a message</h3>
        <p className="muted tiny">
          {contactForm.endpoint
            ? "This form sends directly to my inbox."
            : "To send directly to my inbox without opening an email app, add a Formspree endpoint in src/content.js."}
        </p>

        <form className="contactForm" onSubmit={onSubmit}>
          <div className="formGrid">
            <label className="field">
              <span className="labelText">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
            </label>

            <label className="field">
              <span className="labelText">Email</span>
              <input
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                type="email"
                required
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className="field">
            <span className="labelText">Title</span>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
          </label>

          <label className="field">
            <span className="labelText">Message</span>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Write your message..." rows={6} />
          </label>

          <div className="formActions">
            <button className="btn" type="submit" disabled={status.kind === "loading"}>
              {status.kind === "loading" ? "Sending..." : "Send message"}
            </button>

            {status.kind === "success" ? <span className="status ok">{status.text}</span> : null}
            {status.kind === "error" ? <span className="status bad">{status.text}</span> : null}
          </div>
        </form>
      </div>
    );
  }
}

function SocialIcon({ name }) {
  // Minimal inline SVG icons (no extra libraries needed)
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M6 10.5H2V22h4V10.5Z" fill="currentColor" opacity="0.9" />
          <path d="M10 10.5h3.7v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.4 4.7 5.6V22h-4v-5.2c0-1.2 0-2.8-1.9-2.8s-2.2 1.3-2.2 2.7V22h-4V10.5Z" fill="currentColor" opacity="0.9" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path
            d="M12 2.5c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.1-3.4-1.1-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.2-.2-4.4-1.1-4.4-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.2 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.2 4.7-4.4 4.9.4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 22 12.5c0-5.5-4.5-10-10-10Z"
            fill="currentColor"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            d="M14 8.7V7.2c0-.7.5-1.2 1.2-1.2H17V2.6h-2.4C12.3 2.6 11 4 11 6.2v2.5H8.5V12H11v9.5h3.4V12H17l.6-3.3H14Z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path
            d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9A4.7 4.7 0 0 1 16.5 21.2h-9A4.7 4.7 0 0 1 2.8 16.5v-9A4.7 4.7 0 0 1 7.5 2.8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M17.4 6.7h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "orcid":
      return (
        <svg {...common}>
          <path d="M12 2.8a9.2 9.2 0 1 0 0 18.4 9.2 9.2 0 0 0 0-18.4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M10 9v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 9h1.4a2.6 2.6 0 0 1 0 5.2H14V9Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "scholar":
      return (
        <svg {...common}>
          <path d="M12 3 2.5 8l9.5 5 9.5-5L12 3Z" fill="currentColor" opacity="0.9" />
          <path d="M6.2 12.4v4.2c1.7 1.2 3.7 1.8 5.8 1.8s4.1-.6 5.8-1.8v-4.2" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          className="sectionHead"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="h2">{title}</h2>
          <p className="muted">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function DetailModal({ kind, title, subtitle, pill, images, summary, bullets, links, onClose }) {
  return (
    <motion.div className="modalBackdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${kind}: ${title}`}
      >
        <div className="modalTop">
          <div>
            <div className="rowTop">
              <h3 className="h3">{title}</h3>
              <span className="pill">{pill}</span>
            </div>
            <p className="muted">{subtitle}</p>
          </div>

          <button className="iconBtn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modalBody">
          {images?.length ? (
            <div className="modalGallery">
              {images.slice(0, 3).map((src) => (
                <div key={src} className="modalMedia">
                  <img src={src} alt={title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
              ))}
            </div>
          ) : null}

          <p className="leadSmall">{summary}</p>

          {bullets?.length ? (
            <ul className="bullets">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          ) : null}

          {links?.length ? (
            <div className="modalLinks">
              {links.map((l) => (
                <a key={l.label} className="btn small ghost" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span className="muted">© {new Date().getFullYear()} {profile.name}</span>
        <span className="muted">React + Vite • GitHub Pages</span>
      </div>
    </footer>
  );
}

function TopGlow() {
  return (
    <div className="topGlow" aria-hidden="true">
      <div className="glowBlob blob1" />
      <div className="glowBlob blob2" />
    </div>
  );
}
