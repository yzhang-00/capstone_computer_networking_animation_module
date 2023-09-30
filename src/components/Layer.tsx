import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";

import { Layer_router } from "./Router";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Router.css';

function Layer() {
  return (
    <>
    <div>
        <h1>Layer page</h1>
        <div className = "btn-group-justified btn-group-sm btn-group-vertical my-auto">
            <Link to='/application'>
                <button className="a-btn">Application Layer</button>
            </Link>
            <Link to='/transport'>
                <button className="t-btn">Transport Layer</button>
            </Link>
            <Link to='/network'>
                <button className="n-btn">network Layer</button>
            </Link>
            <Link to='/datalink'>
                <button className="d-btn">Data Link Layer</button>
            </Link>
            <Link to="/">Back to main page</Link>
        </div>
    </div>
    </>

  );
}
  
export default Layer;