import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Protfolio.css";

import E_Commerce from "../assets/E_Commerce.jpeg";
import AI_Interview_Platform from "../assets/AI_Interview_Platform.jpeg";
import Hospital_Management_System from "../assets/Hospital_Management.jpeg";
import Trading_Platform from "../assets/Trading_Platform.jpeg";
import AI_Website_Builder from "../assets/AI_Website_Builder.jpeg";

// ✅ ONLY PROJECT-RELATED DATA (clean & real)
const projects = [
    {
        id: "ecommerce",
        title: "E-Commerce Platform",
        desc: "A scalable e-commerce platform with real-time inventory, secure payments, and admin analytics.",
        img: E_Commerce,
    },
    {
        id: "ai-interview",
        title: "AI Interview Platform",
        desc: "AI-powered interview system with real-time feedback, scoring, and performance analysis.",
        img: AI_Interview_Platform,
    },
    {
        id: "hospital-management",
        title: "Hospital Management System",
        desc: "Complete hospital management solution for patients, doctors, billing, and pharmacy.",
        img: Hospital_Management_System,
    },
    {
        id: "trading-platform",
        title: "Trading Platform",
        desc: "Real-time trading platform with live charts, market data, and portfolio tracking.",
        img: Trading_Platform,
    },
    {
        id: "ai-website-builder",
        title: "AI Website Builder",
        desc: "AI-powered website builder that generates full websites from simple text prompts.",
        img: AI_Website_Builder,
    },
];

const Protfolio = () => {
    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((prev) => (prev + 1) % projects.length);

    const prev = () =>
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getPosition = (i) => {
        if (i === index) return "active";
        if (i === (index + 1) % projects.length) return "right1";
        if (i === (index + 2) % projects.length) return "right2";
        if (i === (index - 1 + projects.length) % projects.length) return "left1";
        if (i === (index - 2 + projects.length) % projects.length) return "left2";
        return "hidden";
    };

    return (
        <section className="blog-section">
            {/* Background Effects */}
            <div className="grid-lines opacity-20"></div>
            <div
                className="orb w-72 h-72 bg-sky-500/10 top-[10%] right-[15%]"
                style={{ animationDelay: "-3s" }}
            ></div>
            <div
                className="orb w-96 h-96 bg-blue-600/10 bottom-[10%] left-[10%]"
                style={{ animationDelay: "-6s" }}
            ></div>

            {/* Top Heading */}
            <h2 className="headblog">Portfolio</h2>

            <div className="blog-wrapper">
                <button className="nav left" onClick={prev}>❮</button>

                <div className="carousel">
                    {projects.map((project, i) => (
                        <div key={project.id} className={`card ${getPosition(i)}`}>
                            {/* TOP IMAGE */}
                            <div className="blog-img">
                                <img src={project.img} alt={project.title} />
                            </div>

                            {/* CONTENT */}
                            <div className="blog-content">
                                <h3>{project.title}</h3>
                                <p className="blog-description">{project.desc}</p>

                                {/* ✅ NAVLINK TO PROJECT DETAILS */}
                                <NavLink
                                    to={`/projects/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="blog-link"
                                >
                                    Learn More →
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav right" onClick={next}>❯</button>
            </div>
        </section>
    );
};

export default Protfolio;
