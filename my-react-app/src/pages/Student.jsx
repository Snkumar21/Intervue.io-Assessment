// src/pages/Student.jsx
import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { usePollTimer } from "../hooks/usePollTimer";
import '../App.css'

const Student = () => {
    const socket = useSocket();
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [poll, setPoll] = useState(null);
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const timeLeft = usePollTimer(poll?.startTime, poll?.duration);

    // Generate studentId per tab
    useEffect(() => {
        let id = sessionStorage.getItem("studentId");
        if (!id) {
            id = crypto.randomUUID();
            sessionStorage.setItem("studentId", id);
        }
        setStudentId(id);
    }, []);

    // Socket listeners
    useEffect(() => {
        if (!socket) return;

        socket.on("poll:started", (pollData) => {
            setPoll(pollData);
            setSubmitted(false);
            setSelected(null);
        });

        socket.on("poll:update", setPoll);

        return () => {
            socket.off("poll:started");
            socket.off("poll:update");
        };
    }, [socket]);

    const submitVote = () => {
        if (selected === null) return;

        socket.emit("student:vote", {
            pollId: poll._id,
            studentId,
            optionIndex: selected
        });

        setSubmitted(true);
    };

    // NAME SCREEN
    if (!name) {
        return (
            <div className="student-container">
                <h2>Enter your name</h2>
                <input placeholder="Your name" onChange={(e) => setName(e.target.value)} />
                <button className="primary-btn" onClick={() => name && setName(name)} >
                    Continue
                </button>
            </div>
        );
    }

    // WAITING SCREEN
    if (!poll) {
        return <p className="center">Waiting for teacher to ask a question...</p>;
    }

    // RESULT VIEW
    if (submitted || timeLeft === 0) {
        const totalVotes = poll.options.reduce((a, b) => a + b.votes, 0);

        return (
            <div className="poll-card">
                <h3>{poll.question}</h3>

                {poll.options.map((opt, idx) => {
                    const percent = totalVotes
                        ? Math.round((opt.votes / totalVotes) * 100)
                        : 0;

                    return (
                        <div key={idx} className="result-bar">
                            <span>{opt.text}</span>
                            <div className="bar">
                                <div className="fill" style={{ width: `${percent}%` }} />
                            </div>
                            <span>{percent}%</span>
                        </div>
                    );
                })}
            </div>
        );
    }

    // VOTING VIEW
    return (
        <div className="poll-card">
            <h3>{poll.question}</h3>
            <p className="timer">Time Left: {timeLeft}s</p>

            {poll.options.map((opt, idx) => (
                <label key={idx} className="option">
                    <input type="radio" name="option" disabled={submitted} onChange={() => setSelected(idx)} />
                    {opt.text}
                </label>
            ))}

            <button className="primary-btn" disabled={selected === null} onClick={submitVote} >
                Submit
            </button>
        </div>
    );
};

export default Student;