import BasePage from "../basepage/basepage";
import CrumBar from "../components/CrumBar";
import StudentCard from "../components/StudentCard";
import { AppState } from "../context/AppProvider";

export default function StudentList() {
  const { studentData } = AppState();
  return (
    <BasePage>
      <CrumBar />
      {studentData.map((stud, ind) => (
        <StudentCard student={stud} key={stud.id} />
      ))}
    </BasePage>
  );
}
