"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DietDicePage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            {/* Navigation */}
            <motion.nav 
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="w-full px-5 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-black hover:text-[#f9674d] transition-colors duration-300">
                        Dairou Wang
                    </Link>
                    <Link 
                        href="/#works" 
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-[#f9674d] transition-colors duration-300"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Works
                    </Link>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-5xl">🍏</span>
                            <h1 className="text-5xl md:text-6xl font-medium text-black">Diet Dice</h1>
                        </div>
                        <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
                            A web-based meal decision tool designed to reduce everyday decision fatigue through playful "dice roll" interactions and behavioral logic.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cover Image */}
            <motion.section 
                className="px-5 py-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden shadow-2xl">
                        <Image
                            src="/diet-dice-cover.png"
                            alt="Diet Dice Project Cover"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.section>

            {/* Content Sections */}
            <div className="max-w-3xl mx-auto px-5 pt-12 pb-20 space-y-8">
                {/* Overview */}
                <ContentSection
                    icon="🟣"
                    title="Overview"
                    color="#f9674d"
                    delay={0.3}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Diet Dice is a web-based meal decision tool designed to reduce everyday decision fatigue. It blends behavioral logic, clean aesthetics, and a playful "dice roll" interaction to help users choose meals that align with their dietary goals—quickly, intuitively, and delightfully.
                    </p>
                </ContentSection>

                {/* Why I Built This */}
                <ContentSection
                    icon="🌱"
                    title="Why I Built This"
                    color="#f9674d"
                    delay={0.4}
                >
                    <p className="text-base text-gray-700 leading-relaxed mb-3">
                        I wanted to solve a universal problem:
                    </p>
                    <blockquote className="text-2xl font-light text-[#f6ad56] italic my-5 pl-4 border-l-3 border-[#f6ad56]">
                        "What should I eat today?"
                    </blockquote>
                    <p className="text-base text-gray-700 leading-relaxed">
                        For people trying to lose weight or build consistency, this small question creates real friction. Diet Dice turns that moment into a simple, supportive interaction.
                    </p>
                </ContentSection>

                {/* What I Built */}
                <ContentSection
                    icon="🧩"
                    title="What I Built"
                    color="#f9674d"
                    delay={0.5}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="A responsive, aesthetic, React + Tailwind interface focused on clarity and low cognitive load" />
                        <FeatureItem text='A "decision dice" system that combines randomness with user preferences to make meal selection feel effortless' />
                        <FeatureItem text="Configurable user inputs (meal type, dietary constraints, health goals) with validation and real-time feedback" />
                        <FeatureItem text="Persistent user preference handling through client-side state" />
                        <FeatureItem text="Fully deployed and hosted using AWS Amplify, enabling CI/CD, scalable hosting, and seamless frontend updates" />
                    </ul>
                </ContentSection>

                {/* Technical Deep Dive */}
                <ContentSection
                    icon="⚙️"
                    title="Technical Deep Dive"
                    color="#f9674d"
                    delay={0.6}
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TechItem label="Frontend" value="React (CRA) with modern hooks-based architecture" />
                            <TechItem label="UI/UX" value="Tailwind CSS, responsive layout, minimal and clean interaction patterns" />
                            <TechItem label="State Management" value="React hooks for preference storage and decision logic" />
                            <TechItem label="Decision Engine" value='Randomized "dice roll" weighted by user-selected categories' />
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                                Deployment
                            </div>
                            <ul className="space-y-1.5 text-sm text-gray-900 font-light">
                                <li className="flex items-start gap-1.5">
                                    <span className="text-[#f9674d] mt-0.5">•</span>
                                    <span>AWS Amplify for hosting, automatic build & deploy pipelines</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <span className="text-[#f9674d] mt-0.5">•</span>
                                    <span>Domain, SSL, and versioned releases managed through Amplify</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <span className="text-[#f9674d] mt-0.5">•</span>
                                    <span>Future-ready Architecture: Prepared for integration with AI-based nutrition recommendations (SageMaker / OpenAI API)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ContentSection>

                {/* Impact */}
                <ContentSection
                    icon="🌈"
                    title="Impact"
                    color="#f9674d"
                    delay={0.7}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="Reduces cognitive overload around daily food choices" />
                        <FeatureItem text="Makes healthy decision-making feel fun, not restrictive" />
                        <FeatureItem text="Offers a small, elegant experience that fits into real life" />
                        <FeatureItem text="Designed with behavioral insights to support habit-building and user consistency" />
                    </ul>
                </ContentSection>

                {/* My Role */}
                <ContentSection
                    icon="👩🏻‍💻"
                    title="My Role"
                    color="#f9674d"
                    delay={0.8}
                >
                    <div className="space-y-3">
                        <p className="text-base text-gray-700 leading-relaxed font-medium">
                            Product Designer & Frontend Developer
                        </p>
                        <ul className="space-y-2">
                            <li className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                <span className="text-[#f9674d] mt-0.5">•</span>
                                <span>Led UI/UX, component design, interaction flow, and accessibility polish</span>
                            </li>
                            <li className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                <span className="text-[#f9674d] mt-0.5">•</span>
                                <span>Implemented decision logic, validation, and state architecture</span>
                            </li>
                            <li className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                <span className="text-[#f9674d] mt-0.5">•</span>
                                <span>Configured end-to-end deployment on AWS Amplify</span>
                            </li>
                            <li className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                                <span className="text-[#f9674d] mt-0.5">•</span>
                                <span>Applied psychology-informed UX patterns to improve user engagement</span>
                            </li>
                        </ul>
                    </div>
                </ContentSection>

                {/* Highlights */}
                <ContentSection
                    icon="✨"
                    title="Highlights"
                    color="#f9674d"
                    delay={0.9}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="Behavior-driven decision model" />
                        <FeatureItem text="Clean, aesthetic interface designed for usability and delight" />
                        <FeatureItem text="Scalable and production-ready deployment via AWS Amplify" />
                        <FeatureItem text="Built with a perspective focused on real-world change and user empathy" />
                    </ul>
                </ContentSection>
            </div>

            {/* Back to Works CTA */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-5">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <Link href="/#works">
                            <motion.button
                                className="px-7 py-3 rounded-full border-2 border-[#f9674d] text-[#f9674d] hover:bg-[#f9674d] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                View More Projects
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

// Reusable Components
function ContentSection({ 
    icon, 
    title, 
    color, 
    delay, 
    children 
}: { 
    icon: string; 
    title: string; 
    color: string; 
    delay: number; 
    children: React.ReactNode 
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{icon}</span>
                <h2 className="text-3xl font-medium" style={{ color }}>
                    {title}
                </h2>
            </div>
            <div className="pl-8">
                {children}
            </div>
        </motion.div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
            <span className="text-[#f9674d] mt-0.5">•</span>
            <span>{text}</span>
        </li>
    );
}

function TechItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">
                {label}
            </div>
            <div className="text-sm text-gray-900 font-light">
                {value}
            </div>
        </div>
    );
}
