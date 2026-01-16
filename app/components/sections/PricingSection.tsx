import React from 'react';
import SectionTitle from "@/components/ui/sectionTitle";
import TextList from "@/components/ui/textList";
import Button from "@/components/ui/button";
import Image from "next/image";
import bgBottomVisual from "@/assets/images/bottom-visual-new.png";

const PricingSection = () => {
    return (
        <div id="pricing" className="relative overflow-hidden pb-4 xl:pb-20">
            <div className="clip-bottom-large-circle"></div>
            <div className="hidden xl:block absolute left-1/2 -top-[30%] -translate-x-1/2 z-10 -rotate-10">
                <Image src={bgBottomVisual} alt='bgVisual' width={681} height={425}/>
            </div>
            <div className="container pt-24 xl:pt-62.5">
                <div className="flex-center mb-12">
                    <SectionTitle title={'No Hidden Fees'} subtitle={'Transparent Pricing'}/>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                    <div className="flex flex-col bg-white shadow-primary rounded-xl px-4 xl:px-6 pt-6 xl:pt-14 pb-6 xl:pb-10.5">
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl leading-7 font-semibold">Written Report</h3>
                            <h5 className="mt-4 text-lg leading-6 font-medium text-gray-400">Comprehensive written
                                analysis</h5>
                            <h2 className="text-gradient mt-9 text-6xl font-semibold">£199</h2>
                            <p className="leading-6 font-medium text-gray-400">per scan review</p>
                        </div>
                        <div className="flex flex-col gap-5 mb-12.5 mt-9">
                            <TextList title={'Detailed written report and summary'}/>
                            <TextList title={'Delivery within 24–48 hours'}/>
                            <TextList title={'Consultant radiologist review of one scan study'}/>
                            <TextList title={'Email delivery'}/>
                        </div>
                        <div className="mt-auto"><Button large={true} title={'Get Started'} bgColor={'bg-white'} type={'outline'}/></div>
                    </div>

                    <div className="rounded-xl gradient-border relative">
                        <div className="absolute -top-3.75 left-0 w-full flex-center">
                            <span
                                className="bg-gradient text-white text-sm font-semibold leading-4.5 rounded-[30px] w-30 h-7.5 flex-center">Most Popular</span>
                        </div>
                        <div className="flex flex-col bg-white shadow-primary rounded-xl px-6 pt-14 pb-10.5">
                            <div className="flex flex-col items-center">
                                <h3 className="text-3xl leading-7 font-semibold text-center">Report + Consultation</h3>
                                <h5 className="mt-4 text-lg leading-6 font-medium text-gray-400">Report plus video
                                    discussion</h5>
                                <h2 className="text-gradient mt-9 text-6xl font-semibold">£299</h2>
                                <p className="leading-6 font-medium text-gray-400">per scan review</p>
                            </div>
                            <div className="flex flex-col gap-5 mb-12.5 mt-9">
                                <TextList title={'Detailed written report and summary'}/>
                                <TextList title={'30-minute video consultation'}/>
                                <TextList title={'Everything in Written Report'}/>
                                <TextList title={'Q&A with specialist'}/>
                                <TextList title={'Same-day booking available'}/>
                            </div>
                            <div className="mt-auto"><Button large={true} title={'Contact Us'}/></div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white shadow-primary rounded-xl px-6 pt-14 pb-10.5">
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl leading-7 font-semibold">Urgent Review</h3>
                            <h5 className="mt-4 text-lg leading-6 font-medium text-gray-400">Priority 24-hour
                                service</h5>
                            <h2 className="text-gradient mt-9 text-6xl font-semibold">£349</h2>
                            <p className="leading-6 font-medium text-gray-400">per scan review</p>
                        </div>
                        <div className="flex flex-col gap-5 mb-12.5 mt-9">
                            <TextList title={'24-hour turnaround'}/>
                            <TextList title={'Priority specialist review'}/>
                            <TextList title={'Consultant radiologist review of one scan study'}/>
                            <TextList title={'Email delivery'}/>
                        </div>
                        <div className="mt-auto"><Button large={true} title={'Get Started'} bgColor={'bg-white'} type={'outline'}/></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingSection;