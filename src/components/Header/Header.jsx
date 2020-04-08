import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src='http://marveltheme.com/tf/html/covids/covids/images/logo-2x.png' />
        </header>
    );
}

export default Header;