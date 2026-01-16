'use client'
'use client';

import React, { useRef, useState } from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import arrowRightIcon from "@/assets/icons/right-arrow.svg";
import eyeIcon from "@/assets/icons/eye.svg";
import boxSearchIcon from "@/assets/icons/box-search.svg";
import textIcon from "@/assets/icons/text.svg";
import boxCheckIcon from "@/assets/icons/box-check.svg";
import healthIcon from "@/assets/icons/health.svg";
import Link from "next/link";
import {FiChevronRight} from "react-icons/fi";
import bgVisual from "@/assets/images/center-visual.png";
import {useScrollAnimation} from "@/hooks/useScrollAnimation";

const cardData = [
    {
        icon: eyeIcon,
        title: "Full Review of Scan images",
        description: "Complete analysis by a consultant radiologist on our dedicated medical imaging system (PACS)",
    },
    {
        icon: boxSearchIcon,
        title: "Independent Interpretation",
        description: "Expert findings separate from your original report, providing you with an unbiased second opinion",
    },
    {
        icon: textIcon,
        title: "Detailed Written Report",
        description: "Comprehensive documentation including key findings, assessment of abnormalities, and comparison with original diagnosis",
    },
    {
        icon: boxCheckIcon,
        title: "Plain-language Summary",
        description: "Clear explanations to help you understand the implications without medical jargon",
    },
    {
        icon: healthIcon,
        title: "Recommendations for next steps",
        description: "Professional guidance on further imaging, clinical review, or reassurance where appropriate",
    },
];

const YouWillReceivedSection = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const sliderRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const smoothScroll = (target: HTMLElement, distance: number, duration: number = 600) => {
        const start = target.scrollLeft;
        const startTime = performance.now();

        const easeInOutCubic = (t: number): number => {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };

        const scroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);

            target.scrollLeft = start + distance * easeProgress;

            if (progress < 1) {
                requestAnimationFrame(scroll);
            } else {
                setIsScrolling(false);
            }
        };

        requestAnimationFrame(scroll);
    };

    const scrollLeft = () => {
        if (sliderRef.current && !isScrolling) {
            setIsScrolling(true);
            const scrollAmount = sliderRef.current.offsetWidth > 768 ? 340 : 320;
            smoothScroll(sliderRef.current, -scrollAmount);
        }
    };

    const scrollRight = () => {
        if (sliderRef.current && !isScrolling) {
            setIsScrolling(true);
            const scrollAmount = sliderRef.current.offsetWidth > 768 ? 340 : 320;
            smoothScroll(sliderRef.current, scrollAmount);
        }
    };

    return (
        <div id="what-you-receive" className="bg-blue-100  relative pt-24 xl:pt-50 pb-1 overflow-hidden">
            <div className="clip-top-large-circle top-0"></div>
            <div className="hidden xl:block absolute left-1/2  top-16 -translate-x-1/2 ">
                <Image src={bgVisual} alt='bgVisual' width={681} height={425}/>
            </div>

            <div className="container relative">
                <div className="flex justify-between items-center">
                    <SectionTitle title={'Second Opinion Request'} subtitle={'You Will Receive For Each '} />
                    <div className="hidden xl:flex gap-4">
                        <button 
                            onClick={scrollLeft} 
                            disabled={isScrolling}
                            className="cursor-pointer w-12 h-12 rounded-full bg-primary text-white flex-center text-xl rotate-180 hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous"
                        >
                            <FiChevronRight />
                        </button>
                        <button 
                            onClick={scrollRight} 
                            disabled={isScrolling}
                            className="cursor-pointer w-12 h-12 rounded-full bg-gradient text-white flex-center text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next"
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>

                <div ref={ref} ref={sliderRef} className="flex flex-nowrap gap-5 mt-8 xl:mt-14 overflow-x-hidden scrollbar-hide">
                    {cardData.map((card, idx) => (
                        <div
                            key={idx}
                            className={`w-76.25 shrink-0 rounded-xl shadow-primary bg-white px-5 pb-5 pt-10.5 transition-transform duration-300 hover:scale-105 transition-all duration-700 ease-out ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                            }`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <Image src={card.icon} alt="icon" width={52} height={52} className="object-contain max-h-12.5" />
                            <h4 className="text-xl font-semibold my-5 line-clamp-1">{card.title}</h4>
                            <p className="font-medium line-clamp-3">{card.description}</p>
                            <Link href="" className="flex gap-1 items-center mt-10">
                                <div className="text-gradient font-semibold">Learn more</div>
                                <Image src={arrowRightIcon} alt="icon" width={20} height={20} className="object-contain" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="xl:hidden flex justify-center gap-4 mt-10">
                    <button 
                        onClick={scrollLeft} 
                        disabled={isScrolling}
                        className="cursor-pointer w-12 h-12 rounded-full bg-primary text-white flex-center text-xl rotate-180 hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous"
                    >
                        <FiChevronRight />
                    </button>
                    <button 
                        onClick={scrollRight} 
                        disabled={isScrolling}
                        className="cursor-pointer w-12 h-12 rounded-full bg-gradient text-white flex-center text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouWillReceivedSection;
