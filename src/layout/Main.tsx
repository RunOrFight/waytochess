import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Header } from ".";

const Main = () => {
    return (
        <div className='xl:px-48 lg:px-40 md:px-32 sm:px-24 h-full flex flex-col '>
            <Header />

            <div className='h-full min-h-[1px] flex flex-col justify-center items-center '>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
