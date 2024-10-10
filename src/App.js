//import logo from "./logo.svg"
//import "./App.css"

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import StudentNavBar from "./student/StudentNavBar";

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    const studentLoggedIn =
      localStorage.getItem("isStudentLoggedIn") === "true";

    setIsAdminLoggedIn(adminLoggedIn);
    setIsStudentLoggedIn(studentLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem("isAdminLoggedIn", "true");
    setIsAdminLoggedIn(true);
  };

  const onStudentLogin = () => {
    localStorage.setItem("isStudentLoggedIn", "true");
    setIsStudentLoggedIn(true);
  };

  return (
    <div className="App">
      {/* <h3 style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
        Serenify
      </h3> */}

      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isStudentLoggedIn ? (
          <StudentNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onStudentLogin={onStudentLogin}
          />
        )}
      </Router>
    </div>
  );
}
