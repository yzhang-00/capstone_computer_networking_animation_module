import { useNavigate } from 'react-router-dom';
  
function Main() {
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
  
    // This will navigate to first component
    navigate('/network'); 
  };
  const goToDatalinkComp = () => {
  
    // This will navigate to first component
    navigate('/datalink'); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Main components</p>
        <button onClick={gotToApplicationComp}> Application Layer </button>
        <button onClick={goToTransportComp}> Transport Layer </button>
        <button onClick={goToNetworkComp}> Network Layer </button>
        <button onClick={goToDatalinkComp}> Datalink Layer </button>
      </header>
    </div>
  );
}
  
export default Main;