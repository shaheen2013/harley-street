import React from 'react';
import bgImage from "@/assets/images/bg-ready.png";

const SpecialistSection = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-top pt-20 pb-24 relative h-[500px]"
             style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div>
                Specialist Section
            </div>
        </div>
    );
};

export default SpecialistSection;