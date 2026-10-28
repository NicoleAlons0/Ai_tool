const AboutSection = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-heading">
        <span className="about-sparkle">✦ ✧ ✦</span>
        <h1>About Me</h1>
        <h2>Marlean Nicole T. Alonso</h2>
        <p className="about-subtitle">
          Cybersecurity | Information Technology | Information Assurance
        </p>
        <p className="about-location">Colorado Springs, Colorado</p>
      </div>

      <div className="about-card">
        <h2>✦ My Story</h2>
        <p>
          Welcome to my portfolio! My name is Nicole Alonso, and I am a cybersecurity-focused
          U.S. Army Information Technology Specialist with over eight years of experience supporting
          secure network operations, information assurance, and mission-critical IT systems.
        </p>
        <p>
          Throughout my military career, I have worked in both U.S. and NATO environments, gaining
          experience in network security, system administration, risk management, and access control.
        </p>
        <p>
          I currently hold an active TS/SCI clearance, CompTIA Security+ certification, and have
          completed CCNA training. I am passionate about protecting critical infrastructure, solving
          complex technical problems, and continuously developing my cybersecurity knowledge.
        </p>
      </div>

      <div className="about-card">
        <h2>✦ Professional Experience</h2>
        <div className="experience-item">
          <h3>Senior Information Technology Specialist</h3>
          <p className="experience-date">U.S. Army | Fort Carson, CO | 2025 - Present</p>
          <ul>
            <li>Support secure network operations and mission-critical IT infrastructure.</li>
            <li>Implement access controls and security measures to protect organizational systems.</li>
            <li>Support information assurance procedures and security management processes.</li>
            <li>Maintain system availability, integrity, and confidentiality.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Information Technology Specialist</h3>
          <p className="experience-date">U.S. Army | Grazzanise, Italy | 2022 - 2025</p>
          <ul>
            <li>Safeguarded COMSEC equipment and sensitive communication materials.</li>
            <li>Supported network systems and secure IT operations in a NATO environment.</li>
            <li>Applied security practices, access controls, and troubleshooting procedures.</li>
            <li>Collaborated with multinational teams to support information assurance.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Information Technology Specialist</h3>
          <p className="experience-date">U.S. Army | Fort Huachuca, AZ | 2018 - 2022</p>
          <ul>
            <li>Supported the configuration and maintenance of network infrastructure.</li>
            <li>Provided Tier I and Tier II IT support.</li>
            <li>Assisted with system monitoring, troubleshooting, and access management.</li>
            <li>Followed organizational cybersecurity and information assurance procedures.</li>
          </ul>
        </div>
      </div>

      <div className="about-card">
        <h2>✦ Technical Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Cybersecurity</h3>
            <ul>
              <li>Network Security</li>
              <li>Information Assurance</li>
              <li>Risk Management</li>
              <li>DoD Security Compliance</li>
              <li>COMSEC</li>
              <li>System Hardening</li>
              <li>User Access Management</li>
              <li>Security Auditing Concepts</li>
            </ul>
          </div>
          <div>
            <h3>Networking</h3>
            <ul>
              <li>Cisco IOS</li>
              <li>Routing &amp; Switching</li>
              <li>VLANs</li>
              <li>TCP/IP</li>
              <li>DNS / DHCP</li>
              <li>OSPF / RIP</li>
              <li>Wireshark</li>
              <li>SSH / SFTP</li>
              <li>LAN / WAN</li>
            </ul>
          </div>
          <div>
            <h3>IT Systems &amp; Tools</h3>
            <ul>
              <li>Windows Administration</li>
              <li>Linux Fundamentals</li>
              <li>Microsoft 365</li>
              <li>Network Troubleshooting</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>✦ Certifications &amp; Training</h2>
        <ul className="achievement-list">
          <li>CompTIA Security+ — Certified</li>
          <li>CCNA Training — 40 Hours Completed</li>
          <li>CISSP — In Progress</li>
          <li>Basic Installation Course — 730 Hours</li>
        </ul>
      </div>

      <div className="about-card">
        <h2>✦ Education</h2>
        <h3>Bachelor of Science in Cybersecurity</h3>
        <p>American Military University</p>
        <p>Concentration: Critical Infrastructure</p>
        <p>Status: In Progress | GPA: 4.0</p>
        <hr />
        <h3>Associate of Arts in General Studies</h3>
        <p>American Military University</p>
        <p>Graduated: 2022 | GPA: 4.0</p>
      </div>

      <div className="about-card">
        <h2>✦ Let&apos;s Connect</h2>
        <p>
          I am always interested in opportunities to grow professionally, expand my cybersecurity
          expertise, and connect with others in the information technology field.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:Nicolealonso618@gmail.com">Nicolealonso618@gmail.com</a>
        </p>
        <p>Location: Colorado Springs, CO</p>
      </div>

      <footer className="about-footer">
        <p>✦ Created &amp; Designed by Nicole Alonso ✦</p>
        <small>
          © {new Date().getFullYear()} Nicole Alonso. All Rights Reserved.
        </small>
      </footer>
    </section>
  );
};

export default AboutSection;
