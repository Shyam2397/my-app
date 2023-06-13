function StudentCard({student}) {
  return (
    <div>
        <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-white">{student.name}</h2>
                <p className="text-left">{student.batch}</p>
                <p className="text-left">{student.education}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary mt-3">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentCard