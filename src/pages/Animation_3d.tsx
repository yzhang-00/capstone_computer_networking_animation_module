import React from "react";
import { Link } from "react-router-dom";

function Animation_3d() {
  return (
    <div className="App">
      <header className="App-header">
        <p>3D Animation Module for Computer Networks</p>
        <button><Link to="/animation_3d/details">Want more explanation?</Link></button>
        <Link to="/">Back to Main Page</Link>
      </header>
    </div>
  );
}

export default Animation_3d;
