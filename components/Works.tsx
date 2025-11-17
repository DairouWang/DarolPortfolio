"use client";

import Link from "next/link";
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
        description: "A playful, psychology-inspired web application that helps pet owners discover their pet's \"MBTI-style\" personality. Inspired by behavioral traits—translated into a clean, humorous, fun-to-use digital experience.",
        image: "/pet-mbti-cover.png",
        color: "#1471af",
        link: "/projects/pet-mbti",
    },
];

export default function Works() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="works" className="w-full min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-start px-[135px] py-24">
            <div className="w-full">
                {/* Title Section */}
                <motion.div 
                    ref={titleRef}
                    className="flex justify-between items-start mb-11 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-black leading-none">
                        Impressive Works
                    </h2>
                    <p className="text-right text-xs md:text-sm font-light text-black max-w-xs leading-relaxed uppercase tracking-wide">
                        HERE'S A SELECTION OF PROJECTS THAT<br />
                        SHOWCASE MY PASSION FOR DESIGN<br />
                        AND DEVELOPMENT, REFLECTING<br />
                        CREATIVITY AND INNOVATION.
                    </p>
                </motion.div>

                {/* Project Cards Grid */}
                <div className="flex flex-col gap-11 mb-11">
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
            <div className={`flex gap-7 items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div 
                    className="relative overflow-hidden rounded-[28px] w-1/2 aspect-[16/9]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Content - Title, Description and View Details */}
                <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col text-left">
                        <h3 className="text-3xl md:text-4xl font-normal text-black mb-3 leading-[1.1] transition-colors duration-300 group-hover:text-[var(--project-color)] m-0 p-0 text-left w-full" style={{ '--project-color': project.color } as React.CSSProperties}>
                            {project.title}
                        </h3>
                        <p className="text-base md:text-lg font-light text-gray-600 leading-[1.6] m-0 p-1 text-left w-full">
                            {project.description}
                        </p>
                    </div>

                    {/* View Details - appears on hover */}
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <span 
                            className="text-xs font-medium tracking-wider uppercase whitespace-nowrap"
                            style={{ color: project.color }}
                        >
                            View Details
                        </span>
                        <svg 
                            className="w-3.5 h-3.5" 
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
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={buttonInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.button 
                className="px-5 py-2 rounded-full border border-zinc-400 hover:border-black transition-colors duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div 
                    className="w-1.5 h-1.5 bg-black rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm font-normal text-black">Explore more</span>
            </motion.button>
        </motion.div>
    );
}
