import React from 'react';
import { Link } from 'react-router-dom';
  
function Datalink() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Datalink components</p>
  
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}
  
export default Datalink;