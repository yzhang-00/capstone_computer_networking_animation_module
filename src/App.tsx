import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing_page from "./pages/Landing_page";
import Layer from "./pages/Layer";
import Transport from "./pages/Transport";
import Datalink from "./pages/Datalink";
import Network from "./pages/Network";
import NavigationBar from "./components/Navbar";
import Animation_3d_details from "./pages/Animation_3d_details";
import Transport_sub1 from "./pages/Transport_sub1";
import Transport_sub2 from "./pages/Transport_sub2";
import Network_sub1 from "./pages/Network_sub1";
import Network_sub2 from "./pages/Network_sub2";
import Datalink_sub1 from "./pages/Datalink_sub1";
import Datalink_sub2 from "./pages/Datalink_sub2";
import Application from "./pages/Application";
import Application_sub1 from "./pages/Application_sub1";
import Application_sub2 from "./pages/Application_sub2";
// import Quiz from "./pages/Quiz/Quiz";

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
            <Route path="/network" element={<Network />} />
            <Route path="/datalink" element={<Datalink />} />
            <Route
              path="/animation_3d/details"
              element={<Animation_3d_details />}
            />
            <Route
              path="/application/Application_sub1"
              element={<Application_sub1 />}
            />
            <Route
              path="/application/Application_sub2"
              element={<Application_sub2 />}
            />
            <Route
              path="/transport/Transport_sub1"
              element={<Transport_sub1 />}
            />
            <Route
              path="/transport/Transport_sub2"
              element={<Transport_sub2 />}
            />
            <Route path="/network/Network_sub1" element={<Network_sub1 />} />
            <Route path="/network/Network_sub2" element={<Network_sub2 />} />
            <Route path="/datalink/Datalink_sub1" element={<Datalink_sub1 />} />
            <Route path="/datalink/Datalink_sub2" element={<Datalink_sub2 />} />
            {/* <Route path="/quiz" element={<Quiz />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
