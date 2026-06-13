import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <h1>About Me</h1>

      <div className="about-card">

        <h2>Hello, I'm Sukhendu Bera 👋</h2>

        <p>
          I am a passionate Full Stack Developer currently working as a
          Full Stack Trainee at Finlabs India Pvt Ltd.
        </p>

        <p>
          I have experience building modern web applications using
          React.js, TypeScript, Java, Spring Boot, Node.js,
          Express.js, MongoDB and MySQL.
        </p>

        <p>
          I completed a MERN Stack Development Internship at
          Euphoria Zenx from September 2025 to December 2025,
          where I worked on real-world projects and REST APIs.
        </p>

        <p>
          My goal is to become a highly skilled Software Engineer
          specializing in Full Stack Development and AI-powered
          applications.
        </p>

      </div>

      <div className="education-card">

        <h2>Education</h2>

        <p>
          Bachelor of Technology (B.Tech)
        </p>

        <p>
          Computer Science & Engineering
        </p>

      </div>

      <div className="career-card">

        <h2>Career Highlights</h2>

        <ul>
          <li>Full Stack Trainee at Finlabs India Pvt Ltd</li>
          <li>MERN Stack Internship at Euphoria Zenx</li>
          <li>Built 4+ Full Stack Projects</li>
          <li>Active LeetCode Problem Solver</li>
        </ul>

      </div>

    </div>
  );
}

export default About;