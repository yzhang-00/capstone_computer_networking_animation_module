import { Router, useNavigate } from 'react-router-dom';
import './Router.css'
import 'bootstrap/dist/css/bootstrap.css';
  
export function Layer_router() {
  const navigate = useNavigate();
  
  const gotToApplicationComp = () => {
    // This will navigate to first component
    navigate('/application'); 
  };
  const goToTransportComp = () => {
    // This will navigate to second component
    navigate('/transport'); 
  };
  const goToNetworkComp = () => {
    // This will navigate to third component
    navigate('/network'); 
  };
  const goToDatalinkComp = () => {
    // This will navigate to fourth component
    navigate('/datalink'); 
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>Main components</p>
        <div className = "btn-group-justified btn-group-sm btn-group-vertical my-auto">
        <button className="a-btn" onClick={gotToApplicationComp}> Application Layer </button>
        <button className="t-btn" onClick={goToTransportComp}> Transport Layer </button>
        <button className="n-btn" onClick={goToNetworkComp}> Network Layer </button>
        <button className="d-btn" onClick={goToDatalinkComp}> Datalink Layer </button>
        </div>
      </header>
    </div>
    </>
  );
}
  
export function Main_router() {
  const navigate = useNavigate();
  
  const gotToLayerComp = () => {
    // This will navigate to first component
    navigate('/layer'); 
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <div className = "btn-group-justified btn-group-sm btn-group-vertical my-auto">
        <button className="a-btn" onClick={gotToLayerComp}> Get started </button>
        </div>
      </header>
    </div>
    </>
  );
}