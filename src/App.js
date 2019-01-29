import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    let href = window.location.href;
    href.split("/").forEach(str => {
      if (str === "cbc") {
        this.setState({ location: "cbc" });
      } else if (str === "ebc") {
        this.setState({ location: "ebc" });
      }
    });
  }

  handleLocationChange = () => {
    const { location } = this.state;
    if (location === "ebc") {
      this.setState({ location: "cbc" });
    } else {
      this.setState({ location: "ebc" });
    }
  };

  render() {
    let { location } = this.state;
    // location = location ? location : "ebc";
    return (
      <div
        className={
          location === "ebc"
            ? "ebc-field-portal App"
            : "ebc-field-portal App App-cbc"
        }
      >
        <div className="App-container">
          <div className="App-header">
            <Header
              hRef={location}
              onLocationChange={this.handleLocationChange}
            />
          </div>
          <Main hRef={location} />
        </div>
      </div>
    );
  }
}

export default App;
