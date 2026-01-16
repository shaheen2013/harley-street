import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle: string;
    subtitleSize?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, subtitle, subtitleSize}) => {
    return (
        <div>
            <span className={`${subtitleSize ? subtitleSize : 'text-[20px] xl:text-[36px]'} leading-[120%]`}>{subtitle}</span> <br/>
            <span className="text-[28px] xl:text-[48px] leading-[120%] font-semibold text-gradient">{title}</span>
        </div>
    );
};

export default SectionTitle;
