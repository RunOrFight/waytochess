import {Button, Controls, ShowButton, Window} from "./index";
import {Chessboard} from "react-chessboard";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {useFormik} from "formik";
import {addTopicLesson} from "../store/MethodologySlice";
import uuid from "react-uuid";
import {useAppDispatch} from "../store";
import {Topic} from "../types";

interface AddLessonWindowProps {
    setIsVisible: Dispatch<SetStateAction<boolean>>
    topic: Topic
}

const AddLessonWindow: FC<AddLessonWindowProps> = ({setIsVisible, topic}) => {
    const [positions, setPositions] = useState<number[]>([1]);

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            positions: [""]
        },
        onSubmit(values) {
            dispatch(addTopicLesson({topicId: topic.id, lesson: {...values, id: uuid()}}))
            setIsVisible(false)
            formik.resetForm()
        }
    });


    return <Window setIsVisible={setIsVisible}>
        <div className="flex flex-col gap-[20px] max-h-full">
            <div className='mb-8 flex justify-between'>
                <h2 className='text-3xl font-semibold'>
                    Добавление Урока
                </h2>
            </div>
            <form
                action='#'
                onSubmit={formik.handleSubmit}
                className=' min-h-[1px] flex flex-col max-h-full '>
                <div className='flex gap-12 min-h-[1px] max-h-full '>
                    <div className='w-1/2'>
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
                    <div className='w-1/2  min-h-[1px] max-h-full overflow-auto'>
                        <ShowButton
                            onClick={() => {
                                setPositions([
                                    ...positions,
                                    positions.length + 1
                                ]);
                            }}>
                            + Добавить позицию
                        </ShowButton>
                        <div className=' h-full'>
                            {positions.map((position, index) => {
                                const name = `positions[${index}]`;

                                return (
                                    <div className="flex flex-col gap-2" key={`position_${position}`}>
                                        <Controls.Input
                                            name={name}
                                            onChange={
                                                formik.handleChange
                                            }
                                        />
                                        <Chessboard/>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </form>

            <div className='max-w-fit mx-auto'>
                <Button type="submit">Сохранить</Button>
            </div>
        </div>
    </Window>
}

export default AddLessonWindow