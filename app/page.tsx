import {Metadata} from "next";

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
    <div className={`bg-image`}>
      <h1 className="text-[56px] font-semibold text-gradient">Specialist Second Opinion</h1>
    </div>
  );
}
