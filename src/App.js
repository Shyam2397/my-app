import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentList from "./pages/studentlist";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import InterviewNotes from "./pages/InterviewNotes";
import AddStudents from "./components/AddStudents";
import EditStudents from "./components/EditStudents";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/AddStudents" element={<AddStudents />} />
        <Route path="/EditStudents/:id" element={<EditStudents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student/all" element={<StudentList />} />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
