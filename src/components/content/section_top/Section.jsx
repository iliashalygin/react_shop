import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Section.module.css";
import post from "./Post01.svg";
import st from "./../../Go_catalog.module.css"

const Section_top = () => {
  return (
    <div className={s.section_top}>
      <div className={s.section_footing}>Основано в 1993 году</div>
      <div className={s.section_description}>ЛУЧШАЯ ЖИЗНЬ, СОЗДАННАЯ ДЛЯ ВАС!</div>
      <NavLink to="/catalog" className={`${s.position_catalog} ${st.style_catalog}`}>перейти в каталог</NavLink>
      <div className={`${s.img_post01}`}>
        <img src={post} />
      </div>
    </div>
  )
}

export default Section_top