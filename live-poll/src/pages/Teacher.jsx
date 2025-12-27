import { useNavigate } from "react-router-dom";

const Teacher = () => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <h2>Create Poll</h2>

            <input placeholder="Enter your question" />
            <input placeholder="Option 1" />
            <input placeholder="Option 2" />
            <input placeholder="Option 3" />
            <input placeholder="Option 4" />

            <button onClick={() => navigate("/teacher/result")}>
                Publish Poll
            </button>
        </div>
    );
};

export default Teacher;