"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="about" className="w-full bg-[#eaeaee] flex flex-col items-center px-3 sm:px-4 lg:px-5 py-32">
            {/* Title Section */}
            <motion.div 
                ref={titleRef}
                className="max-w-4xl w-full mb-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[#1471af] mb-5 tracking-wide">
                    ABOUT ME
                </h2>
            </motion.div>

            {/* Three Cards */}
            <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-32 xl:gap-40 px-5">
                {/* Card 1: Why I Build */}
                <CardWithAnimation delay={0}>
                <div className="flex flex-col items-center text-center gap-5">
                    {/* Icon */}
                    <div className="w-19 h-19 flex items-center justify-center mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#E07A5F] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-16 h-16 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 10 L60 35 L87 35 L65 52 L75 77 L50 60 L25 77 L35 52 L13 35 L40 35 Z" fill="#E07A5F"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#f9674d] tracking-wide uppercase">
                        Why I Build
                    </h3>
                    <div className="space-y-3">
                        <p className="text-sm md:text-base font-light text-[#f9674d] leading-relaxed">
                            I create products that genuinely help people—tools that make real life smoother, clearer, and more delightful.
                        </p>
                        <p className="text-sm md:text-base font-light text-[#f9674d] leading-relaxed">
                            My work blends psychology, user experience, and aesthetics to craft solutions that not only function well, but feel beautiful and effortless in everyday moments.
                        </p>
                    </div>
                </div>
                </CardWithAnimation>

                {/* Card 2: What I Bring */}
                <CardWithAnimation delay={0.2}>
                <div className="flex flex-col items-center text-center gap-5">
                    {/* Icon */}
                    <div className="w-19 h-19 flex items-center justify-center mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#F4A261] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-16 h-16 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="30" r="12" fill="#F4A261"/>
                                <circle cx="30" cy="50" r="10" fill="#F4A261"/>
                                <circle cx="70" cy="50" r="10" fill="#F4A261"/>
                                <circle cx="40" cy="75" r="8" fill="#F4A261"/>
                                <circle cx="60" cy="75" r="8" fill="#F4A261"/>
                                <circle cx="50" cy="60" r="15" fill="#F4A261"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#f6ad56] tracking-wide uppercase">
                        What I Bring
                    </h3>
                    <div className="space-y-3">
                        <p className="text-sm md:text-base font-light text-[#f6ad56] leading-relaxed">
                            I bring behavioral insights, systems thinking, and a design-forward engineering mindset.
                        </p>
                        <p className="text-sm md:text-base font-light text-[#f6ad56] leading-relaxed">
                            From understanding how people make decisions to building scalable architectures, I bridge intuition with technology—turning complex problems into experiences that feel simple, human, and intentional.
                        </p>
                    </div>
                </div>
                </CardWithAnimation>

                {/* Card 3: Woman in Tech, With Purpose */}
                <CardWithAnimation delay={0.4}>
                <div className="flex flex-col items-center text-center gap-5">
                    {/* Icon */}
                    <div className="w-19 h-19 flex items-center justify-center mb-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#81B4CE] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-16 h-16 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="35" stroke="#1471af" strokeWidth="6" fill="none"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-normal text-[#1471af] tracking-wide uppercase">
                        Woman in Tech
                    </h3>
                    <div className="space-y-3">
                        <p className="text-sm md:text-base font-light text-[#1471af] leading-relaxed">
                            I build from a perspective shaped by empathy, clarity, and resilience.
                        </p>
                        <p className="text-sm md:text-base font-light text-[#1471af] leading-relaxed">
                            As a woman in tech, I care deeply about inclusive experiences—designs that welcome diverse users and empower them, without adding noise or friction.
                        </p>
                    </div>
                </div>
                </CardWithAnimation>
            </div>
        </section>
    );
}

// Card wrapper component with animation
function CardWithAnimation({ children, delay }: { children: React.ReactNode; delay: number }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            {children}
        </motion.div>
    );
}
