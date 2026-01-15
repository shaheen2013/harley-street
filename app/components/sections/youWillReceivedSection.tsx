import React from 'react';
import bgImage from "@/assets/images/bg-carve.png";
import SectionTitle from "@/components/ui/sectionTitle";

const YouWillReceivedSection = () => {
    return (
        <div className="bg-size-[100%_100%] bg-top bg-no-repeat pt-20 pb-24 relative mb-20"
             style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="container mx-auto">
                <SectionTitle title={'Second Opinion Request'} subtitle={'You Will Receive For Each '}/>

                <div className="flex gap-5">
                    <div className="rounded-xlshadow-[0px_10px_80px_0px_#A8AEB733] bg-white px-5 pb-5 pt-10.5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default YouWillReceivedSection;