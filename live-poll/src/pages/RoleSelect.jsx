import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/RoleSelect.css";

const RoleSelect = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("student");

    const handleContinue = () => {
        if (role === "teacher") navigate("/teacher");
        else navigate("/student");
    };

    return (
        <div className="role-page">
            <div className="role-box">
                <span className="badge">✨ Intervue Poll</span>

                <h1>
                    Welcome to the <span>Live Polling System</span>
                </h1>

                <p className="subtitle">
                    Please select the role that best describes you to begin using the live polling system
                </p>

                <div className="role-cards">
                    <div
                        className={`role-card ${role === "student" ? "active" : ""}`}
                        onClick={() => setRole("student")}
                    >
                        <h3>I’m a Student</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </p>
                    </div>

                    <div
                        className={`role-card ${role === "teacher" ? "active" : ""}`}
                        onClick={() => setRole("teacher")}
                    >
                        <h3>I’m a Teacher</h3>
                        <p>
                            Submit answers and view live poll results in real-time.
                        </p>
                    </div>
                </div>

                <button className="continue-btn" onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default RoleSelect;