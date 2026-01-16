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
        <div className="gradient-footer pt-16 pb-7.5 text-white">
            <div className="container mx-auto">
                <div className="flex">
                    <div>
                        <Link href="">
                            <Image src={logo} alt="logo" width={140} height={70} className="object-contain"/>
                        </Link>
                        <div className="flex gap-4.5 mt-7">
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaInstagram /></Link>
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaFacebookSquare /></Link>
                            <Link href="" className="w-9 h-9 p-2 rounded-full flex-center bg-white/20"><FaTwitter /></Link>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:flex-row w-full ml-[20%]">
                        <div className="max-w-[412px] relative">
                            <div className="text-white/10 text-7xl absolute -left-10 -top-7"><RiDoubleQuotesL/></div>
                            <p>The Harley Street Ultrasound Group are specialists in private ultrasound scans and offer on-site diagnosis and treatments, giving you reassurance when you need it the most.</p>
                            <br/>
                            <p>Conveniently based on Harley Street, the heart of the medical district in London.</p>
                        </div>
                        <div className="ml-auto">
                            <div className="font-semibold">Subscribe to our newsletter</div>
                            <div className="mt-3 flex items-center">
                                <input type="text" className="shrink-0 w-[300px] rounded-tl-xl rounded-bl-xl border-none  h-12.5 bg-white/10 text-white/60 px-4 flex items-center" placeholder="Enter your email address"/>
                                <div className="shrink-0 bg-white h-12.5 w-12.5 flex-center rounded-tr-xl rounded-br-xl text-primary"><FaLongArrowAltRight /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex row-reverse md:flex-row mt-20">
                    <div>
                        <div className="font-semibold">Contact us</div>
                        <div className="mt-5">
                            <p>
                                99 Harley St <br/>
                                Marylebone <br/>
                                London br
                                W1G 6AQ
                            </p>
                        </div>
                        <div className="mt-5">
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

                    <div className="flex gap-16 ml-[8.5%] grow">
                        <div>
                            <div className="font-semibold">Our clinic</div>
                            <div className="mt-5 flex flex-col gap-4">
                                <Link href="">Our values</Link>
                                <Link href="">Our doctors</Link>
                                <Link href="">Latest news</Link>
                                <Link href="">Get in touch</Link>

                            </div>
                        </div>
                        <div className="flex gap-16 grow ml-[20%]">
                            <div>
                                <div className="font-semibold">Quick links</div>
                                <div className="mt-5 flex flex-col gap-4">
                                    <Link href="">Book appointment</Link>
                                    <Link href="">Patient referral</Link>
                                    <Link href="">Frequently Asked Questions</Link>

                                </div>
                            </div>
                            <div className="ml-auto">
                                <div className="flex flex-col gap-4">
                                    <Link href="">Terms & Conditions</Link>
                                    <Link href="">Privacy Policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex row-reverse md:flex-row items-center justify-between mt-20 border-t border-white/10 pt-7.5">
                    <div className="text-xs text-white/60">&copy; 2020 Harley Street Ultrasound Group All Rights Reserved.</div>
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