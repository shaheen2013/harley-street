import {Metadata} from "next";
import HeroSection from "@/components/sections/heroSection";
import SpecialistSection from "@/components/sections/specialistSection";

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
        <div className="bg-white py-24"></div>
        <SpecialistSection/>
    </>
  );
}
