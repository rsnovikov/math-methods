import React from 'react';
import Header from "./components/header";
import Calculator from "./containers/calculator";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./containers/about";
import TasksNav from "./containers/tasksNav";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<TasksNav/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="calculator/:type" element={<Calculator/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
