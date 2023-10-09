import React, {Dispatch, FC, useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {arrowRight, chevronDown, chevronUp} from "../assets";
import {SelectedPositionContext} from "../pages/MethodologyItem";
import {Lesson} from "../types";
import ReturnBack from "./ReturnBack";
import ShowButton from "./ShowButton";
import {useAppSelector} from "../store";
import {methodologyTopicByIdSelector} from "../store/MethodologySlice";

interface LessonsListProps {
    setIsVisible: Dispatch<boolean>;
}

const LessonsList: FC<LessonsListProps> = ({setIsVisible}) => {
    const {id} = useParams();
    const topic = useAppSelector(methodologyTopicByIdSelector(id))

    return (
        <div className='h-full overflow-x-hidden overflow-y-auto '>
            <div className='mb-10'>
                <ReturnBack/>
            </div>
            <div className='mb-6'>
                <span className='text-3xl font-semibold'>{topic?.name}</span>
            </div>
            <div className='mb-3'>
                <ShowButton onClick={() => setIsVisible(true)}>
                    + Добавить урок
                </ShowButton>
            </div>
            <ul className='flex flex-col gap-8'>
                {topic?.lessons.map((lesson, index) => (
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
    lesson: Lesson;
}

const ListItem: FC<ListItemProps> = ({lesson}) => {
    const [isSubmenuOpened, setIsSubmenuOpened] = useState(false);
    const text = isSubmenuOpened ? "text-purple-100" : "text-black";
    return (
        <li>
            <div
                onClick={() => {
                    setIsSubmenuOpened(!isSubmenuOpened);
                }}
                className={`hover:text-purple-100 flex items-center text-xl cursor-pointer whitespace-nowrap ${text}`}>
                <span className='mr-2.5'>{lesson.name}</span>
                <div className='w-3'>
                    <img
                        className='w-full h-full'
                        src={isSubmenuOpened ? chevronUp : chevronDown}
                        alt='chevron_down'
                    />
                </div>
            </div>
            {isSubmenuOpened && <SubList positions={lesson.positions}/>}
        </li>
    );
};

interface SubListProps {
    positions: string[];
}

const SubList: FC<SubListProps> = ({positions}) => {
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
