"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { React, useEffect } from "react";

const AboutMePage = () => {
    const enducation = [
        {
            name: "Scholarship Advanced Course at KSHRD",
            present: "August - December 2024",
            discription:
                "I completed a scholarship advanced course at the Korea Software HRD Center",
        },
        {
            name: "Scholarship Basic Course at KSHRD",
            present: "February - July 2024",
            discription:
                "I completed a scholarship basic course at the Korea Software HRD Center",
        },
        {
            name: "Bachelor of Information Technology",
            present: "2013 - 2017",
            discription:
                "I graduated with a Bachelor of Information Technology from the National University of Management (NUM)",
        },
        {
            name: "BacII",
            present: "2010 - 2013",
            discription:
                "High School Certificated at Bropei Kiri High School, Kampong Chhnang",
        },
    ];

    return (
        <main className="flex flex-col min-h-[100dvh]">
            {/* Profile */}
            <section data-aos="fade-up" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container m-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-5">
                        <h1 className="from-purple-500 via-indigo-500 to-purple-500 bg-clip-text  text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            <TypeAnimation
                                sequence={["SRUN LISA", 1000]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: "1em", display: "inline-block" }}
                                repeat={Infinity}
                            />
                        </h1>
                        <h3 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                            Frontend Developer
                        </h3>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a Web Developer with experience in developing applications
                            using programming languages such as HTML, CSS, Java, and
                            JavaScript. I have worked on projects involving Kotlin and Jetpack
                            Compose for Android app development, as well as PostgreSQL for
                            database management. My expertise also includes UX/UI design, and
                            I am proficient in frameworks like ReactJS, NextJS, Bootstrap 5,
                            and TailwindCSS.
                        </p>
                    </div>
                    {/* <img src="/thoen.jpg" alt="No Picture" /> */}
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
            </section>
            {/* Enducation*/}
            <section
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
            >
                <div className="container m-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    {/* imae */}
                    <img
                        className="transition-transform hover:scale-105"
                        src="/en.png"
                        alt="no pic"
                    />
                    <div className="mt-6 grid gap-6 max-w-4xl">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            My Enducation
                        </h1>
                        {enducation.map((data) => (
                            <div className="grid gap-2 transition-transform hover:scale-105">
                                <div>
                                    <h3 className="text-lg font-semibold">{data.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {data.present}
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {data.discription}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Hiere for me */}
            <section className="w-full py-12 md:py-24 lg:py-20">
                <div className="grid items-center gap-6 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            Hire me for your next project
                        </h1>
                        <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I am a Web developer with experience in building modern web
                            application. I am available for freelance work and open to new
                            opportunities.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-8 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default AboutMePage;
