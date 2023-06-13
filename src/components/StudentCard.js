

function StudentCard({student,StudentData,setData}) {
  
  const removeStud = (id)=>{
     const newStudData = StudentData.filter((stud,ind)=>stud.id != id)
     setData(newStudData)
  }
  return (
    <div>
        <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-white">{student.name}</h2>
                <p className="text-left">{student.batch}</p>
                <p className="text-left">{student.education}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-red-800 mt-3"
                    onClick={()=>removeStud(student.id)}
                    >Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentCard