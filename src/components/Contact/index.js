import React from 'react';
import PageWrapper from '../PageWrapper'
import Form from './Form'
import Messanger from './Messanger'

export default function Contact() {
  return (
    <PageWrapper>
      <h2>GET IN TOUCH</h2>
      <h6>If you would like to discuss projects, work, partnership or just want to say Hello, I am always open for conversation. You can contact me right from here.</h6>
      <Form/>
      <Messanger/>
    </PageWrapper>
  );
}

