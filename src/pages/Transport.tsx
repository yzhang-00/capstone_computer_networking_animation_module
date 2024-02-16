import React from "react";
import { Link } from "react-router-dom";
import tcp_seg_png from "../assets/img/transport/tcp_seg.png";

function Transport() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Transport Layer</h1>
          <hr className="horizontal_line" />
          <h2>Introduction of TCP transport</h2>
          <p>1.It can ensure delivery of data across an unreliable network</p>
          <p>
            2.End-to-end argument: Puts minimal functionality requirements on
            the hop-by-hop basis and maximal control.{" "}
          </p>
          <p>3.Performance: flow control, congestion control</p>
          <p>
            4.Error control: Timeouts and retransmissions. Recover or conceal
            the effects from packet losses.
          </p>
          <p>5.Elements to make the segments reliable:</p>
          <li>
            &emsp;&emsp;ACK: receiver sends acknowledgements for segments.
          </li>
          <li>
            &emsp;&emsp;Timer: sender waits for receiver's ACK. If ACK is not
            received before timeout, retransmit.
          </li>
          <li>
            &emsp;&emsp;Retransmission: use ACK and timer to assist this.{" "}
          </li>
          <li>&emsp;&emsp;Duplicate data detection: discard the duplicates.</li>
          <li>
            &emsp;&emsp;Sequencing: each transmitted segment has sequence #,
            used to keep track in case out of order.
          </li>
          <p>6.Segment format:</p>
          <img className="" src={tcp_seg_png} alt="tcp_seg_png"></img>
        </div>
        <br></br>
        <button>
          <Link to="/transport/Transport_sub1">TCP Header</Link>
        </button>
        <button>
          <Link to="/transport/Transport_sub2">Connection & Control</Link>
        </button>
        <button>
          <Link to="/layer">go back</Link>
        </button>
      </header>
    </div>
  );
}

export default Transport;
