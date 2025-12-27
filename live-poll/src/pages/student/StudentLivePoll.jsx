import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentPoll = () => {
  const navigate = useNavigate();
  const poll = JSON.parse(localStorage.getItem("livePoll"));
  const [selected, setSelected] = useState("");

  if (!poll) return <h2>No poll available</h2>;

  const submitVote = () => {
    navigate("/student/result");
  };

  return (
    <div className="page">
      <h2>{poll.question}</h2>

      {poll.options.map((opt, i) => (
        <button
          key={i}
          className={`option-btn ${selected === i ? "active" : ""}`}
          onClick={() => setSelected(i)}
        >
          {opt.text}
        </button>
      ))}

      <button disabled={selected === ""} onClick={submitVote}>
        Submit
      </button>
    </div>
  );
};

export default StudentPoll;