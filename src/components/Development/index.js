import React from 'react';
import style from './dev.module.css'

export default function Development() {
  return (
      <div className={style.text}>
        Hi there! This page is under construction, but soon it will be ready!
        <img className={style.image} src="https://www.odoo.com/apps/icon_image?module_id=37322" alt="under construction icon"/>
      </div>
  );
}
