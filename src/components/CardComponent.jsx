import React from "react";
const CardComponent = () => {
    const dataCard = [
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="M17 20.66l-1-1.73"></path>
                    <path d="M11 10.27L7 3.34"></path>
                    <path d="M20.66 17l-1.73-1"></path>
                    <path d="M3.34 7l1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20.66 7l-1.73 1"></path>
                    <path d="M3.34 17l1.73-1"></path>
                    <path d="M17 3.34l-1 1.73"></path>
                    <path d="M11 13.73l-4 6.93"></path>
                </svg>
            ),
            title: "Android Development",
            description: "Develop Android applications using Kotlin, Jetpack Compose, Material3, and modern development practices such as MVVM, Hilt, and RxJava."
        },
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <path d="M2 7h20"></path>
                    <path d="M2 11h20"></path>
                </svg>
            ),
            title: "Web Development",
            description: "Build responsive websites using HTML, CSS, Tailwind CSS, JavaScript, and modern frameworks like Next.js and Vue.js."
        },
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21V9a3 3 0 0 1 3-3h9"></path>
                    <path d="M9 13h10"></path>
                    <path d="M5 9h4"></path>
                    <path d="M5 13h4"></path>
                    <path d="M5 17h4"></path>
                </svg>
            ),
            title: "Backend Development",
            description: "Build robust and secure backend systems using Spring Boot, RESTful APIs, JWT authentication, and MyBatis."
        },
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                    <path d="M3 12a9 3 0 0 0 18 0"></path>
                </svg>
            ),
            title: "Database Management",
            description: "Design and manage databases with PostgreSQL, focusing on data modeling, optimization, and integrity."
        },
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
            ),
            title: "UX/UI Design",
            description: "Design scalable, user-friendly interfaces using Figma and implement them with frontend technologies."
        },
        {
            image: (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
            ),
            title: "Online Training",
            description: "Provide online training on Android, Web, and Backend development for individuals and organizations."
        },

    ];



    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dataCard.map((card, index) => (
                <div
                    key={index}
                    className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-900 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 cursor-pointer"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-700">
                        {card.image}
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-lg font-semibold transition-transform group-hover:translate-x-2">
                            {card.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 transition-transform group-hover:translate-x-2">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
