const StudentResult = ({ poll }) => {
  const totalVotes = poll.options.reduce(
    (a, b) => a + b.votes,
    0
  );

  return (
    <div className="dashboard">
      <div className="poll-card">
        <h4>Question</h4>
        <div className="question-header">{poll.question}</div>

        {poll.options.map((opt, i) => {
          const percent = totalVotes
            ? Math.round((opt.votes / totalVotes) * 100)
            : 0;

          return (
            <div className="option" key={i}>
              <div
                className="fill"
                style={{ width: `${percent}%` }}
              >
                <span className="badge">{i + 1}</span>
                {opt.text}
              </div>
              <span className="percent">{percent}%</span>
            </div>
          );
        })}

        <p className="wait-text">
          Wait for the teacher to ask a new question..
        </p>
      </div>
    </div>
  );
};

export default StudentResult;