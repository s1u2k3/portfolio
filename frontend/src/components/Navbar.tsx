import { Link } from "react-router-dom";

import { FaUserShield } from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >

        Sukhendu Bera

      </Link>


      <ul className="nav-links">

        <li>

          <Link to="/">

            Home

          </Link>

        </li>


        <li>

          <Link to="/about">

            About

          </Link>

        </li>


        <li>

          <Link to="/skills">

            Skills

          </Link>

        </li>


        <li>

          <Link to="/projects">

            Projects

          </Link>

        </li>


        <li>

          <Link to="/experience">

            Experience

          </Link>

        </li>


        <li>

          <Link to="/contact">

            Contact

          </Link>

        </li>

      </ul>



      <Link

        to="/login"

        className="admin-icon"

        title="Admin Login"

      >

        <FaUserShield />

      </Link>

    </nav>

  );

}

export default Navbar;