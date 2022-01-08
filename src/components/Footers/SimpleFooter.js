/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <div className="w-auto mx-5">
            <Row className="w-auto">
              <Col lg="3" className="heading">
                <h3 className="">
                  <img src={require('../../assets/img/brand/muszica.png')} />
                  <span className="ml-3 font-weight-700">The next design</span>
                </h3>
                <p className="text-muted py-2 ">
                  Labore duis esse irure dolor laboris mollit nostrud. Sunt incididunt sunt do commodo.Sunt incididunt sunt do commodo.
                </p>
                <ul className="list list-unstyled d-flex">
                  <li className="mx-1">
                    <img src={require('../../assets/social-icons/facebook.svg')} />
                  </li>
                  <li className="mx-1">
                    <img src={require('../../assets/social-icons/linkedin.svg')} />
                  </li>
                  <li className="mx-1">
                    <img src={require('../../assets/social-icons/twitter.svg')} />
                  </li>
                </ul>
              </Col>
              <Col />
              {
                Array(4).fill(0).map((item) => {
                  return(<Col className=" footer-list " lg="2">
                <ul className="list-unstyled text-darker">
                  <li className="text-darker font-weight-800">
                    Company
                  </li>
                  {
                    Array(5).fill("Lorem Ipsum").map((item, index) => {
                      return (
                        <li key={index} className="my-2 text-muted font-weight-500">
                          {item}
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            )})}
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                </Nav>
              </Col>
            </Row>
          </div>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
