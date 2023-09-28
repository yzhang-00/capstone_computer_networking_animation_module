import React from 'react';
import { Link } from 'react-router-dom';
  
function Transport() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Transport components</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default Transport;