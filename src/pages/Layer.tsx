import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Layer.css";
import layer_png from "../assets/img/layers.png";

function btn_clk(){
  alert("aaaaaaaaaa")
}

function Layer() {
  return (
    <>
      <div>
        <h1>Layer page</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
            <div id="lyrbtns" className="btn-group-justified btn-group-sm btn-group-vertical my-auto">
              <Link to="/application">
                <button className="a-btn" onClick={btn_clk} >Application Layer</button>
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
              <img className="" src={layer_png} alt="layer_png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layer;
