import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!name) return;
        localStorage.setItem("studentName", name);
        navigate("/student-question");
    };

    return (
        <div className="page">
            <div className="card">
                <h3 className="title">Enter your name</h3>

                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

                <button className="primary-btn" onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Student;