import React, { Component } from 'react'
import Home from '../Home'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <span><Link to="/">Acme</Link></span>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem><Link to="signin">Sign In</Link></NavItem>
                  <NavItem><Link to="signup">Sign Up</Link></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          </div>


        </Router>
    );
  }
}

export default Header;