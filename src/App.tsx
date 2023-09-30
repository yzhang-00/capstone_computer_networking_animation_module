import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing_page from "./pages/Landing_page";
import Layer from "./pages/Layer";
import Application from "./pages/Application";
import Transport from "./pages/Transport";
import Datalink from "./pages/Datalink";
import NavigationBar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <div>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/layer" element={<Layer />} />
            <Route path="/application" element={<Application />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/network" element={<Transport />} />
            <Route path="/datalink" element={<Datalink />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
