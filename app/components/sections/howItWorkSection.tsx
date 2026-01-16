'use client';

import React, { useState } from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import {AiOutlineFileText} from "react-icons/ai";
import {LuFileSearch} from "react-icons/lu";
import {MdOutlineFileUpload} from "react-icons/md";
import Link from "next/link";
import TextList from "@/components/ui/textList";
import Button from "@/components/ui/button";
import {GoDatabase} from "react-icons/go";
import {FiCheckCircle} from "react-icons/fi";
import {FaRegFileLines} from "react-icons/fa6";
import {HiOutlineDocumentText} from "react-icons/hi";
import {BsClipboardCheck} from "react-icons/bs";
import bgBottomVisual from "@/assets/images/bottom-visual-new.png";
import Image from "next/image";

const tabsData = [
    {
        id: 1,
        icon: MdOutlineFileUpload,
        title: "Upload Your Scans",
        description: "Securely upload your medical imaging files or let us retrieve them from the NHS IEP"
    },
    {
        id: 2,
        icon: AiOutlineFileText,
        title: "Share Your Concerns",
        description: "Tell us about your symptoms and questions so we can provide targeted insights"
    },
    {
        id: 3,
        icon: LuFileSearch,
        title: "Expert Review",
        description: "Consultant radiologist performs comprehensive analysis within 24-48 hours"
    }
];

const HowItWorkSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    const handleTabClick = (tabId: number) => {
        console.log('Tab clicked:', tabId);
        setActiveTab(tabId);
    };
    
    return (
        <div id="how-it-works" className="relative overflow-hidden pt-24 xl:pt-50">
            <div className="clip-bottom-large-circle"></div>
            <div className="hidden xl:block absolute left-1/2 -top-[30%] -translate-x-1/2 z-10 -rotate-20">
                <Image src={bgBottomVisual} alt='bgVisual' width={681} height={425}/>
            </div>

            <div className="container">
                <SectionTitle title={'How It Works'} subtitle={'Step by Step'}/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 mb-0">
                    {tabsData.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <div
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleTabClick(tab.id);
                                    }
                                }}
                                className={`min-w-76.25 flex gap-9 rounded-xl p-8.5 cursor-pointer transition-all relative
                                    ${isActive 
                                        ? 'bg-[#EDF7FA] border border-[#31E4C4] border-b-0 rounded-b-none z-20' 
                                        : 'bg-white shadow-primary mb-4 hover:shadow-lg z-10'
                                    }`}
                            >
                                <div className="shrink-0 w-15 h-15 rounded-full text-white flex-center bg-green-700 p-3 text-3xl">
                                    <Icon />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold line-clamp-1">{tab.title}</div>
                                    <p className="mt-5 font-medium line-clamp-3 leading-4.5">{tab.description}</p>
                                </div>
                                {isActive && activeTab !== 3 && (
                                    <div className="absolute w-4 h-4 bg-white border-l border-b border-[#31E4C4] -bottom-px -right-4 rounded-bl-lg hidden md:block"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col xl:flex-row flex-col xl:flex-row items-center justify-between gap-5 xl:gap-10 p-4 xl:p-6 xl:p-12 border bg-[#EDF7FA] border-[#31E4C4] rounded-xl rounded-tl-none -mt-px">
                    {activeTab === 1 && (
                        <>
                            <div className="max-w-137 w-full">
                                <h3 className="text-[24px] xl:text-3xl xl:text-[42px] font-medium leading-[120%]">Secure upload or NHS retrieval</h3>
                                <p className="mt-3 xl:mt-5.5 font-medium leading-5.5 text-sm xl:text-base">
                                    Choose how you&#39;d like to share your scans with us. Upload directly through our GDPR-compliant portal, or authorize us to retrieve your images from the NHS Image Exchange Portal (IEP). Either way, your data is encrypted and handled with the highest security standards.
                                </p>
                                <Link href="" className="mt-3.5 mb-7 flex text-gradient font-semibold leading-5.5">Secure Link</Link>
                                <div className="hidden xl:flex flex-col gap-5 mb-9">
                                    <TextList title="DICOM files accepted" subTitle="MRI, CT, X-ray, Ultrasound, and Mammogram formats" />
                                    <TextList title="NHS IEP integration" subTitle="Direct retrieval from UK NHS hospitals" />
                                    <TextList title="Bank-level encryption" subTitle="Your medical data is always secure and confidential" />
                                </div>
                                <Button title={'Start Upload Process'} className={'w-full xl:w-fit'}/>
                            </div>
                            <div className="order-first xl:order-last max-w-117 w-full rounded-xl gradient-border">
                                <div className="bg-white p-6 h-full rounded-xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-3 items-center">
                                            <div className="text-2xl text-green-700"><MdOutlineFileUpload/></div>
                                            <div className="font-semibold">Upload Portal</div>
                                        </div>
                                        <div className="text-2xl text-gray-400"><GoDatabase /></div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="bg-gray-100 p-3 rounded-xl flex justify-between items-center">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-8 h-8 rounded-md flex-center bg-green-200 text-2xl text-green-700"><FaRegFileLines /></div>
                                                <div>
                                                    <div className="font-semibold text-xs xl:text-base">MRI_Brain_Scan.dcm</div>
                                                    <div className="text-gray-400 text-xs xl:text-sm">Uploaded . 24.5 MB</div>
                                                </div>
                                            </div>
                                            <div className="text-2xl text-green-700"><FiCheckCircle /></div>
                                        </div>

                                        <div className="bg-gray-100 p-3 rounded-xl flex justify-between items-center">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-8 h-8 rounded-md flex-center bg-blue-200 text-2xl text-blue-700"><FaRegFileLines /></div>
                                                <div>
                                                    <div className="font-semibold text-xs xl:text-base">Original_Report.pdf</div>
                                                    <div className="text-gray-400 text-xs xl:text-sm">Uploaded . 1.2 MB</div>
                                                </div>
                                            </div>
                                            <div className="text-2xl text-green-700"><FiCheckCircle /></div>
                                        </div>

                                        <div className="border-2 border-dashed border-blue-200 bg-gray-100 p-3 rounded-xl flex justify-between items-center">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-8 h-8 rounded-md flex-center bg-blue-200 text-2xl text-blue-700"><MdOutlineFileUpload/></div>
                                                <div>
                                                    <div className="font-semibold text-xs xl:text-base">Drop files or click to upload</div>
                                                    <div className="text-blue-700 text-xs xl:text-sm">DICOM, PDF, JPEG, accept</div>
                                                </div>
                                            </div>
                                            <div className="text-2xl text-green-700"><FiCheckCircle /></div>
                                        </div>
                                        
                                        <div className="border-t border-gray-300">
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="font-semibold">Status</div>
                                                <div className="bg-green-200 text-sm rounded-full px-2 py-1 font-medium text-green-700">Ready for Review</div>
                                            </div>
                                            <div className="flex-center bg-green-700 p-3 text-sm text-white rounded-xl mt-4 cursor-pointer hover:bg-green-800 transition-colors">Submit for Expert Review</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 2 && (
                        <>
                            <div className="max-w-137 w-full">
                                <h3 className="text-3xl xl:text-[42px] font-medium leading-[120%]">Tell us what concerns you</h3>
                                <p className="mt-5.5 font-medium leading-5.5">
                                    Help our radiologists provide the most relevant second opinion by sharing your specific symptoms, concerns, and questions. This allows us to focus our review on the areas that matter most to you.
                                </p>
                                <Link href="" className="mt-3.5 mb-7 flex text-gradient font-medium leading-5.5">View Privacy Policy</Link>
                                <div className="flex flex-col gap-5 mb-9">
                                    <TextList title="Symptom documentation" subTitle="Describe your current symptoms and when they started" />
                                    <TextList title="Medical history" subTitle="Share relevant past diagnoses and treatments" />
                                    <TextList title="Specific concerns" subTitle="Highlight what you'd like the radiologist to focus on" />
                                </div>
                                <Button title={'Complete Medical History Form'}/>
                            </div>
                            <div className="max-w-117 w-full rounded-xl gradient-border">
                                <div className="bg-white p-6 h-full rounded-xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-3 items-center">
                                            <div className="text-2xl text-green-700"><HiOutlineDocumentText/></div>
                                            <div className="font-semibold">Medical Questionnaire</div>
                                        </div>
                                        <div className="text-2xl text-gray-400"><BsClipboardCheck /></div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <div className="font-semibold mb-2">Current Symptoms</div>
                                            <div className="text-sm text-gray-600 mb-3">Persistent headaches for 3 weeks, particularly in the morning</div>
                                            <div className="text-xs text-green-700 flex items-center gap-1">
                                                <FiCheckCircle /> Completed
                                            </div>
                                        </div>

                                        <div className="bg-gray-100 p-4 rounded-xl">
                                            <div className="font-semibold mb-2">Medical History</div>
                                            <div className="text-sm text-gray-600 mb-3">Previous MRI scan 2 years ago showed normal results</div>
                                            <div className="text-xs text-green-700 flex items-center gap-1">
                                                <FiCheckCircle /> Completed
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-4 rounded-xl">
                                            <div className="font-semibold mb-2">Specific Questions</div>
                                            <div className="text-sm text-blue-700">Click to add your questions for the radiologist</div>
                                        </div>
                                        
                                        <div className="border-t border-gray-300">
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="font-semibold">Progress</div>
                                                <div className="bg-blue-200 text-sm rounded-full px-2 py-1 font-medium text-blue-700">2 of 3 Complete</div>
                                            </div>
                                            <div className="flex-center bg-green-700 p-3 text-white rounded-xl mt-4 cursor-pointer hover:bg-green-800 transition-colors">Continue to Next Step</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 3 && (
                        <>
                            <div className="max-w-137 w-full">
                                <h3 className="text-3xl xl:text-[42px] font-medium leading-[120%]">Expert radiologist analysis</h3>
                                <p className="mt-5.5 font-medium leading-5.5">
                                    Once your scans and medical history are submitted, a consultant radiologist will perform a comprehensive review using our advanced PACS system. You&apos;ll receive a detailed report within 24-48 hours.
                                </p>
                                <Link href="" className="mt-3.5 mb-7 flex text-gradient font-medium leading-5.5">Meet Our Radiologists</Link>
                                <div className="flex flex-col gap-5 mb-9">
                                    <TextList title="Comprehensive analysis" subTitle="Full review of all images and comparison with original report" />
                                    <TextList title="Detailed written report" subTitle="Professional findings in both technical and plain language" />
                                    <TextList title="Follow-up available" subTitle="Option to discuss findings with the radiologist if needed" />
                                </div>
                                <Button title={'View Sample Report'}/>
                            </div>
                            <div className="max-w-117 w-full rounded-xl gradient-border">
                                <div className="bg-white p-6 h-full rounded-xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex gap-3 items-center">
                                            <div className="text-2xl text-green-700"><LuFileSearch/></div>
                                            <div className="font-semibold">Review Status</div>
                                        </div>
                                        <div className="text-2xl text-gray-400"><FaRegFileLines /></div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="bg-green-100 p-4 rounded-xl">
                                            <div className="font-semibold mb-2 text-green-700">Scans Received</div>
                                            <div className="text-sm text-gray-600 mb-3">MRI Brain Scan - 2 files uploaded</div>
                                            <div className="text-xs text-green-700 flex items-center gap-1">
                                                <FiCheckCircle /> Verified
                                            </div>
                                        </div>

                                        <div className="bg-green-100 p-4 rounded-xl">
                                            <div className="font-semibold mb-2 text-green-700">Medical History</div>
                                            <div className="text-sm text-gray-600 mb-3">Questionnaire completed</div>
                                            <div className="text-xs text-green-700 flex items-center gap-1">
                                                <FiCheckCircle /> Reviewed
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl">
                                            <div className="font-semibold mb-2 text-blue-700">Expert Review In Progress</div>
                                            <div className="text-sm text-gray-600">Dr. Sarah Mitchell, Consultant Radiologist</div>
                                            <div className="mt-2">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-blue-700 h-2 rounded-full" style={{width: '65%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="border-t border-gray-300">
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="font-semibold">Est. Completion</div>
                                                <div className="bg-blue-200 text-sm rounded-full px-2 py-1 font-medium text-blue-700">18-24 hours</div>
                                            </div>
                                            <div className="flex-center bg-gray-300 p-3 text-gray-600 rounded-xl mt-4 cursor-not-allowed">Report Pending</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HowItWorkSection;