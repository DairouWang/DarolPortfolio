"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryAboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="flex justify-between items-center px-8 py-5">
                    <Link 
                        href="/gallery"
                        className="text-xl font-light text-gray-800 hover:text-gray-500 transition-colors duration-300"
                    >
                        ← Gallery
                    </Link>

                    <div className="flex items-center gap-5">
                        <Link
                            href="/"
                            className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <a
                            href="https://www.instagram.com/darol_wang/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="pt-32 pb-20 px-8">
                <div className="max-w-[700px] mx-auto">
                    {/* English Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h1 className="text-3xl font-light text-gray-900 mb-10">
                            About the Gallery
                        </h1>
                        
                        <div className="space-y-6 text-base font-light text-gray-600 leading-relaxed">
                            <p>
                                Photography has always been my way of capturing life's little moments. I grew up in a family where both my parents loved photography, leaving behind countless memories of my childhood. Their photos shaped my earliest understanding of light, composition, and the joy of preserving fleeting moments, laying the foundation for my own love of photography.
                            </p>
                            
                            <p>
                                I started with my phone, simply recording the everyday—the fleeting light, quiet streets, the smiles and gestures that often go unnoticed. Each photo holds a memory, a feeling, a fragment of the life I was living at that moment.
                            </p>
                            
                            <p>
                                Over time, I expanded my toolkit and embraced a Fujifilm camera, exploring new styles—starry skies, landscapes, portraits, and pets. I chase light and mood, experiment with perspectives, and let the weather guide my creativity. This gallery is a collection of those experiences, a visual diary of curiosity, wonder, and the beauty found in ordinary days.
                            </p>
                            
                            <p className="italic text-gray-500">
                                Every image is a memory, every frame a story, and every story a gentle invitation to pause and feel.
                            </p>
                        </div>
                    </motion.section>

                    {/* Divider */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="border-t border-gray-200 mb-24"
                    ></motion.div>

                    {/* Chinese Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-3xl font-light text-gray-900 mb-10">
                            关于我的作品集
                        </h1>
                        
                        <div className="space-y-6 text-base font-light text-gray-600 leading-relaxed">
                            <p>
                                摄影，是我记录生活点滴的方式。我成长在一个父母都热爱摄影的家庭，他们留下了许多我童年的美好回忆。这些照片塑造了我对光影、构图以及捕捉瞬间之美的最初理解，也为我后来对摄影的热爱奠定了基础。
                            </p>
                            
                            <p>
                                最初，我用手机，简单地捕捉每一天——稍纵即逝的光影、安静的街道、常被忽略的笑容与动作。每一张照片，都承载着一个记忆，一种感觉，记录着当时的生活片段。
                            </p>
                            
                            <p>
                                后来，我入手了富士相机，开始尝试更多摄影风格——星空、风光、人像、宠物。我追逐光与氛围，尝试不同的视角，让天气与自然成为灵感的引导。这个作品集，是我这些探索的集合，是好奇、惊喜和生活之美的视觉日记。
                            </p>
                            
                            <p className="italic text-gray-500">
                                每一张照片都是一段回忆，每一个画面都是一个故事，而每个故事，都邀请你驻足，感受当下的温度。
                            </p>
                        </div>
                    </motion.section>

                    {/* Back Link */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-20"
                    >
                        <Link 
                            href="/gallery"
                            className="text-sm font-light text-gray-400 hover:text-black transition-colors duration-300"
                        >
                            ← Back to Gallery
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200">
                <div className="flex justify-center px-8 py-8">
                    <p className="text-xs text-gray-400">
                        © 2025 Darol Wang. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

