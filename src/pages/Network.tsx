import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Network.css";
import ipv46_img from "../assets/img/ip/ipv4&6.png";
import routing_img from "../assets/img/ip/routing.png";
import IP_header_img from "../assets/img//ip/IP_header.png";
import encap_img from "../assets/img/ip/encap.png";
import AS_img from "../assets/img//ip/AS.png";



function Network() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Network Layer</h1>
          <hr className="horizontal_line"/>
              <h2>Introduction</h2>
                <p className="left-align">Network layer is responsible for packet forwarding and routing through  routers. The Internet Protocol (IP) is one of the main protocols used at this layer.</p>
                <p>There are currently two version in use: IPv4 (version 4) and IPv6 (Version 6)</p>
                <img src={ipv46_img} alt="IPv4 IPv6" className="smaller-image"></img>
              
              
              
              <h2>Internet Protocol (IP)</h2>
                <p className="text-left">The Internet Protocol (IP) is a fundamental communication protocol that enables the transfer of data across interconnected networks. It's a core protocol in the Internet protocol suite, which also includes other important protocols like TCP.</p>
                <p>IP provides the basic structure for addressing and routing packets of data 
                  so they can travel across networks. The device we used for routing called 
                  routers. Each router hold a routing table indicating the direction of route 
                  for each packet.
                </p>
                {/* <p>Routing has two components:</p>
                <ul>
                  <li>Routing Functions</li>
                  <li>IP forwarding</li>
                </ul>
                <img src="src\assets\img\ip\routing_components.png" alt="IPv4 IPv6"width="500" height="300" ></img> */}
                <p>The Internet Protocol (IP) is a protocol, or set of rules, for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination with the use of routing tables.</p>
                <img src={routing_img} alt="routing through routers"width="450" height="200"></img>
                

              
              <p>IP datagram is encapsulated within <a href="capstone_computer_networking_animation_module/#/datalink/Datalink_sub1">Ethernet frame</a>. It is payload data within Ethernet frame.</p>
              <p><a href="capstone_computer_networking_animation_module/#/transport">TCP/UDP segment</a> is encapsulated within IP datagram. It is the payload data within IP datagram.</p>
              <img src={encap_img} alt="Encapsulation relationship" className="smaller-image"></img>
              <br></br>
              <br></br>
              <h2>IP header format</h2>
              <img src={IP_header_img} alt="IP header" className="smaller-image"></img>
              <p>Let's look into some details of the IP header field and what the value represents:</p>
              <ul>
                  <li>Version: set to 4 in IPv4</li>
                  <li>Header length: length of IP header, in multiples of 4 bytes = -&gt; max. header size is (2<sup>4</sup> -1) x 4 bytes = 60 bytes</li>
                  <li>Differentiated Services (DS) field: Specifies the service and the importance desired by this datagram</li>
                  <li>Total length: size of payload and header in bytes. 16 bits &gt; 2<sup>16</sup> -1  bytes =  65535 bytes is max. size</li>
                  <br></br>
                  <p>The following fields play a role in <a href="capstone_computer_networking_animation_module/#/network/Network_sub2">IP fragmentation:</a></p>
                  <li>Identification</li>
                  <li>Flags (3  bits): First bit always set to 0, DF bit (Do not fragment), MF bit (More fragments)</li>
                  <li>Fragment offset</li>
                  <br></br>
                  <li>Time To Live (TTL):Specifies longest paths before datagram is dropped. Role of TTL field: Ensure that packet is eventually dropped when a routing loop occurs</li>
                  <li>Protocol: Specifies the higher-layer protocol. Used for demultiplexing to higher layers</li>
                  <li>Header checksum: 	A simple 16-bit long checksum which is computed for the header of the datagram</li>
                  <li>Source IP address: The sender of transmitted packet</li>
                  <li>Destination IP address: The receiver of transmitted packet</li>
              </ul>

            
              <h2>Autonomous system (AS)</h2>
              <p>An autonomous system (AS) is a region of the Internet that is administered by a single entity and that has a unified routing policy</p>
              <p>Each autonomous system is assigned an Autonomous System Number (ASN). Examples of autonomous systems:</p>
              <ul>
                  <li>University of Toronto (ASN 239)</li>
                  <li>Bell Canada Backbone (ASN 577)</li>
              </ul>
              <img src={AS_img} alt="Autonomous system"width="700" height="300"></img>
              <p>Intradomain Routing: Routing within an AS</p>
              <p>Interdomain Routing Routing between AS’s</p>            


                
        </div>

        <br></br>
        
        <button><Link to="/network/Network_sub1">Routing Table and Protocols</Link></button>
        <button><Link to="/network/Network_sub2">IP Fragmentation</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Network;
