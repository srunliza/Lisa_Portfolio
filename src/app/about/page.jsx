"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const AboutMePage = () => {
    const education = [
        {
            name: "Scholarship Advanced Course at KSHRD",
            period: "August - December 2024",
            description: "Completed advanced scholarship course at Korea Software HRD Center"
        },
        {
            name: "Scholarship Basic Course at KSHRD",
            period: "February - July 2024",
            description: "Completed basic scholarship course at Korea Software HRD Center"
        },
        {
            name: "Bachelor of Information Technology",
            period: "2013 - 2017",
            description: "Graduated from National University of Management (NUM)"
        },
        {
            name: "BacII",
            period: "2010 - 2013",
            description: "High School Certificate at Bropei Kiri High School"
        }
    ];

    return (
        <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            {/* Profile Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6  text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                            <TypeAnimation
                                sequence={["SRUN LISA", 1000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Frontend Developer
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Passionate Web Developer with expertise in HTML, CSS, JavaScript, 
                            and frameworks like ReactJS and NextJS. Skilled in mobile development 
                            with Kotlin and Jetpack Compose, and proficient in UX/UI design.
                        </p>
                    </div>
                    <div className="flex justify-center">
                    <img
                        data-aos="zoom-in-up"
                        alt="srun lisa"
                        loading="lazy"
                        width="500"
                        height="500"
                        decoding="async"
                        data-nimg="1"
                        className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center transition-transform hover:scale-105 w-[350px] md:w-[450px] color: transparent;"
                        src="/srunlisa.jpg"
                    />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="flex justify-center">
                            <Image 
                                src="/en.png" 
                                alt="Education" 
                                width={400} 
                                height={400}
                                className="hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-gray-900">
                                My Education
                            </h2>
                            <div className="space-y-6">
                                {education.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-gray-100 p-6 rounded-xl hover:shadow-lg transition-all"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {item.period}
                                        </p>
                                        <p className="text-gray-700">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Ready to Collaborate?
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
                        Available for freelance projects and exciting opportunities. 
                        Let's create something amazing together!
                    </p>
                    <Link 
                        href="/contact"
                        className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-lg hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AboutMePage;