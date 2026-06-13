import "../styles/Skills.css";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiExpress,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <div className="skills-page">

      <h1>Technical Skills</h1>

      <h2>Frontend</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaJsSquare size={40} />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <SiTypescript size={40} />
          <h3>TypeScript</h3>
        </div>

        <div className="skill-card">
          <FaReact size={40} />
          <h3>React JS</h3>
        </div>

      </div>

      <h2>Backend</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaJava size={40} />
          <h3>Java</h3>
        </div>

        <div className="skill-card">
          <SiSpringboot size={40} />
          <h3>Spring Boot</h3>
        </div>

        <div className="skill-card">
          <FaNodeJs size={40} />
          <h3>Node JS</h3>
        </div>

        <div className="skill-card">
          <SiExpress size={40} />
          <h3>Express JS</h3>
        </div>

      </div>

      <h2>Database</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <SiMongodb size={40} />
          <h3>MongoDB</h3>
        </div>

        <div className="skill-card">
          <SiMysql size={40} />
          <h3>MySQL</h3>
        </div>

      </div>

      <h2>Tools & Platforms</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <FaGitAlt size={40} />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub size={40} />
          <h3>GitHub</h3>
        </div>

        <div className="skill-card">
          <SiPostman size={40} />
          <h3>Postman</h3>
        </div>

      </div>

      <h2>Other Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>REST APIs</h3>
        </div>

        <div className="skill-card">
          <h3>Machine Learning</h3>
        </div>

        <div className="skill-card">
          <h3>DSA & LeetCode</h3>
        </div>

      </div>

    </div>
  );
}

export default Skills;