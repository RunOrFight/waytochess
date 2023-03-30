import React, { createContext, Dispatch, useState } from "react";
import { H1, LessonsList } from "../components";

export const SelectedPositionContext =
    //@ts-ignore
    createContext<[string, Dispatch<string>]>();

const MethodologyItem = () => {
    const [selectedPosition, setSelectedPosition] = useState("");

    return (
        <SelectedPositionContext.Provider
            value={[selectedPosition, setSelectedPosition]}>
            <div className='flex h-full w-full py-20'>
                <LessonsList />
                <div className='flex items-center justify-center  h-full w-3/5'>
                    {selectedPosition ? (
                        <H1>Выбранна {selectedPosition}</H1>
                    ) : (
                        <H1>Выберите позицию</H1>
                    )}
                </div>
                <div className='w-1/5'>
                    <p>
                        Правило заключается в следующем: Если король слабейшей
                        стороны находится в квадрате пешки или при своём ходе в
                        него попадает, он задерживает и уничтожает пешку, если
                        нет — она проходит в ферзи. Единственное исключение —
                        когда пешка начинает ходить с начальной позиции, через
                        поле.
                    </p>
                </div>
            </div>
        </SelectedPositionContext.Provider>
    );
};

export default MethodologyItem;
