'use client'
import React, {useState} from 'react';
import Link from "next/link";
import {FaCheck} from "react-icons/fa";
import Button from "@/components/ui/button";
import Image from "next/image";
import googleImage from "@/assets/images/google.png"
import starGroupImage from "@/assets/images/group-star.png"
import heroReviewImage from "@/assets/images/hero-review.png"
import heroReviewTopImage from "@/assets/images/hero-review-top-back.png"
import heroReviewBackImage from "@/assets/images/hero-review-bottom-back.png"
import leftVisual from "@/assets/images/left-visual.png"
import rightVisual from "@/assets/images/right-visual.png"

interface SectionItem {
    title: string;
    href: string;
    isActive: boolean;
}

const initialSections: SectionItem[] = [
    {title: 'Clarity', href: 'clarity', isActive: true},
    {title: 'What You Receive', href: 'what-you-receive', isActive: false},
    {title: 'How It Works', href: 'how-it-works', isActive: false},
    {title: 'Specialist', href: 'specialist', isActive: false},
    {title: 'Pricing', href: 'pricing', isActive: false},
    {title: 'FAQs', href: 'fAQs', isActive: false},
];


const HeroSection = () => {
    const [sectionList, setSectionList] = useState<SectionItem[]>(initialSections);

    const handleClick = (href: string) => {
        setSectionList(prev =>
            prev.map(item => ({...item, isActive: item.href === href}))
        );
        const element = document.getElementById(href);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <div className="bg-blue-100 pt-20 pb-12 relative overflow-hidden ">
            <div className="absolute left-0 top-0">
                <Image src={leftVisual} alt="leftVisul" width={776} height={484} className="w-full"/>
            </div>
            <div className="hidden xl:block absolute right-0 top-0">
                <Image src={rightVisual} alt="leftVisul" width={776} height={484} className="w-full"/>
            </div>
            <div className="container relative">
                <div
                    className="w-fit mx-auto flex-center gap-7.5 bg-white rounded-[50px] py-2 px-4 mb-4 xl:mb-16">
                    {sectionList.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(item.href)}
                            className={`cursor-pointer text-xs xl:text-sm font-semibold text-nowrap ${item.isActive ? 'text-gradient' : ''}`}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div className="max-w-130.5">
                        <h1 className="text-h1">
                            <span className="text-gradient">Specialist Second </span>
                            <span className="text-gradient">Opinion </span>
                            <span className="text-[30px] xl:text-[48px] leading-[120%] font-normal">on Your Medical Scans</span>
                        </h1>
                        <p className="text-base xl:text-xl font-normal mt-2.5">
                            Get your <span
                            className="font-medium">Ultrasound, CT, MRI, Mammogram or X-ray</span> re-reviewed by
                            leading Harley Street Consultant Radiologists confidentially, securely, and without
                        </p>
                        <div className="mt-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-5 xl:w-6 h-5 xl:h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-sm xl:text-lg font-medium">Independent, unbiased second opinion</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-5 xl:w-6 h-5 xl:h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-sm xl:text-lg font-medium">Clear, easy-to-understand results</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-5 xl:w-6 h-5 xl:h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-sm xl:text-lg font-medium">Fast turnaround: typically within 24–48 hours</div>
                            </div>

                        </div>

                        <div className="mt-10 flex items-center gap-2 xl:gap-3">
                            <Button title={'Upload Your Scan for Review'}/>
                            <Button title={'Learn How It Works'} type={'outline'}/>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center bg-primary rounded-xl z-20 mt-20 xl:mt-0">
                        <div className="absolute -top-9 left-auto z-10">
                            <Image src={heroReviewTopImage} width={437} height={265} alt="google Image" className="w-109.25 h-66.25"/>
                        </div>
                        <div className="absolute -bottom-15.75 xl:-bottom-15.5 left-auto z-10">
                            <Image src={heroReviewBackImage} width={437} height={265} alt="google Image" className="w-109.25 h-66.25"/>
                        </div>
                        <div className="absolute -top-6 xl:-top-11 left-5 z-30 animate-shrink-bounce">
                            <Image src={googleImage} width={244} height={98} alt="google Image" className="w-33 h-13.5 xl:w-61 xl:h-24.5 object-contain"/>
                        </div>
                        <div className="absolute -bottom-6 xl:-bottom-11 right-5 z-30 animate-shrink-bounce" style={{ animationDelay: '0.5s' }}>
                            <Image src={starGroupImage} width={244} height={98} alt="google Image" className="w-33 h-13.5 xl:w-61 xl:h-24.5 object-contain"/>
                        </div>
                        <div className="absolute top-0 left-0 z-20 w-full h-8 xl:h-24 rounded-xl bg-[linear-gradient(90deg,#135269_-17.04%,rgba(19,82,105,0)_100%)]"></div>
                        <div className="absolute bottom-0 left-0 z-20 w-full h-8 xl:h-24 rounded-xl bg-[linear-gradient(90deg,#135269_-17.04%,rgba(19,82,105,0)_100%)]"></div>
                        <div className="space-y-4 max-h-58 xl:max-h-124 overflow-hidden flex items-center flex-col justify-center bg-primary w-full relative z-10 rounded-xl">
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image" className="w-56 h-37 xl:w-103.5 xl:h-68.5"/>
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image" className="w-56 h-37 xl:w-103.5 xl:h-68.5"/>
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image" className="w-56 h-37 xl:w-103.5 xl:h-68.5"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;