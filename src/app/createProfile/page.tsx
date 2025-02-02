'use client'
import Link from "next/link";
import React, { useState } from "react";

interface SocialLinks {
    linkedIn: string;
    github: string;
    facebook: string;
    instagram: string;
}

const CreateProfile: React.FC = () => {
    const [skills, setSkills] = useState<string[]>([]);
    const [newSkill, setNewSkill] = useState<string>("");
    const [socialLinks, setSocialLinks] = useState<SocialLinks>({
        linkedIn: "",
        github: "",
        facebook: "",
        instagram: "",
    });
    const [avatar, setAvatar] = useState<string>("https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png");
    const [selectedImageOption, setSelectedImageOption] = useState<string | null>(null);
    const [vectorizedImage, setVectorizedImage] = useState<string | null>(null);
    const [uploadedImageFile, setUploadedImageFile] = useState<File | null>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setUploadedImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVectorizeImage = async () => {
        if (uploadedImageFile) {
            console.log("Uploading image:", uploadedImageFile.name);
            const formData = new FormData();
            formData.append('image', uploadedImageFile);

            try {
                const response = await fetch('https://cors-anywhere.herokuapp.com/https://vectorizer.ai/api/v1/vectorize', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + btoa('vkst3qjz5jr86ga:3uigd4imir5j48c7iqf7upmd1q4429lgjmrnbj6q6revotm9e0sq'),
                    },
                    body: formData,
                });

                console.log("Response status:", response.status);

                if (response.ok) {
                    const blob = await response.blob();
                    const url = URL.createObjectURL(blob);
                    setVectorizedImage(url);
                    console.log("Vectorized image URL:", url);
                } else {
                    console.error('Error vectorizing image:', response.statusText);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        } else {
            console.warn("No uploaded image file found.");
        }
    };

    const handleAddSkill = (e: any) => {
        e.preventDefault()
        if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
            setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skill: string) => {
        setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    };

    const handleSocialChange = (field: keyof SocialLinks, value: string) => {
        setSocialLinks((prevLinks) => ({ ...prevLinks, [field]: value }));
    };

    return (
        <div className="flex min-h-screen bg-black text-white p-8">
            {/* Left Section */}
            <div className="w-3/5 p-8 bg-gray-900 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold">Create Your Profile</h1>
                <p className="mt-2 text-sm text-gray-400">
                    Tell Us About Yourself so we can start generating Your Portfolio using AI
                </p>

                <form className="mt-8 space-y-6">
                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-400">
                            UserName
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                        />
                    </div>

                    {/* About You */}
                    <div>
                        <label htmlFor="about" className="block text-sm text-gray-400">
                            About You
                        </label>
                        <textarea
                            id="about"
                            rows={3}
                            className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                        ></textarea>
                    </div>

                    {/* Age */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="age" className="block text-sm text-gray-400">
                                Age
                            </label>
                            <input
                                id="age"
                                type="number"
                                className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                            />
                        </div>
                        {/* Dropdown */}
                        <div className="w-1/2">
                            <label htmlFor="menu" className="block text-sm text-gray-400">
                                Menu Label
                            </label>
                            <select
                                id="menu"
                                className="w-full mt-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                            >
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <label htmlFor="skills" className="block text-sm text-gray-400">
                            Skills
                        </label>
                        <div className="flex mt-1">
                            <input
                                id="skills"
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="Enter a skill"
                                className="flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-l-lg"
                            />
                            <button
                                type="submit"
                                onClick={handleAddSkill}
                                className="px-4 py-2 bg-purple-500 text-black font-semibold rounded-r-lg hover:bg-purple-600"
                            >
                                Add
                            </button>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm"
                                >
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSkill(skill)}
                                        className="ml-2 text-red-500 hover:text-red-700"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <label className="block text-sm text-gray-400">
                            Connect Your Socials
                        </label>
                        {Object.keys(socialLinks).map((key) => (
                            <div key={key} className="mt-2">
                                <input
                                    type="text"
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                    value={socialLinks[key as keyof SocialLinks]}
                                    onChange={(e) =>
                                        handleSocialChange(key as keyof SocialLinks, e.target.value)
                                    }
                                    className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>

            {/* Right Section */}
            <div className="w-2/5 h-2/5 flex flex-col items-center p-8">
                <h2 className="text-3xl font-light">Upload Your Avatar</h2>
                <div className="w-full h-full flex flex-row mt-6 justify-between items-center">
                    <div className="mt-4 flex flex-col space-y-4">
                        <button
                            className={`w-50 px-4 py-2 ${selectedImageOption === "current" ? "bg-purple-500 text-white" : "bg-gray-800 text-purple-400"}  rounded-lg hover:bg-gray-700`}
                            onClick={() => setSelectedImageOption("current")}
                        >
                            Use Current Image
                        </button>
                        <button
                            className={`w-50 px-4 py-2 ${selectedImageOption === "vectorize" ? "bg-purple-500 text-white" : "bg-gray-800 text-purple-400"} rounded-lg hover:bg-gray-700`}
                            onClick={() => {
                                setSelectedImageOption("vectorize");
                                handleVectorizeImage();
                            }}
                        >
                            Vectorize This Image using AI
                        </button>
                    </div>
                    <div className="w-50 h-50 rounded-full overflow-hidden" style={{ width: '150px', height: '150px' }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="hidden cursor-pointer"
                            id="avatarInput"
                        />
                        <label htmlFor="avatarInput">
                            <img
                                src={vectorizedImage || avatar}
                                alt="Avatar"
                                className="w-full h-full object-cover cursor-pointer"
                                style={{ borderRadius: '50%' }}
                            />
                        </label>
                    </div>
                </div>
                <Link href={'select'} className="w-full flex justify-center">
                    <button className="mt-6 w-1/2 px-6 py-2 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-600">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CreateProfile;
