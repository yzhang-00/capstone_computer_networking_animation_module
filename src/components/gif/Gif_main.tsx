import wwwlogo from "../../assets/img/wwwlogo.gif";
import main_gif from "../../assets/img/main_gif_webbrowsing.gif";

function Gif_main() {
  return (
    <div>
      <img className="gif-logo-container" src={wwwlogo} alt="wwwlogo" />
      <img className="gif-container" src={main_gif} alt="Overview of web-browsing" />
      
    </div>
  );
}

export default Gif_main;
