import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelect from "./pages/RoleSelect";
import Teacher from "./pages/Teacher";
import TeacherResult from "./pages/TeacherResult";
import Student from "./pages/Student";
import StudentQuestion from "./pages/StudentQuestion";
import StudentResult from "./pages/StudentResult";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher-result" element={<TeacherResult />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student-question" element={<StudentQuestion />} />
        <Route path="/student-result" element={<StudentResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;