import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
    return (
        <div>
            <span className="text-[36px] leading-[120%]">{subtitle}</span> <br/>
            <span className="text-[48px] leading-[120%] font-semibold text-gradient">{title}</span>
        </div>
    );
};

export default SectionTitle;
