import {Metadata} from "next";
import HeroSection from "@/components/sections/heroSection";

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
    <HeroSection/>
  );
}
