'use client'
import React, {useState} from 'react';
import Link from "next/link";
import Button from "@/components/ui/button";
import logo from "@/assets/images/logo.svg"
import Image from "next/image";
import {FaChevronDown, FaTimes} from "react-icons/fa";
import {CiMenuBurger} from "react-icons/ci";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {IoMdClose} from "react-icons/io";

interface SubMenuItem {
    title: string;
    href: string;
}

interface MenuItem {
    title: string;
    href: string;
    isSubMenu: boolean;
    subMenu?: SubMenuItem[];
}

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const menuList: MenuItem[] = [
    {
        title: 'Female',
        href: '/',
        isSubMenu: true,
        subMenu: [
            { title: 'Female 1', href: '/' },
            { title: 'Female 2', href: '/' },
            { title: 'Female 3', href: '/' },
        ]
    },
    {
        title: 'Male',
        href: '/',
        isSubMenu: true,
        subMenu: [
            { title: 'Male 1', href: '/' },
            { title: 'Male 2', href: '/' },
            { title: 'Male 3', href: '/' },
        ]
    },
    {
        title: 'Children',
        href: '/',
        isSubMenu: false
    },
    {
        title: 'Muscle & joints',
        href: '/',
        isSubMenu: true,
        subMenu: [
            { title: 'Muscle & joints 1', href: '/' },
            { title: 'Muscle & joints 2', href: '/' },
            { title: 'Muscle & joints 3', href: '/' },
        ]
    },
    {
        title: 'Articles',
        href: '/',
        isSubMenu: false
    },
    {
        title: 'Our clinic',
        href: '/',
        isSubMenu: true,
        subMenu: [
            { title: 'Our clinic 1', href: '/' },
            { title: 'Our clinic 2', href: '/' },
            { title: 'Our clinic 3', href: '/' },
        ]
    },
    {
        title: 'Get in Touch',
        href: '/',
        isSubMenu: false
    }
];
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);

    const toggleSubMenu = (index: number) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <div className="absolute top-0 w-full z-50">
            <div className='flex items-center justify-between py-2 container relative z-50 bg-transparent'>
                <Link href={'/'} className="w-22.5 h-11 xl:w-36.25 xl:h-18">
                    <Image src={logo} width={145} height={72} alt="logo" className="object-contain"/>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-7.5 ">
                    {menuList.map((item, index) => (
                        item.isSubMenu ? (
                            <div key={index} className="relative group">
                                <button className="flex items-center gap-2 text-sm font-semibold focus:outline-none cursor-pointer">
                                    <span>{item.title}</span>
                                    <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                                </button>

                                <ul className="absolute left-0 w-48 bg-white shadow-lg rounded border border-primary z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform scale-95 group-hover:scale-100 transition-all duration-150 overflow-hidden">
                                    {item.subMenu?.map((sub, sidx) => (
                                        <li key={sidx} className="px-4 py-2 hover:bg-gray-50">
                                            <Link href={sub.href} className="block text-sm font-semibold ">
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <Link key={index} href={item.href} className="text-sm font-semibold ">
                                {item.title}
                            </Link>
                        )
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button title={'Book online'}/>
                    <div className="hidden xl:flex"><Button title={'Clinicians'} type={'outline'}/></div>
                    <button
                        className="xl:hidden text-3xl cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoMdClose /> : <CiMenuBurger />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={cn(
                "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform xl:hidden",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
                    <nav className="flex flex-col gap-4">
                        {menuList.map((item, index) => (
                            <div key={index} className="border-b border-gray-100">
                                {item.isSubMenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubMenu(index)}
                                            className="flex items-center justify-between w-full font-semibold"
                                        >
                                            <span>{item.title}</span>
                                            <FaChevronDown className={cn(
                                                "text-sm transition-transform duration-200",
                                                activeSubMenu === index && "rotate-180"
                                            )} />
                                        </button>
                                        <ul className={cn(
                                            "mt-2 space-y-3 overflow-hidden transition-all duration-300",
                                            activeSubMenu === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                        )}>
                                            {item.subMenu?.map((sub, sidx) => (
                                                <li key={sidx} className="pl-4">
                                                    <Link
                                                        href={sub.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-base  font-medium"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-semibold block"
                                    >
                                        {item.title}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-8 flex flex-col gap-4">
                        <Button title={'Clinicians'} type={'outline'} className="w-full text-center"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;