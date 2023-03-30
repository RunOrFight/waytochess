import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className='flex justify-center items-center px-[43px] py-[24px] h-[69px] rounded-[60px] bg-blue'>
            <span className='text-white font-semibold text-[18px] leading-[21px] text-center'>
                {children}
            </span>
        </button>
    );
};

export default Button;
