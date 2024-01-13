import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Network.css";
import fragmentation_img from "../assets/img//ip/fragmentation.png";
import frag_example_img from "../assets/img//ip/frag_example.png";

function Network_sub2() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="section_wrapper">
        <h1>IP Fragmentation</h1>
        <hr className="horizontal_line"/>
        
                <p>Network links have MTU(maximum transfer unit) size. This causes an IP datagram to be fragmented to several datagrams.</p>
                <img src={fragmentation_img} alt="fragmentation" width="400" height="100"></img>
                <p>The following IP header fields play a role in IP fragmentation:</p>
                <p>Flags</p>
                <ul>
                  <li>DF: cannot be fragmented and must be discarded.</li>
                  <li>MF: this datagram is part of fragment and an additional fragment follows.</li>
                </ul>
                <p>Identification</p>
                <ul>
                  <li>Unique identification of a datagram from a host.</li>
                  <li>When a datagram is fragmented, the ID is same in all fragments.</li>
                </ul>
                <p>Fragment offset</p>
                <ul>
                  <li>Offset of the payload of the current fragment in the original datagram [order].</li>
                </ul>
                <img src={frag_example_img} alt="fragmentation example" width="600" height="200"></img>
      </div>
        <button><Link to="/network/Network_sub1">Routing Table and Protocols</Link></button>
        <button><Link to="/network/Network_sub2">IP Fragmentation</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Network_sub2; 
