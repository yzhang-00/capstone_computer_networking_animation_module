import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Network.css";
import routing_components_img from "../assets/img/ip/routing_components.png";
import lookup_img from "../assets/img/ip/lookup.png";
import rip_rt_adv_img from "../assets/img/ip/RIP_rt_adv.png";
import rip_receive_img from "../assets/img/ip/RIP_receive.png";
import ospf_routing_img from "../assets/img/ip/ospf_routing.png";
import rip_ospf_bgp_img from "../assets/img/ip/rip&ospf&bgp.png";
import BGPpeer_adv_img from "../assets/img/ip/BGPpeer_adv.png";

function Network_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Routing Table and Protocols</h1>
          <hr className="horizontal_line" />
          <h2>Routing table</h2>
          <strong>Two key components of routing:</strong>
          <p>
            <strong>Routing Functions</strong>: Update routing infomation with
            routing protocols
          </p>
          <p>
            <strong>IP Forwarding</strong>: Pass a packet from an input
            interface to the output interface of a router
          </p>
          <img
            src={routing_components_img}
            alt="IPv4 IPv6"
            width="500"
            height="300"
          ></img>
          <p>Routing table lookup: Longest prefix match</p>
          <img
            src={lookup_img}
            alt="routing table lookup"
            width="250"
            height="250"
          ></img>
          <p>
            Longest Prefix Match: Search for the routing table entry that has
            the longest match with the prefix of the destination IP address
            (=most specific route):
          </p>
          <p>
            Search for a match on all 32 bits. Search for a match on all 31 bits
          </p>
          <p>...Search for a match on all 0 bits </p>

          <h2>Routing Protocols</h2>
          <h4>RIP</h4>
          <p>
            A simple intradomain routing protocol. Each router broadcasts its
            routing infomation every 30 seconds (or whenever its routing table
            changes) to its neighbors. The routing metric in RIP is the hop
            count. Maximum hop count is 15, with 16 interpreted as infinity.
            Routes are timeout (set to 16) after 3 minutes if they are not
            updated.
          </p>
          <p>
            As shown in the picture below, RIP use{" "}
            <strong>Distance Vector</strong> algorithm to exchange routing
            infomation. Router v periodically sends the content of the RIP
            routing table to its neighbors every 30 sec. This is called{" "}
            <strong>advertisement</strong>
          </p>
          <img
            src={rip_rt_adv_img}
            alt="RIP routing table"
            width="500"
            height="200"
          ></img>
          <p>
            <strong>RIP(Distance Vector) Routing basic principles</strong>
          </p>
          <p>
            Suppose router v receives the message [Net, x] from router m. If
            distance between v and Net D(v,Net) &gt; D(m,Net)+1, then the
            routing table will be updated with Distance=D(m,Net)+1 where
            Dest=Net. Otherwise, there is no update in the table.
          </p>
          <img
            src={rip_receive_img}
            alt="RIP routing v receive advertisement"
            width="500"
            height="200"
          ></img>
          <p>
            <strong>Problem with RIP</strong>
          </p>
          <ul>
            <li>Count-to-infinity problem</li>
            <li>RIP takes a long time to converge</li>
            <li>The maximum path in RIP is 15 hops</li>
          </ul>

          <h4>OSPF</h4>
          <p>
            Open Shortest Path First (OSPF) is a link state routing protocol
            using with intradomain routing. OSPF has the following
            characteristics:
          </p>
          <ul>
            <li>Each router has complete topology information.</li>
            <li>Link state information is flooded to all nodes.</li>
            <li>Quick convergence</li>
          </ul>
          <p>
            <strong>OSPF(Link State) Routing: basic principles</strong>
          </p>
          <ol>
            <li>
              Each router establishes a relationship (adjacency) with its
              neighbors.
            </li>
            <li>
              Each router generates link state advertisements (LSAs) which are
              distributed to all routers.
            </li>
            <li>
              Each router maintains a database of all received LSAs (link state
              database), which describes the network has a graph with weighted
              edges
            </li>
            <li>
              Each router uses its link state database to run a shortest path
              algorithm (Dijikstra’s algorithm) to compute the shortest path to
              each router.
            </li>
          </ol>
          <p>
            The below diagram shows how routers respond when they are running
            OSPF routing protocol:
          </p>
          <img
            src={ospf_routing_img}
            alt="OSPF routing mechanism"
            width="500"
            height="200"
          ></img>

          <h4>BGP</h4>
          <p>
            Border Gateway Protocol(BGP) is the interdomain routing protocol for
            routing among Autonomous Systems
          </p>
          <img
            src={rip_ospf_bgp_img}
            alt="BGP and RIP,OSPF relationship"
            width="450"
            height="100"
          ></img>
          <p>BGP helps an AS to: </p>
          <ul>
            <li>Learn about reachable networks from neighboring AS’s</li>
            <li>
              Distribute the information about reachable networks to routers
              inside the AS
            </li>
            <li>
              Select a route if there are multiple routes to reach the same
              network
            </li>
          </ul>

          <p>There are two types of BGP session:</p>
          <ul>
            <li>Interior BGP (iBGP): BGP between routers in the same AS.</li>
            <li>Exterior BGP (eBGP): BGP between routers in different ASes.</li>
          </ul>

          <p>
            <strong>BGP Routing basic principles</strong>
          </p>
          <p>
            Establishes connection over a TCP (port 179) to transmit routing
            messages.
          </p>
          <p>
            A route is advertised as: Network prefix + attributes = route. Two
            important attributes: AS-PATH: Contains ASs through which prefix
            advertisement has passed and NEXT_HOP: is the router interface that
            begins the AS-PATH.
          </p>
          <img
            src={BGPpeer_adv_img}
            alt="BGP peers advertise path"
            width="350"
            height="200"
          ></img>
          <p>
            For example: BGP advertisement from AS1 to AS10 would be:
            10.0.1.0/24 AS-PATH=1{" "}
          </p>
        </div>
        <br></br>
        <button>
          <Link to="/network">Introduction</Link>
        </button>
        <button>
          <Link to="/network/Network_sub2">IP Fragmentation</Link>
        </button>
        <button>
          <Link to="/layer">go back</Link>
        </button>
      </header>
    </div>
  );
}

export default Network_sub1;
