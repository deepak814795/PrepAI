
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    {/* <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2> */}

                <span className="relative inline-flex sm:inline sm:text-sm">
                      <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative text-black font-semibold text-5xl sm:text-md"> 
                𝖧𝗈𝗐 𝖽𝗈𝖾𝗌 𝗂𝗍 𝗐𝗈𝗋𝗄?
                </span>
            </span>
            {/* <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">𝖣𝖺𝗍𝖺 𝖢𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖨𝗇𝗉𝗎𝗍</h3>
                            <p className="mt-4 text-base text-gray-600">When a user interacts with Gen AI, they provide input or query the system. This input could be in the form of text, voice, or even actions within a specific context, depending on the application.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">𝖯𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝖺𝗇𝖽 𝖠𝗇𝖺𝗅𝗒𝗌𝗂𝗌</h3>
                            <p className="mt-4 text-base text-gray-600">Gen AI employs advanced algorithms such as machine learning (ML) and deep learning (DL) to analyze the input data. The AI interprets the context of the user's input to comprehend the meaning and intent behind it.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">𝖮𝗎𝗍𝗉𝗎𝗍 𝖺𝗇𝖽 𝖨𝗇𝗍𝖾𝗋𝖺𝖼𝗍𝗂𝗈𝗇</h3>
                            <p className="mt-4 text-base text-gray-600">Based on the processed information and the context understood from the input, Gen AI makes decisions or generates responses. This could be in the form of text responses, visualizations, recommendations, or actions performed within a system.</p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;