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
        description: "A playful, psychology-inspired web application that helps pet owners discover their pet&apos;s &quot;MBTI-style&quot; personality. Inspired by behavioral traits—translated into a clean, humorous, fun-to-use digital experience.",
        image: "/pet-mbti-cover.png",
        color: "#1471af",
        link: "/projects/pet-mbti",
    },
];

export default function Works() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="works" className="w-full min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-start px-[200px] py-36">
            <div className="w-full">
                {/* Title Section */}
                <motion.div 
                    ref={titleRef}
                    className="flex justify-between items-start mb-16 w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-medium text-black leading-none">
                        Impressive Works
                    </h2>
                    <p className="text-right text-sm md:text-base font-light text-black max-w-md leading-relaxed uppercase tracking-wide">
                        HERE&apos;S A SELECTION OF PROJECTS THAT<br />
                        SHOWCASE MY PASSION FOR DESIGN<br />
                        AND DEVELOPMENT, REFLECTING<br />
                        CREATIVITY AND INNOVATION.
                    </p>
                </motion.div>

                {/* Project Cards Grid */}
                <div className="flex flex-col gap-16 mb-16">
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
            <div className={`flex gap-10 items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div 
                    className="relative overflow-hidden rounded-[42px] w-1/2 aspect-[16/9]"
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
                <div className="w-1/2 flex flex-col gap-4">
                    <div className="flex flex-col text-left">
                        <h3 className="text-5xl md:text-6xl font-normal text-black mb-4 leading-[1.1] transition-colors duration-300 group-hover:text-[var(--project-color)] m-0 p-0 text-left w-full" style={{ '--project-color': project.color } as React.CSSProperties}>
                            {project.title}
                        </h3>
                        <p className="text-xl md:text-2xl font-light text-gray-600 leading-[1.6] m-0 p-1 text-left w-full">
                            {project.description}
                        </p>
                    </div>

                    {/* View Details - appears on hover */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <span 
                            className="text-base font-medium tracking-wider uppercase whitespace-nowrap"
                            style={{ color: project.color }}
                        >
                            View Details
                        </span>
                        <svg 
                            className="w-5 h-5" 
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
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={buttonInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.button 
                className="px-8 py-3 rounded-full border border-zinc-400 hover:border-black transition-colors duration-300 flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div 
                    className="w-2.5 h-2.5 bg-black rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-xl font-normal text-black">Explore more</span>
            </motion.button>
        </motion.div>
    );
}

