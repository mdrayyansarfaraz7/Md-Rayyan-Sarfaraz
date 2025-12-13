import { useEffect, useState } from "react";

import Experience from "./components/Experience";
import LightPillar from "./components/LightPillar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Technologies } from "./components/Technologies";

/* -------------------------
   SCREEN SIZE DETECTOR
-------------------------- */
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

  /* Optional: Disable effects on low-end devices */
  const isLowEndDevice =
    navigator.hardwareConcurrency <= 4 ||
    navigator.deviceMemory <= 4;

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
        {/* LIGHT PILLAR — LARGE SCREENS ONLY */}
        {isLargeScreen && !isLowEndDevice && (
          <div className="absolute inset-0 pointer-events-none will-change-transform">
            <LightPillar
              bottomColor="#3b0103"
              topColor="#4bfaa5"
              intensity={0.6}
              rotationSpeed={0.25}
              glowAmount={0.006}
              pillarWidth={1.6}
              pillarHeight={0.35}
              noiseIntensity={0.25}
              pillarRotation={300}
              interactive={false}
              mixBlendMode="normal"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-50 flex lg:flex-row flex-col items-center w-full h-full px-6 md:px-10 lg:px-20">
          <Navbar />

          {/* TEXT */}
          <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin leading-tight text-white mt-5 md:mt-20">
              <span className="font-hairline">Hello!</span>
              <span className="font-bold"> I'm Rayyan</span>
            </h1>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="hidden lg:block h-[0.6px] w-40 bg-white/90" />
              <p className="text-lg md:text-xl font-thin tracking-wide text-white flex gap-4 items-center">
                Full Stack Developer <span className="text-4xl">✦</span>
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed text-sm font-light w-full lg:w-[80%]">
              I build modern web applications with clean UI, scalable backend
              architectures, and a strong focus on performance and user
              experience.
            </p>

            <ul className="mt-10 space-y-2 text-white font-thin">
              <li>✔ Building fast, modern, and scalable web applications</li>
              <li>✔ Designing smooth user experiences with clean interfaces</li>
              <li>✔ Creating secure and efficient backend logic</li>
            </ul>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 rounded-full bg-black text-white text-lg">
                Let’s Talk
              </button>

              <button className="px-6 py-3 rounded-full border border-[#4bfaa5] text-lg font-light text-[#4bfaa5]">
                Download CV ↓
              </button>
            </div>
          </div>

          {/* IMAGE — LARGE ONLY */}
          {isLargeScreen && (
            <img
              src="/rayyan.png"
              alt="Rayyan"
              className="
                absolute right-10 top-1/2 -translate-y-1/2
                h-full w-auto object-contain
              "
            />
          )}
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
    </>
  );
}

export default App;
