import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import needManImage from "@/assets/images/need-man.png"
import needManBgImage from "@/assets/images/need-man-bg.png"
import {FaCheck} from "react-icons/fa";
import docIcon from "@/assets/icons/doc.svg"
import checkCircleIcon from "@/assets/icons/check-circle.svg"
import avatarsIcon from "@/assets/icons/avatars.svg"
import globeIcon from "@/assets/icons/globe.svg"
import circleIcon from "@/assets/icons/circle.svg"

const WhenYouNeedSection = () => {
    return (
        <div className="container mx-auto">
            <SectionTitle title={'Clarity Not Confusion'} subtitle={'When You Need'}/>
            <div className="flex gap-5 mt-9">
                <div className="w-full max-w-130.5 rounded-xl gradient-border">
                    <div className="bg-white rounded-xl p-8.5">
                        <div className="">
                            <h3 className="text-3xl leading-[130%] font-medium">Many Patients Leave a Scan Still Feeling Uncertain:</h3>

                            <Image src={needManImage} alt="need man" width={454} height={188} className="object-cover mt-4"/>

                            <div className="flex flex-col gap-5 mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                        <FaCheck/></div>
                                    <div className="text-lg font-medium">I don’t really understand my report.</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                        <FaCheck/></div>
                                    <div className="text-lg font-medium">The explanations from different doctors don’t match.</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                        <FaCheck/></div>
                                    <div className="text-lg font-medium">I’ve had a scan abroad – can I trust the result?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-xl p-8.5 bg-primary text-white relative">
                    <div className="max-w-146">
                        <h3 className="text-3xl leading-[130%] font-medium">Our Second Opinion Scan Service is Designed for People Who:</h3>
                        <div className="mt-10 flex flex-col gap-6">
                            <div className="flex gap-4.5 items-center">
                                <Image src={docIcon} alt="doc icon" width={36} height={36} className="object-contain"/>
                                <div className="text-[18px] ">Have already had a scan (Ultrasound, CT, MRI or X-ray) and want a clearer explanation</div>
                            </div>
                            <div className="flex gap-4.5 items-center">
                                <Image src={checkCircleIcon} alt="doc icon" width={36} height={36} className="object-contain"/>
                                <div className="text-[18px] ">Need reassurance before surgery, treatment or major decisions</div>
                            </div>
                            <div className="flex gap-4.5 items-center">
                                <Image src={avatarsIcon} alt="doc icon" width={36} height={36} className="object-contain"/>
                                <div className="text-[18px] ">Have been given conflicting advice and want a definitive expert view</div>
                            </div>
                            <div className="flex gap-4.5 items-center">
                                <Image src={globeIcon} alt="doc icon" width={36} height={36} className="object-contain"/>
                                <div className="text-[18px] ">Have had scans performed overseas or in different clinics and want a Harley Street specialist&#39;s review</div>
                            </div>
                            <div className="flex gap-4.5 items-center">
                                <Image src={circleIcon} alt="doc icon" width={36} height={36} className="object-contain"/>
                                <div className="text-[18px] ">Prefer not to wait weeks for another appointment just to &#34;go over the scan again&#34;</div>
                            </div>
                            
                        </div>
                    </div>
                    <Image src={needManBgImage} alt='need Man Bg Image' width={606} height={429} className="absolute right-0 bottom-0"/>
                </div>
            </div>
        </div>
    );
};

export default WhenYouNeedSection;