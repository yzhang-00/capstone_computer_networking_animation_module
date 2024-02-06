import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Application.css";
import web_png from "../assets/img/application_img/web.png";
import htmlexample_png from "../assets/img/application_img/examplehtml.png";
import httpclient_server_png from "../assets/img/application_img/httpclient-server.png";
import request_png from "../assets/img/application_img/request-message.png";
import general_format_png from "../assets/img/application_img/general-format.png";
import more_method_png from "../assets/img/application_img/more-method.png";
import response_png from "../assets/img/application_img/response-message.png";
function Application_sub1() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Hypertext Transfer Protocol</h1>
          <hr className="horizontal_line"></hr>
          <h2>Web and HTTP</h2>
          <ul>
            <li>web page consists of objects</li>
            <li>
              object can be HTML file, JPEG image, Java applet, audio file,...
            </li>
            <li>
              web page consists of base HTML-file which includes several
              referenced objects
            </li>
            <li>each object is addressable by a URL, e.g.</li>
            <img src={web_png} alt="web" className="smaller-image" />
          </ul>
          <div className="clearfix">
            <pre>
              &lt;html&gt; <br></br>
              &lt;head&gt;<br></br>
              &lt;meta content="text/html; charset=ISO-8859-1"
              http-equiv="Content-Type"&gt;<br></br>
              &lt;title&gt;Two Birds&lt;/title&gt;<br></br>
              &lt;/head&gt; <br></br>
              &lt;body&gt;<br></br> This is a simple HTML page showing two
              birds.
              {"<br>"}
              <br></br>
              {"<br>"}
              <br></br>
              &lt;meta http-equiv="content-type" content="text/html;
              charset=ISO-8859-1"&gt;<br></br>
              &lt;img style="padding-right: 8px; padding-top: 8px;
              padding-bottom: 8px;"<br></br>
              src="http://2.bp.blogspot.com/-WC3fq96iLJ0/T9ci-1xWJ4I/AAAAAAAABIY/p2_LQs1Nc5E/s1600/Birds-hd-Wallpapers.jpg"
              <br></br>
              id="il_fi" height="226" width="288"&gt;{"<br>"}
              <br></br>
              How many objects in this html file? {"<br>"}
              <br></br>
              {"<br>"}
              <br></br>
              &lt;/body&gt; <br></br>
              &lt;/html&gt;
            </pre>
            <img src={htmlexample_png} alt="html" className="side-image" />
          </div>
          <h2>HTTP Overview</h2>
          <p>HTTP: hypertext transfer protocol</p>
          <ul>
            <li>Is the Web’s application layer protocol.</li>
            <li>Employs client/server model.</li>
            <ul>
              <li>
                Client (aka browser): requests, receives, (using HTTP protocol)
                and displays” Web objects.
              </li>
              <li>
                server: sends (using HTTP protocol) objects in response to the
                client’s requests.
              </li>
            </ul>
            <img
              src={httpclient_server_png}
              alt="web"
              className="smaller-image"
            />
            <p>uses TCP:</p>
            <li>
              client initiates TCP connection (creates socket) to server, asks
              to connect to the port number 80 at the server side.
            </li>
            <li>
              server accepts TCP connection from client and establishes a socket
              for transport of the messages.
            </li>
            <li>
              HTTP messages (application-layer protocol messages) exchanged
              between browser (HTTP client) and Web server (HTTP server).
            </li>
            <li>TCP connection is closed.</li>
          </ul>
          <h2>Stateless/State</h2>
          <p>Stateless</p>
          <ul>
            <li>
              Is the case of servers that maintain no information about the past
              clients’ requests, e.g. HTTP is “stateless ”
            </li>
          </ul>
          <p>Stateful</p>
          <p>protocols that maintain “state” are complex!</p>
          <ul>
            <li>
              Some protocols store the past history (state) of clients requests.
              <ul>
                <li>
                  Side Note: in case server/client crashes, the view of “state”
                  may be inconsistent, hence, state must be reconciled. This
                  will add to the design complexity.
                </li>
              </ul>
            </li>
          </ul>
          <h2>HTTP request message</h2>
          <ul>
            <li>two types of HTTP messages: request, response</li>
            <li>HTTP request message:</li>
            <ul>
              <li>ASCII (human-readable format)</li>
              <img src={request_png} alt="ascii" className="smaller-image" />
              <li>General format:</li>
              <img
                src={general_format_png}
                alt="general"
                className="smaller-image"
              />
            </ul>
          </ul>
          <h3>Uploading form input</h3>
          <p>POST method:</p>
          <ul>
            <li>Web page often includes form input.</li>
            <ul>
              <li>e.g. is used by user to specify specific request.</li>
            </ul>
            <li>
              Entity body of the request message stores the input value from the
              client and is checked at the server side.
            </li>
          </ul>
          <p>URL method:</p>
          <ul>
            <li>uses GET method</li>
            <li>input is uploaded in URL field of request line:</li>
            <li>e.g. www.somesite.com/animalsearch?monkeys&banana</li>
            <li>
              Generally used for simple forms where security does not matter,
              i.e. entire content is visible.
            </li>
            <li>Max size = URL + Form = 2048 characters.</li>
          </ul>
          <h3>More Method types</h3>
          <img src={more_method_png} className="smaller-image" />
          <br></br>
          <h2>HTTP response message</h2>
          <img src={response_png} className="smaller-image" />
          <h3>HTTP response status codes</h3>
          <ul>
            <li>
              status code appears in 1st line in server-to-client response
              message.
            </li>
            <li>some sample codes:</li>
            <ul>
              <li>
                200 OK: request succeeded, requested object later in this msg
              </li>
              <li>
                301 Moved Permanently: requested object moved, new location
                specified later in this msg (Location:)
              </li>
              <li>400 Bad Request:request msg not understood by server </li>
              <li>404 Not Found:requested document not found on this server</li>
              <li>505 HTTP Version Not Supported</li>
            </ul>
            <h3>Status-Codes</h3>
            <ul>
              <li>1xx: Informational - Request received, continuing process</li>
              <li>
                2xx: Success - The action was successfully received, understood,
                and accepted
              </li>
              <li>
                3xx: Redirection - Further action must be taken in order to
                complete the request
              </li>
              <li>
                4xx: Client Error - The request contains bad syntax or cannot be
                fulfilled
              </li>
              <li>
                5xx: Server Error - The server failed to fulfill an apparently
                valid request 33
              </li>
            </ul>
          </ul>
        </div>
      </header>
      <br></br>
      <button>
        <Link to="/application">Application</Link>
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
export default Application_sub1;
