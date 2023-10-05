import React from "react";
import { Link } from "react-router-dom";

function Network_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Network components page2</p>

        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Network_sub1;