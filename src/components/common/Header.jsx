import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import logo from '../../logo.svg';

const styles = {
  header: {
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  logo: {
    width: "60px",
    marginRight: "-20px",
    marginTop: "-12px"
  }
};

class Header extends Component {
  render() {
    return (
      <Navbar staticTop collapseOnSelect style={styles.header}>
        <Navbar.Header>
          <Navbar.Brand>
            <a>
              <img src={logo} alt="logo" style={styles.logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Brand>
            <a>新裹吧</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <li className="navbar-btn ms-padding">
              <Button>登录</Button> 
            </li>
            <li className="navbar-btn ms-padding-last">
              <Button bsStyle="success">注册</Button>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;