import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentQuestion = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(45);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t === 1) {
                    clearInterval(timer);
                    navigate("/student-result");
                }
                return t - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const handleSubmit = () => {
        navigate("/student-result");
    };

    return (
        <div className="page">
            <div className="card">
                <h3 className="title">
                    Which JS framework do you like the most?
                </h3>

                <div className="timer">⏱ {timeLeft}s</div>

                {["React", "Vue", "Angular"].map((opt) => (
                    <label key={opt} className="option">
                        <input
                            type="radio"
                            name="option"
                            onChange={() => setSelected(opt)}
                        />
                        {opt}
                    </label>
                ))}

                <button
                    className="primary-btn"
                    disabled={!selected}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
export default StudentQuestion;