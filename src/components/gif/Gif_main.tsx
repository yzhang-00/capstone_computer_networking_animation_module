import wwwlogo from '../../assets/wwwlogo.gif';
import tmp_gif from '../../assets/tmp.gif';

function Gif_main(){
    return (
        <div>
            <div className='gif-logo-container'>
                <img
                    src={wwwlogo}
                    alt="wwwlogo"
                    className="gif-logo"
                />
            </div>

            
            <div className="gif-container">
                <img
                    src={tmp_gif}
                    alt="Overview of web-browsing"
                    className="gif"
                />
            </div>
        </div>
    );
}

export default Gif_main;