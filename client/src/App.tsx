import React from 'react';
import Header from "./components/Header";
import EquationCalculator from "./containers/EquationCalculator";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./containers/About";
import TasksNav from "./containers/TasksNav";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<TasksNav/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="calculator/:type" element={<EquationCalculator/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
