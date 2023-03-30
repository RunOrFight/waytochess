import React from "react";
import { Link } from "react-router-dom";
import { H1, WhoYouIsCard } from "../components";

const Welcome = () => {
    return (
        <>
            <div className='mb-14 max-w-[702px]'>
                <H1>Добро пожаловать на сайт WayToChess</H1>
            </div>
            <div className='font-normal text-center text-3xl mb-14 max-w-[503px]'>
                Выберите в какой роли вы хотите пользоваться ресурсом
            </div>
            <div className='flex gap-12 mb-14'>
                <WhoYouIsCard role='teacher' />
                <WhoYouIsCard role='student' />
            </div>
            <div className='max-w-[302px] text-center text-lg'>
                Есть аккаунт?{" "}
                <Link
                    className='text-blue'
                    to='/login'>
                    Войдите
                </Link>
                <br /> или <br />
                <Link
                    className='text-blue'
                    to='/register'>
                    Зарегистрируйтесь
                </Link>
            </div>
        </>
    );
};

export default Welcome;
