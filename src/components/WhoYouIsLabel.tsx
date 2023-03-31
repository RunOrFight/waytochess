import React, { FC, PropsWithChildren, useContext } from "react";

const WhoYouIsLabel = () => {
    const role = "teacher";

    const config = {
        student: {
            bgColor: "bg-green-65",
            label: "Для учеников"
        },
        teacher: {
            bgColor: "bg-purple-30",
            label: "Для тренеров"
        }
    };

    return (
        <div
            className={`w-[179px] h-[40px] ${config[role].bgColor} text-center rounded-[5px] rotate-[-6.68deg]`}>
            <span className='font-semibold text-[18px] leading-[40px]'>
                {config[role].label}
            </span>
        </div>
    );
};

export default WhoYouIsLabel;
