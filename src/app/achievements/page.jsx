import Link from "next/link";

const AchievementsPage = () => {
    const information = [
        {
            image : "/cstad.png",
            title : "Web Design ",
            name : "Issued by CSTAD",
            completed : "Completed 30,November 2023",
            cridentail : ""       
        },
        {
            image : "/hrd.png",
            title : "Basic Course of IT  ",
            name : "Issued by Korean Software HRD Center",
            completed : "Completed on 10,July 2024",
            cridentail : ""          
        },
        
    ]
    return (
        <main>
            <section data-aos="fade-up"
                data-aos-anchor-placement="top-center" className="w-full py-14">
                <div className=" px-4 md:px-6">
                    <div className="text-center flex flex-col gap-2 items-center justify-center h-[40vh]">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-semibold">My Achievements</h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-2">
                                Here are some of the certifications and credentials I have earned over the years. I am always learning and growing to become a better developer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Card Achievements */}
            <section data-aos="fade-up"
        data-aos-duration="3000" className="container m-auto w-full py-10 md:py-24 lg:py-30">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                  {
                    information.map((data)=>(
                        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="flex flex-col justify-between bg-white p-6 dark:bg-gray-950">               
                            <div>
                                <img alt="Issuing Organization" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="mb-4 h-12 w-12 rounded-full object-contain color: transparent; aspect-ratio: 50 / 50; object-fit: cover;" src={data.image}/>
                                <h3 className="mb-2 text-lg font-bold">{data.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{data.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{data.completed}</p>
                                </div>
                                <Link href={data.cridentail} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-900 underline-offset-4 hover:underline h-9 rounded-md px-3 mt-4">View Credentail</Link>
                            </div>                       
                    </div>
                    ))
                  }
                </div>
            </section>
        </main>
    )
}
export default AchievementsPage;