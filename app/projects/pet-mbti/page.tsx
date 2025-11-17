"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PetMBTIPage() {
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
                    <Link href="/" className="text-xl font-bold text-black hover:text-[#1471af] transition-colors duration-300">
                        Dairou Wang
                    </Link>
                    <Link 
                        href="/#works" 
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-[#1471af] transition-colors duration-300"
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
                            <span className="text-5xl">🐾</span>
                            <h1 className="text-4xl md:text-5xl font-medium text-black">Pet MBTI Testing Website</h1>
                        </div>
                        <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
                            A playful full-stack experience that translates real pet behaviors into MBTI-style personalities through interactive quizzes, secure auth, and delightful storytelling.
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
                            src="/pet-mbti-cover.png"
                            alt="Pet MBTI Project Cover"
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
                    color="#1471af"
                    delay={0.3}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        A playful, psychology-inspired web application that helps pet owners discover their pet's "MBTI-style" personality. Inspired by behavioral traits—translated into a clean, humorous, fun-to-use digital experience.
                    </p>
                </ContentSection>

                {/* Goal */}
                <ContentSection
                    icon="🌱"
                    title="Goal"
                    color="#1471af"
                    delay={0.4}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Make personality testing more accessible and enjoyable, blending behavioral psychology with lightweight full-stack engineering.
                    </p>
                </ContentSection>

                {/* What I Built */}
                <ContentSection
                    icon="🧩"
                    title="What I Built"
                    color="#1471af"
                    delay={0.5}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="Full-stack React application with custom UI/UX" />
                        <FeatureItem text="Interactive quiz flow with real-time scoring logic" />
                        <FeatureItem text="Secure user login & session tracking with Auth0" />
                        <FeatureItem text="Backend APIs with Node.js" />
                        <FeatureItem text="Full CI/CD automated with Docker pipelines" />
                        <FeatureItem text="High-performance deployment via Vercel" />
                    </ul>
                </ContentSection>

                {/* Technical Deep Dive */}
                <ContentSection
                    icon="⚙️"
                    title="Technical Deep Dive"
                    color="#1471af"
                    delay={0.6}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TechItem label="Frontend" value="React + JavaScript" />
                        <TechItem label="Backend" value="Node.js + GraphQL" />
                        <TechItem label="Database" value="Prisma ORM + MySQL" />
                        <TechItem label="Auth" value="Auth0" />
                        <TechItem label="Testing" value="Jest unit testing" />
                        <TechItem label="Deployment" value="Vercel + Docker" />
                    </div>
                </ContentSection>

                {/* Impact */}
                <ContentSection
                    icon="🌈"
                    title="Impact"
                    color="#1471af"
                    delay={0.7}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="Thousands of test completions during launch" />
                        <FeatureItem text="Lightweight database structure reduces query complexity" />
                        <FeatureItem text="Engaging, humorous experience that fits modern pet culture" />
                    </ul>
                </ContentSection>

                {/* My Role */}
                <ContentSection
                    icon="👩🏻‍💻"
                    title="My Role"
                    color="#1471af"
                    delay={0.8}
                >
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Full-stack developer, designer, and product owner.
                    </p>
                </ContentSection>
            </div>

            {/* Back to Works CTA */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-5">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <Link href="/#works">
                            <motion.button
                                className="px-7 py-3 rounded-full border-2 border-[#1471af] text-[#1471af] hover:bg-[#1471af] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium"
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
            <span className="text-[#1471af] mt-0.5">•</span>
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
