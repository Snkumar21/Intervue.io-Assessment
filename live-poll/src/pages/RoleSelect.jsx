import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
    const navigate = useNavigate();

    return (
        <div className="role-container">
            <h2>Choose your role</h2>

            <button
                className="role-btn"
                onClick={() => navigate("/teacher")}
            >
                Teacher
            </button>

            <button
                className="role-btn outline"
                onClick={() => navigate("/student")}
            >
                Student
            </button>
        </div>
    );
};

export default RoleSelect;