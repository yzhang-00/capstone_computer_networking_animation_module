import React from "react";
import { Link } from "react-router-dom";
import tcp_header_png from "../assets/img/transport/tcp_header.png";

function Transport_sub1() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="section_wrapper">
        <h1>TCP Header</h1>
        <hr className="horizontal_line"/>
        <p><br></br></p>
        <h2>TCP header fields</h2>
        <img className="" src={tcp_header_png} alt="tcp_header_png" width="870" height="600"></img>
      </div>
       
        <button><Link to="/transport">Introduction</Link></button>
        <button><Link to="/transport/transport_sub2">Connection and Control</Link></button>
        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Transport_sub1;