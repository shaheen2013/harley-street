import React from 'react';

interface ButtonProps {
    title: string;
    type?: 'outline';
    large?: boolean;
    bgColor?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({title, type, large, bgColor, className}) => {
    return (
        <>
            {
                type === 'outline' ?
                    <button type="button"
                            className={`gradient-border rounded-4xl ${large ? 'w-full' : 'w-fit'} cursor-pointer ${className || ''}`}>
                        <div className={`${bgColor ? bgColor : 'bg-blue-100'} px-3 md:px-7 py-2 md:py-3 rounded-4xl text-nowrap`}>
                            <span className="text-gradient text-xs xl:text-sm leading-4.5 font-semibold">{title}</span>
                        </div>
                    </button> :
                    <button type="button"
                            className={`${large ? 'w-full' : 'w-fit'} text-nowrap text-white font-semibold text-xs xl:text-sm leading-4.5 bg-gradient px-4 md:px-7 py-2.5 md:py-4 rounded-4xl cursor-pointer ${className || ''}`}>
                        {title}
                    </button>
            }
        </>
    );
};

export default Button;