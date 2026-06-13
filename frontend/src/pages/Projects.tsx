import "../styles/Projects.css";

import coursePortal from "../assets/course-portal.png";
import aiInterviewer from "../assets/ai-interviewer.png";
import hairfall from "../assets/hairfall.png";
import healthtracker from "../assets/healthtracker.png";

function Projects() {
  return (
    <div className="projects-page">

      <h1>My Projects</h1>

      <div className="projects-grid">

        {/* Course Portal */}

        <div className="project-card">

          <img
            src={coursePortal}
            alt="Course Portal"
          />

          <div className="project-content">

            <h2>
              Online Course Registration Portal
            </h2>

            <p>
              Online platform for students to browse,
              search and register for courses with a
              modern responsive interface.
            </p>

            <h4>Tech Stack</h4>

            <p className="tech-stack">
              React.js • Node.js • Express.js • MongoDB
            </p>

            <div className="project-buttons">

              <a
                href="https://pleasecourse.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Github-s1u2k3"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>


        {/* AI Interviewer */}

        <div className="project-card">

          <img
            src={aiInterviewer}
            alt="AI Interviewer"
          />

          <div className="project-content">

            <h2>
              AI Interviewer
            </h2>

            <p>
              AI-powered interview platform that helps
              candidates practice interviews with
              AI scoring, voice input and detailed
              performance analysis.
            </p>

            <h4>Tech Stack</h4>

            <p className="tech-stack">
              React • Node.js • Express • MongoDB
            </p>

            <div className="project-buttons">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Github-s1u2k3"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>


        {/* Hair Fall */}

        <div className="project-card">

          <img
            src={hairfall}
            alt="Hair Fall Prediction"
          />

          <div className="project-content">

            <h2>
              Hair Fall Prediction Model
            </h2>

            <p>
              Machine Learning project for predicting
              hair fall risk based on user lifestyle
              and health parameters.
            </p>

            <h4>Tech Stack</h4>

            <p className="tech-stack">
              HTML • CSS • JavaScript • Machine Learning
            </p>

            <div className="project-buttons">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Github-s1u2k3"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>


        {/* Health Tracker */}

        <div className="project-card">

          <img
            src={healthtracker}
            alt="Health Tracker"
          />

          <div className="project-content">

            <h2>
              Health Tracker Application
            </h2>

            <p>
              Full Stack web application for tracking
              calories, water intake, exercise,
              BMI and daily health activities.
            </p>

            <h4>Tech Stack</h4>

            <p className="tech-stack">
              HTML • CSS • JavaScript • PHP • MySQL
            </p>

            <div className="project-buttons">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Github-s1u2k3"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;