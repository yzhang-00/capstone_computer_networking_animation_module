import React from "react";
import { Link } from "react-router-dom";
import tcp_seg_png from "../assets/img/tcp_seg.png";
import tcp_header_png from "../assets/img/tcp_header.png";
import tcp_connection_png from "../assets/img/tcp_connection.png";
import tcp_termination_png from "../assets/img/tcp_termination.png";
import tcp_slidingWin1_png from "../assets/img/tcp_slidingWin1.png";
import tcp_slidingWin2_png from "../assets/img/tcp_slidingWin2.png";

function Transport() {
  return (
    <div className="App">
      <header className="App-header">
        

        
        <h1>TCP transport</h1>
        <div className="explaination-container">
        <h2>what can it does?</h2>
        <p>1.Can ensure delivery of data across an unreliable network</p>
        <p>2.End-to-end argument: Puts minimal functionality requirements on the hop-by-hop basis and maximal control. </p>
        <p>3.Performance: flow control, congestion control</p>
        <p>4.Error control: Timeouts and retransmissions. Recover or conceal the effects from packet losses.</p>
        <p>5.Elements to make the segments reliable:</p>
        <p>&emsp;&emsp;-ACK: receiver sends acknowledgements for segments.</p>
        <p>&emsp;&emsp;-Timer: sender waits for receiver's ACK. If ACK is not received before timeout, retransmit.</p>
        <p>&emsp;&emsp;-Retransmission: use ACK and timer to assist this. </p>
        <p>&emsp;&emsp;-Duplicate data detection: discard the duplicates.</p>
        <p>&emsp;&emsp;-Sequencing: each transmitted segment has sequence #, used to keep track in case out of order.</p>
        <p>6.Segment format:</p>
        <img className="" src={tcp_seg_png} alt="tcp_seg_png"></img>

        <p><br></br></p>
        <h2>TCP header fields</h2>
        <img className="" src={tcp_header_png} alt="tcp_header_png"></img>

        <p><br></br></p>
        <h2>Connection Establishment: Three-way handshake</h2>
        <p>One TCP host awaits a connection (server), and another TCP entity contacts the server (client).</p>
        <p>&emsp;&emsp;1. Active open: client sends a segment with SYN, Port_#_client, ISNclient</p>
        <p>&emsp;&emsp;2. Passive open: server responds with a segment with SYN, ISNserver, ACK for ISNclient (piggyback)</p>
        <p>&emsp;&emsp;3. Client acknowledges by sending a segment with ACK for ISNserver</p>
        <img className="" src={tcp_connection_png} alt="tcp_connection_png"></img>

        <p><br></br></p>
        <h2>Connection Termination</h2>
        <p>Each end shuts down independently: send FIN control bit. Once send, it cannot send any new data.</p>
        <p>&emsp;&emsp;1. Active close: X sends FIN to Y (with new SeqNo)</p>
        <p>&emsp;&emsp;2. Y ACKs the FIN (at this time, Y can still send data to X, but X cannot send data to Y)</p>
        <p>&emsp;&emsp;3. Passive close: Y sends FIN to X</p>
        <p>&emsp;&emsp;4. X ACKs the FIN</p>
        <img className="" src={tcp_termination_png} alt="tcp_termination_png"></img>

        <p><br></br></p>
        <h2>Flow Control</h2>
        <p>1. TCP flow control window: receive window - tells the maximum data that can be sent before an ACK is received.</p>
        <p>2. During connection establishment, both ends set the initial size of sliding window.</p>
        <p>3. Stop-and-Go</p>
        <p>&emsp;&emsp;-Transmit a packet and stop until receive ACK from receiver. </p>
        <p>&emsp;&emsp;-Prevent overrun, but offer low throughput.</p>
        <img className="" src={tcp_slidingWin1_png} alt="tcp_slidingWin1_png"></img>

        <p>4. Sliding window</p>
        <p>&emsp;&emsp;-(t is transmission delay, e is short delay in between), </p>
        <p>&emsp;&emsp;-Receiver has a receive buffer, sender will not overflow receiver's buffer by transmitting too much or too fast. </p>
        <p>&emsp;&emsp;&emsp;&emsp;-Unused buffer space: rwnd=recvBuffer-(lastByteRevd-lastByteRead)</p>
        <p>&emsp;&emsp;&emsp;&emsp;-Sender will limit # of unACKed bytes to rwnd.</p>
        <p>&emsp;&emsp;&emsp;&emsp;-Receiver is returning two parameters to sender inside header (see above).</p>
        <p>&emsp;&emsp;&emsp;&emsp;“I am reading to receive new data with SeqNo = AckNo, AckNo +1, …AckNo+Win-1</p>
        <p>&emsp;&emsp;&emsp;&emsp;-Receiver can ACK data without opening window, and change window size without ACK.</p>
        <img className="" src={tcp_slidingWin2_png} alt="tcp_slidingWin2_png"></img>

        <p><br></br></p>
        <h2>Error Control</h2>
        <p>1. Error detection: corrupted segments, lost segments, out-of-order segments, duplicate segments.</p>
        <p>2. Error correction: rely on Checksum, Acknowledgement, and Retransmission timer.</p>
        <p><br></br></p>
        <p><br></br></p>
        </div>
    <br></br>
        <button><Link to="/transport/Transport_sub1">transport page2</Link></button>
        <button><Link to="/transport/Transport_sub2">transport page3</Link></button>
        <Link to="/layer">go back</Link>
      </header>
    </div>
  );
}

export default Transport;
