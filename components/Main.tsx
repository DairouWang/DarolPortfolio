"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            <Image src="/Main.jpg" alt="Main background showcasing creative developer portfolio" fill className="object-cover object-center -z-10" priority />
            
            {/* Navigation Icons */}
            <motion.div 
                className="absolute top-12 w-full flex justify-center sm:w-auto sm:top-6 sm:left-auto sm:right-4 sm:justify-end md:top-4 md:right-5 gap-2 sm:gap-3 md:gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                {/* About Icon */}
                <button 
                    onClick={() => scrollToSection('about')}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="About"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>

                {/* Works Icon */}
                <button 
                    onClick={() => scrollToSection('works')}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Works"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                </button>

                {/* Gallery Icon */}
                <a 
                    href="/gallery"
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Gallery"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </a>

                {/* Contact Icon */}
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Contact"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </button>
            </motion.div>

            {/* Animated title */}
            <motion.div 
                className="absolute top-2 w-full px-4 sm:w-auto sm:px-0 sm:top-6 sm:left-5 md:top-4 md:left-6 lg:left-8 flex justify-center sm:justify-start"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-base sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left">Dairou Wang&apos;s Portfolio</h1>
            </motion.div>
            
            {/* Animated marquee */}
            <motion.div 
                className="absolute bottom-0 sm:bottom-1 w-full overflow-hidden pb-0 sm:pb-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <div className="text-white text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[17rem] font-medium whitespace-nowrap animate-marquee leading-tight inline-block">
                    Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;
                </div>
            </motion.div>
        </section>
    );
}
