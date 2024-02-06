import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Application.css";
import cookies_png from "../assets/img/application_img/cookies.png";
import cache_png from "../assets/img/application_img/cache.png";
import get1_png from "../assets/img/application_img/get1.png";
import get2_png from "../assets/img/application_img/get2.png";

function Application_sub2() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="section_wrapper">
          <h1>Cookies & Web Cache</h1>
          <hr className="horizontal_line"></hr>
          <h2>Cookies</h2>
          <p>Many Websites use cookies</p>
          <p>Cookies allow sites to keep track of users.</p>
          <p>four components:</p>
          <ol>
            <li>cookie header line of HTTP response message.</li>
            <li>cookie header line in the next HTTP request message.</li>
            <li>cookie file kept on user’s host, managed by use’s browser</li>
            <li>back-end database at Website 3</li>
          </ol>
          <h3>Cookies: keeping “state”</h3>
          <img src={cookies_png} className="smaller-image" />
          <br></br>
          <p>
            {" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              What cookies can be used for:
            </span>
          </p>
          <ul>
            <li>authorization</li>
            <li>shopping carts</li>
            <li>Recommendations</li>
            <li>One-Click shopping</li>
          </ul>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>
              how to keep “state ”:
            </span>
          </p>
          <ul>
            <li>
              protocol endpoints: maintain state at sender/receiver over
              multiple transactions by employing cookies.
            </li>
            <li>
              Note that cookies assist the stateless HTTP to keep history.
            </li>
          </ul>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>
              cookies and privacy:
            </span>
          </p>
          <ul>
            <li>cookies permit sites to learn a lot about you</li>
            <li>you may supply name and e-mail to sites</li>
            <li>Invasion of privacy.</li>
          </ul>
          <br></br>
          <h2>Web Caches</h2>
          <p>
            <span style={{ color: "red", fontWeight: "bold" }}>goal:</span>
            satisfy client request without involving origin server
          </p>
          <ul>
            <li>user sets browser: Web accesses via cache</li>
            <li>browser sends all HTTP requests to web cache</li>
            <ul>
              <li>if object in cache: cache returns object</li>
              <li>
                else cache requests object from origin server, then returns
                object to client
              </li>
            </ul>
            <img src={cache_png} className="smaller-image" />
            <li>cache acts as both client and server</li>
            <ul>
              <li>server for original requesting client</li>
              <li>client to origin server</li>
            </ul>
            <li>
              typically cache is installed by ISP (university, company,
              residential ISP)
            </li>
          </ul>
          <h3>Why Web caching</h3>
          <ul>
            <li>reduce response time for client request</li>
            <li>reduce traffic on an institution’s access link</li>
            <li>
              Internet is dense with caches: This enables “poor” content
              providers (e.g. ISPs) to effectively deliver messages to end users
              while offering a low cost solution.
            </li>
            <li>
              Implementation of cache servers reduces Web traffic resulting in
              better performance for all applications.
            </li>
          </ul>
          <h2>Conditional GET</h2>
          <ul>
            <li>
              Cache introduces a problem since a copy of the object on the cache
              server can be stale.
            </li>
            <li>
              HTTP mechanism allows to check for the date by using: Conditional
              GET
            </li>
          </ul>
          <table>
            <tr>
              <td>
                <ol>
                  <li>Request uses GET method</li>
                  <li>
                    Message includes: Message includes: If-modified-since:
                    &lt;date&gt;
                  </li>
                  <li>
                    Then server response contains no object if cached copy is
                    up-to-date and responds with:HTTP/1.0 304 Not Modified
                  </li>
                </ol>
              </td>
              <td>
                <img src={get1_png} className="another-image" />
              </td>
            </tr>
            <tr>
              <td>Otherwise, server sends the new copy.</td>
              <td>
                <img src={get2_png} className="another-image" />
              </td>
            </tr>
          </table>
        </div>
        <br></br>
        <button>
          <Link to="/application">Application</Link>
        </button>
        <button>
          <Link to="/application/Application_sub1">HTTP</Link>
        </button>
        <button>
          <Link to="/layer">go back</Link>
        </button>
      </header>
    </div>
  );
}
export default Application_sub2;
