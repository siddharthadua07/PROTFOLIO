import React from 'react';
import './About.css';
import mainImg from "../assets/main.jpg";
import { Download } from "lucide-react";

const About = () => {
    return (
        <div className="about-wrapper min-h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 relative overflow-x-hidden">
            {/* Floating Particles */}
            <div className="particle" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
            <div className="particle" style={{ top: '20%', left: '90%', animationDelay: '1s' }}></div>
            <div className="particle" style={{ top: '70%', left: '8%', animationDelay: '2s' }}></div>
            <div className="particle" style={{ top: '80%', left: '85%', animationDelay: '3s' }}></div>
            <div className="particle" style={{ top: '40%', left: '95%', animationDelay: '4s' }}></div>

            {/* Main Heading at Top */}
            <div className="w-full max-w-6xl text-center mb-12 md:mb-16 z-10">
                <h2 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk animate-fade-down opacity-0">
                    About Me
                </h2>
            </div>

            <div className="max-w-6xl w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Profile Image */}
                    <div className="animate-slide-left relative flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Glowing Background Circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse-ring"></div>

                            {/* Profile Image Container */}
                            <div className="relative animate-float">
                                <div className="profile-ring w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-border-glow">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                                        {/* Profile Image */}
                                        <img
                                            src={mainImg}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                                    ✨ Available
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="animate-slide-right space-y-6">


                        <h1 className="animate-fade-up opacity-0 delay-200 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-space-grotesk">
                            Hi, I'm <span className="text-gradient">Siddhartha Dua</span>
                        </h1>

                        <p className="animate-fade-up opacity-0 delay-300 text-xl md:text-2xl text-sky-300 font-medium">
                            Full Stack Developer & UI/UX Designer
                        </p>

                        <p className="animate-fade-up opacity-0 delay-400 text-slate-300 text-lg leading-relaxed max-w-lg">
                            Passionate about crafting beautiful digital experiences that combine cutting-edge technology with elegant design. I transform ideas into reality through clean code and creative solutions.
                        </p>

                        {/* Skills Tags */}
                        <div className="animate-fade-up opacity-0 delay-500 flex flex-wrap gap-3">
                            {['React', 'Node.js', 'TypeScript', 'Figma', 'AWS'].map((skill) => (
                                <span key={skill} className="skill-tag px-4 py-2 rounded-full text-sky-300 text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="animate-fade-up opacity-0 delay-600 flex flex-col sm:flex-row gap-4 pt-4 w-full">

                            {/* View Resume */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
      w-full sm:w-auto
      px-6 py-3
      rounded-full
      text-white
      font-semibold
      text-base sm:text-lg
      inline-flex items-center justify-center gap-2
      cta-button
    "
                            >
                                View Resume
                            </a>

                            {/* Download Resume */}
                            <a
                                href="/resume.pdf"
                                download="Siddhartha_Dua_Resume.pdf"
                                className="
      w-full sm:w-auto
      px-6 py-3
      rounded-full
      border-2 border-sky-400/50
      text-sky-300
      font-semibold
      text-base sm:text-lg
      hover:bg-sky-400/10
      transition-all duration-300
      hover:border-sky-400
      inline-flex items-center justify-center gap-2
    "
                            >
                                <Download size={18} />
                                Download Resume
                            </a>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;