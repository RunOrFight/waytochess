import React from "react";
import { AdvantageCard } from "../components";

const Home = () => {
    return (
        <>
            <div className='mb-[20px]'>
                <h1 className='text-[60px] leading-[70px] font-extrabold'>
                    Пробный доступ
                </h1>
            </div>
            <div className='relative w-[417px] text-center mb-[79px]'>
                <div className='text-[48px] leading-[56px] relative z-10'>
                    на 10 первых тем
                </div>
                <div className='w-full bg-yelow h-[33px] absolute top-1/2'></div>
            </div>
            <AdvantageCard />
        </>
    );
};

export default Home;
