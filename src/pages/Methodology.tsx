import React from "react";
import { H1, TopicsList } from "../components";

const Methodology = () => {
    const items = [
        { id: 1, caption: "Основы эндшпиля" },
        { id: 2, caption: "Типовые маты в один ход" },
        { id: 3, caption: "Типовые маты в один ход" },
        { id: 4, caption: "Основы тактики" },
        { id: 5, caption: "Основы стратегии" },
        { id: 6, caption: "Типовые маты в один ход" },
        { id: 1, caption: "Основы эндшпиля" },
        { id: 2, caption: "Типовые маты в один ход" },
        { id: 3, caption: "Типовые маты в один ход" },
        { id: 4, caption: "Основы тактики" },
        { id: 5, caption: "Основы стратегии" },
        { id: 6, caption: "Типовые маты в один ход" }
    ];
    return (
        <div className='flex h-full py-20 w-full'>
            <TopicsList />
            <div className='flex items-center justify-center w-full h-full'>
                <H1>Выберите один из уроков</H1>
            </div>
        </div>
    );
};

export default Methodology;
