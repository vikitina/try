import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../header/header";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/settings-process/settings-process.selector";
import { Menu, THEMES } from "../../constants";
import burgerClosedIcon from "../../assets/images/burger/closed.svg";
import burgerOpenedIcon from "../../assets/images/burger/opened.svg";
import Footer from "../footer/footer";
import styles from "./layout.module.scss";



export default function Layout(props) {
  const thema = useSelector(selectTheme);
  const location = useLocation();

  const rootVars = {
    ['--thema']: THEMES.find((item) => item.name === thema).color || '#000000',
    ['--burger-closed']: `url("${burgerClosedIcon}")`,
    ['--burger-opened']: `url("${burgerOpenedIcon}")`,
  };

  const isHome = () => location.pathname === Menu.home.url;


  return (
    <div
      style={rootVars}
      className={`${styles.container} ${isHome() ? styles.home : ''}`}
    >
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
