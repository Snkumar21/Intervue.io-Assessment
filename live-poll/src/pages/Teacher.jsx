import { useState } from "react";
import "../style/Teacher.css";

const Teacher = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([
        { text: "", correct: true },
        { text: "", correct: false },
    ]);

    const addOption = () => {
        setOptions([...options, { text: "", correct: false }]);
    };

    const updateOption = (index, value) => {
        const updated = [...options];
        updated[index].text = value;
        setOptions(updated);
    };

    const setCorrect = (index, value) => {
        const updated = [...options];
        updated[index].correct = value;
        setOptions(updated);
    };

    return (
        <div className="teacher-page">
            <div className="teacher-container">
                <span className="badge">✨ Intervue Poll</span>

                <h1>Let’s Get Started</h1>
                <p className="subtitle">
                    you’ll have the ability to create and manage polls, ask questions,
                    and monitor your students' responses in real-time.
                </p>

                {/* Question */}
                <div className="question-header">
                    <label>Enter your question</label>
                    <select>
                        <option>60 seconds</option>
                        <option>45 seconds</option>
                        <option>30 seconds</option>
                    </select>
                </div>

                <textarea
                    placeholder="Type your question here"
                    maxLength={100}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <div className="char-count">{question.length}/100</div>

                {/* Options */}
                <div className="options-section">
                    <div className="options-header">
                        <span>Edit Options</span>
                        <span>Is it Correct?</span>
                    </div>

                    {options.map((opt, index) => (
                        <div className="option-row" key={index}>
                            <div className="option-input">
                                <span className="option-number">{index + 1}</span>
                                <input
                                    placeholder="Option text"
                                    value={opt.text}
                                    onChange={(e) => updateOption(index, e.target.value)}
                                />
                            </div>

                            <div className="correct-toggle">
                                <label>
                                <input
                                    type="radio"
                                    checked={opt.correct}
                                    onChange={() => setCorrect(index, true)}
                                />
                                    Yes
                                </label>

                                <label>
                                <input
                                    type="radio"
                                    checked={!opt.correct}
                                    onChange={() => setCorrect(index, false)}
                                />
                                No
                                </label>
                            </div>
                        </div>
                    ))}

                    <button className="add-option" onClick={addOption}>
                        + Add More option
                    </button>
                </div>

                {/* Bottom Button */}
                <div className="bottom-bar">
                <button className="ask-btn">Ask Question</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;