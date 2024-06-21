import React, { useState } from 'react';
import Carousel from "../_components/Carousel"

const images = [
    './one.png',
    './oneone.png',
    './webcam.png'
    // Add more image URLs as needed
];

const ComponentName = () => {      
    return (
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-xl mx-auto text-center">
                <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase"></p>
    
                <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">𝖥𝗈𝗅𝗅𝗈𝗐 𝗍𝗁𝖾𝗌𝖾 𝗌𝗂𝗆𝗉𝗅𝖾 𝗌𝗍𝖾𝗉𝗌 𝗍𝗈 𝗍𝖾𝗌𝗍 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿</h2>
            </div>
    
            <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
                <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-gray-600">𝖢𝗋𝖾𝖺𝗍𝖾 𝖺 𝗇𝖾𝗐 𝖺𝖼𝖼𝗈𝗎𝗇𝗍 𝖺𝗇𝖽 𝗈𝗉𝖾𝗇 𝖣𝖺𝗌𝗁𝖻𝗈𝖺𝗋𝖽 𝖺𝗇𝖽 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝗇𝖾𝗐 𝖨𝗇𝗍𝖾𝗋𝗏𝗂𝖾𝗐 𝗐𝗂𝗍𝗁 𝗋𝖾𝗌𝗉𝖾𝖼𝗍 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗇𝖾𝖾𝖽𝗌</h3>
                            {/* <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                        </div>
                    </div>
    
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-gray-600">𝖤𝗇𝗍𝖾𝗋 𝗍𝗁𝖾 𝗌𝗉𝖾𝖼𝗂𝖿𝗂𝖼 𝗋𝗈𝗅𝖾, 𝗍𝖾𝖼𝗁 𝗌𝗄𝗂𝗅𝗅𝗌 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗍𝖾𝗌𝗍 𝖺𝗇𝖽 𝗒𝖾𝖺𝗋𝗌 𝗈𝖿 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 𝗒𝗈𝗎 𝗁𝖺𝗏𝖾</h3>
                            {/* <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                        </div>
                    </div>
    
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-red-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-gray-600">𝖲𝗍𝖺𝗋𝗍 𝗌𝗉𝖾𝖺𝗄𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝖺𝗇𝗌𝗐𝖾𝗋𝗌 𝗍𝗈 𝗍𝗁𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾𝖽 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇𝗌 𝖺𝗇𝖽 𝗀𝖾𝗍 𝗒𝗈𝗎𝗋 𝖿𝖾𝖾𝖽𝖻𝖺𝖼𝗄 𝖺𝗍 𝗍𝗁𝖾 𝖾𝗇𝖽 𝗈𝖿 𝗍𝗁𝖾 𝗂𝗇𝗍𝖾𝗋𝗏𝗂𝖾𝗐</h3>
                            {/* <p class="mt-3 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p> */}
                        </div>
                    </div>
                </div>
    
                <div class="lg:col-span-3 hidden md:block">
    <div class="relative p-2 rounded-lg">
        <div class="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-xl opacity-50"></div>
        {/* Uncomment the following line if you want to show a single image initially */}
        {/* <img class="relative w-full h-full object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" alt="Image with gradient border"/> */}
        
        {/* Use Carousel component with images array */}
        <Carousel/>
    </div>
</div>




            </div>
        </div>
    </section>
    

    )
}
export default ComponentName;