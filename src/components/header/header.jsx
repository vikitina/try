import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import { useState } from 'react';
import ThemaToggler from '../thema-toggler/thema-toggler';
import { Menu } from '../../constants';

export default function Header() {
  const [isVisible, updateVisibility] = useState(false);
  const location = useLocation();

  const handlerToggle = () => {
    updateVisibility((current) => !current)
  };

  const handlerClose = () => {
    updateVisibility(false)
  };

  const isHome = () => location.pathname === Menu.home.url;

  return (
    <header className={styles.header}>
      <ThemaToggler />
      <Link to={"/"} className={styles.logo}>
        <picture>
          <source media="(min-width: 1440px)" srcSet="/images/logo/logo-desktop.svg" />
          <source media="(min-width: 768px)" srcSet="/images/logo/logo-tablet.svg" />
          <img src="/images/logo/logo-mobile.svg" alt="" />
        </picture>
      </Link>
      <nav className={`${styles.menu} ${isVisible ? `${styles.opened}` : ''}`}>
        <button
          onClick={handlerToggle}
          className={styles.toggle}
        >
          <span className="visually-hidden">Toggle mobile menu</span>
        </button>
        <ul
          onClick={handlerClose}
          className={`${styles.list} ${isHome() ? styles.home : ''}`}
        >
          {Object.values(Menu).map(({ name, url }) => (
            <li key={name} className={styles.item}>
              <NavLink to={url}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}