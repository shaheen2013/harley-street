import {Metadata} from "next";
import HeroSection from "@/components/sections/heroSection";
import SpecialistSection from "@/components/sections/specialistSection";
import RegulatedSection from "@/components/sections/regulatedSection";
import WhenYouNeedSection from "@/components/sections/whenYouNeedSection";
import YouWillReceivedSection from "@/components/sections/youWillReceivedSection";
import HowItWork from "@/components/sections/howItWork";

export const metadata: Metadata = {
    title: "Home",
    description: "page description",

    keywords: [
        "software development",
        "web development",
    ],
    alternates: {
        canonical: "https://google.com",
    },
    openGraph: {
        title: "open graph title",
        description: "open graph description",
    },
};

export default function Home() {
    return (
        <>
            <HeroSection/>
            <RegulatedSection/>
            <WhenYouNeedSection/>
            <YouWillReceivedSection/>
            <HowItWork/>
            <SpecialistSection/>
        </>
    );
}
