import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Logo from "../../assets/img/brand/muszica.png";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // // initialise
    // headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
          <Navbar className="navbar-main w-100 px-5" expand="lg" id="navbar-main">
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img className="" alt="..." src={Logo} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
              <i className="fa fa-bars"></i>
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img alt="..." src={Logo} />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto mr-5" navbar>
                <NavItem>
                  <NavLink>About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Our Service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Portfolio</NavLink>
                </NavItem>
                <Button color="primary" className="nav-button">
                  Get in Touch
                </Button>
              </Nav>
            </UncontrolledCollapse>
          </Navbar>
      </>
    );
  }
}

export default DemoNavbar;
