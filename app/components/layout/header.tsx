import React from 'react';
import Link from "next/link";
import Button from "@/components/ui/button";
import Image from "next/dist/client/legacy/image";
import logo from "@/assets/images/logo.png"

const Header = () => {
    return (
        <div className='flex items-center justify-between py-2 container mx-auto'>
            <Link href={'/'}>
                <Image src={logo} width={150} height={50} className="cursor-pointer"/>
            </Link>
            <div className="flex gap-4">
                <Button title={'Book online'}/>
                <Button title={'Clinicians'} type={'outline'}/>
            </div>
        </div>
    );
};

export default Header;