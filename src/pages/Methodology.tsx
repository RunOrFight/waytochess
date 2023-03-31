import { useFormik } from "formik";
import React, { useState } from "react";
import {
    Button,
    Controls,
    ShowButton,
    TopicsList,
    Window
} from "../components";
import { useTopics } from "../services";

const Methodology = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { addOne, getAll } = useTopics();
    const topics = getAll();
    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        onSubmit: (values) => {
            addOne(values);
            setIsVisible(false);
            formik.resetForm();
        }
    });

    return (
        <>
            <div className='flex h-full py-20 w-full gap-3 flex-col'>
                <div className='mb-3 text-right'>
                    <ShowButton onClick={() => setIsVisible(true)}>
                        + Добавить тему
                    </ShowButton>
                </div>
                <TopicsList topics={topics} />
            </div>
            {isVisible && (
                <Window setIsVisible={setIsVisible}>
                    <div className='mb-8 flex justify-between'>
                        <h2 className='text-3xl font-semibold'>
                            Добавление темы
                        </h2>
                    </div>
                    <form
                        action='#'
                        onSubmit={formik.handleSubmit}>
                        <div className='mb-6'>
                            <Controls.Label>Название темы</Controls.Label>
                            <Controls.Input
                                id='name'
                                name='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                        <div className='mb-6'>
                            <Controls.Label>Описание темы</Controls.Label>
                            <Controls.TextArea
                                id='description'
                                name='description'
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </div>
                        <div className='max-w-fit mx-auto'>
                            <Button type='submit'>Сохранить</Button>
                        </div>
                    </form>
                </Window>
            )}
        </>
    );
};

export default Methodology;
