const StudentQuestion = () => {
    return (
        <div className="page">
            <div className="card">
                <h3 className="title">
                    Which JS framework do you like the most?
                </h3>

                <div className="timer">⏱ 45s</div>

                <label className="option">
                    <input type="radio" name="option" />
                    React
                </label>

                <label className="option">
                    <input type="radio" name="option" />
                    Vue
                </label>

                <label className="option">
                    <input type="radio" name="option" />
                    Angular
                </label>

                <button className="primary-btn">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default StudentQuestion;