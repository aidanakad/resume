import React from 'react';
import style from '../experience.module.css'

export default function SoftSkils() {
    return (
      <div >
        <h4 className={style.title} style={{width: '117px'}}>Soft Skills</h4>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Verbal and written communication</div>
                  <div className={style.percent}>100%</div>
              </div>
              <div className={style.wrapper} >
                  <div className={style.percentage} style={{width:'100%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Public presentation</div>
                  <div className={style.percent}>95%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'95%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Solution orientation  </div>
                  <div className={style.percent}>90%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'90%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Conflict management</div>
                  <div className={style.percent}>87%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'87%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Emotional Intelligence</div>
                  <div className={style.percent}>90%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'90%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Russian Language</div>
                  <div className={style.percent}>100%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'100%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Kyrgyz Language</div>
                  <div className={style.percent}>95%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'95%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>English Language</div>
                  <div className={style.percent}>90%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'90%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>
      </div>
    );
  }