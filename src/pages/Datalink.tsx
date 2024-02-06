import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Datalink.css";
import datalink_highlight_png from "../assets/img/datalink_img/datalink_highlight.png";
import intro_png from "../assets/img//datalink_img/data_link.png";
import broadcast_png from "../assets/img//datalink_img/boardcast_network.png";
import point_to_point_png from "../assets/img//datalink_img/point_to_point.png";

function Datalink() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Data Link Layer</h1>
          <hr className="horizontal_line"></hr>
          <h2>Introduction</h2>
          <p>
            Data link layer is the interface to the actual network hardware.
            Data link layer has the task of:
            <ul>
              <li>
                Transferring data from the network layer of the source machine
                to the network layer of destination machine by packaging data
                from upper layer into frames and then transmitting into the
                media.
              </li>
              <li>
                Convert the raw bit stream from machine hardware arriving at the
                destination machine’s physical layer into groups of bits (frame)
                such it can be processed by the upper layers.
              </li>
            </ul>
          </p>
          <img
            src={datalink_highlight_png}
            alt="datalink"
            className="smaller-image"
          />

          {/* <p>
            The data link layer, or layer 2, is the second layer of the
            seven-layer OSI model of computer networking. This layer is the
            protocol layer that transfers data between nodes on a network
            segment across the physical layer. The data link layer provides the
            functional and procedural means to transfer data between network
            entities and may also provide the means to detect and possibly
            correct errors that can occur in the physical layer.
          </p>
          <img src={intro_png} alt="datalink" className="centered-image" /> */}
          <p>
            “MAC” (Media Access Control) addresses (i.e. Physical Addresses) are
            used in frame headers to identify source and destination physically.
          </p>
          <p>
            The data link layer is concerned with local delivery of frames
            between nodes on the same level of the network. Data-link frames, as
            these protocol data units are called, do not cross the boundaries of
            a local area network. Inter-network routing and global addressing
            are higher-layer functions, allowing data-link protocols to focus on
            local delivery, addressing, and media arbitration. We will look into
            detailed information for the data link protocol next page.
          </p>
          <br></br>
          <h2>Types of networks at the data link layer</h2>
          <p>
            -Broadcast networks: All stations share a single communication
            channel. Most local area networks (LANs), e.g., Ethernet and WiFi,
            are broadcast networks. It needs addresses, e.g., MAC addresses
          </p>
          <img src={broadcast_png} alt="boardcast" className="smaller-image" />
          <p>
            Point-to-Point networks: Pairs of hosts (or routers) are directly
            connected Wide area networks (WANs) are mostly point-to-point.
            Addresses are not needed.
          </p>
          <img
            src={point_to_point_png}
            alt="point_to_point"
            className="smaller-image"
          />
        </div>
        <br></br>
        <button>
          <Link to="/datalink/Datalink_sub1">Page2</Link>
        </button>
        <button>
          <Link to="/datalink/Datalink_sub2">Page3</Link>
        </button>
        <button>
          <Link to="/layer">go back</Link>
        </button>
      </header>
    </div>
  );
}

export default Datalink;
