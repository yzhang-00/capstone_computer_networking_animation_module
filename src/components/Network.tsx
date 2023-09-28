import React from 'react';
import { Link } from 'react-router-dom';
  
function Network() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Network components</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default Network;