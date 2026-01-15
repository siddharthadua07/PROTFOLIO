import React, { useEffect } from 'react';
import './Journey.css';

const Journey = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in'
        );

        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="journey-section relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d1117] to-[#0a192f] py-20 md:py-32">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="grid-lines opacity-20"></div>
                <div className="orb w-72 h-72 bg-sky-500/10 top-[20%] right-[10%]" style={{ animationDelay: '-3s' }}></div>
                <div className="orb w-96 h-96 bg-blue-600/10 bottom-[10%] left-[5%]" style={{ animationDelay: '-6s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Section header */}
                <div className="text-center mb-16 md:mb-24 scroll-fade-in">
                    <p className="text-sky-400 font-display text-lg md:text-xl mb-4 tracking-wider">
                        <span className="text-sky-300">&lt;</span> My Journey <span className="text-sky-300">/&gt;</span>
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Professional <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">A glimpse into my career progression and key milestones</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line (Middle Line) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-transparent"></div>

                    <div className="space-y-12 md:space-y-16">
                        {/* Item 1 - Senior Developer */}
                        <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                            <div className="hidden md:block"></div>
                            <div className="ml-20 md:ml-0 md:pl-12 scroll-slide-right relative">
                                {/* Connector Branch (Desktop) */}
                                <div className="hidden md:block absolute left-0 top-12 w-12 h-0.5 bg-sky-500/40 -translate-x-full"></div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group">
                                    <div className="absolute left-8 md:left-0 md:-translate-x-1/2 top-10 w-4 h-4 bg-sky-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-sky-500/50 z-20"></div>
                                    <div className="absolute left-8 md:left-0 md:-translate-x-1/2 top-10 w-8 h-8 bg-sky-500/20 rounded-full animate-ping z-10"></div>

                                    <div className="flex flex-col gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white font-display">Senior Developer</h3>
                                            <p className="text-sky-400 text-sm">2022 - Present</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">Leading development teams and architecting scalable solutions for enterprise clients. Mentoring junior developers and driving technical excellence.</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium">React</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Node.js</span>
                                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">AWS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 - Full Stack */}
                        <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                            <div className="ml-20 md:ml-0 md:pr-12 md:text-right scroll-slide-left relative">
                                {/* Connector Branch (Desktop) */}
                                <div className="hidden md:block absolute right-0 top-12 w-12 h-0.5 bg-blue-500/40 translate-x-full"></div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                                    <div className="absolute left-8 md:left-full md:-translate-x-1/2 top-10 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50 z-20"></div>
                                    <div className="absolute left-8 md:left-full md:-translate-x-1/2 top-10 w-8 h-8 bg-blue-500/20 rounded-full animate-ping z-10" style={{ animationDelay: '-1s' }}></div>

                                    <div className="flex flex-col md:items-end gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white font-display">Full Stack Developer</h3>
                                            <p className="text-blue-400 text-sm">2019 - 2022</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">Built and maintained multiple web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality products.</p>
                                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">JavaScript</span>
                                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">Python</span>
                                        <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium">MongoDB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block"></div>
                        </div>

                        {/* Item 3 - Junior Developer */}
                        <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                            <div className="hidden md:block"></div>
                            <div className="ml-20 md:ml-0 md:pl-12 scroll-slide-right relative">
                                {/* Connector Branch (Desktop) */}
                                <div className="hidden md:block absolute left-0 top-12 w-12 h-0.5 bg-indigo-500/40 -translate-x-full"></div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group">
                                    <div className="absolute left-8 md:left-0 md:-translate-x-1/2 top-10 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-indigo-500/50 z-20"></div>
                                    <div className="absolute left-8 md:left-0 md:-translate-x-1/2 top-10 w-8 h-8 bg-indigo-500/20 rounded-full animate-ping z-10" style={{ animationDelay: '-2s' }}></div>

                                    <div className="flex flex-col gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white font-display">Junior Developer</h3>
                                            <p className="text-indigo-400 text-sm">2017 - 2019</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">Started my professional journey learning from experienced developers. Contributed to various projects and rapidly expanded my technical skillset.</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">HTML/CSS</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">jQuery</span>
                                        <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium">Git</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 4 - The Beginning */}
                        <div className="relative grid md:grid-cols-2 gap-8 items-center timeline-item">
                            <div className="ml-20 md:ml-0 md:pr-12 md:text-right scroll-slide-left relative">
                                {/* Connector Branch (Desktop) */}
                                <div className="hidden md:block absolute right-0 top-12 w-12 h-0.5 bg-emerald-500/40 translate-x-full"></div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 group">
                                    <div className="absolute left-8 md:left-full md:-translate-x-1/2 top-10 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-emerald-500/50 z-20"></div>
                                    <div className="absolute left-8 md:left-full md:-translate-x-1/2 top-10 w-8 h-8 bg-emerald-500/20 rounded-full animate-ping z-10" style={{ animationDelay: '-3s' }}></div>

                                    <div className="flex flex-col md:items-end gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white font-display">The Beginning</h3>
                                            <p className="text-emerald-400 text-sm">2016 - 2017</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">Discovered my passion for coding and software development. Started learning programming fundamentals and building personal projects.</p>
                                    <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">Self-taught</span>
                                        <span className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium">Passion</span>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">Growth</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;