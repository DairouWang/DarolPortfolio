"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "Diet Dice",
        description: "Diet Dice is an AI-powered meal decision tool designed to reduce decision fatigue and help users choose healthier meals in seconds. Using behavioral insights and probabilistic selection, it turns everyday meal planning into a guided, delightful experience.",
        image: "/diet-dice-cover.png",
        color: "#f9674d",
        link: "/projects/diet-dice",
    },
    {
        id: 2,
        title: "Mind Reader",
        description: "Mind Reader is a scalable ML platform that analyzes text through multiple models—classical ML, Transformers, and custom pipelines—to generate insights such as sentiment, classification, and feature importance.",
        image: "/mind-reader-cover.png",
        color: "#f6ad56",
        link: "/projects/mind-reader",
    },
    {
        id: 3,
        title: "Pet MBTI Test",
        description: "A playful, psychology-inspired web application that helps pet owners discover their pet's MBTI-style personality. Inspired by behavioral traits—translated into a clean, humorous, fun-to-use digital experience.",
        image: "/pet-mbti-cover.png",
        color: "#1471af",
        link: "/projects/pet-mbti",
    },
];

export default function Works() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="works" className="w-full min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-start px-5 sm:px-8 md:px-16 lg:px-24 xl:px-[135px] py-16 sm:py-16 md:py-24">
            <div className="w-full">
                {/* Title Section */}
                <motion.div 
                    ref={titleRef}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-start mb-10 sm:mb-11 w-full gap-5 sm:gap-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black leading-[1.1]">
                        Impressive Works
                    </h2>
                    <p className="text-left sm:text-right text-[11px] md:text-sm font-light text-gray-600 max-w-full sm:max-w-xs leading-[1.7] uppercase tracking-wide">
                        HERE&apos;S A SELECTION OF PROJECTS THAT<br />
                        SHOWCASE MY PASSION FOR DESIGN<br />
                        AND DEVELOPMENT, REFLECTING<br />
                        CREATIVITY AND INNOVATION.
                    </p>
                </motion.div>

                {/* Project Cards Grid */}
                <div className="flex flex-col gap-8 sm:gap-8 md:gap-11 mb-10 sm:mb-11">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Explore More Button */}
                <ExploreButton />
            </div>
        </section>
    );
}

// Project Card Component with animation
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <Link href={project.link}>
            <motion.div
                ref={cardRef}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 80 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
            <div className={`flex flex-col md:flex-row gap-5 sm:gap-5 md:gap-7 items-stretch ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div 
                    className="relative overflow-hidden rounded-xl sm:rounded-[20px] md:rounded-[28px] w-full md:w-1/2 aspect-[4/3] sm:aspect-[16/9]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Content - Title, Description and View Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-between gap-3 sm:gap-3">
                    <div className="flex flex-col text-left">
                        {/* Title */}
                        <h3 className="text-[28px] sm:text-3xl md:text-4xl font-normal text-black leading-[1.2] transition-colors duration-300 group-hover:text-[var(--project-color)] mb-3 sm:mb-3" style={{ '--project-color': project.color } as React.CSSProperties}>
                            {project.title}
                        </h3>
                        {/* Description */}
                        <p className="text-[15px] sm:text-base md:text-lg font-light text-gray-600 leading-[1.65] text-left">
                            {project.description}
                        </p>
                    </div>
                    {/* View Details - visible on mobile, animated on desktop */}
                    <div className="flex items-center gap-2 transition-all duration-300 md:opacity-60 md:group-hover:opacity-100 md:group-hover:translate-x-2">
                        <span 
                            className="text-xs font-medium tracking-wider uppercase"
                            style={{ color: project.color }}
                        >
                            View Details
                        </span>
                        <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ color: project.color }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
            </motion.div>
        </Link>
    );
}

// Explore Button Component with animation
function ExploreButton() {
    const buttonRef = useRef(null);
    const buttonInView = useInView(buttonRef, { once: true, margin: "-50px" });

    return (
        <motion.div 
            ref={buttonRef}
            className="flex justify-center mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={buttonInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.button 
                className="px-6 py-2.5 rounded-full border border-zinc-300 hover:border-black transition-colors duration-300 flex items-center gap-2.5 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div 
                    className="w-1.5 h-1.5 bg-black rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[13px] sm:text-sm font-normal text-black">Explore more</span>
            </motion.button>
        </motion.div>
    );
}
