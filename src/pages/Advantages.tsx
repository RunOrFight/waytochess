import React from "react";
import { Link } from "react-router-dom";
import { AdvantageCard, H1, WhoYouIsLabel } from "../components";
import { Button } from "../components";

const Advantages = () => {
    return (
        <>
            <div className='mb-14 max-w-[717px]'>
                <H1>Шахматная платформа для обучения</H1>
            </div>

            <div className='mb-14'>
                <WhoYouIsLabel />
            </div>

            <div className='mb-9'>
                <AdvantageCard />
            </div>
            <div className='mb-12'>Some</div>
            <Link to='/register'>
                <Button>Перейти к регистрации</Button>
            </Link>
        </>
    );
};

export default Advantages;
