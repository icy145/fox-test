import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Bridge from "./Bridge";
import HomePage from "./HomePage";


function App(){
    return(
        <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Bridge" element={<Bridge />}></Route>
        </Routes>
        </div>
    );
}


export default App ;