'use client'
import React, {useState} from 'react';
import Link from "next/link";

interface SectionItem {
    title: string;
    href: string;
    isActive: boolean;
}

const initialSections: SectionItem[] = [
    { title: 'Clarity', href: '/clarity', isActive: true },
    { title: 'What You Receive', href: '/what-you-receive', isActive: false },
    { title: 'How It Works', href: '/how-it-works', isActive: false },
    { title: 'Specialist', href: '/specialist', isActive: false },
    { title: 'Pricing', href: '/pricing', isActive: false },
    { title: 'FAQs', href: '/fAQs', isActive: false },
];

const HeroSection = () => {
    const [sectionList, setSectionList] = useState<SectionItem[]>(initialSections);

    const handleClick = (href: string) => {
        setSectionList(prev =>
            prev.map(item => ({ ...item, isActive: item.href === href }))
        );
    };
    return (
        <div className='bg-gray-400 min-h-screen'>
            <div className="container mx-auto">
                <div className="w-fit mx-auto flex justify-center items-center gap-7.5 bg-white rounded-[50px] py-2 px-4">
                    {sectionList.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.href}`}
                            onClick={() => handleClick(item.href)}
                            className={`text-sm font-semibold ${item.isActive ? 'text-gradient' : 'text-primary '}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default HeroSection;