import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Sukhendu Bera</h3>

        <p>Java Full Stack Developer</p>

        <p>
          React | TypeScript | Java | Spring Boot |
          MongoDB
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Github-s1u2k3"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sukhendu-bera-4b6563289"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © 2026 Sukhendu Bera. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;