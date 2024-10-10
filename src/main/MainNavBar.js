import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AdminLogin from "./../admin/AdminLogin";
import StudentLogin from "../student/StudentLogin";
import StudentRegistration from "./StudentRegistration";
import PageNotFound from "./PageNotFound";
import "./style.css";

export default function MainNavBar({ onAdminLogin, onStudentLogin }) {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="logo">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "36px", // Adjust the size as needed
              color: "white", // Set the text color to white
            }}
          >
            Serenify
          </h3>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Login</Link>
            <div className="dropdown-content">
              <Link to="/studentlogin">Student Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route
          path="/adminlogin"
          element={<AdminLogin onAdminLogin={onAdminLogin} />}
          exact
        />
        <Route
          path="/studentlogin"
          element={<StudentLogin onStudentLogin={onStudentLogin} />}
          exact
        />
        <Route path="/registration" element={<StudentRegistration />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
    </div>
  );
}
