import React from "react";
import { Link } from "react-router-dom";

const TopicsList = () => {
    const topics = [
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
        <ul className='flex flex-col gap-[30px] h-full w-1/2  overflow-x-hidden overflow-y-auto '>
            {topics.map((topic, index) => (
                <Link to={`/methodology/${topic.id}`}>
                    <li className='hover:underline flex items-center font-semibold text-[30px] leading-[35px] cursor-pointer whitespace-nowrap'>
                        <span className='mr-2.5'>{topic.caption}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default TopicsList;
