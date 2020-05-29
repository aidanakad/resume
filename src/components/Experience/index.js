import React from 'react';
import PageWrapper from '../PageWrapper'
import Information from './Information'
import {Container, Row, Col} from 'react-bootstrap'
import mypic from '../../img/personal-img.JPG'
import style from './experience.module.css'

export default function Resume() {
  return (
    <PageWrapper>
      <Container>
        <Row>
          <Col>
            <h2 style={{ padding: "10px 20px", textAlign: "center", margin:"24px 0 24px 0"}}>ABOUT ME</h2>
            <div className={style.box}>
              <Col sm={12} md={6}><img src = {mypic} alt="avatar" className={style.img} /></Col>
              <Col sm={12} md={6}><Information/></Col>
            </div>
          </Col>
        </Row>
      </Container>
      
    </PageWrapper>
  );
}

