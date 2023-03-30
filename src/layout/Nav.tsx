import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='flex gap-[70px]'>
            <NavLink to='methodology'>Методика</NavLink>
            <NavLink to='/trainers'>Тренеры</NavLink>
            <NavLink to='/loyalty '>Пограмма лояльности</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/rates'>Тарифы</NavLink>
        </nav>
    );
};

export default Nav;
