export default function AboutMe() {
    return (
        <section className="w-full min-h-screen bg-[#F5EBE0] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24">
            {/* 标题区域 */}
            <div className="max-w-6xl w-full mb-20 text-center">
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-light text-[#E07A5F] mb-8 tracking-wide">
                    ABOUT ME
                </h2>
            </div>

            {/* 三个卡片 */}
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                {/* Card 1: Why I Build */}
                <div className="flex flex-col items-center text-center gap-8">
                    {/* 图标 */}
                    <div className="w-28 h-28 flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#E07A5F] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-24 h-24 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 10 L60 35 L87 35 L65 52 L75 77 L50 60 L25 77 L35 52 L13 35 L40 35 Z" fill="#E07A5F"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-normal text-[#E07A5F] tracking-wide uppercase">
                        Why I Build
                    </h3>
                    <div className="space-y-5">
                        <p className="text-lg md:text-xl font-light text-[#C4836C] leading-relaxed">
                            I create products that genuinely help people—tools that make real life smoother, clearer, and more delightful.
                        </p>
                        <p className="text-lg md:text-xl font-light text-[#C4836C] leading-relaxed">
                            My work blends psychology, user experience, and aesthetics to craft solutions that not only function well, but feel beautiful and effortless in everyday moments.
                        </p>
                    </div>
                </div>

                {/* Card 2: What I Bring */}
                <div className="flex flex-col items-center text-center gap-8">
                    {/* 图标 */}
                    <div className="w-28 h-28 flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#F4A261] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-24 h-24 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="30" r="12" fill="#F4A261"/>
                                <circle cx="30" cy="50" r="10" fill="#F4A261"/>
                                <circle cx="70" cy="50" r="10" fill="#F4A261"/>
                                <circle cx="40" cy="75" r="8" fill="#F4A261"/>
                                <circle cx="60" cy="75" r="8" fill="#F4A261"/>
                                <circle cx="50" cy="60" r="15" fill="#F4A261"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-normal text-[#F4A261] tracking-wide uppercase">
                        What I Bring
                    </h3>
                    <div className="space-y-5">
                        <p className="text-lg md:text-xl font-light text-[#D4915A] leading-relaxed">
                            I bring behavioral insights, systems thinking, and a design-forward engineering mindset.
                        </p>
                        <p className="text-lg md:text-xl font-light text-[#D4915A] leading-relaxed">
                            From understanding how people make decisions to building scalable architectures, I bridge intuition with technology—turning complex problems into experiences that feel simple, human, and intentional.
                        </p>
                    </div>
                </div>

                {/* Card 3: Woman in Tech, With Purpose */}
                <div className="flex flex-col items-center text-center gap-8">
                    {/* 图标 */}
                    <div className="w-28 h-28 flex items-center justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#81B4CE] rounded-full blur-xl opacity-30"></div>
                            <svg className="w-24 h-24 relative" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="35" stroke="#81B4CE" strokeWidth="6" fill="none"/>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-normal text-[#81B4CE] tracking-wide uppercase">
                        Woman in Tech
                    </h3>
                    <div className="space-y-5">
                        <p className="text-lg md:text-xl font-light text-[#6A9BB5] leading-relaxed">
                            I build from a perspective shaped by empathy, clarity, and resilience.
                        </p>
                        <p className="text-lg md:text-xl font-light text-[#6A9BB5] leading-relaxed">
                            As a woman in tech, I care deeply about inclusive experiences—designs that welcome diverse users and empower them, without adding noise or friction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

