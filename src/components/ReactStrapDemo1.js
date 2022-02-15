import React, { Component } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export default class ReactstrapDemo1 extends Component {
  render() {
    return (
      <div>
        <Navbar color="blue" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem className="hdr">
              <NavLink className="/components/">
                Collapse Panel Reactstrap
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Button color="info" id="toggler" style={{ marginBottom: "1rem" }}>
          Collapse
        </Button>

        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              I am making this day a special for my beloved mother. I am very
              loyal to my fans because i cherish whom they are. Lets rest and
              make it a success
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}
