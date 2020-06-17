import React from 'react';
import Location from '../../icons/Location'
import Mail from '../../icons/Mail'
import Skype from '../../icons/Skype'
import Telegram from '../../icons/Telegram'

export default function Messanger(){
    return(
        <div>
            <Location/> <p>Kyrgyztan, Bishkek</p>
            <Mail/> <p>aydana0504@gmail.com</p>
            <Skype/> <p>aydana0504</p>
            <Telegram/> <p>aidanakad</p>
        </div>
    )
}