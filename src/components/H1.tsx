import React, { FC, PropsWithChildren } from "react";

interface H1Props extends PropsWithChildren {}

const H1: FC<H1Props> = ({ children }) => {
    return (
        <h1 className='text-xl 2xl:text-6xl  xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center font-extrabold '>
            {children}
        </h1>
    );
};

export default H1;
