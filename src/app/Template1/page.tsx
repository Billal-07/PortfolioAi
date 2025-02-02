import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Portfolio1 = () => {
    const personalInfo = {
        name: "Muhammad Osama Javaid",
        title: "MERN Stack Developer | Open Source Contributor | Tech Blogger",
        residence: "Pakistan",
        city: "Peshawar",
        age: "23",
        profileImage: "https://www.shareicon.net/download/2016/05/24/770139_man_512x512.png"
    };

    const languages = [
        { name: "Urdu", percentage: 98 },
        { name: "English", percentage: 88 }
    ];

    const skills = [
        { name: "MERN Stack Developer", percentage: 75 },
        { name: "React Developer", percentage: 91 },
        { name: "Backend Developer", percentage: 54 }
    ];

    const stats = [
        { value: "10+", label: "Completed Projects" },
        { value: "8+", label: "Freelance Clients" },
        { value: "5+", label: "Honors & Awards" },
        { value: "10+", label: "Opensource Projects" }
    ];

    const expertise = [
        {
            title: "Full Stack Development",
            description: "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients."
        },
        {
            title: "Scrum and Jira",
            description: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly."
        },
        {
            title: "Designing (UI/UX)",
            description: "I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field."
        }
    ];

    return (
        <div className="min-h-screen text-white bg-black">
            <div className="w-full mx-auto p-8 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
                {/* Sidebar */}
                <div className="p-6 rounded-lg bg-zinc-900/60 h-fit backdrop-blur-sm">
                    {/* Profile Section */}
                    <div className="mb-8 text-center">
                        <img
                            src={personalInfo.profileImage}
                            alt="Profile"
                            className="w-40 h-40 mx-auto mb-4 rounded-full"
                        />
                        <h2 className="mb-2 text-lg font-semibold">{personalInfo.name}</h2>
                        <p className="text-sm text-gray-400">{personalInfo.title}</p>
                    </div>

                    {/* Personal Info */}
                    <div className="mb-8 space-y-4">
                        <div>
                            <p className="text-sm text-gray-400">Residence</p>
                            <p className="text-emerald-500">{personalInfo.residence}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">City</p>
                            <p className="text-emerald-500">{personalInfo.city}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Age</p>
                            <p className="text-emerald-500">{personalInfo.age}</p>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-8">
                        <h3 className="mb-4 text-base text-emerald-500">Languages</h3>
                        <div className="space-y-4">
                            {languages.map((lang) => (
                                <div key={lang.name}>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-gray-300">{lang.name}</span>
                                        <span className="text-emerald-500">{lang.percentage}%</span>
                                    </div>
                                    <div className="w-full h-1 rounded-full bg-zinc-800">
                                        <div
                                            className="h-1 transition-all duration-300 rounded-full bg-emerald-500"
                                            style={{ width: `${lang.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                        <h3 className="mb-4 text-base text-emerald-500">Experties and Competencies</h3>
                        <div className="space-y-4">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-emerald-500">{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full h-1 rounded-full bg-zinc-800">
                                        <div
                                            className="h-1 transition-all duration-300 rounded-full bg-emerald-500"
                                            style={{ width: `${skill.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                        <Github className="w-6 h-6 transition-colors cursor-pointer text-emerald-500 hover:text-emerald-400" />
                        <Linkedin className="w-6 h-6 transition-colors cursor-pointer text-emerald-500 hover:text-emerald-400" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Header */}
                    <div>
                        <h1 className="mb-4 text-4xl font-bold">Hello, Check This Out!</h1>
                        <div className="inline-block">
                            <div className="px-4 py-2 rounded-lg bg-zinc-900/60 backdrop-blur-sm">
                                <p className="font-mono text-emerald-500">&lt;div&gt;I am a NexJs Dev&lt;/div&gt;</p>
                            </div>
                        </div>
                        <button className="px-8 py-2 mt-6 font-semibold text-black transition-colors rounded-lg bg-emerald-500 hover:bg-emerald-400">
                            Explore
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 border rounded-lg bg-zinc-900/60 backdrop-blur-sm border-emerald-500/20">
                                <p className="text-xl font-bold text-emerald-500">{stat.value}</p>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Expertise */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold">My Expertise</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {expertise.map((item, index) => (
                                <div key={index} className="p-6 transition-colors border rounded-lg bg-zinc-900/60 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/40">
                                    <h3 className="mb-4 text-xl font-semibold text-emerald-500">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio1;