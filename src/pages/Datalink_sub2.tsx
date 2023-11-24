import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Datalink.css";
import lanswtich1_png from "../assets/img//datalink_img/lanswtich1.png";
import routernet_png from "../assets/img//datalink_img/router_net_e.png";
import switchnet_png from "../assets/img//datalink_img/switch_net_e.png";
import rvs_png from "../assets/img//datalink_img/routervsswitch.png";
import bridgearc_png from "../assets/img//datalink_img/bridgearch.png";
import mactable_png from "../assets/img//datalink_img/mactable.png";
import frameforward_png from "../assets/img//datalink_img/frameforward.png";
import bridgearch2_png from "../assets/img//datalink_img/bridgearch2.png";
import addrlearn_png from "../assets/img//datalink_img/addrlearn.png";
import loop_video from "../assets/loop.mp4";
import spntree from "../assets/img//datalink_img/spanningtree.png";
import bpdu_png from "../assets/img//datalink_img/bpdu.png";
import spt_png from "../assets/img//datalink_img/spt1.png";
import bpdu2_png from "../assets/img//datalink_img/bpdu2.png";
import finalspt_png from "../assets/img//datalink_img/finalspt.png";

function Datalink_sub2() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Layer 2 Swtiching</h1>
          <hr className="horizontal_line"></hr>
          <br></br>
          <h2>Interconnection at Layer 2</h2>
          <p>
            Layer 2 switches (a.k.a. L2 switches, a.k.a. LAN switches, a.k.a.
            bridges) interconnect local area networks. The forwarding is based
            on MAC addresses
          </p>
          <img src={lanswtich1_png} alt="protocol" className="smaller-image" />
          <br></br>
          <br></br>
          <h2>Terminology</h2>
          <p>
            There are different terms to refer to data-link layer
            interconnection devices:
          </p>
          <p>
            The term bridge was coined in the early 1980s. Today, the terms
            Layer-2 switch or LAN switch or L2 switch are used- 1. In the
            context of Ethernet: Ethernet switch 2. In the context of WiFi:
            access point
          </p>
          <p>
            Convention: Many concepts, configuration commands, and protocols for
            layer-2 switches were developed in the 1980s. In the context of
            these protocols and configurations, we use the old term bridge
          </p>
          <br />
          <h2>Layer-2 switches versus routers</h2>
          <p>
            An enterprise network (e.g., university, corporation) with a large
            number of local area networks (LANs) can use routers or bridges 1.
            1980s: LANs interconnection via bridges 2. Late 1980s and early
            1990s: increasingly use of routers 3. Since mid-1990s: L2 switches
            replace most routers
          </p>
          <p>
            Today: Enterprise switches often support IGP routing --Such switches
            are referred to as L3 switches. --Provides flexibility with regards
            to routing vs. L2 switching
          </p>

          <div className="image-container">
            <div className="image-item">
              <img
                src={routernet_png}
                alt="Router"
                className="side-by-side-image-with-description"
              />
              <div className="image-description">Routed enterprise network</div>
            </div>

            <div className="image-item">
              <img
                src={switchnet_png}
                alt="Switch"
                className="side-by-side-image-with-description"
              />
              <div className="image-description">
                Switched enterprise network
              </div>
            </div>
          </div>
          <br></br>
          <h2>Interconnecting LANs: Routers vs. layer-2 switches</h2>
          <img src={rvs_png} alt="protocol" className="smaller-image" />
          <br></br>
          <h2>Bridges</h2>
          <p>
            Overall design goal: Transparency 1. “Plug-and-play” 2.
            Self-configuring without hardware or software changes 3. Bridges
            should not impact operation of existing LANs
          </p>
          <p>
            Three parts to understanding bridges: (1) Forwarding of frames (2)
            Learning of addresses (3) Spanning tree algorithm
          </p>
          <br></br>
          <h3>Need for a forwarding between networks</h3>
          <p>
            Some LANs are reachable only in multiple hops and Path between two
            LANs is not unique
          </p>
          <p>
            Note: Today, Layer-2 switches are not connected by a broadcast LAN.
            They are connected directly, e.g., by an Ethernet cable. The
            abstraction of the LAN remains valid: View each cable as a LAN,
            where each LAN has only 2 switches
          </p>
          <img src={bridgearc_png} alt="protocol" className="smaller-image" />
          <div className="image-description">bridge architecture</div>
          <br></br>
          <h3>Frame forwarding</h3>
          <p>
            Each bridge maintains a Forwarding Information Base (FIB), also
            called MAC table. The MAC table plays the same role as the routing
            table of an IP router
          </p>
          <p>Entries have the form (MAC address, port, age), where</p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              MAC address:
            </span>
            unicast address
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>Port:</span>
            port number of bridge
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>Age:</span>
            aging time of entry (in seconds)
          </p>
          <p>
            with interpretation: a frame whose destination address matches the
            MAC address is forwarded on port. The entry is age time units old.{" "}
          </p>
          <img src={mactable_png} alt="protocol" className="smaller-image" />
          <p>
            {" "}
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Assume a frame arrives on port x
            </span>
          </p>
          <div className="image-container">
            <img
              src={frameforward_png}
              alt="Image 1"
              className="side-by-side-image"
            />
            <img
              src={bridgearch2_png}
              alt="Image 2"
              className="side-by-side-image"
            />
          </div>
          <br></br>
          <h2>Address learning (Learning bridges)</h2>
          <p>
            MAC tables entries are populated automatically with a simple
            heuristic: The source field of a frame that arrives on a port tells
            which hosts are reachable from this port
          </p>
          <img src={addrlearn_png} alt="protocol" className="smaller-image" />
          <p>
            Learning Algorithm: 1. For each received frame, the bridge stores
            the source address in the MAC table, together with the port where
            the frame was received 2. All entries are deleted after some time
            (default is 15 seconds).
          </p>
          <br></br>
          <h3>Danger of loops</h3>
          <p>
            Consider the two LANs that are connected by two bridges. Assume host
            n is transmits a frame F with unknown destination.
          </p>
          <p>What will happen?</p>
          <video width="700" height="600" controls preload="metadata">
            <source src={loop_video} type="video/mp4" />
            loop video
          </video>

          <p>This will casue a loop so we need the spanning tree protocol.</p>
          <br></br>
          <h2>Spanning Tree Protocol (IEEE 802.1d)</h2>
          <p>
            The Spanning Tree Protocol is a routing protocol to prevent loops
            when forwarding frames between LANs
          </p>
          <p>
            The SPT is standardized as the IEEE 802.1d protocol The SPT
            organizes bridges as a spanning tree in a dynamic environment 1.
            Frames are forwarded only along the branches of the spanning tree 2.
            Note: Trees don’t have loops
          </p>
          <p>
            Bridges that run the SPT are called transparent bridges Bridges
            exchange messages to configure the bridge (Configuration Bridge
            Protocol Data Unit or BPDUs) to build the tree.
          </p>
          <img src={spntree} alt="protocol" className="smaller-image" />
          <br></br>
          <h3>Configuration BPDUs</h3>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              What do the BPDUs do
            </span>
          </p>
          <p>
            With the help of the BPDUs, bridges can: 1. Elect a single bridge as
            the root bridge. 2. Calculate the distance of the shortest path to
            the root bridge 3. Each LAN can determine a designated bridge, which
            is the bridge closest to the root. The designated bridge will
            forward packets towards the root bridge 4. Each bridge can determine
            its root port, which is the port that gives the best path to the
            root 5. Select ports to be included in the spanning tree
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>Concepts</span>
          </p>
          <p>-Each bridge as a unique identifier (bridge ID)</p>
          <p>bridge ID = priority (2 bytes) + bridge MAC address (6 bytes)</p>
          <p>Each port of a bridge has a unique identifier (port ID)</p>
          <p>
            Root bridge: Bridge with the lowest bridge ID is the root of the
            spanning tree
          </p>
          <p>
            Root port: Each bridge has a root port which identifies the next hop
            from the bridge to the root bridge
          </p>
          <p>
            Root path cost: For each bridge, the cost of the min-cost path to
            the root
          </p>
          <p>
            Designated bridge (of a LAN): The bridge attached to a LAN that
            provides the min-cost path to the root for this LAN:If two bridges
            have the same cost, select the bridge with the lowest bridge ID
          </p>
          <p>
            Designated port: The port with which a designated bridge attaches to
            the LAN (for which it is the designated bridge)-If the min-cost
            bridge has two or more ports on the LAN, select the port with the
            smaller port ID
          </p>
          <p>Note: We assume that cost of a path is the number of hops</p>
          <img src={bpdu_png} alt="protocol" className="smaller-image" />
          <div className="image-description">
            Summerization of BPDU configuration
          </div>
          <br></br>
          <h3>Steps of Spanning Tree algorithm </h3>
          <p>
            Each bridge is sending out BPDUs that contain the following
            information:
          </p>
          <img src={spt_png} alt="protocol" className="smaller-image" />
          <p>
            The transmission of BPDUs results in the distributed computation of
            a spanning tree
          </p>
          <br></br>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Ordering of messages
            </span>
          </p>
          <p>We define an ordering of BPDU messages</p>
          <img src={bpdu2_png} alt="protocol" className="smaller-image" />
          <p>
            We say M1 advertises a better path to the root than M2 (“M1{"<<"}
            M2”) if (R1 {"<"}R2), Or (R1 == R2) and (C1{"<"}C2), Or (R1 == R2)
            and (C1 == C2) and (B1 {"<"}B2), Or (R1 == R2) and (C1 == C2) and
            (B1 == B2) and (P1 {"<"} P2)
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Initializing the Spanning Tree Protocol{" "}
            </span>
          </p>
          <p>
            Initially, each bridge assumes that it is the root bridge Each
            bridge B sends BPDUs of this form on its LANs from each port P:
            B|0|B|P
          </p>

          <p>
            A bridge compares the BPDUs received on all its ports with its own
            BPDU
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Operations of Spanning Tree Protocol{" "}
            </span>
          </p>
          <p>
            Each bridge B looks on all its ports for BPDUs that are better than
            its own BPDUs
          </p>
          <p>Suppose that bridge B currently has BPDU:</p>
          <p>M1: R1|C1|B|-</p>
          <p>M2: R2|C2|B|-</p>
          <p> and receives a “better” BPDU (M2{"<<"}M1):</p>
          <p>Note: Port numbers are set when the BDPU is transmitted</p>
          <p>Then B it will update the BPDU to:</p>
          <p>R2|C2+1|B|-</p>
          <p>
            The port where M2 was received becomes the root port of the bridge
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              When to send a BPDU?
            </span>
          </p>
          <p>Say, B has generated a BPDU for port x:</p>
          <p>R|Cost|B|x</p>
          <p>
            B sends this BPDU on port x only if the BPDU is better (via relation
            “{"<<"}“) than any BPDU that B received on port x.
          </p>
          <p>If B sends its BPDU on port x,</p>
          <p>
            B becomes the designated bridge for the LAN to which port x
            connects, and port x becomes the designated port of that LAN
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Selecting the ports for the spanning tree
            </span>
          </p>
          <p>
            Each bridges makes a local decision which of its ports are part of
            the spanning tree
          </p>
          <p>-The root port is part of the spanning tree</p>
          <p>-All designated ports are part of the spanning tree</p>
          <p>-All other ports are not part of the spanning tree</p>
          <p>
            Only ports that are in the spanning tree forward frames (=
            forwarding state) & Ports that are not in the spanning tree do not
            forward frames (= blocking state)
          </p>
          <p>
            In this way, forwarding loops are avoidedIn this way, forwarding
            loops are avoided
          </p>
          <p>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Building the spanning tree
            </span>
          </p>
          <p>
            Assume that the bridges have calculated the designated ports (D) and
            the root ports (P) as indicated.
          </p>
          <p>What is the spanning tree?</p>
          <p>
            On each LAN, connect R ports to the D port on this LAN & At each
            switch, connect D ports to R port
          </p>
          <img src={finalspt_png} alt="protocol" className="smaller-image" />
          <div className="image-description">Complete Spanning Tree</div>
        </div>
<br></br>
        <button>
          <Link to="/datalink">Page1</Link>
        </button>
        <button>
          <Link to="/datalink/Datalink_sub1">Page2</Link>
        </button>
        <Link to="/layer">Back to Layer page</Link>
      </header>
    </div>
  );
}

export default Datalink_sub2;
