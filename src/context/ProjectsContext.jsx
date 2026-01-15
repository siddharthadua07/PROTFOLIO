import React, { createContext, useContext } from "react";
import E_CommerceDetails from "../assets/E_CommerceDetails.jpeg";
import AI_Interview_PlatformDetails from "../assets/AI_Interview_PlatformDetails.jpeg";
import Hospital_Management_SystemDetails from "../assets/Hospital_ManagementDetails.jpeg";
import Trading_PlatformDetails from "../assets/Trading_PlatformDetails.jpeg";
import AI_Website_BuilderDetails from "../assets/AI_Website_BuilderDetails.jpeg";
// 1️⃣ Create Context
const ProjectsContext = createContext();

// 2️⃣ Projects Data (Single Source of Truth)
const projectsData = {
    ecommerce: {
        id: "ecommerce",
        name: "E-Commerce Platform",
        status: "Completed",
        mainImage: E_CommerceDetails,

        overview:
            "A scalable and modern e-commerce platform designed to deliver a smooth shopping experience with real-time inventory tracking, secure payments, and high performance. The platform supports thousands of products across multiple categories and is built with scalability and security in mind.",

        keyFeatures: [
            "Real-time inventory management with automatic stock updates",
            "Secure payment gateway with multiple payment methods",
            "Advanced product search and filtering system",
            "Admin dashboard with analytics and order management",
            "Optimized performance for high traffic users",
        ],

        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Tailwind CSS",
            "Stripe",
            "AWS",
            "Docker",
            "Redis",
        ],

        projectStats: {
            teamSize: "5 Members",
            duration: "6 Months",
            status: "Completed",
        },

        links: {
            live: "https://demo.example.com",
            github: "https://github.com/example/ecommerce-platform",
        },
    },

    "ai-interview": {
        id: "ai-interview",
        name: "AI Interview Platform",
        status: "Completed",
        mainImage: AI_Interview_PlatformDetails,

        overview:
            "An AI-powered interview preparation and assessment platform that simulates real interview scenarios. It evaluates candidates using speech analysis, facial expression detection, and intelligent feedback to improve interview readiness.",

        keyFeatures: [
            "AI-driven mock interviews with real-time feedback",
            "Speech and confidence analysis",
            "Automated scoring and performance reports",
            "Role-based interview customization",
            "Secure user authentication and profiles",
        ],

        technologies: [
            "React",
            "Next.js",
            "Python",
            "TensorFlow",
            "OpenAI API",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
        ],

        projectStats: {
            teamSize: "4 Members",
            duration: "5 Months",
            status: "Completed",
        },

        links: {
            live: "https://ai-interview-demo.com",
            github: "https://github.com/example/ai-interview-platform",
        },
    },

    "hospital-management": {
        id: "hospital-management",
        name: "Hospital Management System",
        status: "Completed",
        mainImage: Hospital_Management_SystemDetails,

        overview:
            "A comprehensive hospital management system that streamlines patient records, doctor scheduling, billing, and pharmacy management. Designed to improve operational efficiency and provide seamless digital healthcare services.",

        keyFeatures: [
            "Patient record and appointment management",
            "Doctor scheduling and availability tracking",
            "Online billing and payment integration",
            "Pharmacy and inventory management",
            "Role-based access for staff and admins",
        ],

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "Tailwind CSS",
            "Cloudinary",
        ],

        projectStats: {
            teamSize: "6 Members",
            duration: "7 Months",
            status: "Completed",
        },

        links: {
            live: "https://hospital-demo.com",
            github: "https://github.com/example/hospital-management",
        },
    },


    "trading-platform": {
        id: "trading-platform",
        name: "Trading Platform",
        status: "Pending",
        mainImage: Trading_PlatformDetails,

        overview:
            "A real-time trading platform designed for market analysis, price tracking, and trade execution. The system focuses on low latency, live charts, and risk management tools for active traders.",

        keyFeatures: [
            "Live market price tracking",
            "Advanced candlestick and indicator charts",
            "Real-time trade execution",
            "Risk management and portfolio tracking",
            "Secure authentication and data encryption",
        ],

        technologies: [
            "React",
            "Next.js",
            "WebSockets",
            "Node.js",
            "Redis",
            "PostgreSQL",
            "TradingView API",
        ],

        projectStats: {
            teamSize: "3 Members",
            duration: "Ongoing",
            status: "Pending",
        },

        links: {
            live: "https://trading-demo.com",
            github: "https://github.com/example/trading-platform",
        },
    },

    "ai-website-builder": {
        id: "ai-website-builder",
        name: "AI Website Builder",
        status: "Completed",
        mainImage: AI_Website_BuilderDetails,

        overview:
            "An AI-powered website builder that allows users to generate complete websites using simple text prompts. The platform automatically designs layouts, generates content, and deploys websites with minimal user effort.",

        keyFeatures: [
            "AI-generated website layouts and content",
            "One-click website deployment",
            "Customizable design and components",
            "SEO-optimized page generation",
            "User-friendly drag-and-drop editor",
        ],

        technologies: [
            "React",
            "Next.js",
            "OpenAI API",
            "Node.js",
            "Tailwind CSS",
            "Supabase",
            "Vercel",
        ],

        projectStats: {
            teamSize: "4 Members",
            duration: "4 Months",
            status: "Completed",
        },

        links: {
            live: "https://ai-builder-demo.com",
            github: "https://github.com/example/ai-website-builder",
        },
    },
};

// 3️⃣ Provider
export const ProjectsProvider = ({ children }) => {
    return (
        <ProjectsContext.Provider value={projectsData}>
            {children}
        </ProjectsContext.Provider>
    );
};

// 4️⃣ Custom Hook (clean usage)
export const useProjects = () => {
    return useContext(ProjectsContext);
};
