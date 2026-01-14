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
import heroBg from "@/assets/images/bg-hero.png"

interface SectionItem {
    title: string;
    href: string;
    isActive: boolean;
}

const initialSections: SectionItem[] = [
    {title: 'Clarity', href: '/clarity', isActive: true},
    {title: 'What You Receive', href: '/what-you-receive', isActive: false},
    {title: 'How It Works', href: '/how-it-works', isActive: false},
    {title: 'Specialist', href: '/specialist', isActive: false},
    {title: 'Pricing', href: '/pricing', isActive: false},
    {title: 'FAQs', href: '/fAQs', isActive: false},
];

const HeroSection = () => {
    const [sectionList, setSectionList] = useState<SectionItem[]>(initialSections);

    const handleClick = (href: string) => {
        setSectionList(prev =>
            prev.map(item => ({...item, isActive: item.href === href}))
        );
    };
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url(${heroBg.src})` }}
        >
            <div className="container mx-auto">
                {/*SECTION LIST*/}
                <div
                    className="w-fit mx-auto flex justify-center items-center gap-7.5 bg-white rounded-[50px] py-2 px-4 mb-16">
                    {sectionList.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.href}`}
                            onClick={() => handleClick(item.href)}
                            className={`text-sm font-semibold ${item.isActive ? 'text-gradient' : ''}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className="grid grid-cols-2">
                    <div className="max-w-[522px]">
                        <h1 className="text-h1">
                            <span className="text-gradient">Specialist Second </span>
                            <span className="text-gradient">Opinion </span>
                            <span className="text-[48px] font-normal">on Your Medical Scans</span>
                        </h1>
                        <p className="text-xl font-normal mt-2.5">
                            Get your <span
                            className="font-medium">Ultrasound, CT, MRI, Mammogram or X-ray</span> re-reviewed by
                            leading Harley Street Consultant Radiologists confidentially, securely, and without
                        </p>
                        <div className="mt-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-lg font-medium">Independent, unbiased second opinion</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-lg font-medium">Clear, easy-to-understand results</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-6 h-6 rounded-full text-white bg-gradient flex items-center justify-center p-1.5">
                                    <FaCheck/></div>
                                <div className="text-lg font-medium">Fast turnaround: typically within 24–48 hours</div>
                            </div>

                        </div>

                        <div className="mt-10 flex items-center gap-3">
                            <Button title={'Upload Your Scan for Review'}/>
                            <Button title={'Learn How It Works'} type={'outline'}/>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center bg-primary rounded-xl z-20">
                        <div className="absolute -top-10 left-auto z-10">
                            <Image src={heroReviewTopImage} width={437} height={265} alt="google Image"/>
                        </div>
                        <div className="absolute -bottom-19.5 left-auto z-10">
                            <Image src={heroReviewBackImage} width={437} height={265} alt="google Image"/>
                        </div>
                        <div className="absolute -top-11 left-5 z-30">
                            <Image src={googleImage} width={244} height={98} alt="google Image"/>
                        </div>
                        <div className="absolute -bottom-11 right-5 z-30">
                            <Image src={starGroupImage} width={244} height={98} alt="google Image"/>
                        </div>
                        <div className="absolute top-0 left-0 z-20 w-full h-24 rounded-xl bg-[linear-gradient(90deg,#135269_-17.04%,rgba(19,82,105,0)_100%)]"></div>
                        <div className="absolute bottom-0 left-0 z-20 w-full h-24 rounded-xl bg-[linear-gradient(90deg,#135269_-17.04%,rgba(19,82,105,0)_100%)]"></div>
                        <div className="space-y-4 max-h-[496px] overflow-hidden flex items-center flex-col justify-center bg-primary w-full relative z-10 rounded-xl">
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image"/>
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image"/>
                            <Image src={heroReviewImage} width={414} height={274} alt="star Group Image"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;