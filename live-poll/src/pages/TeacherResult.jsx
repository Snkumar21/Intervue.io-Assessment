const TeacherResult = () => {
  return (
    <div className="page">
      <div className="card">
        <h3 className="title">Live Poll Results</h3>

        <p className="question">
          Which JS framework do you like the most?
        </p>

        <div className="timer">⏱ 32s left</div>

        <div className="result-row">
          <span>React</span>
          <div className="bar">
            <div className="fill" style={{ width: "60%" }}></div>
          </div>
          <span>60%</span>
        </div>

        <div className="result-row">
          <span>Vue</span>
          <div className="bar">
            <div className="fill" style={{ width: "25%" }}></div>
          </div>
          <span>25%</span>
        </div>

        <div className="result-row">
          <span>Angular</span>
          <div className="bar">
            <div className="fill" style={{ width: "15%" }}></div>
          </div>
          <span>15%</span>
        </div>

        <button className="secondary-btn">
          Ask New Question
        </button>
      </div>
    </div>
  );
};

export default TeacherResult;