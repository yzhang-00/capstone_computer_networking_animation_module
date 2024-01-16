import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Layer.css";
import layer_png from "../assets/img/layers.png";

function btn_clk() {
  // alert("Open animation as external website")
}

function Layer() {
  return (
    <>
      <div>
        <h1>Layer page</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div
                id="lyrbtns"
                className="btn-group-justified btn-group-sm btn-group-vertical my-auto"
              >
                <Link to="https://v3d.net/q98">
                  <button className="a-btn" onClick={btn_clk}>
                    3D Animation Module
                  </button>
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
                <Link to="/">Back to main page</Link>
              </div>
            </div>
            <div className="col">
              <img
                className=""
                src={layer_png}
                alt="layer_png"
                width="70%"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layer;
