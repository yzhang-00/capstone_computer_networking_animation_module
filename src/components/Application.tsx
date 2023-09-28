import React from 'react';
import { Link } from 'react-router-dom';
  
function Application() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Application components</p>
  
        <Link to="/">go back</Link>
      </header>
    </div>
  );
}
  
export default Application;