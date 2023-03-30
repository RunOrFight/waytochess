import React from "react";
import { Link } from "react-router-dom";
import { arrowLeft } from "../assets";

const ReturnBack = () => {
    return (
        <Link to='/methodology'>
            <div className='flex cursor-pointer hover:opacity-75'>
                <div className='mr-2.5'>
                    <img
                        className='w-full h-full'
                        src={arrowLeft}
                        alt='arrow-left'
                    />
                </div>

                <span className='text-lg font-[500] text-[#000]'>
                    Вернуться к темам
                </span>
            </div>
        </Link>
    );
};

export default ReturnBack;
