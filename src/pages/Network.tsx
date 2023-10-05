import React from "react";
import { Link } from "react-router-dom";

function Network() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Network components</p>
        <button><Link to="/network/Network_sub1">network page2</Link></button>
        <button><Link to="/network/Network_sub2">network page3</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Network;
