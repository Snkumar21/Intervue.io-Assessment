import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import { usePollTimer } from "../hooks/usePollTimer";

const Teacher = () => {
    const socket = useSocket();
    const [poll, setPoll] = useState(null);

    const timeLeft = usePollTimer(poll?.startTime, poll?.duration);

    useEffect(() => {
        if (!socket) return;

        socket.on("poll:started", setPoll);
        socket.on("poll:update", setPoll);

        return () => {
            socket.off("poll:started");
            socket.off("poll:update");
        };
    }, [socket]);

    const createPoll = () => {
        socket.emit("teacher:createPoll", {
            question: "Which JS framework do you like most?",
            options: [
                { text: "React" },
                { text: "Vue" },
                { text: "Angular" },
                { text: "Svelte" }
            ],
            duration: 60
        });
    };

    return (
        <div className="teacher-container">
            <h2>Live Poll</h2>

            {!poll && (
                <button onClick={createPoll} className="primary-btn">
                    Ask New Question
                </button>
            )}

            {poll && (
                <div className="poll-card">
                    <h3>{poll.question}</h3>

                    <p className="timer">
                        Time Left: {timeLeft}s
                    </p>

                    {poll.options.map((opt, idx) => {
                        const totalVotes = poll.options.reduce(
                            (a, b) => a + b.votes, 0
                        );
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
            )}
        </div>
    );
};

export default Teacher;