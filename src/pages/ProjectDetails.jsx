import React from 'react';
import './ProjectDetails.css';
import { useParams } from "react-router-dom";
import { useProjects } from "../context/ProjectsContext";
import { ExternalLink, Github } from "lucide-react";


const ProjectDetails = () => {

    // ✅ URL se project id
    const { projectId } = useParams();

    // ✅ Context se sab projects
    const projectsData = useProjects();

    // ✅ Current project ka data
    const projectData = projectsData[projectId];

    // ❌ Safety: agar galat URL ho
    if (!projectData) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white text-xl">
                Project not found
            </div>
        );
    }

    return (
        <main className="gradient-bg min-h-screen w-full overflow-auto">
            <div className="min-h-full w-full p-6 md:p-12 relative">
                {/* Floating Particles */}
                <div className="particle p1"></div>
                <div className="particle p2"></div>
                <div className="particle p3"></div>
                <div className="particle p4"></div>

                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Header Section */}
                    <header className="text-center space-y-4 animate-fade-in-up delay-100">
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                                {projectData.name}
                            </h1>
                            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                                {projectData.status}
                            </span>
                        </div>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                            {projectData.overview}
                        </p>
                    </header>

                    {/* Project Image Section */}
                    <section className="animate-fade-in-up delay-200">
                        <div className="glass-card rounded-2xl p-6">
                            <div className="project-image-container">
                                <img
                                    src={projectData.mainImage}
                                    alt="Project Screenshot"
                                    className="w-full h-full object-cover rounded-xl"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <div className="text-center space-y-3 hidden">
                                    <svg className="w-24 h-24 mx-auto text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-slate-400 text-lg font-medium">Project Screenshot</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="lg:col-span-2 space-y-8">
                            <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up delay-300">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 section-title">📋 Project Overview</h2>
                                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                    {projectData.overview}
                                </p>
                            </section>

                            <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up delay-400">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 section-title">✨ Key Features</h2>
                                <div className="space-y-3">
                                    {projectData.keyFeatures.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <p className="text-slate-300 text-base md:text-lg">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up delay-300">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 section-title">🛠️ Technologies</h2>
                                <div className="flex flex-wrap gap-3">
                                    {projectData.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge px-4 py-2 rounded-lg text-blue-300 font-medium text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section className="glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up delay-400">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 section-title">📊 Project Stats</h2>
                                <div className="space-y-4">
                                    <div className="stat-card rounded-xl p-4">
                                        <div className="text-slate-400 text-sm font-medium mb-1">Team Size</div>
                                        <div className="text-white text-2xl font-bold">{projectData.projectStats.teamSize}</div>
                                    </div>
                                    <div className="stat-card rounded-xl p-4">
                                        <div className="text-slate-400 text-sm font-medium mb-1">Duration</div>
                                        <div className="text-white text-2xl font-bold">{projectData.projectStats.duration}</div>
                                    </div>
                                    <div className="stat-card rounded-xl p-4">
                                        <div className="text-slate-400 text-sm font-medium mb-1">Status</div>
                                        <div className="text-green-400 text-2xl font-bold">{projectData.projectStats.status}</div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-3 animate-fade-in-up delay-500">

                                {/* Live Demo Button */}
                                <a
                                    href={projectData.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-base
                   flex items-center justify-center gap-2"
                                >
                                    <ExternalLink size={20} />
                                    <span>View Live Demo</span>
                                </a>

                                {/* GitHub Button */}
                                <a
                                    href={projectData.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary w-full py-4 rounded-xl text-white font-semibold text-base
                   flex items-center justify-center gap-2"
                                >
                                    <Github size={20} />
                                    <span>View on GitHub</span>
                                </a>

                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
