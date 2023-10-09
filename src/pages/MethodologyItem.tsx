import React, {createContext, Dispatch, useState} from "react";
import {useParams} from "react-router-dom";
import {H1, LessonsList} from "../components";
import {useAppSelector} from "../store";
import {methodologyTopicByIdSelector} from "../store/MethodologySlice";
import AddLessonWindow from "../components/AddLessonWindow";

export const SelectedPositionContext =
    //@ts-ignore
    createContext<[string, Dispatch<string>]>();

const MethodologyItem = () => {
    const {id} = useParams();
    const topic = useAppSelector(methodologyTopicByIdSelector(id))

    const [selectedPosition, setSelectedPosition] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    return (
        <SelectedPositionContext.Provider
            value={[selectedPosition, setSelectedPosition]}>
            <div className='flex h-full w-full py-20'>
                <LessonsList setIsVisible={setIsVisible}/>
                <div className='flex items-center justify-center  h-full w-3/5'>
                    {selectedPosition ? (
                        <H1>Выбранна {selectedPosition}</H1>
                    ) : (
                        <H1>Выберите позицию</H1>
                    )}
                </div>
                <div className='w-1/5'>
                    <p>{topic?.description}</p>
                </div>
            </div>
            {isVisible && topic ? <AddLessonWindow setIsVisible={setIsVisible} topic={topic}/> : null}
        </SelectedPositionContext.Provider>
    );
};

export default MethodologyItem;
