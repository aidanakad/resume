import React from 'react';
import PageWrapper from '../PageWrapper'
import Information from './Information'
import SocialIcons from './SocialIcons'
import Education from './Education'
import Experience from './Experience'
import HardSkills from './HardSkills'
import {Container, Row, Col} from 'react-bootstrap'
import mypic from '../../img/personal-img-min.JPG'
import style from './experience.module.css'

export default function Resume() {
  return (
    <PageWrapper>
      <Container>
        <h2 style={{ padding: "10px 20px", textAlign: "center", margin:"24px 0 24px 0"}}>ABOUT ME</h2>         
        <Row className={style.box}>
          <Col xs={12} md={6} lg={4}><img src = {mypic} alt="avatar" className={style.img} style={{textAlign:'center'}}/></Col>
          <Col xs={12} md={6} lg={4}>
            <Information/> 
            <SocialIcons />
          </Col>
          
        </Row>
        <Row> 
          <Col xs={12} md={12}><Education/></Col>
          <Col><Experience/></Col>
          <Col><HardSkills/></Col>
        </Row>
        
      </Container>
      
    </PageWrapper>
  );
}

