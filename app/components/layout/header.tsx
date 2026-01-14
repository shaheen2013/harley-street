import React from 'react';
import Link from "next/link";
import Button from "@/components/ui/button";
import logo from "@/assets/images/logo.png"
import Image from "next/image";
import {FaChevronDown} from "react-icons/fa";

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
    return (
        <div className='flex items-center justify-between py-2 container mx-auto'>
            <Link href={'/'}>
                <Image src={logo} width={145} height={72} alt="logo" className="object-contain"/>
            </Link>

            <nav className="flex items-center gap-7.5 ">
                {menuList.map((item, index) => (
                    item.isSubMenu ? (
                        <div key={index} className="relative group">
                            <button className="flex items-center gap-2 text-sm text-primary font-semibold focus:outline-none cursor-pointer">
                                <span>{item.title}</span>
                                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            <ul className="absolute left-0 w-48 bg-white shadow-lg rounded border border-primary z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform scale-95 group-hover:scale-100 transition-all duration-150 overflow-hidden">
                                {item.subMenu?.map((sub, sidx) => (
                                    <li key={sidx} className="px-4 py-2 hover:bg-gray-50">
                                        <Link href={sub.href} className="block text-sm text-primary font-semibold ">
                                            {sub.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <Link key={index} href={item.href} className="text-sm text-primary font-semibold ">
                            {item.title}
                        </Link>
                    )
                ))}
            </nav>

            <div className="flex gap-4">
                <Button title={'Book online'}/>
                <Button title={'Clinicians'} type={'outline'}/>
            </div>
        </div>
    );
};

export default Header;