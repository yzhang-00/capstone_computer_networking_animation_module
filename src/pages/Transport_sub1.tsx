import React from "react";
import { Link } from "react-router-dom";

function Transport_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Transport components page2</p>

        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Transport_sub1;