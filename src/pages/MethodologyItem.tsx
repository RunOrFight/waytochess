import { useFormik } from "formik";
import React, { createContext, Dispatch, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Controls,
    H1,
    LessonsList,
    ShowButton,
    Window
} from "../components";
import { useTopics } from "../services";

export const SelectedPositionContext =
    //@ts-ignore
    createContext<[string, Dispatch<string>]>();

const MethodologyItem = () => {
    const [selectedPosition, setSelectedPosition] = useState("");
    const { getById, updateById } = useTopics();
    const { id } = useParams();
    const topic = getById(+id!);
    const [isVisible, setIsVisible] = useState(false);
    const [positions, setPositions] = useState<number[]>([1]);

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            positions: [""]
        },
        onSubmit(values) {
            updateById(+id!, {
                lessons: [
                    ...topic.lessons,
                    { ...values, id: topic.lessons.length + 1 }
                ]
            });
            setIsVisible(false);
            formik.resetForm();
        }
    });

    return (
        <SelectedPositionContext.Provider
            value={[selectedPosition, setSelectedPosition]}>
            <div className='flex h-full w-full py-20'>
                <LessonsList
                    topic={topic}
                    setIsVisible={setIsVisible}
                />
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
            {isVisible && (
                <Window setIsVisible={setIsVisible}>
                    <div className='mb-8 flex justify-between'>
                        <h2 className='text-3xl font-semibold'>
                            Добавление Урока
                        </h2>
                    </div>
                    <form
                        action='#'
                        onSubmit={formik.handleSubmit}
                        className='h-full min-h-[1px]'>
                        <div className='flex gap-12 h-full min-h-[1px]'>
                            <div className='w-1/2 h-full'>
                                <div className='mb-6'>
                                    <Controls.Label>
                                        Название Урока
                                    </Controls.Label>
                                    <Controls.Input
                                        name='name'
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />
                                </div>
                                <div className='mb-6'>
                                    <Controls.Label>
                                        Описание Урока
                                    </Controls.Label>
                                    <Controls.TextArea
                                        name='description'
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                    />
                                </div>
                            </div>
                            <div className='w-1/2 h-full min-h-[1px]'>
                                <ShowButton
                                    onClick={() => {
                                        setPositions([
                                            ...positions,
                                            positions.length + 1
                                        ]);
                                    }}>
                                    + Добавить позицию
                                </ShowButton>
                                <div className='overflow-auto h-full'>
                                    {positions.map((position, index) => {
                                        const name = `positions[${index}]`;
                                        return (
                                            <div
                                                className='mb-6'
                                                key={`position_${position}`}>
                                                <Controls.Label>
                                                    Позиция {position}
                                                </Controls.Label>
                                                <Controls.Input
                                                    name={name}
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='max-w-fit mx-auto'>
                            <Button type='submit'>Сохранить</Button>
                        </div>
                    </form>
                </Window>
            )}
        </SelectedPositionContext.Provider>
    );
};

export default MethodologyItem;
