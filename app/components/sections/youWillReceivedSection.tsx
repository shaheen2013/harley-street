import React from 'react';
import bgImage from "@/assets/images/bg-carve.png";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import arrowRightIcon from "@/assets/icons/right-arrow.svg";
import eyeIcon from "@/assets/icons/eye.svg";
import boxSearchIcon from "@/assets/icons/box-search.svg";
import textIcon from "@/assets/icons/text.svg";
import boxCheckIcon from "@/assets/icons/box-check.svg";
import healthIcon from "@/assets/icons/health.svg";
import bgTopImage from "@/assets/images/center-visual.png";
import bgBottomImage from "@/assets/images/bottom-visual.png";
import Link from "next/link";
import {FiChevronRight} from "react-icons/fi";

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
    return (
        <div
            className="bg-size-[100%_100%] bg-top bg-no-repeat  pt-42.5 pb-24 relative mb-20 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="absolute inset-0 flex-center">
                <Image src={bgTopImage} alt="bg Top Image" width={1144} height={747}/>
            </div>

            {/*<div className="absolute bottom-1 left-[10%] rotate-3 flex-center">
                <Image src={bgBottomImage} alt="bg bottom Image" width={1144} height={747}/>
            </div>*/}

            <div className="container mx-auto relative">
                <div className="flex justify-between items-center">
                    <SectionTitle title={'Second Opinion Request'} subtitle={'You Will Receive For Each '} />
                    <div className="flex gap-4">
                        <div className="cursor-pointer w-12 h-12 rounded-full bg-primary text-white flex-center text-xl rotate-180"><FiChevronRight /></div>
                        <div className="cursor-pointer w-12 h-12 rounded-full bg-gradient text-white flex-center text-xl"><FiChevronRight /></div>
                    </div>
                </div>

                <div className="flex flex-nowrap gap-5 mt-14">
                    {cardData.map((card, idx) => (
                        <div
                            key={idx}
                            className="w-76.25 shrink-0 rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] bg-white px-5 pb-5 pt-10.5"
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
            </div>
        </div>
    );
};

export default YouWillReceivedSection;
