import React from 'react';
import s from  './Header.module.css'


function Header() {
    return (
        <header className={s.header}>
            <p className={s.logo}>Dogs Island</p>
        </header>
    )
}

export default Header;