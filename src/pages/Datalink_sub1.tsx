import React from "react";
import { Link } from "react-router-dom";

function Datalink_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Datalink components page2</p>

        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Datalink_sub1;