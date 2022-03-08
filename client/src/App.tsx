import React from 'react';
import Header from "./components/Header";
import Calculator from "./containers/Calculator";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./containers/About";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div className="container">


          <Routes>
            <Route path="/" element={<Calculator/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
