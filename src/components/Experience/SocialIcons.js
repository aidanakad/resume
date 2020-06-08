import React from 'react';
import Facebook from '../../icons/Facebook'
import GitHub from '../../icons/GitHub'
import Instagram from '../../icons/Instagram'
import LinkedIn from '../../icons/LinkedIn'
import style from './experience.module.css'

export default function SocialIcons() {
    return (
      <div className={style.socials}>
          <a href="https://www.facebook.com/aydana.kadyrova.7/" target="_blank" rel="noopener noreferrer">
            <Facebook className={style.icon}/>
          </a>
          <a href="https://github.com/aidanakad" target="_blank" rel="noopener noreferrer">
            <GitHub className={style.icon}/>
          </a>
          <a href="https://www.instagram.com/aydanakad/" target="_blank" rel="noopener noreferrer">
            <Instagram className={style.icon}/>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <LinkedIn className={style.icon}/>
          </a>
      </div>
    );
  }