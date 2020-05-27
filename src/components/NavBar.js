import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './nav.module.css'

export default function Navigation() {
  return ( 
      <Navbar collapseOnSelect expand= 'lg' variante="dark" className={style.nav} mr='auto'>
        <Container fluid="md">
              <Navbar.Brand href="/">
            some logo
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className={style.navBar}> 
                  <NavLink className={style.navlink} activeClassName={style.activeLink} exact to="/">About</NavLink>
                  <NavLink className={style.navlink} activeClassName={style.activeLink} to="/experience">Experience</NavLink>
                  <NavLink className={style.navlink} activeClassName={style.activeLink} to="/portfolio">Portfolio</NavLink>
                  <NavLink className={style.navlink} activeClassName={style.activeLink} to="/contact">Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

