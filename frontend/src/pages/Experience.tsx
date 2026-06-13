import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience-page">

      <h1>Experience</h1>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-year">
            2026 - Present
          </div>

          <div className="timeline-content">
            <h2>Full Stack Trainee</h2>

            <h3>Finlabs India Pvt Ltd</h3>

            <ul>
              <li>Learning Java Full Stack Development</li>
              <li>Building applications using React and Spring Boot</li>
              <li>Working with MongoDB and MySQL</li>
              <li>Developing REST APIs</li>
              <li>Using Git and GitHub for version control</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-year">
            Sep 2025 - Dec 2025
          </div>

          <div className="timeline-content">
            <h2>MERN Stack Developer Intern</h2>

            <h3>Euphoria Zenx</h3>

            <ul>
              <li>Developed MERN Stack applications</li>
              <li>Built responsive React user interfaces</li>
              <li>Integrated MongoDB databases</li>
              <li>Worked with REST APIs</li>
              <li>Implemented CRUD operations</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Experience;