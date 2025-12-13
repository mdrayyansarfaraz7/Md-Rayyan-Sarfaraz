import LightPillar from "./components/LightPillar";
import Navbar from "./components/Navbar";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">

        {/* BACKGROUND PILLAR */}
        <LightPillar
          bottomColor="#3b0103"
          topColor="#4bfaa5"
          intensity={1.0}
          rotationSpeed={0.6}
          glowAmount={0.004}
          pillarWidth={2.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={300}
          interactive={false}
          mixBlendMode="normal"
        />

        {/* CONTENT WRAPPER */}
        <div className="relative z-50 flex lg:flex-row flex-col items-center w-full h-full px-6 md:px-10 lg:px-20">

          <Navbar />

          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col gap-4 max-w-2xl
                  text-center md:text-center lg:text-left">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin leading-tight text-white mt-5 md:mt-20">
              <span className="font-hairline">Hello!</span>
              <span className="text-white font-bold"> I'm Rayyan</span>
            </h1>

            <div className="flex items-center gap-4
                    justify-center lg:justify-start">
              <div className="hidden lg:block h-[0.6px] w-40 bg-white/90"></div>
              <p className="text-lg md:text-xl font-thin tracking-wide text-white flex gap-4 items-center">
                Full Stack Developer <span className="text-4xl">✦</span>
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed text-sm font-light w-full lg:w-[80%]">
              I build modern web applications with clean UI, scalable backend architectures,
              and a focus on performance and user experience.
            </p>

            <ul className="hidden lg:block mt-12 space-y-2 text-white font-thin">
              <li>✔ Building fast, modern, and scalable web applications</li>
              <li>✔ Designing smooth user experiences with clean interfaces</li>
              <li>✔ Creating secure and efficient backend logic</li>
            </ul>

            {/* CTA */}
            <div className="mt-6 flex flex-col md:flex-row gap-4
                    justify-center lg:justify-start">
              <button className="px-6 py-3 rounded-full bg-black text-white text-lg">
                Let’s Talk
              </button>

              <button className="px-6 py-3 rounded-full border border-[#4bfaa5] text-lg font-light text-[#4bfaa5]">
                Download CV ↓
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src="/rayyan.png"
            alt="Rayyan"
            className="
       lg:mt-0
      h-72 md:h-85 lg:h-full
      w-auto object-contain
      static lg:absolute
      right-10 top-1/2 lg:-translate-y-1/2
    "
          />
        </div>



      </div>
      <div className="pt-5 bg-black">
        <Technologies/>
      </div>
    </>
  );
}

export default App;
