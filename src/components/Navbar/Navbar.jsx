import React from 'react';
//берем стиле с модуля
import style from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href='/profile'>Profile</a>
            </div>
            {/* применяем два класса */}
            <div className={`${style.item} ${style.active}`}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={style.item}>
                <a href='/news'>News</a>
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