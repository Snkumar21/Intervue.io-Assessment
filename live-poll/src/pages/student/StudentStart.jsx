import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentStart = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!name.trim()) return;
    localStorage.setItem("studentName", name);
    navigate("/student/wait");
  };

  return (
    <div className="teacher-page">
      <div className="teacher-container">
        <span className="badge">✨ Intervue Poll</span>

        <h1>Let’s Get Started</h1>
        <p className="subtitle">
          submit your answers, participate in live polls, and see how your
          responses compare with your classmates
        </p>

        <input
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="ask-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StudentStart;