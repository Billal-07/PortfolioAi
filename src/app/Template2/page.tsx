import React from 'react';
import { User, Mail, MapPin, Award, Users, Briefcase, BookOpen } from 'lucide-react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

// Custom Card component to replace shadcn/ui
const Card = ({ children, className = '' }: CardProps) => (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
        {children}
    </div>
);

const HRPortfolio = () => {
    // Sample HR Manager data
    const data = {
        name: "Sarah Anderson",
        title: "Senior HR Manager | People Operations",
        location: "Boston, MA",
        age: "35",
        expertise: {
            completed_initiatives: "15+",
            team_members: "200+",
            years_experience: "10+",
            certifications: "5+"
        },
        languages: [
            { name: "English", proficiency: 100 },
            { name: "Spanish", proficiency: 85 }
        ],
        skills: [
            {
                title: "Talent Management & Recruitment",
                description: "Led full-cycle recruitment processes, implementing innovative sourcing strategies that reduced time-to-hire by 30%. Developed and maintained relationships with top talent, successfully managing a pipeline of over 500 candidates annually."
            },
            {
                title: "Employee Relations & Development",
                description: "Designed and implemented comprehensive employee development programs, including mentorship initiatives and leadership training. Maintained 90% employee satisfaction rate through effective conflict resolution and policy implementation."
            },
            {
                title: "HR Analytics & Strategy",
                description: "Leveraged data-driven insights to optimize HR processes, resulting in 25% improvement in retention rates. Developed and tracked KPIs for workforce planning, engagement, and performance management."
            }
        ]
    };

    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <Card className="p-8 mb-6">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                        <div className="flex items-center justify-center w-40 h-40 rounded-full 48 bg-gradient-to-r from-purple-400 to-pink-400">
                            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" className='w-full h-full' />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
                            <p className="mt-2 text-lg text-gray-600">{data.title}</p>
                            <div className="flex flex-wrap justify-center gap-4 mt-4 md:justify-start">
                                <span className="flex items-center gap-2 text-gray-600">
                                    <MapPin size={16} />
                                    {data.location}
                                </span>
                                <span className="flex items-center gap-2 text-gray-600">
                                    <Mail size={16} />
                                    Contact
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
                    {Object.entries(data.expertise).map(([key, value]) => (
                        <Card key={key}>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-purple-600">{value}</p>
                                <p className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="grid gap-6 md:grid-cols-3">
                    {data.skills.map((skill, index) => (
                        <Card key={index}>
                            <div className="p-6">
                                <h3 className="mb-4 text-xl font-semibold text-purple-600">{skill.title}</h3>
                                <p className="text-gray-600">{skill.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Languages */}
                <Card className="p-6 mt-6">
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">Languages</h2>
                    <div className="space-y-4">
                        {data.languages.map((language, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-600">{language.name}</span>
                                    <span className="text-gray-600">{language.proficiency}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                                        style={{ width: `${language.proficiency}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default HRPortfolio;