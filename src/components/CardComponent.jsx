import React from 'react';
const CardComponent = () => {
    const dataCard = [
        {
            image: <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>,
            title: "UX/UI Design",
            description: "I build scalable and secure UX/UI using Figma."
        },

        {
            image: <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>,
            title: "Front-End Development",
            description: "I allso build application using moderm framewoks Flutter. "
        },
        {
            image: <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>,
            title: "Database",
            description: "I have experience in design and managing database using MySQL and PostgreSQL."
        },
        {
            image: <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>,
            title: "Online Training",
            description: "I provide online training for individuals and organization on various topic."
        },
        {
            image: <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>,
            title: "Web Design",
            description: "I have experience in web design using HTML, CSS, Tailwind."
        }

    ];

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dataCard.map((card, index) => (
                <div key={index} className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-900 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 cursor-pointer">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:group-hover:bg-gray-700">
                        {card.image}
                    </div>
                    <div className="mt-4 space-y-2">
                        <h3 className="text-lg font-semibold transition-transform group-hover:translate-x-2">{card.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 transition-transform group-hover:translate-x-2">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardComponent;
