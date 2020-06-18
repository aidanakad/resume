import React from 'react';
import PageWrapper from '../PageWrapper'
// import {NavLink} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card'
import contact from '../../img/contact.png'
import todo from '../../img/todo.png'
import GitHub from '../../icons/GitHub'
import style from './portfolio.module.css'


export default function Portfolio() {
  return (
    <PageWrapper >
      <Container className={style.prtfolio}>
        <h2 className={style.h2} style={{textAlign:"center"}}>MY PORTFOLIO</h2>
        <Row>
          <Col xs={12} md={6}>
            <Card 
                link="/portfolio/contact-list"
                title= 'Contact List'
                desc= "In this project I realized simple logic of contact list, by using react's useState."
                image = {contact}
              />
              <a className={style.repo} href="https://github.com/aidanakad/contact-list" target="_blank" rel="noopener noreferrer"><GitHub/>  Check out a full code from repository</a>
          </Col>
            <Col xs={12} md={6}>
              <Card 
                link="/portfolio/todo-list"
                title= 'To Do List'
                desc= "In order to create this app, I used react's useReduser. The app lets add tasks and set priorities."
                image={todo}
              />
               <a className={style.repo} href="https://github.com/aidanakad/todoList" target="_blank" rel="noopener noreferrer"><GitHub/>  Check out a full code from repository</a>
            </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

