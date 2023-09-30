import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Main_router } from "./components/Router";
import Landing_page from "./components/pages/Landing_page"
import Layer from "./components/Layer";
import Application from "./components/Application";
import Transport from "./components/Transport";
import Datalink from './components/Datalink';
import './App.css'


function App(){
  return (
    <div>
      <Router>
        <Routes>              
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/layer" element={<Layer />}/>
          <Route path="/application" element={<Application />}/>
          <Route path="/transport" element={<Transport />}/>
          <Route path="/network" element={<Transport />}/>
          <Route path="/datalink" element={<Datalink />}/>

        </Routes>
      </Router>

    </div>

  );
}

export default App; 
