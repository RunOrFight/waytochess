import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { UserService } from "../services";

interface WhoYouIsCardProps {
    role: "student" | "teacher";
}

const WhoYouIsCard: FC<WhoYouIsCardProps> = ({ role }) => {
    const cofig = {
        teacher: {
            hover: "hover:bg-green-100",
            title: "Я тренер",
            subtitle: "Я хочу использовать методику для обучения своих учеников"
        },
        student: {
            hover: "hover:bg-purple-100",
            title: "Я ученик",
            subtitle:
                "Я хочу использовать методику для улучшения своих навыков игры"
        }
    };

    const [currentUser, setCurrentUser] = useContext(UserService.Context);
    return (
        <Link
            onClick={() => {
                setCurrentUser({ isAuth: currentUser.isAuth, role });
            }}
            to='/advantages'
            className={`w-96 hover:text-white h-72 bg-white shadow-md rounded-[60px] text-center pt-20 px-10 cursor-pointer ${cofig[role].hover}`}>
            <h2 className='font-semibold text-3xl mb-7'>{cofig[role].title}</h2>
            <p className='font-normal text-lg '>{cofig[role].subtitle}</p>
        </Link>
    );
};

export default WhoYouIsCard;
