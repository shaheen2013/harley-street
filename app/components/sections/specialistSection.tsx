import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import Button from "@/components/ui/button";
import Image from "next/image";
import bgImage from "@/assets/images/bg-ready.png";
import scan1Image from "@/assets/images/scan-1.png";
import scan2Image from "@/assets/images/scan-2.png";
import scan3Image from "@/assets/images/scan-3.png";
import scan4Image from "@/assets/images/scan-4.png";
import scan5Image from "@/assets/images/scan-5.png";
import scan6Image from "@/assets/images/scan-6.png";
import bgVisual from "@/assets/images/center-visual.png";

const SpecialistSection = () => {
    return (
        <div className="bg-blue-100 relative pt-58 pb-34.5 overflow-hidden">
            <div className="clip-top-large-circle"></div>
            <div className="absolute left-1/2  top-16 -translate-x-1/2 ">
                <Image src={bgVisual} alt='bgVisual' width={681} height={425}/>
            </div>

            <div className="absolute left-0 top-0">
                <div className="flex flex-col gap-6">
                    <Image src={scan1Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan2Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                    <Image src={scan3Image} alt="scan Image" width={180} height={280}
                           className="w-45 h-70 object-cover"/>
                </div>
            </div>

            <div className="absolute right-0 top-0">
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
                <div className="flex flex-col text-center mt-14">
                    <SectionTitle title={'Second Opinion on Your Scan?'} subtitle={'Ready for a Specialist'} subtitleSize={'text-[48px]'}/>
                    <p className="text-lg leading-[150%] mt-5 mb-11 max-w-164 mx-auto">Get an independent review from a
                        consultant radiologist and a clear explanation of your results.</p>
                    <div className="flex justify-center gap-3">
                        <Button title={'Upload Your Scan for Review'}/>
                        <Button title={'Speak to Our Team First'} type={'outline'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistSection;