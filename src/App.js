// import logo from './logo.svg';
import "./App.css";
import BasePage from "./basepage/basepage";


import { Routes,Route } from "react-router-dom";
import StudentList from "./pages/studentlist";
import StudentCard from "./components/StudentCard";
import { useState } from "react";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";


function App() {

const StudentData = [
    {
      id:1,
      name:"shyam",
      batch:"b47wd",
      education:"B.E"
    },
    {
      id:2,
      name:"sudha",
      batch:"b47we",
      education:"B.com"
    }
  ]

const [Data,setData] = useState(StudentData)
  return (
    <div className="App">
        <StudentList
          StudentData = {Data}
          setData = {setData}
        />
    </div>
  );
}

export default App;
