import React from "react";
import { Link } from "react-router-dom";
import main_gif from "../assets/img/main_gif_webbrowsing.png";
import "../assets/css/landpage.css";
import "../assets/css/Layer.css";
import layer_png from "../assets/img/layers.png";
function Landing_page() {
  return (
    <main>
      <div className="landing">
        <div className="text-container">
          <h1 className="header">Animated computer networks</h1>
          <h2 className="subtitle">
            What happens in computer networks during web-browsing?{" "}
          </h2>
          <Link to="https://v3d.net/s7r">
            <button>Get started</button>
          </Link>
        </div>
        <div className="img-container">
          <img src={main_gif} alt="Overview of web-browsing" />
        </div>
      </div>
      <div className="layercontent">
        <div>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div
                  id="lyrbtns"
                  className="btn-group-justified btn-group-sm btn-group-vertical my-auto"
                >
                  <Link to="https://v3d.net/s7r">
                    <button className="a-btn">3D Animation Module</button>
                  </Link>
                  <Link to="/application">
                    <button className="a-btn">Application Layer</button>
                  </Link>
                  <Link to="/transport">
                    <button className="t-btn">Transport Layer</button>
                  </Link>
                  <Link to="/network">
                    <button className="n-btn">network Layer</button>
                  </Link>
                  <Link to="/datalink">
                    <button className="d-btn">Data Link Layer</button>
                  </Link>
                </div>
              </div>
              <div className="col">
                <img
                  className="layerimage"
                  src={layer_png}
                  alt="layer_png"
                  width="70%"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing_page;
