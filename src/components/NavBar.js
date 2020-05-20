import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './nav.module.css'

export default function Navigation() {
  return ( 
    <div>
      <Navbar fixed="top" collapseOnSelect expand="md" variante="dark" className={style.nav}>
        <Container>
          <Navbar.Brand href="/">
            some logo

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={style.navBar}> 
              <NavLink className={style.navlink} activeClassName={style.activeLink} exact to="/">About</NavLink>
              <NavLink className={style.navlink} activeClassName={style.activeLink} to="/resume">Resume</NavLink>
              <NavLink className={style.navlink} activeClassName={style.activeLink} to="/portfolio">Portfolio</NavLink>
              <NavLink className={style.navlink} activeClassName={style.activeLink} to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

