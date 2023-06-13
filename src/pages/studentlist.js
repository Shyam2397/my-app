import BasePage from "../basepage/basepage";
import StudentCard from "../components/StudentCard";

export default function StudentList({StudentData}){
    return(
        <BasePage>
            {StudentData.map((stud,ind)=>(
                <StudentCard
                    student={stud}
                    key={ind}
                />
            ))}
        </BasePage>
    )
}