import "../style/StudentPoll.css";

const StudentWaiting = () => {
    return (
        <div className="student-center">
            <span className="badge">✨ Intervue Poll</span>

            <div className="loader"></div>

            <h2>Wait for the teacher to ask questions..</h2>
        </div>
    );
};

export default StudentWaiting;