import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className='flex justify-center items-center px-11 py-6 h-16 rounded-[60px] bg-blue'>
            <span className='text-white font-semibold text-lg text-center'>
                {children}
            </span>
        </button>
    );
};

export default Button;
