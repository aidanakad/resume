import React from 'react';
import PageWrapper from '../PageWrapper';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom' 
import style from './about.module.css'

export default function About() {
  return (
    <PageWrapper>
      <div className={style.bg}>
        <Container>
          <Row>
            <Col xs='12' md='8' lg='6'>
              <div>
                <h3 className={style.h3}>HELLO WORLD!</h3>
                <h1 className={style.title}>I AM FRONT-END DEVELOPER</h1>
                <div className={style.txt}>
                  <p>My name is Aidana. I am a junior front-end developer, based in Bishkek, Kyrgyzstan. If I describe myself in one sentence, this will be that I have the optimism of will and pessimism of intelligence.</p>
                </div>
              </div>
              <NavLink to="/experience">
                <Button variant="outline-secondary">More about me</Button>
              </NavLink>
            </Col>
          </Row>
          
        </Container>      
      </div>
      
    </PageWrapper>
  );
}

