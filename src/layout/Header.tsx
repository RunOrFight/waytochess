import React, { FC, PropsWithChildren, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../components";
import { Nav } from ".";

const Header: FC<PropsWithChildren> = ({ children }) => {
    const isAuth = true;
    return (
        <header className='h-28 pt-6 flex items-center justify-between'>
            <Link to='/home'>
                <Logo />
            </Link>
            {isAuth ? (
                <>
                    <Nav></Nav>
                    <div>
                        <NavLink to='/account'>Личный кабинет</NavLink>
                    </div>
                </>
            ) : (
                <div className='text-center text-lg'>
                    <Link
                        className='text-blue'
                        to='/login'>
                        Войти
                    </Link>
                    <span> или </span>
                    <Link
                        className='text-blue'
                        to='/register'>
                        Зарегистрироваться
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
