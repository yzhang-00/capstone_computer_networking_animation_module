import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Datalink.css";
import protocol_png from "../assets/img//datalink_img/protocol.png";
import nic_png from "../assets/img//datalink_img/NIC.png";
import bus_png from "../assets/img//datalink_img/bus.png";
import hub_png from "../assets/img//datalink_img/hub.png";
import hub1_png from "../assets/img//datalink_img/hub1.png";
import switch1_png from "../assets/img//datalink_img/switch1.png";
import ethernet2_png from "../assets/img//datalink_img/ethernet2.png";
import ethernet3_png from "../assets/img//datalink_img/ethernet3.png";
import ppp from "../assets/img//datalink_img/ppp.png";
import dua from "../assets/img//datalink_img/dua.png";
import ppp_format_png from "../assets/img//datalink_img/ppp_format.png";
import tunnel_png from "../assets/img//datalink_img/tunnel.png";
import switchnet_png from "../assets/img//datalink_img/switch_net.png";
import arp_png from "../assets/img//datalink_img/ARP.png";
import arp_request_png from "../assets/img//datalink_img/ARP_request.png";
import arp_reply_png from "../assets/img//datalink_img/ARP_reply.png";
function Datalink_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Data Link Layer</h1>
          <hr className="horizontal_line"></hr>
          <h2>Internet protocol suite</h2>
          <p>
            -The Internet protocol suite does not define data link and physical
            layers.
          </p>
          <p>
            -Instead it takes advantage of existing lower layers, and defines
            interfaces to access them
          </p>
          <p>
            -Data link layers are specified by other bodies (e.g., IEEE 802)
          </p>
          <p>
            -In Internet terminology, any data link network is referred to as a
            “link”
          </p>
          <p>
            -Logical link control sublayer (LLC): The uppermost sublayer, LLC,
            multiplexes protocols running at the top of the data link layer, and
            optionally provides flow control, acknowledgment, and error
            notification. The LLC provides addressing and control of the data
            link. It specifies which mechanisms are to be used for addressing
            stations over the transmission medium and for controlling the data
            exchanged between the originator and recipient machines.
          </p>
          <p>
            -Media access control sublayer (MAC): may refer to the sublayer that
            determines who is allowed to access the media at any one time (e.g.
            CSMA/CD). Other times it refers to a frame structure delivered based
            on MAC addresses inside.
          </p>

          <img src={protocol_png} alt="protocol" className="centered-image" />

          <br></br>
          <h2>Media access control (MAC)</h2>
          <p>
            -Protocols to determine who can transmit at any time are called
            Medium Access Control (MAC) protocols 
          </p>
          <ul>
            <li>
              Ethernet: CSMA/CD
            </li>
            <li>
              WiFi: CSMA/CA
            </li> 
          </ul>
          <p>
            MAC protocol is running on a NIC (network interface controller): NIC
            has a MAC address
          </p>
          <img src={nic_png} alt="NIC" className="centered-image" />
          <div className="image-description">Ethernet NIC</div>
          <br />
          <h3>MAC address</h3>
          <p>
            A MAC address is an address of a NIC. Also called “hardware address”
            or “physical address”. Length of a MAC address is typically 6 bytes
          </p>
          <p>
            MAC addresses are in hexadecimal notation, using “:” or “-” for byte
            separation:{" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              c8:2a:14:04:0a:81.
            </span>
            It is seted by manufacturer of NIC and intended to be permanent and
            globally unique. Today, most hardware allows to change MAC addresses
          </p>
          <p>
            <span
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "18px",
                whiteSpace: "pre-line",
              }}
            >
              Broadcast MAC address: ff:ff:ff:ff:ff:ff{"\n"}
              Multicast MAC address: Last bit of first byte is set to “1”
            </span>
          </p>

          <h2>Ethernet Topology</h2>
          <p>
            There are many Ethernet variants. Speed: 2 Mbps - 400 Gbps. Frame
            formats: 802.3, Ethernet II (DIX)
          </p>
          <p>Ethernet was originally designed as a bus topology</p>
          <img src={bus_png} alt="bus" className="smaller-image" />
          <p>
            Since mid-1990s, nodes are connected to a hub or switch in a star
            configuration
          </p>
          <img src={hub_png} alt="hub" className="smaller-image" />
          <br></br>
          <h3>Ethernet Hubs vs. Ethernet Switches</h3>
          <div className="image-container">
            <img src={hub1_png} alt="Image 1" className="side-by-side-image" />
            <img
              src={switch1_png}
              alt="Image 2"
              className="side-by-side-image"
            />
          </div>
          <br />
          <h2>Ethernet Frame Formats</h2>
          <p>Two Ethernet frame formats are in use, with subtle differences:</p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              1. Ethernet II (DIX)
            </span>{" "}
            An industry standard from 1982 that is based on the first
            implementation of Ethernet MAC by Xerox. It is the most commonly used format
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>2. 802.3</span>{" "}
            IEEE’s version of CSMA/CD from 1985.
          </p>
          <p>
            Difference for our purposes: Ethernet II and 802.3 use different
            methods to encapsulate IP datagrams
          </p>
          <br></br>
          <h3>Ethernet II encapsulation (RFC 894)</h3>
          <img src={ethernet2_png} alt="ethernet2" className="smaller-image" />
          <h3>IEEE 802.2/802.3 encapsulation (RFC 1042)</h3>
          <img src={ethernet3_png} alt="ethernet3" className="smaller-image" />
          <br />

          <details>
          <summary>
            <h2>Point-to-point links</h2>
          </summary>
          <img src={ppp} alt="ppp" className="smaller-image" />
          <br />
          <br />
          <p>
            Many data link connections are point-to-point serial links: Dial-in
            or DSL access connects hosts to access routers & Long-distance links
          </p>
          <img src={dua} alt="dua" className="smaller-image" />
          <p>
            Data link layer protocols for point-to-point links are simple: 1.
            Main role is encapsulation of IP datagrams. 2. No media access
            control needed. 3. No address needed
          </p>
          <br />
          <h3>Data link protocols for point-to-point links</h3>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              HDLC (High-Level Data Link):
            </span>{" "}
            Widely used and influential standard (1979) & Default protocol for
            serial links on Cisco routers
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              PPP (Point-to-Point Protocol):
            </span>{" "}
            Based on a variant of HDLC & Used for dial-in and for high-speed
            routers
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Ethernet point-to-point:
            </span>{" "}
            Used for long-distance point-to-point links (up to 100 Gbps)
          </p>
          <h3>PPP - IP encapsulation</h3>
          <p>
            The frame format of PPP is similar to HDLC and the 802.2 LLC frame
            format:
          </p>
          <img src={ppp_format_png} alt="ppp" className="smaller-image" />
          <p>
            PPP assumes a duplex circuit; Note: PPP does not use addresses;
            Usual maximum frame size is 1500
          </p>
          <h3>Additional PPP functionality</h3>
          <p>
            In addition to encapsulation, PPP supports: 1. Link configuration 2.
            Link quality testing 3. Error detection 4. Option negotiation 5.
            Address notification 6. Authentication
          </p>
          <p>
            The above functions are supported by helper protocols: LCP, PAP,
            CHAP, NCP
          </p>
          </details>
          
          <br></br>

          <details>
          <summary>
          <h2>Tunneling Protocols</h2>
          </summary>
          <p>
            Tunnels are logical point-to-point links: 1. They appear to the
            endpoints as a point-to-point links. 2. The link is realized as a
            sequence of subnets
          </p>
          <img src={tunnel_png} alt="tunnel" className="smaller-image" />
          <br></br>
          <br></br>
          <h2>Switched Network</h2>
          <p>
            Some data link technologies can be used to build complete networks,
            with their own addressing, routing, and forwarding mechanisms. These
            networks are often called switched networks
          </p>
          <img src={switchnet_png} alt="tunnel" className="smaller-image" />
          <p>
            Data link layer technologies: 1. Switched Ethernet 2. Multiprotocol
            Label Switching (MPLS) 3. ATM (Asynchronous Transfer Mode) Frame
            Relay.
          </p>
          <p>
            Some switched networks are intended for enterprise networks
            (Switched Ethernet), wide area networks (MPLS, Frame Relay), or both
            (ATM).
          </p>
          </details>

          <h2>ARP</h2>
          <p>A translation is required between IP and MAC layer addresses</p>
          <p>Address Resolution Protocol(ARP): </p>
          <ul>
          <li>Each IP node (host or router) on LAN has ARP table.</li>
          <li>ARP table: Provides mappings for IP address to MAC address for some LAN nodes.</li>
          </ul>
          <img src={arp_png} alt="ARP role" className="smaller-image" />

          <p>
            A wants to send datagram to B, and B’s MAC address not in A’s ARP table.
          </p>
          <p>
            A broadcasts ARP query packet(ARP Request), containing B's IP address
          </p>
          <img src={arp_request_png} alt="ARP Request" className="smallest-image" />
          <p>
            B receives ARP packet, replies to A with its (B's) MAC address
          </p>
          <img src={arp_reply_png} alt="ARP Reply" className="smallest-image" />
          




          <p> We will discuss Layer 2 switching in the next page.</p>
        </div>
        <br></br>
        <button>
          <Link to="/datalink">Page1</Link>
        </button>
        <button>
          <Link to="/datalink/Datalink_sub2">Page3</Link>
        </button>
        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Datalink_sub1;
