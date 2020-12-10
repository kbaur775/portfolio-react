import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import projects from "./projects.json";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.projects.map(project => (
          <Project
            name={project.name}
            image={project.image}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
