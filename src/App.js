// import logo from './logo.svg';
import "./App.css";
import BasePage from "./basepage/basepage";
import StudentList from "./components/studentlist";

import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StudentList />
    </div>
  );
}

export default App;
