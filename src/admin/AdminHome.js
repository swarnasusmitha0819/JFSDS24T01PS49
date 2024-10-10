import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [userData, setUserData] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      fetchStats();
    }
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get(`http://localhost:2014/stats`);
      setStats(response.data);
    } catch (error) {
      setError("Failed to fetch statistics");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {userData && (
        <div>
          <h2>Welcome, {userData.username}!</h2>
          <h4>Supporting Student Mental Health Together</h4>
          {stats ? (
            <div className="row">
              <div className="column">
                <div className="card">
                  <h3>Active Therapy Sessions</h3>
                  <p>{stats.therapySessions}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Self-Help Articles</h3>
                  <p>{stats.selfHelpArticles}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Peer Support Groups</h3>
                  <p>{stats.peerSupportGroups}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Students Enrolled</h3>
                  <p>{stats.studentsEnrolled}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Therapists Available</h3>
                  <p>{stats.therapistsAvailable}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Completed Sessions</h3>
                  <p>{stats.completedSessions}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading statistics...</p>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}
