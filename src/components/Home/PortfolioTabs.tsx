"use client";

import { useEffect, useState } from "react";


const projects = [
  { number: "01", name: "Digital product design", type: "Strategy · UX · UI", color: "orange" },
  { number: "02", name: "Creative brand identity", type: "Identity · Art direction", color: "red" },
  { number: "03", name: "Web development", type: "Design · Front-end", color: "white" },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const syncTab = () => {
      const hash = window.location.hash.replace("#", "") || "overview";
      if (["overview", "work", "services", "about"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    syncTab();
    window.addEventListener("hashchange", syncTab);
    window.addEventListener("popstate", syncTab);
    return () => {
      window.removeEventListener("hashchange", syncTab);
      window.removeEventListener("popstate", syncTab);
    };
  }, []);

  const selectTab = (tab: string) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  };

  return (
    <main className="portfolio-shell">
      {activeTab === "overview" && (
        <section key="overview-panel" id="overview-panel" role="tabpanel" className="portfolio-panel portfolio-panel-enter">
          <div className="portfolio-kicker">Independent creative technologist</div>
          <h1>I build digital work that <em>moves.</em></h1>
          <p className="portfolio-intro">
            Product designer, developer, and creative problem-solver creating clear, useful, and memorable digital experiences.
          </p>
          <div className="portfolio-actions">
            <button type="button" className="portfolio-primary" onClick={() => selectTab("work")}>View selected work</button>
            <a href="mailto:hello@example.com" className="portfolio-secondary">Start a project</a>
          </div>
          <div className="portfolio-proof" aria-label="Portfolio highlights">
            <div><strong>Brand</strong><span>Clear logos and visual identities that help people recognize and trust your work.</span></div>
            <div><strong>Product</strong><span>Thoughtful, easy-to-use experiences that turn complicated ideas into simple choices.</span></div>
            <div><strong>Code</strong><span>Responsive, reliable websites built to bring the full creative vision to life.</span></div>
          </div>
        </section>
      )}

      {activeTab === "work" && (
        <section key="work-panel" id="work-panel" role="tabpanel" className="portfolio-panel portfolio-panel-enter">
          <div className="portfolio-kicker">Selected work</div>
          <h2>Projects built with purpose.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.number} className={`project-card project-${project.color}`}>
                <span>{project.number}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === "services" && (
        <section key="services-panel" id="services-panel" role="tabpanel" className="portfolio-panel portfolio-panel-enter">
          <div className="portfolio-kicker">How I can help</div>
          <h2>From first idea to finished product.</h2>
          <div className="service-grid">
            <article><span>01</span><h3>Discover</h3><p>Understand the audience, goal, and opportunity.</p></article>
            <article><span>02</span><h3>Design</h3><p>Create an identity and experience people can understand.</p></article>
            <article><span>03</span><h3>Build</h3><p>Turn the design into a polished, responsive digital product.</p></article>
          </div>
        </section>
      )}

      {activeTab === "about" && (
        <section key="about-panel" id="about-panel" role="tabpanel" className="portfolio-panel portfolio-panel-enter about-panel">
          <div>
            <div className="portfolio-kicker">About me</div>
            <h2>Creative thinking. Practical execution.</h2>
          </div>
          <div className="about-copy">
            <p>I combine design, strategy, and technology to help ideas become clear, useful products.</p>
            <p>I care about the small details, honest communication, and work that solves real problems.</p>
            <a href="mailto:hello@example.com">Let&apos;s work together <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      )}
    </main>
  );
}
