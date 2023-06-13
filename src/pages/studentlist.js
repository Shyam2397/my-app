import BasePage from "../basepage/basepage";
import StudentCard from "../components/StudentCard";

export default function StudentList({StudentData,setData}){
    return(
        <BasePage>
            {StudentData.map((stud,ind)=>(
                <StudentCard
                    student={stud}
                    StudentData={StudentData}
                    setData={setData}
                    key={stud.id}
                />
            ))}
        </BasePage>
    )
}