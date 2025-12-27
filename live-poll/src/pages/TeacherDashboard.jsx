import { useState } from "react";
import Teacher from "./Teacher";
import LivePoll from "../components/LivePoll";
import PollHistory from "./PollHistory";

const TeacherDashboard = () => {
  const [currentPoll, setCurrentPoll] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const startPoll = (poll) => {
    setCurrentPoll(poll);
    setShowHistory(false);
  };

  const endPoll = (poll) => {
    setHistory([poll, ...history]);
    setCurrentPoll(null);
  };

  return (
    <>
      {!currentPoll && !showHistory && (
        <Teacher onStart={startPoll} />
      )}

      {currentPoll && (
        <LivePoll poll={currentPoll} onEnd={endPoll} />
      )}

      {showHistory && <PollHistory history={history} />}

      {(currentPoll || history.length > 0) && (
        <div className="bottom-bar">
          <button onClick={() => setShowHistory(true)}>
            View Poll History
          </button>

          <button onClick={() => setCurrentPoll(null)}>
            Add More Question
          </button>
        </div>
      )}
    </>
  );
};

export default TeacherDashboard;