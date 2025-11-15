"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Main() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-white overflow-hidden">
            <Image src="/Main.jpg" alt="Main background showcasing creative developer portfolio" fill className="object-cover object-center -z-10" priority />
            
            {/* Animated title */}
            <motion.div 
                className="absolute top-12 left-8 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl sm:text-6xl font-bold text-white">Dairou Wang</h1>
            </motion.div>
            
            {/* Animated description */}
            <motion.div 
                className="absolute top-8 right-8 max-w-xl px-4 sm:px-6 lg:px-8 text-right"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <p className="text-lg sm:text-xl font-light mb-4">Software Developer | Psychology & MPA background | Crafting user-centric products | Woman in Tech | Empathy-driven design | Photographer, Snowboarding/Skiing, Badminton Enthusiast</p>
            </motion.div>
            
            {/* Animated marquee */}
            <motion.div 
                className="absolute bottom-8 w-full overflow-hidden pb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <div className="text-white text-[25rem] font-medium whitespace-nowrap animate-marquee leading-tight inline-block">
                    Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;Creative Developer & Designer&nbsp;&nbsp;
                </div>
            </motion.div>
        </section>
    );
}
