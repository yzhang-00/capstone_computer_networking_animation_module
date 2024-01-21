import React from "react";
import { Link } from "react-router-dom";
import path_imag from "../assets/img/animation_details/ani_detail_path_imag.png";
import layer_imag from "../assets/img/animation_details/ani_detail_layer.png";
import encap_imag from "../assets/img/animation_details/ani_detail_encap.png";
import decap_imag from "../assets/img/animation_details/ani_detail_decap.png";
import routing_table_img from "../assets/img/animation_details/ani_detail_routing_table.png";
import path_imag_r1 from "../assets/img/animation_details/ani_detail_path_R1.png";
import path_imag_pc7 from "../assets/img/animation_details/ani_detail_path_PC7.png";


function Animation_3d_details() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="header">A walkthrough for the 3D Animation Module </h1>
      <hr className="horizontal_line"/>
      <h2 className="subtitle"> Let's go through the animation step-by-step.</h2>

      <div className="explaination-container">
        
        <h3 className="explanation-header"> Overview </h3>
        
        <p className="explanation-content">  
         The animation you saw was a web-page request from client to the server. 
         Client is at the left-bottom corner (indicated by a yellow arrow), trying to visit the website  
         <a href="https://www.ece.utoronto.ca/"> ece.utoronto.ca </a>
          , whose server is at the right-bottom corner (indicated by a blue arrow). The path is indicated by the 
         yellow dashed line. 
        </p>

        <p className="explanation-content"> TCP/IP model, a de-facto industry standard, consists of four layers, from top to bottom: Layer2-Data Link, Layer3-Network,
          Layer4-Transport, Layer5-Application. We will use this model to demonstrate how the web-page request is realized. 
        </p>

        <div className="container">
          <div className="row">
            <div className="col-lg">
            <img  src={path_imag} alt="Overview of web-browsing"  width="70%"/> 
            {/* <p> Figure 1: Packet transmission path </p> */}
            </div>
            <div className="col-lg">
            <img  src={layer_imag} alt="TCP/IP model" width="60%" />
            {/* <p> Figure 2: TCP/IP model layers</p> */}
            </div>
          </div>
        </div>
        
        <div className="explaination-subcontainer">
          <h3 className="explanation-header"> Encapsulation/Decapsulation</h3> 

          <p className="explanation-content">  First client need to compose the request message in a correct format that can be understood by the delivery devices 
          so that they can transmit the request, such as destination address (IP address and MAC address). Imaging you are wrapping the delivery box using box, tape, and attach the delivery label 
          stating where you want to send your parcel. This process of "wrapping packet" is called <b>Encapsulation</b>: from the top layer (Application layer) all the way down 
          (until Data link layer), each layer adds their header information which provides routing information, to be examined by routing devices it will passing through.
          On the other hand, the <b>decapsulation</b> is the reverse operation of encapsulation: the layers remove their headers from the packet, from bottom layer (Data Link layer) up until the 
          top layer (Application layer). 
          <br></br> <br></br>
          Here Application layer uses HTTP. Client issues a request HTTP. Filling the header fields of HTTP, and then pass to the next Layer, Transport Layer. TCP is a well-known
          and reliable transport protocol. You can find detailed information <a href="./#/transport"> here </a> on how to interpret its header 
          fields and mechanism of the protocol. Likewise, TCP header is encapsulated into IP header, where the destination IP address (web-page server at server 128.100.82.85) is declared. 
          You can find more information about <a href="./#/network"> Network layer and IP protocol </a>. Finally, the <a href="./#/datalink"> Data link layer </a> adds Ethernet header. A ready-to-go packet
          has a encapsulated header shown below.
          </p>

          <img  src={encap_imag} alt="Headers"  height="70%"/> 
          {/* <p> Figure 3: Encapsulation of headers at client</p> */}
        </div>

        <p className="explanation-content"> 
          Followed the dashed yellow path, the wrapped-up packet is sent to an Ethernet switch (SW1). An Ethernet Switch is a device transmitting 
          packets between its connected hosts. As you can infer from its name, Ethernet Switch inspects Ethernet header and directs to a Router (Router1-R1), as indicated by the yellow arrow below. A Router plays similar roles as an 
          Ethernet Switch by checking the addresses of passing packets and directs them to the right place. However, Router looks a step deeper, the IP address, and consulates to its routing table to 
          find where to send the packet. 
        </p>
        <img  src={path_imag_r1} alt="path arrived at Router"  height="30%" width="30%"/> 
        {/* <p> Figure 4: Packet transmission path arrived at the first router</p> */}

        <p className="explanation-content"> 
          To obtain the destination IP address, Router 1 decapsulate the received packet unti Network layer, which contains IP header and IP address. Turns out the server has IP address 128.100.82.85.
        </p>
        <img  src={decap_imag} alt="path arrived at the first router"  height="30%" width="30%"/> 
        {/* <p> Figure 5: Decapsulation at the first router</p> */}

        <div className="explaination-subcontainer">
          <h3 className="explanation-header"> Router and routing table </h3>
          <p className="explanation-content"> 
            Given the server's IP address is 128.100.82.85, the Router uses longest-prefix match to 
            find which interface to send. You can find information on how to interpret routing table entries in <a href="./#/network"> Network layer and IP protocol page</a>. Based on the routing table of Router 1
            shown below. The packet is sent to interface named Eth1, the default entry. 
          </p>
          <img  src={routing_table_img} alt="Routing table of R1"  width="30%"/> 
          {/* <p> Figure 6: Routing table at the first router (R1)</p> */}
          
        </div>
        
        <p className="explanation-content">
            Packet now is transmitted to another router. 
          
          Similarly, this router (Router 2) checks header and consults to its routing table, just like Router1 did, and directs the packet to 
          the right-most switch (SW4).
          Switch 4 examines the Etherenet header and realizes the on-link connection to the server, our destination (indicated by the blue arrow below). 
        </p>

        <img  src={path_imag_pc7} alt="path arrived at server"  width="30%"/> 
        {/* <p> Figure 7: Packet transmission path arrived at Destination (the server)</p> */}

        <p className="explanation-content">
          The server decapsulates the packet it receives, until it extracts the informatio from the top layer, the HTTP header. By inspecting it, this web-page server understands the web-page request from client. Next, it will 
          send back the web-page content in several packets. 
        </p>

        <Link to="https://v3d.net/s7r">
            <button className="light-blue-btn">Back to Animation</button>
        </Link>

      </div>

      </header>
    </div>
  );
}

export default Animation_3d_details;
 
