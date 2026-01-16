import React from 'react';
import {FaCheck} from "react-icons/fa";

interface TextListProps {
    title: string;
    subTitle?: string;
}
const TextList: React.FC<TextListProps> = ({title,subTitle}) => {
    return (
        <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                <FaCheck/>
            </div>
            <div>
                <div className="text-base xl:text-lg font-medium">{title}</div>
                {subTitle && <div className="font-medium leading-6.5 text-[#577B89]">{subTitle}</div>}
            </div>
        </div>
    );
};

export default TextList;