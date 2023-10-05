import React from "react";
import { Link } from "react-router-dom";

function Datalink() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Datalink components</p>
        <button><Link to="/datalink/Datalink_sub1">datalink Page2</Link></button>
        <button><Link to="/datalink/Datalink_sub2">datalink Page3</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Datalink;
