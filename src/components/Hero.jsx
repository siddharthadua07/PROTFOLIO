import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import mainImg from "../assets/main.jpg";
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
    const [text, setText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'];

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentRole.length) {
                    setText(currentRole.substring(0, text.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (text.length > 0) {
                    setText(currentRole.substring(0, text.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentRoleIndex]);

    return (
        <div className={`${styles.gradientBg} h-screen w-full relative overflow-hidden font-primary`}>
            {/* Animated grid background */}
            <div className={`${styles.gridLines} opacity-30`}></div>

            {/* Scanning line effect */}
            <div className={styles.scanLine}></div>

            {/* Floating orbs */}
            <div className={`${styles.orb} w-96 h-96 bg-sky-500/20 top-[-10%] left-[-10%]`}></div>
            <div className={`${styles.orb} w-80 h-80 bg-blue-600/20 bottom-[-10%] right-[-5%]`} style={{ animationDelay: '-4s' }}></div>
            <div className={`${styles.orb} w-64 h-64 bg-indigo-500/15 top-1/2 left-1/3`} style={{ animationDelay: '-2s' }}></div>

            {/* Floating particles */}
            {[0, -2, -4, -6, -8, -10, -12, -14].map((delay, index) => (
                <div
                    key={index}
                    className={`${styles.particle} bg-sky-400/50`}
                    style={{
                        width: index % 2 === 0 ? '8px' : '12px',
                        height: index % 2 === 0 ? '8px' : '12px',
                        top: `${20 + (index * 10)}%`,
                        left: `${10 + (index * 5)}%`,
                        animationDelay: `${delay}s`
                    }}
                ></div>
            ))}

            {/* Main content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left side - Text content */}
                    <div className="flex-1 text-center lg:text-left relative">
                        <div className={`${styles.bracket} text-sky-500 hidden lg:block absolute -left-12 top-0`}>
                            {"{"}
                        </div>

                        <p className="text-sky-400 font-display text-lg md:text-xl mb-4 animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px] [animation-delay:0.2s] tracking-wider">
                            <span className="text-sky-300">&lt;</span> Hello World <span className="text-sky-300">/&gt;</span>
                        </p>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px] [animation-delay:0.4s]">
                            Siddhartha Dua
                        </h1>

                        <div className="mb-6 animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px] [animation-delay:0.6s] min-h-[3rem]">
                            <span className="text-gray-400 text-xl md:text-2xl">I am a </span>
                            <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                {text}
                                <span className={styles.cursor}>|</span>
                            </span>
                        </div>

                        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px] [animation-delay:0.8s] leading-relaxed">
                            Crafting elegant solutions through clean code and innovative design. Passionate about building digital experiences that make a difference.
                        </p>

                        <div className="animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px] [animation-delay:1s] grid grid-cols-3 gap-4 pt-4 mb-8">
                            <div className={styles.statCard}>
                                <div className="text-3xl md:text-4xl font-bold text-gradient font-space-grotesk">5+</div>
                                <div className="text-slate-400 text-sm mt-1">Years Exp.</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className="text-3xl md:text-4xl font-bold text-gradient font-space-grotesk">50+</div>
                                <div className="text-slate-400 text-sm mt-1">Projects</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className="text-3xl md:text-4xl font-bold text-gradient font-space-grotesk">30+</div>
                                <div className="text-slate-400 text-sm mt-1">Clients</div>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center lg:justify-start animate-[textReveal_1s_ease-out_forwards] opacity-0 translate-y-[30px]" style={{ animationDelay: '1.2s' }}>
                            <button
                                className={styles.ctaButtonPrimary}
                                onClick={() => scrollToSection('portfolio')}
                            >
                                View My Work
                            </button>
                            <button
                                className={styles.ctaButtonSecondary}
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact Me
                            </button>

                        </div>
                    </div>

                    {/* Right side - Profile image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className={styles.profileContainer}>
                            <div className={styles.profileGlow}></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className={styles.profileRing}></div>
                                <div className={styles.profileRingInner}></div>
                                <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <img
                                        src={mainImg}
                                        alt="Siddhartha Dua"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;