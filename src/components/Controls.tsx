import React, {
    FC,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    PropsWithChildren,
    TextareaHTMLAttributes
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
    return (
        <input
            {...props}
            className='h-12 border border-grey rounded-[60px] px-8 text-lg w-full'
        />
    );
};

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({ children, ...props }) => {
    return (
        <label
            {...props}
            className='text-grey text-lg font-semibold'>
            {children}
        </label>
    );
};

interface ErrorMessageProps extends PropsWithChildren {}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
    return <label className='text-red text-sm'>{children}</label>;
};

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: FC<TextAreaProps> = ({ ...props }) => {
    return (
        <textarea
            className='border border-grey rounded-[30px] px-6 py-5 text-lg w-full max-h-[400px]'
            {...props}></textarea>
    );
};

export default {
    Input,
    Label,
    ErrorMessage,
    TextArea
};
