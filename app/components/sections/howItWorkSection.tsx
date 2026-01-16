import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import {AiOutlineFileText} from "react-icons/ai";
import {LuFileSearch} from "react-icons/lu";
import {MdOutlineFileUpload} from "react-icons/md";
import Image from "next/image";
import uploadBg from "@/assets/images/upload-scan.png";
import Link from "next/link";
import TextList from "@/components/ui/textList";
import Button from "@/components/ui/button";

const demoData = [
    {
        title: "DICOM files accepted",
        subTitle: "MRI, CT, X-ray, Ultrasound, and Mammogram formats"
    },
    {
        title: "NHS IEP integration",
        subTitle: "Direct retrieval from UK NHS hospitals"
    },
    {
        title: "Bank-level encryption",
        subTitle: "Your medical data is always secure and confidential"
    }
]

const HowItWorkSection = () => {
    return (
        <div id="how-it-works" className="relative overflow-hidden pt-50">
            <div className="clip-bottom-large-circle"></div>
            <div className="container mx-auto">
                <SectionTitle title={'How It Works'} subtitle={'Step by Step'}/>
                <div className="grid grid-cols-3 gap-4 mt-14">
                    <div className="flex gap-9 rounded-xl bg-[#EDF7FA] p-8.5 border border-[#31E4C4] border-b-0 rounded-bl-none rounded-br-none relative">
                        <div className="shrink-0 w-15 h-15 rounded-full text-white flex-center bg-green-700 p-3 text-3xl">
                            <MdOutlineFileUpload />
                        </div>
                        <div>
                            <div className="text-xl font-semibold line-clamp-1">Upload Your Scans</div>
                            <p className="mt-5 font-medium line-clamp-3 leading-4.5">Securely upload your medical imaging files or let us retrieve them from the NHS IEP</p>
                        </div>
                        <div className="absolute w-full h-1.5 bg-[#EDF7FA] -bottom-1 left-0"></div>
                    </div>

                    <div className="flex gap-9 rounded-xl bg-white p-8.5 shadow-primary mb-5">
                        <div className="shrink-0 w-15 h-15 rounded-full text-white flex-center bg-green-700 p-3 text-3xl">
                            <AiOutlineFileText />
                        </div>
                        <div>
                            <div className="text-xl font-semibold line-clamp-1">Share Your Concerns</div>
                            <p className="mt-5 font-medium line-clamp-3 leading-4.5">Tell us about your symptoms and questions so we can provide targeted insights</p>
                        </div>
                    </div>

                    <div className="flex gap-9 rounded-xl bg-white p-8.5 shadow-primary mb-5">
                        <div className="shrink-0 w-15 h-15 rounded-full text-white flex-center bg-green-700 p-3 text-3xl">
                            <LuFileSearch />
                        </div>
                        <div>
                            <div className="text-xl font-semibold line-clamp-1">Expert Review</div>
                            <p className="mt-5 font-medium line-clamp-3 leading-4.5">Consultant radiologist performs comprehensive analysis within 24-48 hours</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-10 p-12 border bg-[#EDF7FA] border-[#31E4C4] rounded-xl rounded-tl-none">
                    <div className="max-w-137 w-full">
                        <h3 className="text-[42px] font-medium leading-[120%]">Secure upload or NHS retrieval</h3>
                        <p className="mt-5.5 font-medium leading-5.5">
                            Choose how you&#39;d like to share your scans with us. Upload directly through our GDPR-compliant portal, or authorize us to retrieve your images from the NHS Image Exchange Portal (IEP). Either way, your data is encrypted and handled with the highest security standards.
                        </p>
                        <Link href="" className="mt-3.5 mb-7 flex text-gradient font-medium leading-5.5">Secure Link</Link>
                        <div className="flex flex-col gap-5 mb-9">
                            { demoData.map((item, idx) => (
                                <TextList key={idx} title={item.title} subTitle={item.subTitle} />
                            ))}
                        </div>

                        <Button title={'Start Upload Process'}/>
                    </div>
                    <div className="max-w-117 w-full">
                        <Image src={uploadBg} alt="upload bg" width={468} height={458} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorkSection;