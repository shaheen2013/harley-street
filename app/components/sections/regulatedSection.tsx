'use client'
import React from 'react';
import Image from "next/image";
import reg1Image from "@/assets/images/reg-1.png"
import reg2Image from "@/assets/images/reg-2.png"
import reg3Image from "@/assets/images/reg-3.png"
import reg4Image from "@/assets/images/reg-4.png"
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

const RegulatedSection = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div className="relative overflow-hidden px-4 xl:px-0">
            <div className="clip-bottom-large-circle"></div>
            <div
                ref={ref}
                className={`bg-white rounded-xl container px-6 py-3 shadow-primary mt-1 xl:mt-17.5 mb-20 relative z-10 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
            >
                <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-52">
                    <h2 className={`w-full xl:max-w-44 text-[28px] xl:text-[32px] leading-[100%] font-medium transition-all duration-700 delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>Registered
                        & regulated</h2>
                    <div className="flex flex-wrap xl:flex-nowrap items-center justify-between  grow gap-8 xl:gap-3">
                        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <Image src={reg1Image} alt="reg1" className="object-contain"/>
                        </div>
                        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <Image src={reg2Image} alt="reg2" className="object-contain"/>
                        </div>
                        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <Image src={reg3Image} alt="reg3" className="object-contain"/>
                        </div>
                        <div className={`transition-all duration-700 delay-[600ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <Image src={reg4Image} alt="reg4" className="object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegulatedSection;