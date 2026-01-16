'use client'
import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import needManImage from "@/assets/images/need-man.png"
import needManBgImage from "@/assets/images/need-man-bg.png"
import docIcon from "@/assets/icons/doc.svg"
import checkCircleIcon from "@/assets/icons/check-circle.svg"
import avatarsIcon from "@/assets/icons/avatars.svg"
import globeIcon from "@/assets/icons/globe.svg"
import circleIcon from "@/assets/icons/circle.svg"
import TextList from "@/components/ui/textList";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

const patientConcerns = [
    { text: "I don’t really understand my report." },
    { text: "The explanations from different doctors don’t match." },
    { text: "I’ve had a scan abroad – can I trust the result?" },
];

const serviceBenefits = [
    { icon: docIcon, text: "Have already had a scan (Ultrasound, CT, MRI or X-ray) and want a clearer explanation" },
    { icon: checkCircleIcon, text: "Need reassurance before surgery, treatment or major decisions" },
    { icon: avatarsIcon, text: "Have been given conflicting advice and want a definitive expert view" },
    { icon: globeIcon, text: "Have had scans performed overseas or in different clinics and want a Harley Street specialist's review" },
    { icon: circleIcon, text: "Prefer not to wait weeks for another appointment just to \"go over the scan again\"" },
];

const WhenYouNeedSection = () => {
    const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
    const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <div id="clarity" className="container">
            <SectionTitle title={'Clarity Not Confusion'} subtitle={'When You Need'}/>
            <div className="flex flex-col xl:flex-row gap-5 mt-6 xl:mt-9">
                <div
                    ref={leftRef}
                    className={`w-full max-w-130.5 rounded-xl gradient-border transition-all duration-1000 ease-out ${
                        leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                >
                    <div className="bg-white h-full rounded-xl p-4 xl:p-8.5">
                        <div>
                            <h3 className="text-xl xl:text-3xl leading-[130%] font-medium">Many Patients Leave a Scan Still Feeling Uncertain:</h3>
                            <Image src={needManImage} alt="need man" width={454} height={188} className="object-cover mt-4"/>
                            <div className="flex flex-col gap-2 xl:gap-5 mt-8">
                                {patientConcerns.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`transition-all duration-700 ${
                                            leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                        style={{ transitionDelay: `${300 + idx * 100}ms` }}
                                    >
                                        <TextList title={item.text}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={rightRef}
                    className={`w-full rounded-xl p-4 xl:p-8.5 bg-primary text-white relative transition-all duration-1000 ease-out ${
                        rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
                >
                    <div className="max-w-146">
                        <h3 className="text-xl xl:text-3xl leading-[130%] font-medium">Our Second Opinion Scan Service is Designed for People Who:</h3>
                        <div className="mt-10 flex flex-col gap-4 xl:gap-6">
                            {serviceBenefits.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-4.5 items-start transition-all duration-700 ${
                                        rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                    }`}
                                    style={{ transitionDelay: `${300 + idx * 100}ms` }}
                                >
                                    <Image src={item.icon} alt="icon" width={36} height={36} className="object-contain"/>
                                    <div className="text-base xl:text-lg">{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image src={needManBgImage} alt='need Man Bg Image' width={606} height={429} className="absolute right-0 bottom-0"/>
                </div>
            </div>
        </div>
    );
};

export default WhenYouNeedSection;
