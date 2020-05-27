import React from 'react';
import Navigation from '../NavBar'
import style from './page.module.css'

export default function PageWrapper({children}) {
  return (
    <div className={style.page}>
        <Navigation/>
        {children}
    </div>
  );
}

