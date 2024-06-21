"use client";
import React, { useState } from 'react';
import Header from "./dashboard/_components/Header";
import Header2 from "./dashboard/_components/Headernew";
import Working from "./dashboard/_components/Working";
import Features from "./dashboard/_components/Features";
import Testimonial from "./dashboard/_components/Testimonial";
import { Button } from '@/components/ui/button';
import Footer from "./dashboard/_components/Footer";
const ComponentName = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50">
           <Header2/>
            <section className="pt-12 bg-gray-50 sm:pt-16">
                
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        
                      
                        <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                        𝖢𝗈𝗇𝗊𝗎𝖾𝗋 𝖸𝗈𝗎𝗋 𝖨𝗇𝗍𝖾𝗋𝗏𝗂𝖾𝗐𝗌 𝗐𝗂𝗍𝗁 𝖲𝗆𝖺𝗋𝗍 
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> 𝖠𝖨 𝖳𝗋𝖺𝗂𝗇𝗂𝗇𝗀 </span>
                            </span>
                        </p>
                        <h1 className="px-8 mt-4 text-lg text-black font-inter">𝖠𝖨-𝖽𝗋𝗂𝗏𝖾𝗇 𝗉𝗋𝖾𝗉𝖺𝗋𝖺𝗍𝗂𝗈𝗇 𝗐𝗂𝗍𝗁 𝗎𝗇𝗅𝗂𝗆𝗂𝗍𝖾𝖽 𝗋𝖾-𝖺𝗍𝗍𝖾𝗆𝗉𝗍𝗌, 𝖽𝖾𝗍𝖺𝗂𝗅𝖾𝖽 𝖿𝖾𝖾𝖽𝖻𝖺𝖼𝗄, 𝖺𝗇𝖽 𝗉𝖾𝗋𝖿𝗈𝗋𝗆𝖺𝗇𝖼𝖾 𝗍𝗋𝖺𝖼𝗄𝗂𝗇𝗀.</h1>
                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a href="/dashboard" title="" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                            𝖦𝖾𝗍 𝖨𝗇𝗍𝖾𝗋𝗏𝗂𝖾𝗐𝖾𝖽 
                            </a>
                            <a href="#" title="" className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" height={20}><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg> 
                            &nbsp; 𝖲𝗈𝗎𝗋𝖼𝖾 𝖢𝗈𝖽𝖾
                            </a>
                        </div>

                    </div>
                </div>

                <div className="pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                        <div className="relative mx-auto">
                            <div className="lg:max-w-6xl lg:mx-auto">
                                {/* <img className="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="Illustration" /> */}
                                <video
                                    className="object-cover w-full h-full cursor-pointer mt-24 rounded-2xl"
                                    loop={true}
                                    muted
                                    autoPlay
                                    style={{ width: '100%', height: '60%' }}
                                    
                                >
                                    <source src="/video.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Features/>
            <Working/>
            <Testimonial/>
            <Footer/>
             {/* Gradients */}
    <div
      aria-hidden="true"
      className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 opacity-70"
    >
      <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl  rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
      <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
    </div>
    {/* End Gradients */}
        </div>
    );
};

export default ComponentName;
