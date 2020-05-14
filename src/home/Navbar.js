import React, {useState} from 'react';
import {     
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Sitebar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <Router>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">GAGGLE</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <Button onClick={props.clickLogout}>Logout</Button>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Router>
  );
};

export default Sitebar;