import React from "react";
import { Link } from "react-router-dom";

function Application_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Application components page2</p>

        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Application_sub1;
