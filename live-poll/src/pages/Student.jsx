const Student = () => {
    return (
        <div className="page">
            <div className="card">
                <h3 className="title">Enter your name</h3>

                <input
                    type="text"
                    placeholder="Your name"
                />

                <button className="primary-btn">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Student;