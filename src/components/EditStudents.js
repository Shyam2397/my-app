import { useState } from "react";
import BasePage from "../basepage/basepage";
import { useParams } from "react-router-dom";


export default function EditStudents({StudentData,setData}) {

    const {id} = useParams()

    const [idx,setIdx] = useState("");
    const [name,setName] = useState("");
    const [batch,setBatch] = useState("");
    const [education,setEducation] = useState("");

    return (
        <BasePage>
            <div className="form-control text-center items-center">
                <h1 className="m-5">Fill the Data to edit a Students</h1>
                <label className="input-group">
                    <span className="w-48">ID</span>
                    <input
                        type="number"
                        placeholder="Enter your id"
                        className="input input-bordered w-auto m-5"
                        value={idx}
                        onChange={(e) => setIdx(e.target.value)}
                    />
                </label>
                <label className="input-group">
                    <span className="w-48">NAME</span>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-auto m-5"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="input-group">
                    <span className="w-48">BATCH</span>
                    <input
                        type="text"
                        placeholder="Enter your batch"
                        className="input input-bordered w-auto m-5"
                        value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                    />
                </label>
                <label className="input-group">
                    <span className="w-48">EDUCATION</span>
                    <input
                        type="text"
                        placeholder="Enter your education"
                        className="input input-bordered w-auto m-5"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                </label>
                <button className="btn btn-primary w-48 mt-20"
                    
                >Add Student</button>
            </div>
        </BasePage>
    )
}
