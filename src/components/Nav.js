import React from 'react';
import {NavLink} from 'react-router-dom'  
import style from './nav.module.css'

export default function Nav() {
  return ( 
    <div > 
      <NavLink activeClassName={style.activeLink} exact to="/">About</NavLink>
      <NavLink activeClassName={style.activeLink} to="/resume">Resume</NavLink>
      <NavLink activeClassName={style.activeLink} to="/portfolio">Portfolio</NavLink>
      <NavLink activeClassName={style.activeLink} to="/contact">Contact</NavLink>
    </div>
  );
}

