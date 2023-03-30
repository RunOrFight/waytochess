import React, {
    FC,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    useState
} from "react";

interface InputFieldProps {
    label: string;
    errorMessage?: string;
}

const InputField: FC<InputFieldProps> = ({ label, errorMessage }) => {
    const [isError, setIsError] = useState(false);

    return (
        <div className=''>
            <div className='pl-[20px] mb-[10px]'>
                {isError ? (
                    <label className='text-red'>{errorMessage}</label>
                ) : (
                    <label className='text-grey text-[18px] leading-[21px] font-semibold'>
                        {label}
                    </label>
                )}
            </div>
            <input
                type='text'
                className='h-[50px] border border-grey rounded-[60px] px-[30px] text-[18px] leading-[21px] w-full'
            />
        </div>
    );
};

export default InputField;
