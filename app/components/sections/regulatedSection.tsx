import React from 'react';
import Image from "next/image";
import reg1Image from "@/assets/images/reg-1.png"
import reg2Image from "@/assets/images/reg-2.png"
import reg3Image from "@/assets/images/reg-3.png"
import reg4Image from "@/assets/images/reg-4.png"

const RegulatedSection = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="clip-bottom-large-circle"></div>
            <div className="bg-white rounded-xl container mx-auto px-6 py-3 shadow-primary mt-17.5 mb-20 relative z-10">
                <div className="flex items-center gap-x-52">
                    <h2 className="max-w-44 text-[32px] leading-[100%] font-medium">Registered & regulated</h2>
                    <div className="flex items-center justify-between  grow gap-3">
                        <Image src={reg1Image} alt="reg1" width={100} height={45} className="object-contain"/>
                        <Image src={reg2Image} alt="reg2" width={140} height={52} className="object-contain"/>
                        <Image src={reg3Image} alt="reg3" width={98} height={70} className="object-contain"/>
                        <Image src={reg4Image} alt="reg4" width={134} height={60} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegulatedSection;