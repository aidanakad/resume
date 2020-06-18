import React from 'react';
import Location from '../../icons/Location'
import Mail from '../../icons/Mail'
import Skype from '../../icons/Skype'
import Telegram from '../../icons/Telegram'
import style from './contact.module.css'


export default function Messanger(){
    return(
        <div className={style.messanger}>
            <div className={style.item}> 
               <Location/> 
               <p>Kyrgyztan, Bishkek</p>
            </div>
            <div className={style.item}>
               <Mail/> 
               <p>aydana0504@gmail.com</p>
            </div>
            <div className={style.item}>
               <Skype/> 
               <p>aydana0504</p>
            </div>
            <div className={style.item}>
               <Telegram/> 
               <p>aidanakad</p>
            </div>
        </div>
    )
}