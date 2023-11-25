import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Network() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netework layer</h1>
        
      </header>
      <hr className="horizontal_line"/>
      <main>
        
        <section>
        <div className="explaination-container">
          <div className="container">
            <h2>What is Network Layer</h2>
              <p className="left-align">Network layer is responsible for packet forwarding and routing through  routers. The Internet Protocol (IP) is one of the main protocols used at this layer</p>
              <img src="src\assets\img\ip\ip_layer.png" alt="IP layer"width="500" height="200" ></img>
              <p>There are currently two version in use: IPv4 (version 4) and IPv6 (Version 6)</p>
              <img src="src\assets\img\ip\ipv4&6.png" alt="IPv4 IPv6"width="500" height="300" ></img>
            
            
            
            <h2>What is Internet Protocol?</h2>
              <p className="text-left">The Internet Protocol (IP) is a fundamental communication protocol that enables the transfer of data across interconnected networks. It's a core protocol in the Internet protocol suite, which also includes other important protocols like TCP.</p>
              <p>IP provides the basic structure for addressing and routing packets of data so they can travel across networks. The device we used for routing called routers. Each router hold a routing table indicating the direction of route for each packet.</p>
              {/* <p>Routing has two components:</p>
              <ul>
                <li>Routing Functions</li>
                <li>IP forwarding</li>
              </ul>
              <img src="src\assets\img\ip\routing_components.png" alt="IPv4 IPv6"width="500" height="300" ></img> */}
              <img src="src\assets\img\ip\routing.png" alt="routing through routers"width="450" height="200"></img>
              <p>The Internet Protocol (IP) is a protocol, or set of rules, for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination with the use of routing tables.</p>
            

            <h2>IP header format</h2>
            <p>IP datagram is encapsulated within Ethernet frame. It is payload of Ethernet frame.</p>
            <img src="src\assets\img\ip\IP_header.png" alt="IP header"width="600" height="200"></img>
            <ul>
                <li>Version: set to 4 in IPv4</li>
                <li>Header length: length of IP header, in multiples of 4 bytes -&gt; max. header size is (2<sup>4</sup> -1) x 4 bytes = 60 bytes</li>
                <li>Differentiated Services (DS) field: Specifies the service and the importance desired by this datagram</li>
                <li>Total length: size of payload and header in bytes. 16 bits &gt; 2<sup>16</sup> -1  bytes =  65535 bytes is max. size</li>
                <p>The following fields play a role in IP fragmentation</p>
                <li>Identification</li>
                <li>Flags (3  bits): First bit always set to 0, DF bit (Do not fragment), MF bit (More fragments)</li>
                <li>Fragment offset</li>

                <li>Time To Live (TTL):Specifies longest paths before datagram is dropped. Role of TTL field: Ensure that packet is eventually dropped when a routing loop occurs</li>
                <li>Protocol: Specifies the higher-layer protocol. Used for demultiplexing to higher layers</li>
                <li>Header checksum: 	A simple 16-bit long checksum which is computed for the header of the datagram</li>
                <li>Source IP address: The sender of transmitted packet</li>
                <li>Destination IP address: The receiver of transmitted packet</li>
            </ul>

            
            <h2>Routing table</h2>
            <strong>Two key components of routing:</strong>
            <p><strong>Routing Functions</strong>: Update routing infomation with routing protocols</p>
            <p><strong>IP Forwarding</strong>: Pass a packet from an input interface to the output interface of a router</p>
              <img src="src\assets\img\ip\routing_components.png" alt="IPv4 IPv6"width="500" height="300" ></img>
            <p>Routing table lookup: Longest prefix match</p>
            <img src="src\assets\img\ip\lookup.png" alt="routing table lookup"width="250" height="250"></img>
            <p>Longest Prefix Match: Search for the routing table entry that has the longest match with the prefix of the destination IP address (=most specific route):</p>
            <p>Search for a match on all 32 bits. Search for a match on all 31 bits</p>
            <p>...Search for a match on all 0 bits </p>


            <h2>Autonomous system (AS)</h2>
            <p>An autonomous system (AS) is a region of the Internet that is administered by a single entity and that has a unified routing policy</p>
            <p>Each autonomous system is assigned an Autonomous System Number (ASN). Examples of autonomous systems:</p>
            <ul>
                <li>University of Toronto (ASN 239)</li>
                <li>Bell Canada Backbone (ASN 577)</li>
            </ul>
            <img src="src\assets\img\ip\AS.png" alt="Autonomous system"width="700" height="300"></img>
            <p>Intradomain Routing: Routing within an AS</p>
            <p>Interdomain Routing Routing between AS’s</p>            



            <h2>Routing Protocols</h2>
              <h4>RIP</h4>
              <p>A simple intradomain routing protocol. Straightforward implementation of distance vector routing.
              Each router advertises its distance vector every 30 seconds (or whenever its routing table changes) to its neighbors.
              The routing metric in RIP is the hop count.
              Maximum hop count is 15, with 16 interpreted as infinity.
              Routes are timeout (set to 16) after 3 minutes if they are not updated.</p>
              <p>As shown in the picture below, RIP use <strong>Distance Vector</strong> algorithm to exchange routing infomation. 
              Router v periodically sends the content of the RIP routing table to its neighbors every 30 sec.  This is called <strong>advertisement</strong></p>
              <img src="src\assets\img\ip\rip_rt_adv.png" alt="RIP routing table"width="500" height="200"></img>
              <p><strong>RIP(Distance Vector) Routing basic principles</strong></p>
              <p>Suppose router v receives the message [Net, x]  from router m. If distance between v and Net D(v,Net) &gt; D(m,Net)+1, then the routing table will be updated with Distance=D(m,Net)+1 where Dest=Net. Otherwise, there is no update in the table.</p>
              <img src="src\assets\img\ip\rip_receive.png" alt="RIP routing v receive advertisement"width="500" height="200"></img>
              <p><strong>Problem with RIP</strong></p>
              <ul>
                <li>Count-to-infinity problem</li>
                <li>RIP takes a long time to converge</li>
                <li>The maximum path in RIP is 15 hops</li>
              </ul>



              <h4>OSPF</h4>
              <p>Open Shortest Path First (OSPF) is a link state routing protocol using with intradomain routing. OSPF has the following characteristics:</p>
              <ul>
                <li>Each router has complete topology information.</li>
                <li>Link state information is flooded to all nodes.</li>
                <li>Quick convergence</li>
              </ul>
              <p><strong>OSPF(Link State) Routing: basic principles</strong></p>
              <ol>
                <li>Each router establishes a relationship (adjacency) with its neighbors.</li>
                <li>Each router generates link state advertisements (LSAs) which are distributed to all routers.</li>
                <li>Each router maintains a database of all received LSAs (link state database), which describes the network has a graph with weighted edges</li>
                <li>Each router uses its link state database to run a shortest path algorithm (Dijikstra’s algorithm) to compute the shortest path to each router.</li>
              </ol>
              <p>The below diagram shows how routers respond when they are running OSPF routing protocol:</p>
              <img src="src\assets\img\ip\ospf_routing.png" alt="OSPF routing mechanism" width="500" height="200"></img>
              



              <h4>BGP</h4>
              <p>Border Gateway Protocol(BGP) is the interdomain routing protocol for routing among Autonomous Systems</p>
              <img src="src\assets\img\ip\rip&ospf&bgp.png" alt="BGP and RIP,OSPF relationship" width="450" height="100"></img>
              <p>BGP helps an AS  to: </p>
              <ul>
                <li>Learn about reachable networks from neighboring AS’s</li>
                <li>Distribute the information about reachable networks to routers inside the AS</li>
                <li>Select a route if there are multiple routes to reach the same network</li>
              </ul>

              <p>There are two types of BGP session:</p>
              <ul>
                <li>Interior BGP (iBGP): BGP between routers in the same AS.</li>
                <li>Exterior BGP (eBGP): BGP between routers in different ASes.</li>
              </ul>

              <p><strong>BGP Routing basic principles</strong></p>
              <p>Establishes connection over a TCP (port 179) to transmit routing messages.</p>
              <p>A route is advertised as: Network prefix + attributes = route. Two important attributes: AS-PATH: Contains ASs through which prefix advertisement has passed and NEXT_HOP: is the router interface that begins the AS-PATH.</p>
              <img src="src\assets\img\ip\BGPpeer_adv.png" alt="BGP peers advertise path" width="350" height="200"></img>
              <p>For example: BGP advertisement from AS1 to AS10 would be: 10.0.1.0/24 AS-PATH=1 </p>


              <h4>IP Fragmentation</h4>
              <p>Network links have MTU(maximum transfer unit) size. This causes an IP datagram to be fragmented to several datagrams.</p>
              <img src="src\assets\img\ip\fragmentation.png" alt="fragmentation" width="400" height="100"></img>
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
              <img src="src\assets\img\ip\frag_example.png" alt="fragmentation example" width="600" height="200"></img>
              
              


              
              
          </div>
          </div>
        </section>
        <div></div>
        <section></section>


      </main>

      <div>
        <br></br>
          <button><Link to="/network/Network_sub1">network page2</Link></button>
          <button><Link to="/network/Network_sub2">network page3</Link></button>
          <Link to="/layer">go back</Link>
      </div>
    </div>
  );
}

export default Network;
