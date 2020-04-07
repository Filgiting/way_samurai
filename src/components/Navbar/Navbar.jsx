import React from 'react';
//берем стиле с модуля
import style from './Navbar.module.css';

/* let style = {
  'nav': '',
  'item': ''
} */

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a>Profile</a>
      </div>
      {/* применяем два класса */}
      <div className={`${style.item} ${style.active}`}>
        <a>Messages</a>
      </div>
      <div className={style.item}>
        <a>News</a>
      </div>
      <div className={style.item}>
        <a>Music</a>
      </div>
      <div className={style.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;