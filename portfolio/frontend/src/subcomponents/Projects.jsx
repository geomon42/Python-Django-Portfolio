import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import "./ProjectCss.css";

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/projects")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          projects: json,
        });
      });
  }
  render() {
    const { isLoaded, projects } = this.state;
    if (!isLoaded) {
      return <div>Fetching Data....</div>;
    } else {
      return (
        <div>
          <NavBar />
          <div>
            <ul>
              {projects.map((project) => (
                <div className="ProjectCss">
                  <div>
                    <img src={project.image} />
                  </div>
                  <div>
                    <li key={project.id}>{project.project_tittle}</li>
                  </div>
                  <div>
                    <li key={project.id}>
                      <b>Check it out:</b> {project.project_link}
                    </li>
                  </div>
                  <div>
                    <b>Built by:</b>
                    {project.technologies}
                  </div>
                  <div>
                    <li key={project.id}>
                      <h4>
                        <b>Details:</b>
                      </h4>
                      <p>{project.details}</p>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default ProjectList;
