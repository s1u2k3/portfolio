import "../styles/Home.css";

import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

import Footer from "../components/Footer";

function Home() {

return(

<>

<div className="home">

<div className="hero-container">


<div className="hero-left">

<img

src={profile}

alt="profile"

className="profile-image"

/>

</div>



<div className="hero-right">

<p className="intro">

Hello, I'm

</p>


<h1>

Sukhendu Bera

</h1>


<h2>

Java Full Stack Developer

</h2>


<p className="description">

Full Stack Developer with experience in

Java, Spring Boot, React,

TypeScript, MongoDB,

MySQL, Node.js and Express.js.

Passionate about building scalable

web applications and AI-powered

solutions.

</p>



<div className="button-group">


<a

href={resume}

download

className="btn primary-btn"

>

Download Resume

</a>



<a

href="https://github.com/Github-s1u2k3"

target="_blank"

rel="noreferrer"

className="btn secondary-btn"

>

GitHub

</a>



<a

href="https://linkedin.com/in/sukhendu-bera-4b6563289"

target="_blank"

rel="noreferrer"

className="btn secondary-btn"

>

LinkedIn

</a>


</div>



<div className="stats">

<div>

<h3>

4+

</h3>

<p>

Projects

</p>

</div>


<div>

<h3>

2+

</h3>

<p>

Internships

</p>

</div>



<div>

<h3>

10+

</h3>

<p>

Technologies

</p>

</div>


</div>



</div>

</div>

</div>



<div className="home-extra">


<div className="extra-card">

<h2>

🚀 Current Role

</h2>

<p>

Working as a Full Stack Trainee

at Finlabs India Pvt Ltd,

building web applications using

React, Spring Boot,

MongoDB and MySQL.

</p>

</div>



<div className="extra-card">

<h2>

💻 Tech Stack

</h2>

<p>

Java • Spring Boot • React

• TypeScript

• Node.js • Express.js

• MongoDB • MySQL

</p>

</div>



<div className="extra-card">

<h2>

🎯 Career Goal

</h2>

<p>

To become a highly skilled

Software Engineer specializing

in Full Stack Development and

AI-powered applications.

</p>

</div>


</div>


<Footer/>

</>

)

}

export default Home;