import React from 'react';
interface ButtonProps {
    title: string;
    type?: 'outline';
}
const Button = ({title,type}:ButtonProps) => {
    return (
        <>
            {
                type === 'outline' ?
                    <button type="button" className="gradient-border rounded-4xl w-fit cursor-pointer">
                        <div className="gradient-border-inner px-7 py-3 rounded-4xl">
                            <span className="text-gradient text-sm leading-4.5 font-semibold">Content here</span>
                        </div>
                    </button> :
                    <button type="button" className="w-fit text-white font-semibold text-sm leading-4.5 bg-gradient px-7 py-4 rounded-4xl cursor-pointer">
                        {title}
                    </button>
            }
        </>
    );
};

export default Button;