import React, {Dispatch, FC, PropsWithChildren} from "react";
import {createPortal} from "react-dom";

interface WindowProps extends PropsWithChildren {
    setIsVisible: Dispatch<boolean>;
}


const Window: FC<WindowProps> = ({setIsVisible, children}) => {
    return createPortal(<>
        <div className='absolute w-screen h-screen bg-grey opacity-75 top-0 left-0 '></div>
        <div className='absolute w-screen h-screen top-0 left-0 flex justify-center items-center flex-col gap-5'>
            <div className='h-fit w-fit flex items-end flex-col gap-5 min-h-[1px] max-w-[80%] max-h-[80%]'>
                <div
                    className='rounded-md bg-white h-10 w-10 text-center cursor-pointer'
                    onClick={() => setIsVisible(false)}>
                    <span className='leading-10 '>X</span>
                </div>
                <div className='bg-white px-16 py-12 w-full h-full min-h-[1px] rounded-[30px]  overflow-hidden'>
                    {children}
                </div>
            </div>
        </div>
    </>, document.body)

};

export default Window;
