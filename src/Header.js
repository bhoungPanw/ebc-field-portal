import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    let { hRef } = this.props;
    hRef = hRef ? hRef : "ebc";
    const Button = withRouter(({ history }) => {
      let btnText = hRef === "ebc" ? "Amsterdam cbc" : "Santa Clara ebc";
      return (
        <button
          className="location-switch"
          type="button"
          onClick={() => {
            let page = hRef === "ebc" ? "cbc" : "ebc";
            this.props.onLocationChange();
            history.push(`/${page}/home`);
          }}
        >
          {btnText}
        </button>
      );
    });

    return (
      <div className="navigation-container">
        <div className="header-container">
          <div className="App-title">
            <h1>{hRef === "ebc" ? "Executive" : "Customer"} Briefing Center</h1>
            <h2>{hRef === "ebc" ? "" : "Amsterdam"}</h2>
          </div>
        </div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="navigation">
              <LinkContainer to={`/${hRef}/home`}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to={`/${hRef}/briefing-topics`}>
                <NavItem eventKey={2}>Briefing Topics</NavItem>
              </LinkContainer>
              <LinkContainer to={`/${hRef}/briefing-documents`}>
                <NavItem eventKey={3}>Briefing Documents</NavItem>
              </LinkContainer>
              <LinkContainer to={`/${hRef}/directions`}>
                <NavItem eventKey={4}>Directions</NavItem>
              </LinkContainer>
              <LinkContainer to={`/${hRef}/concierge`}>
                <NavItem eventKey={5}>Concierge</NavItem>
              </LinkContainer>
              <LinkContainer to={`/${hRef}/contact`}>
                <NavItem eventKey={5}>Contact</NavItem>
              </LinkContainer>
            </Nav>
            <Nav className="cbc-amsterdam" pullRight>
              <Button />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
