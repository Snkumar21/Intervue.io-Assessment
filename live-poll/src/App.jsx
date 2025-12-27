import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import RoleSelect from "./pages/RoleSelect";

/* Teacher */
import Teacher from "./pages/Teacher";
import LivePoll from "./components/LivePoll";

/* Student */
import Student from "./pages/Student";
import StudentController from "./pages/student/StudentController";
import StudentPoll from "./pages/student/StudentLivePoll";
import StudentResult from "./pages/student/StudentResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Role Selection */}
        <Route path="/" element={<RoleSelect />} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/live" element={<LivePoll />} />

        {/* Student Routes */}
        <Route path="/student" element={<Student />} />
        <Route path="/student/wait" element={<StudentController />} />
        <Route path="/student/poll" element={<StudentPoll />} />
        <Route path="/student/result" element={<StudentResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;