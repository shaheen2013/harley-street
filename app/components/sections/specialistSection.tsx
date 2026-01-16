'use client'
import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import Button from "@/components/ui/button";
import Image from "next/image";
import scan1Image from "@/assets/images/scan-1.png";
import scan2Image from "@/assets/images/scan-2.png";
import scan3Image from "@/assets/images/scan-3.png";
import scan4Image from "@/assets/images/scan-4.png";
import scan5Image from "@/assets/images/scan-5.png";
import scan6Image from "@/assets/images/scan-6.png";
import bgVisual from "@/assets/images/center-visual.png";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

const SpecialistSection = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div className="bg-blue-100 relative pt-14 xl:pt-58 pb-34.5 overflow-hidden">
            <div className="clip-top-large-circle"></div>
            <div className="hidden xl:block absolute left-1/2  top-16 -translate-x-1/2 ">
                <Image src={bgVisual} alt='bgVisual' width={681} height={425}/>
            </div>

            <div className="hidden xl:block absolute left-0 top-0">
                <div className="flex flex-col gap-6">
                    <Image src={scan1Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan2Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan3Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                </div>
            </div>

            <div className="hidden xl:block absolute right-0 top-0">
                <div className="flex flex-col gap-6">
                    <Image src={scan4Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan5Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan6Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                </div>
            </div>

            <div className="container relative">
                <div ref={ref} className={`flex flex-col text-center mt-14 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}>
                    <SectionTitle title={'Second Opinion on Your Scan?'} subtitle={'Ready for a Specialist'} subtitleSize={'text-[28px] xl:text-[48px]'}/>
                    <p className="text-sm xl:text-lg leading-[150%] mt-2 xl:mt-5 mb-7 xl:mb-11 max-w-164 mx-auto">Get an independent review from a
                        consultant radiologist and a clear explanation of your results.</p>
                    <div className="flex flex-col xl:flex-row justify-center gap-3">
                        <Button title={'Upload Your Scan for Review'} className="w-full xl:w-fit" />
                        <Button title={'Speak to Our Team First'} type={'outline'} className="w-full xl:w-fit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistSection;