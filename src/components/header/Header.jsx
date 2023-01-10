import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className={`${s.header}`}>
      <NavLink to="/catalog" className={`${s.catalog}`}>Каталог</NavLink>
      <NavLink to="/individual_furniture" className={`${s.individual_furniture}`}>Индивидуальная мебель</NavLink>
      <NavLink to="/contacts" className={`${s.contacts}`}>Контакты</NavLink>
      <div className={`${s.logo}`}>
        <NavLink to="/" ><img src={logo} /></NavLink>
      </div>
      <NavLink to="/about_company" className={`${s.about_company}`}>О компании</NavLink>
      <div className={`${s.telephone}`}>+38 (099)-638-45-37</div>
      <div className={`${s.language}`}>
        <div>RU</div>
        <div></div>
      </div>
    </header>
  )
}

export default Header;

