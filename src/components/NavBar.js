import React from 'react';
import {NavLink} from 'react-router-dom'  
import {Navbar, Nav, Container} from 'react-bootstrap'
import style from './nav.module.css'

const navItems = [
  { id: 1, link: '/', text: 'About' },
  { id: 2, link: '/experience', text: 'Experience' },
  { id: 3, link: '/portfolio', text: 'Portfolio' },
  { id: 4, link: '/contact', text: 'Contact' },
]

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
                <div>
                  {
                    navItems.map((item) => (
                      <NavLink
                        key={item.id}
                        exact
                        to={item.link}
                        className={style.navlink}
                        activeClassName={style.activeLink}
                      >
                        {item.text}
                      </NavLink>
                    ))
                  }
                </div>
                  
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}


