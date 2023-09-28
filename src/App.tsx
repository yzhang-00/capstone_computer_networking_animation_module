import Message from './Message'
import React from "react";
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Application from "./components/Application";
import Transport from "./components/Transport";
import Main from "./components/Router";
import Datalink from './components/Datalink';

function App(){
  return (
    <>
    <div><Message />
    <div className='btn'>
      <Router>
        <Routes>
            <Route path="/application" element={<Application />}/>
            <Route path="/transport" element={<Transport />}/>
            <Route path="/network" element={<Transport />}/>
            <Route path="/datalink" element={<Datalink />}/>
            <Route path="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
    </div>
    </>
  );
}

export default App; 
