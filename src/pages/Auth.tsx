import React, { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Controls, H1, Logo, WhoYouIsLabel } from "../components";

interface AuthPageProps {
    type: "register" | "login";
}

const registerPageConfig = {
    title: "Регистрация",
    buttonLabel: "Зарегистрироваться"
};

const loginPageConfig = {
    title: "Вход в аккаунт",
    buttonLabel: "Войти в аккаунт"
};

const Auth: FC<AuthPageProps> = ({ type }) => {
    const config = type === "login" ? loginPageConfig : registerPageConfig;

    const redirect = useNavigate();
    return (
        <>
            <div className='mb-4'>
                <H1>{config.title}</H1>
            </div>
            <div className='mb-20'>
                <WhoYouIsLabel />
            </div>

            <form
                action='#'
                className='w-[450px] flex flex-col gap-[24px] mb-[35px]'>
                <Controls.Label>Login</Controls.Label>
                <Controls.Input />

                <Controls.Label>Password</Controls.Label>
                <Controls.Input />

                {type === "login" ? (
                    <div className='flex justify-between text-[16px] leading-[19px] pt-[11px]'>
                        <div className='flex gap-[9px] '>
                            <input type='checkbox' />
                            <label className='font-[500]'>Запомнить меня</label>
                        </div>
                        <div>
                            <Link
                                className='underline'
                                to='/forgotPas'>
                                Забыли пароль?
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <Controls.Label>Login again</Controls.Label>
                        <Controls.Input />
                    </>
                )}
            </form>

            <div className='mb-[33px]'>
                <Button
                    onClick={() => {
                        redirect("/home");
                    }}>
                    {config.buttonLabel}
                </Button>
            </div>

            <div className='max-w-[410px]'>
                <p className='text-center text-[12px] leading-[16px]'>
                    Нажимая на кнопку «{config.buttonLabel}», вы соглашаетесь с{" "}
                    <Link
                        className='font-semibold underline'
                        to='/policy'>
                        политикой конфиденциальности
                    </Link>{" "}
                    и{" "}
                    <Link
                        className='font-semibold underline'
                        to='/policy'>
                        обработкой персональных данных
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Auth;
