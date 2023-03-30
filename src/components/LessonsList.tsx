import React, { Dispatch, FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { arrowRight, chevronDown, chevronUp } from "../assets";
import { SelectedPositionContext } from "../pages/MethodologyItem";
import ReturnBack from "./ReturnBack";

const LessonsList = () => {
    const lessons = [
        {
            id: 1,
            caption: "Урок 1. Правило квадрата",
            positions: ["Позиция 1", "Позиция 2", "Позиция 3"]
        },
        {
            id: 2,
            caption: "Урок 2. Принцип проведения пешки",
            positions: ["Позиция 1", "Позиция 2", "Позиция 3"]
        },
        {
            id: 3,
            caption: "Урок 3. Оппозиция",
            positions: ["Позиция 1", "Позиция 2", "Позиция 3"]
        },
        {
            id: 4,
            caption: "Урок 3. Оппозиция",
            positions: ["Позиция 1", "Позиция 2", "Позиция 3"]
        }
    ];

    return (
        <div className='h-full overflow-x-hidden overflow-y-auto '>
            <div className='mb-10'>
                <ReturnBack />
            </div>
            <div className='mb-6'>
                <span className='text-3xl font-semibold'>Основы эндшпиля</span>
            </div>
            <ul className='flex flex-col gap-8'>
                {lessons.map((lesson, index) => (
                    <ListItem
                        key={`lesson_${index}`}
                        lesson={lesson}
                    />
                ))}
            </ul>
        </div>
    );
};

export default LessonsList;

interface ListItemProps {
    lesson: { id: number; caption: string; positions: string[] };
}

const ListItem: FC<ListItemProps> = ({ lesson }) => {
    const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
    const text = isSubmenuOpened ? "text-purple-100" : "text-black";
    return (
        <li>
            <div
                onClick={() => {
                    setIsSubmenuOpened(!isSubmenuOpened);
                }}
                className={`hover:text-purple-100 flex items-center text-xl cursor-pointer whitespace-nowrap ${text}`}>
                <span className='mr-2.5'>{lesson.caption}</span>
                <div className='w-3'>
                    <img
                        className='w-full h-full'
                        src={isSubmenuOpened ? chevronUp : chevronDown}
                        alt='chevron_down'
                    />
                </div>
            </div>
            {isSubmenuOpened && <SubList positions={lesson.positions} />}
        </li>
    );
};

interface SubListProps {
    positions: string[];
}

const SubList: FC<SubListProps> = ({ positions }) => {
    const [selectedPosition, setSelectedPosition] = useContext(
        SelectedPositionContext
    );

    const itemColor = (id: string) =>
        selectedPosition === id ? "text-blue" : "text-black";

    return (
        <div className='flex flex-col text-lg pt-3 pl-3'>
            {positions?.map((position, index) => (
                <div
                    onClick={() => setSelectedPosition(position)}
                    key={`position_${index}`}
                    className={`mb-5 cursor-pointer hover:text-blue ${itemColor(
                        position
                    )}`}>
                    <span>{position}</span>
                </div>
            ))}
            <Link to={`homework`}>
                <div className='text-blue hover:opacity-75 flex items-center font-[500] mb-0 cursor-pointer'>
                    <span className='mr-2.5'>Перейти к домашнему заданию</span>
                    <div className='w-4'>
                        <img
                            className='w-full h-full'
                            src={arrowRight}
                            alt='chevron_down'
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};
