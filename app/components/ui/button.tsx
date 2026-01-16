import React from 'react';

interface ButtonProps {
    title: string;
    type?: 'outline';
    large?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, type, large}) => {
    return (
        <>
            {
                type === 'outline' ?
                    <button type="button"
                            className={`gradient-border rounded-4xl ${large ? 'w-full' : 'w-fit'} cursor-pointer`}>
                        <div className="bg-white px-3 md:px-7 py-2 md:py-3 rounded-4xl text-nowrap">
                            <span className="text-gradient text-xs xl:text-sm leading-4.5 font-semibold">{title}</span>
                        </div>
                    </button> :
                    <button type="button"
                            className={`${large ? 'w-full' : 'w-fit'} text-nowrap text-white font-semibold text-xs xl:text-sm leading-4.5 bg-gradient px-3 md:px-7 py-3 md:py-4 rounded-4xl cursor-pointer`}>
                        {title}
                    </button>
            }
        </>
    );
};

export default Button;