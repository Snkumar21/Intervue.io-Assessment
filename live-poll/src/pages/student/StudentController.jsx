import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentController = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const poll = localStorage.getItem("livePoll");

    if (poll) {
      navigate("/student/poll");
    }
  }, [navigate]);

  return (
    <div className="page">
      <h2>Waiting for teacher to start poll...</h2>
    </div>
  );
};

export default StudentController;