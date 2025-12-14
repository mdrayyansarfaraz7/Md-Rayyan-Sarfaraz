function Experience() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-500 mb-3 sm:mb-4">
            Professional <span className="font-thin text-white">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-8 sm:mb-10 md:mb-12">
            A brief look at my professional journey so far.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Card */}
          <div className="relative rounded-xl bg-black border border-emerald-900/60 text-white shadow-[0_0_35px_-18px_rgba(16,185,129,0.25)] overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Logo */}
              <div className="shrink-0">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-emerald-900/30 border border-emerald-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/exions_tech_logo.png"
                    alt="Exions Tech Logo"
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    Web Developer Intern
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-400 font-medium">
                    Exions Tech · Sep 2024
                  </p>
                  <p className="text-xs sm:text-sm text-white/60">Remote</p>
                </div>

                <ul className="list-disc pl-4 text-sm sm:text-base lg:text-lg leading-relaxed text-white/75 space-y-1">
                  <li>
                    Built responsive, high-performance interfaces focused on
                    usability.
                  </li>
                  <li>
                    Worked on client projects and the Echtonic Community Website.
                  </li>
                  <li>
                    Improved design consistency and user experience.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["React", "Next.js", "Tailwind", "JavaScript"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-emerald-800/50 bg-emerald-900/20 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] text-emerald-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;