import React from "react";
import { imgPlaceholder } from "../assets";

const AdvantageCard = () => {
    return (
        <div className='bg-white max-w-2xl h-34 p-11 flex rounded-2xl shadow-lg '>
            <div className='w-60 mr-8 shrink-0'>
                <img
                    src={imgPlaceholder}
                    alt='Advantage Card Preview'
                    className='w-full h-full'
                />
            </div>
            <div className='flex flex-col justify-center'>
                <span className='text-blue font-semibold text-lg'>
                    Методика
                </span>
                <p className='text-xl'>
                    Готовая <span className='font-semibold'>интерактивная</span>{" "}
                    методика обучения до уровня{" "}
                    <span className='font-semibold'>КМС</span> с включенным
                    домашними заданиями к каждой теме
                </p>
            </div>
        </div>
    );
};

export default AdvantageCard;
