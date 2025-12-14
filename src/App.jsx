import { useEffect, useState } from "react";

import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Technologies } from "./components/Technologies";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLarge(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLarge;
}

function App() {
  const isLargeScreen = useIsLargeScreen();
  console.log(isLargeScreen);
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-full h-screen overflow-hidden bg-[url('/image.png')] bg-cover bg-center"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Curved wave transition at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-40">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C240,100 480,100 720,80 C960,60 1200,20 1440,40 L1440,120 L0,120 Z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative z-50 w-full h-full">
          <Navbar />

          {/* MAIN CONTENT WRAPPER */}
          <div className="flex lg:flex-row flex-col items-center justify-between w-full h-full px-6 md:px-10 lg:px-20 lg:py-0">

            {/* TEXT CONTENT - Animate from left */}
            <div className="flex flex-col gap-4 max-w-4xl text-center lg:text-left lg:flex-1 animate-slideInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-thin leading-tight text-white mt-5 md:mt-10 lg:mt-0">
                <span className="font-hairline">Hello!</span>
                <span className="font-bold"> I'm Rayyan</span>
              </h1>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="hidden lg:block h-[0.6px] w-40 bg-white/90" />
                <p className="text-lg md:text-2xl lg:text-3xl font-thin tracking-wide text-white flex gap-4 items-center">
                  Full Stack Developer <span className="text-3xl lg:text-4xl">✦</span>
                </p>
              </div>

              <p className="text-gray-200 leading-relaxed text-sm md:text-base font-light w-full lg:w-[80%]">
                I build modern web applications with clean UI, scalable backend
                architectures, and a strong focus on performance and user
                experience.
              </p>

              {/* Hide bullet points on small screens */}
              <ul className="hidden md:flex mt-6 lg:mt-10 flex-col space-y-2 text-white font-thin text-sm md:text-base">
                <li>✔ Building fast, modern, and scalable web applications</li>
                <li>✔ Designing smooth user experiences with clean interfaces</li>
                <li>✔ Creating secure and efficient backend logic</li>
              </ul>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Hide "Let's Talk" on small screens */}
                <button className="hidden sm:block px-6 py-3 rounded-full bg-black text-white text-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <a
                    href="https://wa.me/91073832503"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    Let's Talk
                  </a>

                </button>

                {/* Hide Download CV on small screens, show on md and up */}
                <a
                  href="/Md_Rayyan_Sarfaraz_CV.pdf"
                  download="Md_Rayyan_Sarfaraz_CV.pdf"
                  className="
                    inline-flex
                    px-6 py-3 rounded-full
                    border border-[#4bfaa5]
                    text-base lg:text-lg font-light text-[#4bfaa5]
                    items-center justify-center
                    hover:bg-[#4bfaa5]/10 transition-colors
                  "
                >
                  Download CV ↓
                </a>
              </div>
            </div>

            {/* IMAGE SECTION - Animate from bottom */}
            {/* XL & LG: Image floats on right side */}
            {/* MD: No image */}
            {/* SM: Image appears below text */}
            <div className="lg:flex-1 lg:flex lg:justify-end lg:items-center lg:h-full">
              {/* Small screens: Show image below */}
              <img
                src="/rayyan.png"
                alt="Rayyan"
                className="
                  block sm:block md:hidden lg:hidden xl:hidden
                  w-full max-w-lg mx-auto
                  mb-0
                  object-contain
                  animate-slideInUp
                "
              />

              {/* Large screens (LG & XL): Show floating image on right */}
              <img
                src="/rayyan.png"
                alt="Rayyan"
                className="
                  hidden lg:block
                  h-full w-auto max-w-2xl
                  object-contain object-bottom
                  animate-slideInUp
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATED DIVIDER SECTION */}
      <section className="relative bg-black py-0 overflow-hidden">
        {/* Simple elegant border line */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#4bfaa5]/50 to-transparent" />
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-black pt-10">
        <Technologies />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-black pt-10">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-black pt-10 pb-20">
        <Projects />
      </section>

      <Contact />

      <Footer />

      {/* ANIMATIONS STYLES */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandLine {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        @keyframes gradientShift {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes moveLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeTrail {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-30px) scale(0.5);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-expandLine {
          animation: expandLine 1s ease-out forwards;
        }

        .animate-gradientShift {
          animation: gradientShift 8s linear infinite;
        }

        /* Diamond comet trail effect */
        .diamond-trail {
          animation: fadeTrail 1.5s ease-out infinite;
          display: inline-block;
        }

        .trail-1 {
          animation-delay: 0s;
        }

        .trail-2 {
          animation-delay: 0.15s;
        }

        .trail-3 {
          animation-delay: 0.3s;
        }

        .trail-4 {
          animation-delay: 0.45s;
        }

        /* Floating particles */
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #4bfaa5;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          left: 20%;
          animation-delay: 1s;
          width: 6px;
          height: 6px;
        }

        .particle-3 {
          top: 40%;
          right: 15%;
          animation-delay: 2s;
        }

        .particle-4 {
          top: 70%;
          right: 25%;
          animation-delay: 3s;
          width: 5px;
          height: 5px;
        }

        .particle-5 {
          top: 30%;
          left: 50%;
          animation-delay: 4s;
        }

        /* Moving lines */
        .moving-line {
          position: absolute;
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent, #4bfaa5, transparent);
          animation: moveLine 4s linear infinite;
        }

        .line-1 {
          top: 20%;
          animation-delay: 0s;
        }

        .line-2 {
          top: 50%;
          animation-delay: 1.5s;
        }

        .line-3 {
          top: 80%;
          animation-delay: 3s;
        }

        /* Respect user's motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-slideInLeft,
          .animate-slideInUp,
          .animate-fadeIn,
          .animate-expandLine,
          .animate-gradientShift,
          .particle,
          .moving-line,
          .diamond-trail {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default App;