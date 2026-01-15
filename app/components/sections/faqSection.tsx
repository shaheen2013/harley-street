import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import {AiFillPlusCircle} from "react-icons/ai";
import {FaPlus} from "react-icons/fa";
import {HiOutlineMinus, HiOutlinePlus} from "react-icons/hi";

const FaqSection = () => {
    return (
        <div className="container mx-auto mt-35">
            <div className="flex-center text-center mb-14"><SectionTitle title={'Frequently Asked Questions'} subtitle={'FAQ’s'}/></div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="gradient-border rounded-xl">
                            <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                                <div className="text-gradient text-xl font-semibold leading-7.5 line-clamp-1">Can you replace my original doctor’s opinion?</div>
                                <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlineMinus /></div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                            <div className="text-xl font-semibold leading-7.5 line-clamp-1">Can you replace my original doctor’s opinion?</div>
                            <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlinePlus /></div>
                        </div>
                        <div className="hidden bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                            <div className="text-xl font-semibold leading-7.5 line-clamp-1">What file types can I upload?</div>
                            <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlinePlus /></div>
                        </div>
                        <div className="hidden bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                            <div className="text-xl font-semibold leading-7.5 line-clamp-1">How quickly will I receive my report?</div>
                            <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlinePlus /></div>
                        </div>
                        <div className="hidden bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                            <div className="text-xl font-semibold leading-7.5 line-clamp-1">Will my information be secure?</div>
                            <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlinePlus /></div>
                        </div>
                        <div className="hidden bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center">
                            <div className="text-xl font-semibold leading-7.5 line-clamp-1">Can I share the report with my doctor?</div>
                            <div className=" bg-[#F1F5F9] w-8 h-8 rounded-full p-1 flex-center cursor-pointer"><HiOutlinePlus /></div>
                        </div>
                        <div className="hidden bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5">
                            <div className="text-lg leading-[150%] line-clamp-3">Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FaqSection;