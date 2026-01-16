import React from 'react';
import bgImage from "@/assets/images/bg-carve.png";
import SectionTitle from "@/components/ui/sectionTitle";
import Button from "@/components/ui/button";
import Image, {StaticImageData} from "next/image";
import team1Image from "@/assets/images/team-1.png";
import team2Image from "@/assets/images/team-2.png";
import team3Image from "@/assets/images/team-3.png";

interface TeamMember {
    id: number;
    name: string;
    qualification: string;
    role: string;
    image: StaticImageData;
    imageAlt?: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Dr Ayman Mahfouz",
        qualification: "MBBS FRCR",
        role: "Consultant Radiologist, Joint Emergency Imaging Lead at UCLH",
        image: team1Image,
        imageAlt: "team 1 image"
    },
    {
        id: 2,
        name: "Dr Sangoh Lee",
        qualification: "MBBS BSc MRCP FRCR",
        role: "Consultant musculoskeletal and trauma radiologist",
        image: team2Image,
        imageAlt: "team 2 image"
    },
    {
        id: 3,
        name: "Dr Trevor Gaunt",
        qualification: "BSc (Hons), MBBS, FRCR",
        role: "Consultant Paediatric Radiologist at University College",
        image: team3Image,
        imageAlt: "team 3 image"
    },
    {
        id: 4,
        name: "Dr Kate Hawtin",
        qualification: "BSc (Hons), MBBS, FRCR",
        role: "Consultant Radiologist and joint breast imaging lead",
        image: team2Image,
        imageAlt: "team 4 image"
    }
];

const OurTeamSection: React.FC = () => {
    return (
        <div id="specialist"
            className="bg-blue-100 pt-50 relative overflow-hidden">
            <div className="clip-top-large-circle top-0"></div>
            <div className="container mx-auto">
                <div className="flex justify-between items-end">
                    <SectionTitle title={'Meet Your Specialists'} subtitle={'Our team'} />
                    <Button title={'Show more doctors'} />
                </div>

                <div className="grid grid-cols-4 gap-5 mt-12 relative overflow-hidden">
                    <div className="absolute z-10 top-0 -left-[6%] w-77.5 h-full bg-[linear-gradient(90deg,#EDF7FA_-17.04%,rgba(237,247,250,0)_100%)]"></div>
                    <div className="absolute z-10 top-0 -right-[6%] w-77.5 h-full bg-[linear-gradient(90deg,#EDF7FA_-17.04%,rgba(237,247,250,0)_100%)] rotate-180"></div>
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-white shadow-primary rounded-xl overflow-hidden relative pt-1">
                            <div className="bg-gradient absolute top-0 left-0 w-full h-10"></div>
                            <Image
                                src={member.image}
                                alt={member.imageAlt ?? member.name}
                                width={305}
                                height={245}
                                className="relative object-cover rounded-xl overflow-hidden"
                            />
                            <div className="px-5 pt-5 pb-10">
                                <h5 className="text-xl font-semibold leading-7">{member.name}</h5>
                                <h6 className="leading-5.5 text-gray-400 font-normal mt-2 mb-4">{member.qualification}</h6>
                                <p className="leading-5.5 font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeamSection;
