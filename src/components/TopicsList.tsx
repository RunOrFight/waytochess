import React, { FC } from "react";
import { Link } from "react-router-dom";

interface TopicsListProps {
    topics: any[];
}

const TopicsList: FC<TopicsListProps> = ({ topics }) => {
    return (
        <ul className='flex justify-start items-start gap-5 h-fit w-full flex-wrap overflow-y-auto'>
            {topics.map((topic, index) => (
                <li key={`topic_${index}`}>
                    <Link to={`/methodology/${topic.id}`}>
                        <div className='hover:bg-purple-100 transition-colors hover:text-white flex-col items-center font-semibold  cursor-pointer w-80 border  h-34 p-11  rounded-2xl shadow-lg'>
                            <span className='text-3xl'>{topic.name}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TopicsList;
