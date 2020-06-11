import React from 'react';
import Calendar from '../../icons/Calendar'
import style from './experience.module.css'

export default function Education() {
    return (
      <div >
        <h4 className={style.title}>Education</h4>
          <div className={style.resume}>
            <div className={style.rightBox}>
              <h6>2014-2018</h6>
              <p>Bishkek, Kyrgyzstan</p> 
            </div>
            <Calendar className={style.calendar}/>
            <span className={style.divider}></span>
            <div>
              <h6>Kyrgyz National University</h6>
              <p>Kyrgyz European Faculty <br/> Economics and Management</p>
            </div>
          </div>
      </div>
    );
  }