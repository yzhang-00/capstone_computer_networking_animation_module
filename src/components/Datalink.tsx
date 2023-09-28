import React from 'react';
import { Link } from 'react-router-dom';
  
function Datalink() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Datalink components</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default Datalink;