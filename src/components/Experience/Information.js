import React from 'react';
import style from './experience.module.css'

export default function Information() {
  return (
      <div className={style.info}>
          <ul>
              <li>
                  <h6>
                      <span>Name:</span> Aidana Kadyrova
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>Birthdate:</span> 5 April, 1997
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>Address:</span> Bishkek, Kyrgyzstan
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>E-Mail:</span> Aydana0504@gmail.com
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>Phone:</span> +(996) 559-86-26-86
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>Freelance:</span> Available
                  </h6>
              </li>
              <li>
                  <h6>
                      <span>Languages:</span> English, Russian, Kyrgyz
                  </h6>
              </li>
          </ul>
      </div>
  );
}