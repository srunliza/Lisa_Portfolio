"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        data-aos="zoom-in" 
        className="min-h-screen flex items-center justify-center px-4 py-16"
      >
        <div className="text-center space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 tracking-tight">
            Looking for
          </h1>
          <div className="text-4xl md:text-6xl font-bold h-20 md:h-24">
            <TypeAnimation
              sequence={[
                "Web Developer", 
                1000, 
                "Android Developer", 
                1000
              ]}
              wrapper="span"
              speed={50}
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500"
              repeat={Infinity}
            />
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            I'm <span className="font-semibold text-indigo-600">Srun Lisa</span>, a developer crafting custom web solutions in Phnom Penh that transform your digital vision into reality.
          </p>
          <div className="flex justify-center space-x-4 pt-6">
            <Link 
              href="#skill" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Skills
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section 
        id="skill"
        data-aos="fade-up"
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Technical Skills
        </h2>
        <CardComponent />
      </section>

      {/* Call to Action */}
      <section 
        data-aos="fade-up"
        className="bg-white py-16 md:py-24 shadow-lg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            With a passion for creating innovative web solutions, I'm ready to transform your concepts into stunning, functional digital experiences.
          </p>
          <Link 
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}