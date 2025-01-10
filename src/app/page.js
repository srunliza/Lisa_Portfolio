"use client"
import CardComponent from "@/components/CardComponent";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
}, [])

  return (
    <main>
      {/* header title */}
      <div data-aos="zoom-in" className="text-center">
        <div className="opacity: 1; transform: none;">
          <section className="text-center flex flex-col gap-6 items-center justify-center h-[calc(100vh-64px)]">
            <h1 className="text-6xl font-medium max-w-4xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 bg-clip-text tracking-tighter text-transparent p-2 px-4 lg:px-0">
              Looking for
            </h1>
            <h1 className="-mt-3 text-6xl font-medium max-w-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text tracking-tighter text-transparent p-2">
              <span className="typewriter ">
                <TypeAnimation
                  sequence={[
                    'Web Development',
                    1000,
                    'UX/UI Design',
                    1000,
                   
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
                />

              </span>
            </h1>
            <p className="text-2xl max-w-3xl pt-2 px-4">
              My name is <b> Long Sreyly </b>, a Web developer based in Phnom Penh. I specialize in building custom  webside  that are tailoerd to your unique needs and requirements.
            </p>
            {/* button */}
            <div className="flex flex-row gap-4">
              <Link href="#skill" className="btn inline-flex items-center justify-center whitespace-nowrap text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-white border-1 hover:bg-gray-800 h-10 px-4 py-2">
                Explore my skills
              </Link>
              <Link href="/contact" className=" btn-outline btn inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-100  hover:bg-gray-200 h-10 px-4 py-2">
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* My Skills  */}
      <section data-aos="fade-up"
        data-aos-duration="3000" id="skill" className="container m-auto w-full py-12 md:py-24 lg:py-32 flex flex-col gap-6">
        <h1 className=" text-3xl font-semibold">My Skills</h1>
        <CardComponent />
      </section>

      {/* Content */}
      <section data-aos="fade-up"
        data-aos-duration="3000"className="w-full py-12 md:py-24 lg:py-20">
        <div className=" grid  gap-6 px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Hire me for your next project</h1>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I am a Web developer with experience in building modern web application. I am available for freelance work and open to new opportunities.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-md bg-gray-900 px-8 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
