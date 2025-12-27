const StudentResult = () => {
    return (
        <div className="page">
            <div className="card">
                <h3 className="title">
                    Poll Results
                </h3>

                <p className="question">
                    Which JS framework do you like the most?
                </p>

                <div className="result-row">
                    <span>React</span>
                    <div className="bar">
                        <div className="fill" style={{ width: "65%" }}></div>
                    </div>
                    <span>65%</span>
                </div>

                <div className="result-row">
                    <span>Vue</span>
                    <div className="bar">
                        <div className="fill" style={{ width: "20%" }}></div>
                    </div>
                    <span>20%</span>
                </div>

                <div className="result-row">
                    <span>Angular</span>
                    <div className="bar">
                        <div className="fill" style={{ width: "15%" }}></div>
                    </div>
                    <span>15%</span>
                </div>
            </div>
        </div>
    );
};

export default StudentResult;