"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectPage = () => {
    const [filter, setFilter] = useState('All');
    const projects = [
        {
            category: 'Web',
            image: "/langNet.png",
            link: "https://langnet.netlify.app/",
            title: "LangNet | Web Application",
            paragraph: "A LangNet design using NextJs with Rest APIs."
        },
        {   
            category: 'Web',
            image: "/movies.png",
            link: "https://movie-legend-24h.firebaseapp.com/",
            title: "Movie | Web Application",
            paragraph: "A movie design dynamic web page using ReactJs with Rest APIs."
        },
        {
            category: 'Mobile',
            image: "/kroya.png",
            link: "https://drive.google.com/uc?id=1ZVSa-eBMHEf3KE2c4SYJJvLqlQFI7XYJ&export=download",
            title: "Kroya | Android App",
            paragraph: "Dynamic application designed using Kotlin and Jetpack Compose"
        }
    ];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        My Personal Projects
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Innovative solutions spanning web and mobile platforms, 
                        demonstrating versatility and technical expertise.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-16">
                <div className="flex justify-center mb-10">
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700">Filter by:</span>
                        <select 
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="All">All Categories</option>
                            <option value="Web">Web</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <Link 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="relative w-full h-56 overflow-hidden">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {project.paragraph}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ProjectPage;