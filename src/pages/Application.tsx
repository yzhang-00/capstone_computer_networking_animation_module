import React from "react";
import { Link } from "react-router-dom";

function Application() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Application components</p>
        <button><Link to="/application/Application_sub1">application Page2</Link></button>
        <button><Link to="/application/Application_sub2">application Page3</Link></button>
        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Application;
