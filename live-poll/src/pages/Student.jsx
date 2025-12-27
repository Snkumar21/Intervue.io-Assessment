import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Student.css";

const Student = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!name.trim()) return;
        localStorage.setItem("studentName", name);
        navigate("/student-question");
    };

    return (
        <div className="student-page">
            <div className="student-box">
                <span className="badge">✨ Intervue Poll</span>

                <h1>Let’s Get Started</h1>

                <p className="subtitle">
                    If you’re a student, you’ll be able to <strong>submit your answers</strong>,
                    participate in live polls, and see how your responses compare with your classmates
                </p>

                <div className="input-group">
                    <label>Enter your Name</label>
                    <input
                        type="text"
                        placeholder="Rahul Bajaj"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <button
                    className={`continue-btn ${!name ? "disabled" : ""}`}
                    onClick={handleContinue}
                    disabled={!name}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Student;