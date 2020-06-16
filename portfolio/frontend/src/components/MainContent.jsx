import React from "react";
import { Link } from "react-router-dom";
import jek from "../staticimg/jek.jpg";
import design from "../staticimg/web-design.jpeg";
import pythonpic from "../staticimg/python.gif";
import reactpic from "../staticimg/react.gif";
import djangopic from "../staticimg/django.png";
import development from "../staticimg/web-development.png";

function MainContent() {
  return (
    <div className="main-content">
      <main>
        <section className="section-one">
          <div className="first-list">
            <h1> Hey, I`m Jek.</h1>
            <h3>
              Full-Stack Developer from Metro Manila, Philippines. I create ,
              design custom websites to help businesses do better online.
            </h3>
            <div className="first-list-btn">
              <Link to="/project" className="link-button">
                My Projects
              </Link>
            </div>
          </div>
          <figure className="first-list-img">
            <picture>
              <img className="prof-pic" src={jek} alt="Logo" />
            </picture>
          </figure>
        </section>
        <section className="intro">
          <div className="intro-container">
            <h4>
              <b>
                <h3>- Frontend Development -</h3>
              </b>{" "}
              I primarily use Python, but picking up a new framework or language
              isn`t a problem. I have extensive programming experience and I`m
              comfortable developing on the frontend or backend as well as
              setting up or managing infrastracture. Frontend Development - i
              use technologies depending on the client`s requirements. ussually
              i use javascript, html5, css3, Jquery for sample porjects. on the
              other side i use React or Angular for bigger Projects.
            </h4>
            <h4>
              <b>
                <h3>- Backend Development -</h3>
              </b>{" "}
              My bread and butter is Django / Python and its associated stack:
              Postgres & Nginx. I am confortable using Django for all sorts of
              projects: full CMS websites, database-driven web applications and
              E-Commerce websites.
            </h4>
            <div className="prog-logo">
              <h3 style={{ color: "rgb(173, 174, 175)" }}>Powered By:</h3>
              <div className="prog-logo-list">
                <ul>
                  <li>
                    <img src={pythonpic} />
                  </li>
                  <li>
                    <img src={reactpic} />
                  </li>
                  <li>
                    <img src={djangopic} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-two">
            <blockquote>
              <div className="quote-one">
                <p className="quote__txt_one">
                  "Jek is an excellent web designer and faultless technician.
                  He’s a pleasure to work with, great value for money and will
                  always go the extra mile when necessary."
                </p>
              </div>
              <cite className="first-cite">
                <img src="#" alt="Corazon Kalinga"></img>
                <h6>Corazon Kalinga</h6>
                <p>
                  Owner of
                  <a href="http://www.fenwickstudio.co.uk/" target="_blank">
                    Quickflo Forwarders Inc.
                  </a>
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
        <section>
          <div className="section-three">
            <div className="section-three-title">
              <h2>MY SERVICES</h2>
            </div>
            <div className="container-one">
              <img
                src={design}
                alt="logo of Web design"
                className="web-design-img"
              ></img>
              <h3>Web Design</h3>
              <p>User Focused</p>
              <p>
                A website should be designed for the people who will use it, so
                that's exactly what I do. User focused design should be the
                primary goal of any website.
              </p>
            </div>
            <div className="container-two">
              <img
                src={development}
                alt="logo of Web Development"
                className="web-development-img"
              ></img>
              <h3>Web Development</h3>
              <p>Responsive and Fast</p>
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
            </div>
            <div className="services-link">
              <a href="services">View All Services</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainContent;
