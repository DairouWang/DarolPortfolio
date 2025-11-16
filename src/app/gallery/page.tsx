"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <main className="min-h-screen bg-white">
            {/* Top Navigation - Minimal */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
                <div className="flex justify-between items-center px-12 py-8">
                    {/* Logo/Name */}
                    <Link 
                        href="/"
                        className="text-3xl font-light text-gray-800 hover:text-gray-500 transition-colors duration-300"
                    >
                        Dairou's Gallery
                    </Link>

                    {/* Right Side - About & Instagram */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/#about"
                            className="text-xl font-light text-gray-600 hover:text-black transition-colors duration-300"
                        >
                            About
                        </Link>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Gallery Grid - Scattered Layout */}
            <div className="pt-32 pb-20 px-12 max-w-[1800px] mx-auto">

                {/* Grid Container - Custom scattered positions */}
                <div className="relative w-full" style={{ minHeight: '2400px' }}>
                    {/* Image 1 - Top Left */}
                    <motion.div
                        className="absolute"
                        style={{
                            top: '0px',
                            left: '0px',
                            width: '45%',
                            maxWidth: '600px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="relative w-full aspect-[4/5] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=1500&fit=crop"
                                alt="Gallery Image 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Image 2 - Top Right */}
                    <motion.div
                        className="absolute"
                        style={{
                            top: '200px',
                            right: '0px',
                            width: '40%',
                            maxWidth: '550px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=1600&fit=crop"
                                alt="Gallery Image 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Image 3 - Middle Left */}
                    <motion.div
                        className="absolute"
                        style={{
                            top: '800px',
                            left: '5%',
                            width: '35%',
                            maxWidth: '500px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-full aspect-[5/4] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1400&h=1100&fit=crop"
                                alt="Gallery Image 3"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Image 4 - Middle Right Lower */}
                    <motion.div
                        className="absolute"
                        style={{
                            top: '1100px',
                            right: '8%',
                            width: '42%',
                            maxWidth: '580px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full aspect-[4/5] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&h=1500&fit=crop"
                                alt="Gallery Image 4"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Image 5 - Bottom Center */}
                    <motion.div
                        className="absolute"
                        style={{
                            top: '1800px',
                            left: '15%',
                            width: '48%',
                            maxWidth: '650px'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="relative w-full aspect-[16/10] overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1551732998-9ed98c11ca34?w=1600&h=1000&fit=crop"
                                alt="Gallery Image 5"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Back to Home - Above Footer */}
            <div className="text-center py-16">
                <Link 
                    href="/"
                    className="text-lg font-light text-gray-400 hover:text-black transition-colors duration-300"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Footer - Legal & Contact */}
            <footer className="border-t border-gray-200">
                <div className="flex justify-center px-12 py-16">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-40 items-start">
                        {/* Legal Notice */}
                        <div className="flex flex-col">
                            <h3 className="text-lg font-medium text-black mb-6 uppercase tracking-wider">
                                Legal Notice
                            </h3>
                            <div className="flex items-center gap-3">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    © 2025 Darol Wang. All rights reserved.
                                </p>
                                <div className="relative flex items-center">
                                    <button
                                        onClick={() => setShowTooltip(!showTooltip)}
                                        onMouseEnter={() => setShowTooltip(true)}
                                        onMouseLeave={() => setShowTooltip(false)}
                                        className="text-gray-400 hover:text-black transition-colors duration-300 flex items-center"
                                        aria-label="More information"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    {showTooltip && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute left-8 bottom-8 z-50 w-80 bg-black text-white p-4 rounded-lg shadow-xl"
                                        >
                                            <p className="text-sm leading-relaxed">
                                                All images displayed on this website are protected under U.S. copyright law. Unauthorized copying, reproduction, distribution, display, or commercial use of any content is strictly prohibited and may result in civil and/or criminal liability.
                                            </p>
                                            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-black transform rotate-45"></div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Contact Me */}
                        <div className="flex flex-col">
                            <h3 className="text-lg font-medium text-black mb-6 uppercase tracking-wider">
                                Contact Me
                            </h3>
                            <div className="flex gap-6">
                                <a 
                                    href="mailto:dairou2021@gmail.com"
                                    className="text-gray-600 hover:text-black transition-colors duration-300"
                                    aria-label="Email"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-black transition-colors duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
