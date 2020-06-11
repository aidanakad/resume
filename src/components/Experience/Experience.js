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
                  <li>Support a teacher on lessons;</li>
                  <li>Conduct Ethics and PSHE lessons;</li>
                  <li>Support students who needs help;</li>
                  <li>Collaborate with Department to plan, develop and implement process;</li>
                  <li>Organize event and extracurricular activities;</li>
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
                  <li>Organized internal and external trainings for bank staff;</li>
                  <li>Conducted trainings for bank staff. Taught newcomers to the internal system and customer service;</li>
                  <li>Organized corporate events. (actively participated in organization of summer corporate  at Issyk Kul for 420 bank employees);</li>
                  <li>Collaborate with Department to plan, develop and implement process;</li>
                  <li>Managed budget for trainings and events;</li>
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
                  <li>Assisted clients in understanding their available options and helped them select the right service plans for their needs;</li>
                  <li>Acknowledged customer issues and resolved their problems quickly and efficiently;</li>
                  <li>Organized corporate events. (actively participated in organization of summer corporate  at Issyk Kul for 420 bank employees);</li>
                  <li>Evaluated the customers’ needs and provided service options to meet their requirements;</li>
                  <li>Provided sales of bank products, such as loans, time deposits and bank account;</li>
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
                  <li>Presented own culture and traditions;</li>
                  <li>Organized events and trips to another cities;</li>
                  <li>Developed English and Russian comunication skills of local students;</li>
                  <li>Evaluated the customers’ needs and provided service options to meet their requirements;</li>
                  <li>Conducted lessons, regarding global problems;</li>
              </ul>
            </div>
          </div>

      </div>
    );
  }