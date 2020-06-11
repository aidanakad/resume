import React from 'react';
import style from '../experience.module.css'

export default function HardSkils() {
    return (
      <div >
        <h4 className={style.title} style={{width: '117px'}}>Hard Skills</h4>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>HTML</div>
                  <div className={style.percent}>95%</div>
              </div>
              <div className={style.wrapper} >
                  <div className={style.percentage} style={{width:'95%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>CSS</div>
                  <div className={style.percent}>90%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'90%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>JavaScript</div>
                  <div className={style.percent}>70%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'70%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>React</div>
                  <div className={style.percent}>80%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'80%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Redux</div>
                  <div className={style.percent}>60%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'60%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Bootstap</div>
                  <div className={style.percent}>90%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'90%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>CorelDraw</div>
                  <div className={style.percent}>70%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'70%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>

          <div className={style.skill}>
              <div className={style.top}>
                  <div className={style.skillName}>Adobe Photoshop</div>
                  <div className={style.percent}>70%</div>
              </div>
              <div className={style.wrapper}>
                  <div className={style.percentage} style={{width:'70%', height: '18px', borderRadius:'6px'}}></div>
              </div>
          </div>
      </div>
    );
  }