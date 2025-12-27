import "../style/StudentPoll.css";

const results = [
    { text: "Mars", percent: 75 },
    { text: "Venus", percent: 5 },
    { text: "Jupiter", percent: 5 },
    { text: "Saturn", percent: 15 },
];

const StudentResult = () => {
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

                <div className="results">
                    {results.map((r, i) => (
                        <div key={i} className="result-row">
                            <span className="circle">{i + 1}</span>
                            <div className="bar">
                                <div
                                    className="fill"
                                    style={{ width: `${r.percent}%` }}
                                ></div>
                            </div>
                            <span className="percent">{r.percent}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="wait-text">
                Wait for the teacher to ask a new question..
            </p>

            <div className="chat-fab">💬</div>
        </div>
    );
};

export default StudentResult;