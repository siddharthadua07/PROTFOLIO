import React, { useState } from 'react';
import './Contact.css';
import emailjs from "@emailjs/browser";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showToast = (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `${type}-toast px-6 py-4 rounded-xl text-white font-medium shadow-2xl flex items-center gap-3`;

        const icon = type === 'success'
            ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
            : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';

        toast.innerHTML = `${icon}<span>${message}</span>`;

        const container = document.getElementById('toast-container');
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.5s ease-out forwards';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        emailjs.send(
            "service_wz6b8t1",      // SERVICE ID
            "template_tthto8a",     // TEMPLATE ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            "gpN_sKYEroTZFEwUI"             // PUBLIC KEY
        )
            .then(() => {
                showToast("Thanks! I'll contact you soon 😊", "success");
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            })
            .catch(() => {
                showToast("Something went wrong. Try again!", "error");
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="gradient-bg h-full w-full overflow-auto">
            <div className="min-h-full w-full flex items-center justify-center p-6 md:p-12 relative">
                {/* Floating Particles */}
                <div className="particle" style={{ width: '6px', height: '6px', top: '15%', left: '10%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ width: '4px', height: '4px', top: '25%', left: '85%', animationDelay: '1s' }}></div>
                <div className="particle" style={{ width: '8px', height: '8px', top: '65%', left: '8%', animationDelay: '2s' }}></div>
                <div className="particle" style={{ width: '5px', height: '5px', top: '75%', left: '90%', animationDelay: '3s' }}></div>
                <div className="particle" style={{ width: '6px', height: '6px', top: '45%', left: '5%', animationDelay: '4s' }}></div>

                <div className="max-w-7xl w-full mt-8">
                    {/* Header Section */}
                    <div className="text-center mb-8 space-y-3 opacity-0 animate-fade-in delay-100">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white playfair-font">
                            Let's <span className="text-gradient">Connect</span>
                        </h1>
                        <p className="text-lg md:text-xl text-sky-200 max-w-2xl mx-auto">
                            Have a question or want to work together? Drop me a message and I'll get back to you soon!
                        </p>
                    </div>

                    <div className="glass-card rounded-3xl p-6 md:p-8 opacity-0 animate-scale-in delay-200">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Side - Animated Illustration */}
                            <div className="opacity-0 animate-fade-in delay-100">
                                <div className="relative">
                                    {/* Animated Floating Elements */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="absolute w-64 h-64 bg-gradient-to-br from-sky-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse-ring"></div>
                                    </div>

                                    {/* Main Illustration */}
                                    <div className="relative z-10 floating-icon">
                                        <svg viewBox="0 0 400 400" className="w-full h-auto max-w-md mx-auto">
                                            <defs>
                                                <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" style={{ stopColor: '#38bdf8' }} />
                                                    <stop offset="50%" style={{ stopColor: '#3b82f6' }} />
                                                    <stop offset="100%" style={{ stopColor: '#6366f1' }} />
                                                </linearGradient>
                                                <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" style={{ stopColor: '#87ceeb' }} />
                                                    <stop offset="100%" style={{ stopColor: '#60a5fa' }} />
                                                </linearGradient>
                                                <filter id="glow">
                                                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                                    <feMerge>
                                                        <feMergeNode in="coloredBlur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                            </defs>

                                            {/* Background Circle */}
                                            <circle cx="200" cy="200" r="150" fill="url(#mainGrad)" opacity="0.1" />

                                            {/* Laptop */}
                                            <rect x="80" y="180" width="240" height="150" rx="8" fill="url(#mainGrad)" opacity="0.9" />
                                            <rect x="90" y="190" width="220" height="120" rx="4" fill="#0a0f1c" />

                                            {/* Screen Content Lines */}
                                            <rect x="110" y="210" width="80" height="8" rx="4" fill="url(#accentGrad)" opacity="0.6">
                                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                                            </rect>
                                            <rect x="110" y="230" width="120" height="8" rx="4" fill="url(#accentGrad)" opacity="0.4">
                                                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin="0.3s" repeatCount="indefinite" />
                                            </rect>
                                            <rect x="110" y="250" width="100" height="8" rx="4" fill="url(#accentGrad)" opacity="0.5">
                                                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                                            </rect>

                                            {/* Laptop Base */}
                                            <path d="M 60 330 L 340 330 L 320 350 L 80 350 Z" fill="url(#mainGrad)" opacity="0.8" />

                                            {/* Floating Email Icon */}
                                            <g filter="url(#glow)">
                                                <circle cx="320" cy="120" r="35" fill="url(#mainGrad)" opacity="0.8">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" />
                                                </circle>
                                                <path d="M305 110 L320 122 L335 110" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" />
                                                </path>
                                                <rect x="300" y="108" width="40" height="26" rx="2" stroke="#fff" strokeWidth="3" fill="none">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite" />
                                                </rect>
                                            </g>

                                            {/* Floating Message Bubble */}
                                            <g filter="url(#glow)">
                                                <circle cx="80" cy="100" r="30" fill="url(#accentGrad)" opacity="0.7">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="70" cy="100" r="4" fill="#fff">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="80" cy="100" r="4" fill="#fff">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx="90" cy="100" r="4" fill="#fff">
                                                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,8; 0,0" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                            </g>

                                            {/* Floating Plus Icons */}
                                            <g opacity="0.5">
                                                <path d="M 350 200 L 360 200 M 355 195 L 355 205" stroke="url(#accentGrad)" strokeWidth="3" strokeLinecap="round">
                                                    <animateTransform attributeName="transform" type="rotate" values="0 355 200; 360 355 200" dur="10s" repeatCount="indefinite" />
                                                </path>
                                                <path d="M 50 250 L 60 250 M 55 245 L 55 255" stroke="url(#accentGrad)" strokeWidth="3" strokeLinecap="round">
                                                    <animateTransform attributeName="transform" type="rotate" values="0 55 250; 360 55 250" dur="8s" repeatCount="indefinite" />
                                                </path>
                                            </g>

                                            {/* Decorative Dots */}
                                            <circle cx="340" cy="280" r="5" fill="url(#accentGrad)" opacity="0.6">
                                                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
                                            </circle>
                                            <circle cx="70" cy="160" r="5" fill="url(#accentGrad)" opacity="0.7">
                                                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div className="opacity-0 animate-fade-in delay-300">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sky-200 font-medium mb-2 ml-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input-field w-full px-5 py-4 rounded-xl text-lg"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sky-200 font-medium mb-2 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input-field w-full px-5 py-4 rounded-xl text-lg"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sky-200 font-medium mb-2 ml-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="input-field w-full px-5 py-4 rounded-xl text-lg resize-none"
                                            placeholder="Tell me about your project or inquiry..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="submit-btn w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg cursor-pointer"
                                        >
                                            <span className={isSubmitting ? 'hidden' : ''}>Send Message</span>
                                            <span className={isSubmitting ? '' : 'hidden'}>Sending...</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <div id="toast-container" className="fixed top-6 right-6 z-1001 space-y-3"></div>
        </div>
    );
};

export default Contact;