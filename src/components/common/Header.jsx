import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';
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
          <Nav pullRight>
            <li className="navbar-btn sm-padding">
              <Link to="/login">{
                ({onClick}) =>
                  <Button onClick={onClick}>登录</Button>
              }</Link>
            </li>
            <li className="navbar-btn sm-padding-last">
              <Link to="/register">{
                ({onClick}) =>
                  <Button onClick={onClick} bsStyle="success">注册</Button>
              }</Link>
            </li>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavItem eventKey={3} href="#">Link</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;