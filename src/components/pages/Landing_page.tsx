import React from 'react';
import { Link } from 'react-router-dom';

import Gif_main from '../gif/Gif_main'
import Message from '../../Message'
  
function Landing_page() {
  return (
    <div>
      <Message />
      <Gif_main />
      <Link to="/layer">
        <button>Get started</button>
      </Link>
    </div>
  );
}
  
export default Landing_page;