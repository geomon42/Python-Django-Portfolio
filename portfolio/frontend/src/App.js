import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import About from "./subcomponents/About";
import Blog from "./subcomponents/Blog";
import Projects from "./subcomponents/Projects";
import GetIntouch from "./components/GetIntouch";
import Error from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <MainContent />
    <GetIntouch />
    <Footer />
  </div>
);

export default App;
