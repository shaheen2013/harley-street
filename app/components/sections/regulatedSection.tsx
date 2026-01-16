import React from 'react';
import Image from "next/image";
import reg1Image from "@/assets/images/reg-1.png"
import reg2Image from "@/assets/images/reg-2.png"
import reg3Image from "@/assets/images/reg-3.png"
import reg4Image from "@/assets/images/reg-4.png"

const RegulatedSection = () => {
    return (
        <div className="relative overflow-hidden px-4 xl:px-0">
            <div className="clip-bottom-large-circle"></div>
            <div className="bg-white rounded-xl container px-6 py-3 shadow-primary mt-1 xl:mt-17.5 mb-20 relative z-10">
                <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-52">
                    <h2 className="w-full xl:max-w-44 text-[28px] xl:text-[32px] leading-[100%] font-medium">Registered
                        & regulated</h2>
                    <div className="flex flex-wrap xl:flex-nowrap items-center justify-between  grow gap-8 xl:gap-3">
                        <Image src={reg1Image} alt="reg1" className="object-contain"/>
                        <Image src={reg2Image} alt="reg2" className="object-contain"/>
                        <Image src={reg3Image} alt="reg3" className="object-contain"/>
                        <Image src={reg4Image} alt="reg4" className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegulatedSection;