import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import {
  Card,
  Row,
  CardText,
  CardTitle,
  UncontrolledCarousel,
  CardBody,
} from "reactstrap";
import { Alert, Collapse } from "reactstrap";
export default class ReactStrapDemon extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem className="hdr">
              <NavLink href="/components">Demo Form Using Reactstrap</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Container className="themed-container" fluid="sm">
          <Form className="form">
            <Col>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input type="email" id="name" placeholder="Enter Email" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="address" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    id="Address"
                    placeholder="Enter Password"
                  />
                </Col>
              </FormGroup>
            </Col>

            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <Button className="mr-3" color="success">
                  Login
                </Button>{" "}
              </Col>
              <Col sm={1}></Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
