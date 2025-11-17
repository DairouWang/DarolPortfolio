"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MindReaderPage() {
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
                    <Link href="/" className="text-xl font-bold text-black hover:text-[#f6ad56] transition-colors duration-300">
                        Dairou Wang
                    </Link>
                    <Link 
                        href="/#works" 
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-600 hover:text-[#f6ad56] transition-colors duration-300"
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
                            <span className="text-5xl">🧠</span>
                            <h1 className="text-5xl md:text-6xl font-medium text-black">Mind Reader</h1>
                        </div>
                        <p className="text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
                            An end-to-end text intelligence platform that compares classical ML and Transformer models in real time to surface sentiment, classification, and feature insights.
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
                            src="/mind-reader-cover.png"
                            alt="Mind Reader Project Cover"
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
                    color="#f6ad56"
                    delay={0.3}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Mind Reader is a scalable ML platform that analyzes text through multiple models—classical ML, Transformers, and custom pipelines—to generate insights such as sentiment, classification, and feature importance.
                    </p>
                </ContentSection>

                {/* Problem */}
                <ContentSection
                    icon="🌱"
                    title="Problem"
                    color="#f6ad56"
                    delay={0.4}
                >
                    <p className="text-base text-gray-700 leading-relaxed">
                        Text data is rich, but hard to process at scale. Researchers, students, and teams often need a simple tool to compare models and visualize results instantly.
                    </p>
                </ContentSection>

                {/* What I Built */}
                <ContentSection
                    icon="🧩"
                    title="What I Built"
                    color="#f6ad56"
                    delay={0.5}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="End-to-end ML pipeline with 4 different models" />
                        <FeatureItem text="Real-time comparison between classical ML (SVM) and large Transformer models (BERT)" />
                        <FeatureItem text="TF-IDF + Linear SVM feature engineering workflow" />
                        <FeatureItem text="Hyperparameter tuning with GridSearchCV + cross-validation" />
                        <FeatureItem text="Streamlit dashboard for interactive exploration" />
                        <FeatureItem text="Visualization for decision boundaries, class distributions, and model outputs" />
                    </ul>
                </ContentSection>

                {/* Technical Deep Dive */}
                <ContentSection
                    icon="⚙️"
                    title="Technical Deep Dive"
                    color="#f6ad56"
                    delay={0.6}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TechItem label="Models" value="SVM, BERT, TensorFlow NLP models" />
                        <TechItem label="Pipeline" value="Hugging Face, NumPy, TF-IDF, GridSearchCV" />
                        <TechItem label="Frontend" value="Streamlit (interactive UI + real-time processing)" />
                        <TechItem label="Deployment" value="Docker container → Kubernetes cluster" />
                        <TechItem label="Accuracy" value="Achieved 92% on sentiment analysis tasks" />
                    </div>
                </ContentSection>

                {/* Impact */}
                <ContentSection
                    icon="🌈"
                    title="Impact"
                    color="#f6ad56"
                    delay={0.7}
                >
                    <ul className="space-y-3">
                        <FeatureItem text="Enables fast iteration across different NLP approaches" />
                        <FeatureItem text="Makes model comparison intuitive for non-technical users" />
                        <FeatureItem text="Fully productionized pipeline with containerized deployment" />
                    </ul>
                </ContentSection>

                {/* My Role */}
                <ContentSection
                    icon="👩🏻‍💻"
                    title="My Role"
                    color="#f6ad56"
                    delay={0.8}
                >
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                        Machine learning engineer, data scientist, frontend builder, and deployment owner.
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
                                className="px-7 py-3 rounded-full border-2 border-[#f6ad56] text-[#f6ad56] hover:bg-[#f6ad56] hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium"
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
            <span className="text-[#f6ad56] mt-0.5">•</span>
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
