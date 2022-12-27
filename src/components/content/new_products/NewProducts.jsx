import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NewProducts.module.css";
import st from "./../../Go_catalog.module.css"
import Slider from "../../slider/Slider";

const NewProducts = () => {
  return (
    <div>
      <div className={s.novelty}>Новинки</div>
      {/* <Slider /> */}
      <NavLink to="/catalog" className={`${s.position_catalog} ${st.style_catalog}`}>перейти в каталог</NavLink>
    </div>
  )
}

export default NewProducts