import React from 'react';
import PageWrapper from '../PageWrapper'
import Form from './Form'
import Messanger from './Messanger'
import {Container, Row, Col} from 'react-bootstrap'
import style from './contact.module.css'

export default function Contact() {
  return (
    <PageWrapper>
      <Container className={style.contact}>
        <div className={style.contactTitle}>
          <h2 className={style.h2}>GET IN TOUCH</h2>
          <h6 className={style.h6}>If you would like to discuss projects, work, partnership or just want to say Hello, I am always open for conversation. You can contact me right from here.</h6>
        </div>
         <Row>
           <Col xs={12} md={6}><Form/></Col>
           <Col xs={12} md={6}><Messanger/></Col>
         </Row>
      </Container>
      
    </PageWrapper>
  );
}

