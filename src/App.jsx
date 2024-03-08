import React from "react";
import { ReactDOM } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Developer from "./Developer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>

      <Navbar />
     
      <Routes>
        
        <Route  path="/" element= {<Home/>} />
        <Route  path="/about" element= {<About/>} />
        <Route  path="/developer" element= {<Developer/>} />
      </Routes>





    </>
  )

}

export default App;
