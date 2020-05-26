import React from 'react';
import PageWrapper from '../PageWrapper'
import Development from '../Development';
import {NavLink} from 'react-router-dom'

export default function Portfolio() {
  return (
    <PageWrapper>
      <div>

      <NavLink  to='/portfolio/contact-list'>Contact List</NavLink>
      </div>
    </PageWrapper>
  );
}

