import React from 'react';
import Navigation from '../NavBar'

export default function PageWrapper({children}) {
  return (
    <div>
        <Navigation/>
        {children}
    </div>
  );
}

