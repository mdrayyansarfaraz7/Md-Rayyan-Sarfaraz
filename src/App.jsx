import { useEffect, useState } from "react";

import Experience from "./components/Experience";
import LightPillar from "./components/LightPillar";
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

  /* Improved: Disable effects on low-end devices and check for reduced motion */
  const isLowEndDevice =
    navigator.hardwareConcurrency <= 4 ||
    navigator.deviceMemory <= 4 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      {/* HERO SECTION */}
      <div
        className={`
          relative w-full h-screen overflow-hidden
          ${isLargeScreen
            ? "bg-black"
            : "bg-[url('/image.png')] bg-cover bg-center"}
        `}
      >
        {/* LIGHT PILLAR — XL & LG SCREENS ONLY - Optimized settings */}
        {isLargeScreen && !isLowEndDevice && (
          <div className="absolute inset-0 pointer-events-none will-change-transform">
            <LightPillar
              bottomColor="#3b0103"
              topColor="#4bfaa5"
              intensity={0.5}
              rotationSpeed={0.15}
              glowAmount={0.007}
              pillarWidth={1.6}
              pillarHeight={0.3}
              noiseIntensity={0.15}
              pillarRotation={300}
              interactive={false}
              mixBlendMode="normal"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-50 w-full h-full">
          <Navbar />

          {/* MAIN CONTENT WRAPPER */}
          <div className="flex lg:flex-row flex-col items-center justify-between w-full h-full px-6 md:px-10 lg:px-20 lg:py-0">
            
            {/* TEXT CONTENT */}
            <div className="flex flex-col gap-4 max-w-4xl text-center lg:text-left lg:flex-1">
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
                  Let's Talk
                </button>

                {/* Hide Download CV on small screens, show on md and up */}
                <a
                  href="/Md_Rayyan_Sarfaraz_CV.pdf"
                  download="Md_Rayyan_Sarfaraz_CV.pdf"
                  className="
                    hidden md:inline-flex
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

            {/* IMAGE SECTION */}
            {/* XL & LG: Image floats on right side */}
            {/* MD: No image */}
            {/* SM: Image appears below text */}
            <div className="lg:flex-1 lg:flex lg:justify-end lg:items-center lg:h-full">
              {/* Small screens: Show image below - increased size to show face */}
              <img
                src="/rayyan.png"
                alt="Rayyan"
                className="
                  block sm:block md:hidden lg:hidden xl:hidden
                  w-full max-w-lg mx-auto
                  mt-4 mb-0
                  object-contain
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
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <section className="bg-black pt-10">
        <Technologies />
      </section>

      {/* EXPERIENCE */}
      <section className="bg-black pt-10">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section className="bg-black pt-10 pb-20">
        <Projects />
      </section>
      
      <Contact/>
      
      <Footer/>
    </>
  );
}

export default App;