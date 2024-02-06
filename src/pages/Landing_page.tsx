import React from "react";
import { Link } from "react-router-dom";
import main_gif from "../assets/img/main_gif_webbrowsing.png";
import "../assets/css/landpage.css";
function Landing_page() {
  return (
    <main>
      <div className="text-container">
        <h1 className="header">Animated computer networks</h1>
        <h2 className="subtitle">
          What happens in computer networks during web-browsing?{" "}
        </h2>
        <Link to="/layer">
          <button>Get started</button>
        </Link>
      </div>
      <div className="img-container">
        <img src={main_gif} alt="Overview of web-browsing" />
      </div>
    </main>
  );
}

export default Landing_page;
