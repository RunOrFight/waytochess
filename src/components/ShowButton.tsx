import React, { Dispatch, FC, HTMLAttributes, PropsWithChildren } from "react";

interface ShowButtonProps extends HTMLAttributes<HTMLSpanElement> {}

const ShowButton: FC<ShowButtonProps> = ({ children, ...props }) => {
    return (
        <span
            {...props}
            className='text-blue text-lg font-[500] hover:underline cursor-pointer'>
            {children}
        </span>
    );
};

export default ShowButton;
