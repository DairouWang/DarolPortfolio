"use client";

import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="w-full bg-white flex justify-center items-center px-4 sm:px-6 lg:px-8 py-24">
            <motion.div 
                className="max-w-4xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 leading-relaxed">
                    Software Developer | Psychology & MPA background | Crafting user-centric products | Woman in Tech | Empathy-driven design | Photographer, Snowboarding/Skiing, Badminton Enthusiast
                </p>
            </motion.div>
        </section>
    );
}

