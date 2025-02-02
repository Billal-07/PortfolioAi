'use client'

import React, { useState } from 'react';
import {
    Code, Terminal, Github, Linkedin, Mail,
    Globe, Award, BookOpen, Computer, Database, Server,
    Layout, Braces, Box, User, MonitorSmartphone
} from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => (
    <div className="p-6 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-750">
        <h3 className="mb-2 text-xl font-semibold text-cyan-400">{title}</h3>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-gray-700 rounded-full text-cyan-300">
                    {tag}
                </span>
            ))}
        </div>
        <a href={link} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <Globe size={16} />
            View Project
        </a>
    </div>
);

interface SkillBarProps {
    skill: string;
    level: number;
}

const SkillBar = ({ skill, level }: SkillBarProps) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-gray-300">{skill}</span>
            <span className="text-cyan-400">{level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full">
            <div
                className="h-2 transition-all duration-500 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{ width: `${level}%` }}
            ></div>
        </div>
    </div>
);

const EngineerPortfolio = () => {
    const [activeTab, setActiveTab] = useState('about');

    const data = {
        name: "Alex Richardson",
        title: "Senior Software Engineer",
        location: "San Francisco, CA",
        bio: "Passionate software engineer with 8+ years of experience in full-stack development, cloud architecture, and system design. Specialized in building scalable applications and implementing efficient solutions.",
        skills: [
            { name: "JavaScript/TypeScript", level: 95 },
            { name: "React/Next.js", level: 90 },
            { name: "Node.js", level: 88 },
            { name: "Python", level: 85 },
            { name: "AWS/Cloud", level: 82 },
            { name: "System Design", level: 85 }
        ],
        projects: [
            {
                title: "Cloud Migration Platform",
                description: "Developed an automated cloud migration platform that reduced migration time by 60% and improved success rate by 40%.",
                tags: ["AWS", "Python", "Docker", "React"],
                link: "#"
            },
            {
                title: "Real-time Analytics Dashboard",
                description: "Built a real-time analytics dashboard processing 1M+ events daily with sub-second latency.",
                tags: ["Node.js", "WebSocket", "Redis", "Vue.js"],
                link: "#"
            },
            {
                title: "API Gateway Service",
                description: "Designed and implemented a microservices API gateway handling 500K+ daily requests.",
                tags: ["Go", "gRPC", "Kubernetes", "MongoDB"],
                link: "#"
            }
        ],
        stats: [
            { label: "Years Experience", value: "8+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Cloud Certifications", value: "5" },
            { label: "Open Source Contributions", value: "100+" }
        ]
    };

    const tabs = [
        { id: 'about', label: 'About', icon: <User size={18} /> },
        { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
        { id: 'skills', label: 'Skills', icon: <MonitorSmartphone size={18} /> }
    ];

    return (
        <div className="min-h-screen p-6 text-white bg-gray-900">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="p-8 mb-6 bg-gray-800 border border-gray-700 rounded-xl">
                    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                        {/* Profile Image */}
                        <div className="flex items-center justify-center w-40 h-40 p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ">
                            <div className="flex items-center justify-center w-full h-full rounded-full">
                                <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" className='w-full h-full' />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1">
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                                    {data.name}
                                </h1>
                                <p className="mt-2 text-xl text-gray-400">{data.title}</p>
                                <p className="max-w-2xl mt-4 text-gray-300">{data.bio}</p>

                                {/* Social Links */}
                                <div className="flex justify-center gap-4 mt-6 md:justify-start">
                                    <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                                        <Github size={24} />
                                    </a>
                                    <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="p-4 text-center bg-gray-800 border border-gray-700 rounded-lg">
                            <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                            <p className="text-sm text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="overflow-hidden bg-gray-800 border border-gray-700 rounded-xl">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-700">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-4 transition-colors ${activeTab === tab.id
                                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                                        : 'text-gray-400 hover:text-cyan-300'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'about' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold text-cyan-400">About Me</h2>
                                    <p className="leading-relaxed text-gray-300">
                                        {data.bio}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">Expertise</h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="flex items-start gap-3">
                                            <Database className="text-cyan-400" />
                                            <div>
                                                <h4 className="font-semibold text-gray-200">Backend Development</h4>
                                                <p className="text-gray-400">Scalable and efficient server solutions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Layout className="text-cyan-400" />
                                            <div>
                                                <h4 className="font-semibold text-gray-200">Frontend Architecture</h4>
                                                <p className="text-gray-400">Modern and responsive web applications</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Server className="text-cyan-400" />
                                            <div>
                                                <h4 className="font-semibold text-gray-200">Cloud Infrastructure</h4>
                                                <p className="text-gray-400">AWS and cloud-native solutions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Braces className="text-cyan-400" />
                                            <div>
                                                <h4 className="font-semibold text-gray-200">System Design</h4>
                                                <p className="text-gray-400">Scalable architecture patterns</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {data.projects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                        )}

                        {activeTab === 'skills' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {data.skills.map((skill, index) => (
                                    <SkillBar key={index} skill={skill.name} level={skill.level} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineerPortfolio;