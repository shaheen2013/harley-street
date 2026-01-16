'use client'
import React, { useState } from "react";
import SectionTitle from "@/components/ui/sectionTitle";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

const ITEMS: FaqItem[] = [
    {
        id: "q1",
        question: "Can you replace my original doctor’s opinion?",
        answer:
            "Yes. We use secure, encrypted, GDPR-compliant systems for the transfer and storage of medical images and reports. Access is restricted to the team directly involved in your care.",
    },
    {
        id: "q2",
        question: "What file types can I upload?",
        answer:
            "We accept common medical image formats (DICOM, JPEG, PNG) and PDFs. If you have a different format contact support.",
    },
    {
        id: "q3",
        question: "How quickly will I receive my report?",
        answer:
            "Typical turnaround is 24-72 hours depending on case complexity. Urgent options are available.",
    },
    {
        id: "q4",
        question: "Will my information be secure?",
        answer:
            "All data is encrypted in transit and at rest. Access controls and auditing are in place to protect your information.",
    },
    {
        id: "q5",
        question: "Can I share the report with my doctor?",
        answer:
            "Yes — reports can be shared securely with your provider or downloaded as PDF.",
    },
    {
        id: "q6",
        question: "How do you ensure report quality?",
        answer:
            "Reports are reviewed by experienced clinicians and use validated workflows to ensure accuracy.",
    },
    {
        id: "q7",
        question: "How do you ensure report quality?",
        answer:
            "Reports are reviewed by experienced clinicians and use validated workflows to ensure accuracy.",
    },
];

const AccordionItem: React.FC<{
    item: FaqItem;
    isOpen: boolean;
    onToggle: (id: string) => void;
}> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className={`${isOpen ? 'gradient-border' : ''} rounded-xl`}>
                <button
                    type="button"
                    onClick={() => onToggle(item.id)}
                    className="bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5 flex justify-between items-center w-full cursor-pointer"
                >
                    <div className={`${isOpen ? 'text-gradient':'text-primary'} text-xl font-semibold leading-7.5 text-left`}>
                        {item.question}
                    </div>
                    <div className="bg-[#F1F5F9] w-8 h-8 shrink-0 rounded-full p-1 flex-center cursor-pointer">
                        {isOpen ? <HiOutlineMinus /> : <HiOutlinePlus />}
                    </div>
                </button>
            </div>

            <div
                id={`panel-${item.id}`}
                role="region"
                aria-labelledby={`button-${item.id}`}
                className={`${isOpen ? "block" : "hidden"} bg-white rounded-xl shadow-[0px_10px_80px_0px_#A8AEB733] p-5`}
            >
                <div className="text-lg leading-[150%]">{item.answer}</div>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>("q1");

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    // split by parity to render two columns
    const left = ITEMS.filter((_, i) => i % 2 === 0);
    const right = ITEMS.filter((_, i) => i % 2 === 1);

    return (
        <div id="fAQs" className="container mt-10 mb-10">
            <div className="flex-center text-center mb-14">
                <SectionTitle title={"Frequently Asked Questions"} subtitle={"FAQ’s"} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <div className="flex flex-col gap-3">
                    {left.map((it) => (
                        <AccordionItem key={it.id} item={it} isOpen={openId === it.id} onToggle={toggle} />
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    {right.map((it) => (
                        <AccordionItem key={it.id} item={it} isOpen={openId === it.id} onToggle={toggle} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
