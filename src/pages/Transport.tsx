import React from "react";
import { Link } from "react-router-dom";

function Transport() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Transport components</p>
        <button><Link to="/transport/Transport_sub1">transport page2</Link></button>
        <button><Link to="/transport/Transport_sub2">transport page3</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Transport;
