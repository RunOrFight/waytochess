import React from "react";
import { AdvantageCard, H1 } from "../components";

const Home = () => {
    return (
        <>
            <div className='mb-[20px]'>
                <H1>Пробный доступ</H1>
            </div>
            <div className='relative w-[417px] text-center mb-20'>
                <div className='text-5xl relative z-10'>на 10 первых тем</div>
                <div className='w-full bg-yelow h-8 absolute top-1/2'></div>
            </div>
            <AdvantageCard />
        </>
    );
};

export default Home;
