import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/footer-logo.png"
import {FaFacebookSquare, FaInstagram, FaLongArrowAltRight, FaPhoneAlt, FaTwitter} from "react-icons/fa";
import {RiDoubleQuotesL} from "react-icons/ri";
import {BsFillEnvelopeFill} from "react-icons/bs";
import footer1 from "@/assets/images/footer-1.png"
import footer2 from "@/assets/images/footer-2.png"
import footer3 from "@/assets/images/footer-3.png"


const Footer = () => {
    return (
        <div className="gradient-footer pt-10 xl:pt-16 pb-7.5 text-white">
            <div className="container">
                <div className="flex flex-col xl:flex-row">
                    <div>
                        <Link href="">
                            <Image src={logo} alt="logo" width={140} height={70} className="object-contain"/>
                        </Link>
                        <div className="flex gap-4.5 mt-7 mb-10 xl:mb-0">
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaInstagram /></Link>
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaFacebookSquare /></Link>
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaTwitter /></Link>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row w-full xl:ml-[20%]">
                        <div className="order-last xl:order-first xl:max-w-103 relative pl-6">
                            <div className="text-white/10 text-7xl absolute left-0 xl:-left-10 -top-7"><RiDoubleQuotesL/></div>
                            <p>The Harley Street Ultrasound Group are specialists in private ultrasound scans and offer on-site diagnosis and treatments, giving you reassurance when you need it the most.</p>
                            <br/>
                            <p>Conveniently based on Harley Street, the heart of the medical district in London.</p>
                        </div>
                        <div className="xl:ml-auto mb-10 xl:mb-0">
                            <div className="font-semibold">Subscribe to our newsletter</div>
                            <div className="mt-3 flex items-center">
                                <input type="text" className="grow shrink-0 xl:w-75 rounded-tl-xl rounded-bl-xl border-none  h-12.5 bg-white/10 text-white/60 px-4 flex items-center" placeholder="Enter your email address"/>
                                <div className="shrink-0 bg-white h-12.5 w-12.5 flex-center rounded-tr-xl rounded-br-xl text-primary"><FaLongArrowAltRight /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row mt-10 xl:mt-20">
                    <div className="mt-10 xl:mt-0">
                        <div className="font-semibold">Contact us</div>
                        <div className="mt-4 xl:mt-5">
                            <p>
                                99 Harley St <br/>
                                Marylebone <br/>
                                London br
                                W1G 6AQ
                            </p>
                        </div>
                        <div className="mt-5 space-y-3.5">
                            <div className="flex gap-2 items-center">
                                <BsFillEnvelopeFill className="text-white" />
                                contact@harleystreetultrasound.com
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaPhoneAlt className="text-white" />
                                0203 904 4441
                            </div>
                        </div>
                    </div>

                    <div className="order-first xl:order-last flex flex-col xl:flex-row gap-16 xl:ml-[8.5%] grow">
                        <div>
                            <div className="text-lg font-semibold">Our clinic</div>
                            <div className="mt-3 xl:mt-5 flex flex-col gap-3 xl:gap-4">
                                <Link href="" className="text-sm xl:text-base">Our values</Link>
                                <Link href="" className="text-sm xl:text-base">Our doctors</Link>
                                <Link href="" className="text-sm xl:text-base">Latest news</Link>
                                <Link href="" className="text-sm xl:text-base">Get in touch</Link>

                            </div>
                        </div>
                        <div className="flex gap-2 xl:gap-16 grow xl:ml-[20%]">
                            <div>
                                <div className="text-lg font-semibold">Quick links</div>
                                <div className="mt-5 flex flex-col gap-3 xl:gap-4">
                                    <Link href="" className="text-sm xl:text-base">Book appointment</Link>
                                    <Link href="" className="text-sm xl:text-base">Patient referral</Link>
                                    <Link href="" className="text-sm xl:text-base">Frequently Asked Questions</Link>

                                </div>
                            </div>
                            <div className="ml-auto">
                                <div className="flex flex-col gap-3 xl:gap-4">
                                    <Link href="" className="text-sm xl:text-base">Terms & Conditions</Link>
                                    <Link href="" className="text-sm xl:text-base">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row items-center justify-between mt-10 xl:mt-20 border-t border-white/10 pt-10 xl:pt-7.5">
                    <div className="order-last xl:order-first text-xs text-white/60 mt-5 xl:mt-0">&copy; 2020 Harley Street Ultrasound Group All Rights Reserved.</div>
                    <div className="flex gap-9">
                       <Image src={footer1} alt="footer1" width={116} height={36} className="object-contain"/>
                       <Image src={footer2} alt="footer2" width={66} height={48} className="object-contain"/>
                       <Image src={footer3} alt="footer3" width={86} height={36} className="object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;