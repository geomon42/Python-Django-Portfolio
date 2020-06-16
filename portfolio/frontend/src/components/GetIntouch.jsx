import React from "react";

function GetIntouch() {
  return (
    <section>
      <div className="fourth-section">
        <div className="container-four">
          <h2>Let's Work Together</h2>
          <p>Have a project you'd like to discuss?</p>
          <div className="get-link">
            <a href="#">Get in Touch</a>
          </div>
        </div>
        <div className="container-five">
          <ul className="social-links">
            <li>
              <i
                className="fa fa-envelope"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="mailto:jericdelacruz1991@gmail.com">JEKCRUZ.COM</a>
            </li>
            <li>
              <i
                className="fa fa-git-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="#">On Github</a>
            </li>
            <li>
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="#">On LinkedIn</a>
            </li>
            <li>
              <i
                className="fa fa-facebook-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="">On Facebook</a>
            </li>
            <li>
              <i
                className="fa fa-youtube-square"
                style={{ fontSize: "38px", color: "rgb(9, 11, 161)" }}
              ></i>
              <a href="#">On Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GetIntouch;
