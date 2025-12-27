const Teacher = () => {
    return (
        <div className="page">
            <div className="card">
                <h3 className="title">Ask a Question</h3>

                <label>Question</label>
                <input type="text" placeholder="Type your question here" />

                <label>Options</label>
                <input type="text" placeholder="Option 1" />
                <input type="text" placeholder="Option 2" />
                <input type="text" placeholder="Option 3" />
                <input type="text" placeholder="Option 4" />

                <label>Time Limit</label>
                <select>
                    <option>60 seconds</option>
                    <option>45 seconds</option>
                    <option>30 seconds</option>
                </select>

                <button className="primary-btn">
                    Ask Question
                </button>
            </div>
        </div>
    );
};

export default Teacher;