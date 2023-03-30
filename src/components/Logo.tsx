import React, { FC } from "react";
import { logo } from "../assets";

const Logo = () => {
    return (
        <div className='w-[80px] h-[80px]'>
            <img
                src={logo}
                className='h-full w-full'></img>
        </div>
    );
};

export default Logo;
