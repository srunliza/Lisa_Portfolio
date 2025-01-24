"use client";
import Link from "next/link";
import Image from "next/image";

const AchievementsPage = () => {
    const achievements = [
        {
            image: "/hrd.png",
            title: "Basic Course of IT",
            name: "Korean Software HRD Center",
            completed: "Completed on 11 July 2024",
            showImg: "https://drive.google.com/file/d/1OB3DyRh79PMeC4C6XgNRLOt6pej-zfvE/view?usp=drive_link"          
        },
        {
            image: "/hrd.png",
            title: "Advanced Course of IT",
            name: "Korean Software HRD Center", 
            completed: "Completed on 05 December 2024",
            showImg: "https://drive.google.com/file/d/1F9ylF6W2YSfBPigVDrin3qR4Aj7mzeFq/view?usp=drive_link"          
        },
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        My Achievements
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        A collection of certifications showcasing continuous learning 
                        and professional growth in software development.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-16">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
                        {achievements.map((achievement, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center"
                            >
                                <div className="p-6 flex flex-col items-center h-full">
                                    <div className="relative w-16 h-16 mb-4">
                                        <Image 
                                            src={achievement.image} 
                                            alt="Certificate Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-600 mb-1">
                                        {achievement.name}
                                    </p>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {achievement.completed}
                                    </p>
                                    <Link 
                                        href={achievement.showImg} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        View Certificate
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AchievementsPage;