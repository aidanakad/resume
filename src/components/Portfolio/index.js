import React from 'react';
import PageWrapper from '../PageWrapper'
// import {NavLink} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Card from './Card'
import contact from '../../img/contact.png'
import todo from '../../img/todo.png'
import style from './portfolio.module.css'


export default function Portfolio() {
  return (
    <PageWrapper>
      <Container>
        <h2 className={style.h2} style={{textAlign:"center"}}>MY PORTFOLIO</h2>
          <Card 
            link="/portfolio/contact-list"
            title= 'Contact List'
            desc= "In this project I realized simple logic of contact list, by using react's useState."
            image = {contact}
          />
          <Card 
            link="/portfolio/todo-list"
            title= 'To Do List'
            desc= "In order to create this app, I used react's useReduser. The app lets add tasks and set priority."
            image={todo}
          />
      </Container>
    </PageWrapper>
  );
}

