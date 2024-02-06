import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Application.css";
import application_jpg from "../assets/img/application_img/Applicaiton.jpg";
import tcpip_png from "../assets/img/application_img/tcp-ip.png";
import clientserver_png from "../assets/img/application_img/client-server.png";
import p2p_png from "../assets/img/application_img/p2p.png";
import socket_png from "../assets/img/application_img/socket.png";
import port_number_png from "../assets/img/application_img/portnumber.png";
import port_number1_png from "../assets/img/application_img/portnumber1.png";

function Application() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Application Layer</h1>
          <hr className="horizontal_line"></hr>
          <h2>Introduction</h2>
          <p>
            The application layer sits at Layer 7, the top of the Open Systems
            Interconnection (OSI) communications model. It ensures an
            application can effectively communicate with other applications on
            different computer systems and networks. Application layer has the
            following function:
            <ul>
              <li>
                ensures that the receiving device is identified, reachable and
                ready to accept data;
              </li>
              <li>
                makes sure necessary communication interfaces exist, such as
                whether there is an Ethernet or Wi-Fi interface in the sender's
                computer;
              </li>
              <li>
                ensures agreement at both ends on error recovery procedures,
                data integrity and privacy;
              </li>
              <li>
                determines protocol and data syntax rules at the application
                level; and presents the data on the receiving end to the user
                application.
              </li>
            </ul>
          </p>
          <img
            src={application_jpg}
            alt="Application"
            className="smaller-image"
          />
          <br></br>
          <h2>Layers and TCP/IP model</h2>
          <ul>
            <li>
              The overall communications process between two or more machines
              connected across one or more networks is very complex
            </li>
            <li>
              Layering partitions related communications functions into groups
              that are manageable
            </li>
            <li>Each layer operates according to protocols.</li>
            <li>
              TCP/IP is the de-facto industry standard that allows the
              heterogeneous networks to function in a seamless manner.
            </li>
            <li>
              More info about{" "}
              <a href="https://www.geeksforgeeks.org/tcp-ip-model/">
                tcp/ip model.
              </a>
              Each layer details will be discussed later in other pages.
            </li>
          </ul>
          <img src={tcpip_png} alt="tcpip" className="centered-image" />
          <div className="image-description">TCP/IP Model</div>
          <br></br>
          <h2>Application architecture considerations</h2>
          <ul>
            <li>In creating a network app. one has to write programs that:</li>
            <ul>
              <li>Run on (different) end systems.</li>
              <li>Communicate over (different) networks.</li>
            </ul>
            <li>
              Need to have an architectural plan prior to developing any apps.
            </li>
            <p>Consider two possible structure of applications:</p>
            <ul>
              <li>client-server architecture.</li>
              <ul>
                <li>Web</li>
                <li>FTP</li>
                <li>Email</li>
              </ul>
              <li>peer-to-peer (P2P) architecture.</li>
              <ul>
                <li>BitTorrent</li>
                <li>Skype</li>
              </ul>
            </ul>
          </ul>
          <h2>Client-server architecture</h2>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>Server:</span>
          </p>
          <ul>
            <li>Is always running (stays on).</li>
            <li>
              Has a permanent and fixed IP address that is available to clients.
            </li>
            <li>Responds to client’s requests.</li>
            <li>May be housed in data centers.</li>
          </ul>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>Client:</span>
          </p>
          <ul>
            <li>May be connected for a short time.</li>
            <li>Can communicate with a server.</li>
            <li>May have dynamic IP addresses that may change.</li>
            <li>
              Do not communicate directly with each other (if need be, e.g.
              email).
            </li>
          </ul>
          <img
            src={clientserver_png}
            alt="clientserver"
            className="centered-image"
          />
          <br></br>
          <h2>P2P (Peer to peer) architecture </h2>
          <ul>
            <li>
              Peers (Hosts) can pair and communicate with each other directly.
            </li>
            <li>
              Peers request service from other peers and in return provide
              service to others.
            </li>
            <li>
              Peers are intermittently connected and may alter their IP
              addresses.
            </li>
            <li>No need for a continuously running server.</li>
          </ul>
          <img src={p2p_png} alt="p2p" className="centered-image" />

          <h2>Communication between process</h2>
          <ul>
            <li>
              When developing an app. need to understand how the receiving end
              recognizes which app. to access.
            </li>
            <ul>
              <li>
                For instance, server may be running varieties of apps. or
                processes of the same app.
              </li>
            </ul>
            <li>
              In fact, an OS process from source communicates with another
              process at the destination.
            </li>
            <li>
              {" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                process:{" "}
              </span>
              is a program running within a host.
            </li>
          </ul>
          <span
            style={{
              display: "block",
              border: "3px solid red",
              padding: "2px",
            }}
          >
            <p>client process: process that initiates communication.</p>
            <p>server process: process that waits to be contacted.</p>
          </span>
          <h2>Sockets</h2>
          <ul>
            <li>
              Form the interface between the Application layer and the Transport
              Layer.
            </li>
            <li>
              Are employed by processes on sending/receiving hosts to exchange
              messages.
            </li>
            <li>
              Processes rely on the Transport layer to ensure the delivery of
              the message to the proper sockets on both ends.
            </li>
          </ul>
          <img src={socket_png} alt="socket" className="centered-image" />
          <br></br>
          <h2>Port number</h2>
          <ul>
            <li>Is used as an interface to the Application layer.</li>
            <img
              src={port_number_png}
              alt="portnumber"
              className="small-image"
            />
            <br></br>
            <p>Notes:</p>
            <li>TCP/UDP have both the same format for port numbers.</li>
            <li>Port number is a 16 bit number (0-65535).</li>
            <li>
              Are divided by ICANN (Internet Corporation for Assigned Names and
              Numbers) into 3 segments:
            </li>
            <img
              src={port_number1_png}
              alt="portnumber1"
              className="small-image"
            />
            <ul>
              <li>
                Well-known ports: (0-1023) are assigned and controlled by ICANN.
              </li>
              <li>
                Registered ports: (1024-49151) are not assigned but can be
                registered by only ICANN.
              </li>
              <li>
                Dynamic ports: (49152-65535) can be used on temporary bases.
              </li>
            </ul>
            <li>
              Side Note: ICANN is a non-profit organization that is responsible
              for coordinating the maintenance and procedures of several
              databases related to the namespaces of the Internet, ensuring the
              network's stable and secure operation.
            </li>
          </ul>
          <h3>Addressing processes (port number)</h3>
          <ul>
            <li>
              An IP address determines which host on the Internet to connect to.
            </li>
            <li>
              A port number determines which app. to connect to on the host.
            </li>
            <p>Some examples of well-known port numbers.</p>
            <table>
              <thead>
                <tr>
                  <th>Protocol</th>
                  <th>Port</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hypertext Transfer Protocol (HTTP)</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>File Transfer Protocol (FTP)</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Secure Shell (SSH)</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Simple Mail Transfer Protocol (SMTP)</td>
                  <td>25</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <li>Example: sending an HTTP message to: www.ece.utoronto.ca</li>
            <ul>
              <li>IP address: 128.100.82.35</li>
              <li>port number: 80</li>
            </ul>
            <li>
              This uniquely identifies which host and which application on the
              host connect to.
            </li>
          </ul>
        </div>
      </header>
      <br></br>
      <button>
        <Link to="/application/Application_sub1">HTTP</Link>
      </button>
      <button>
        <Link to="/application/Application_sub2">Web cache & cookies</Link>
      </button>
      <button>
        <Link to="/layer">go back</Link>
      </button>
    </div>
  );
}

export default Application;
