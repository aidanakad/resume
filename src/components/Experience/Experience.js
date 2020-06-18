import React from 'react';
import Calendar from '../../icons/Calendar'
import style from './experience.module.css'

export default function Experience() {
    return (
      <div >
        <h4 className={style.title} style={{width: '117px'}}>Experience</h4>
          <div className={style.resume}>
            <div className={style.rightBox}>
              <h6>09/2019 - present</h6>
              <p>Bishkek, Kyrgyzstan</p> 
            </div>
            <Calendar className={style.calendar}/>
            <span className={style.divider}></span>
            <div>
              <h6>Silk Road International School</h6>
              <p>Assistant teacher</p>
              <ul className={style.duties}>
                <li>I support head teacher on lessons, also conduct Ethics and PSHE lesons. Colloborate with our Department to plan, develop and implement processe.</li>
              </ul>
            </div>
          </div>


          <div className={style.resume}>
            <div className={style.rightBox}>
              <h6>07/2019 - 08/2019</h6>
              <p>Bishkek, Kyrgyzstan</p> 
            </div>
            <Calendar className={style.calendar}/>
            <span className={style.divider}></span>
            <div>
              <h6>Demir Kyrgyz International Bank</h6>
              <p>Training Specialist – HR Department </p>
              <ul className={style.duties}>
                <li>On this position I organized enternal and external trainings for the bank staff, also conducted trainings. My duties contained an organization corporate events. During the work I actively participated in organization of summer corporate  at Issyk Kul for 420 bank employees </li>
              </ul>
            </div>
          </div>

          <div className={style.resume}>
            <div className={style.rightBox}>
              <h6>09/2018 - 07/2019</h6>
              <p>Bishkek, Kyrgyzstan</p> 
            </div>
            <Calendar className={style.calendar}/>
            <span className={style.divider}></span>
            <div>
              <h6>Demir Kyrgyz International Bank</h6>
              <p>Retail Marketing Specialist </p>
              <ul className={style.duties}>
                <li>Assisted clients in understanding their available options and helped them select the right service plans for their needs. I provided sales of bank products, such as loans, time deposits and bank account. And also Acknowledged customer issues and resolved their problems quickly and efficiently</li>
              </ul>
            </div>
          </div>
        
          <div className={style.resume}>
            <div className={style.rightBox}>
              <h6>06/2017 - 08/2017 </h6>
              <p>Bishkek, Kyrgyzstan</p> 
            </div>
            <Calendar className={style.calendar}/>
            <span className={style.divider}></span>
            <div>
              <h6>Aiesec Bursa, Turkey </h6>
              <p>Volunteer</p>
              <ul className={style.duties}>
                <li>During my volunteer experience, I developed English and Russian comunication skills of local students, Conducted lessons, regarding global problems. And presented own culture and traditions</li>
              </ul>
            </div>
          </div>

      </div>
    );
  }