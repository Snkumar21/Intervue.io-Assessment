import { useState } from "react";
import "../style/StudentPoll.css";

const options = ["Mars", "Venus", "Jupiter", "Saturn"];

const StudentQuestion = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="poll-page">
            <span className="badge">✨ Intervue Poll</span>

            <div className="poll-card">
                <div className="poll-header">
                    <span>Question 1</span>
                    <span className="timer">⏱ 00:15</span>
                </div>

                <div className="question">
                    Which planet is known as the Red Planet?
                </div>

                <div className="options">
                    {options.map((opt, i) => (
                        <div
                            key={opt}
                            className={`option ${selected === i ? "selected" : ""}`}
                            onClick={() => setSelected(i)}
                        >
                            <span className="circle">{i + 1}</span>
                            {opt}
                        </div>
                    ))}
                </div>
            </div>

            <button className="submit-btn" disabled={selected === null}>
                Submit
            </button>

            <div className="chat-fab">💬</div>
        </div>
    );
};

export default StudentQuestion;