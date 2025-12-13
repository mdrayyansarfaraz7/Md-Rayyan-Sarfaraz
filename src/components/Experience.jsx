function Experience() {
  return (
    <section className="w-full py-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="mb-12">
        <h2 className="text-6xl font-bold text-emerald-500 mb-4">
          Professional <span className="font-thin text-white">Journey</span>
        </h2>
        <p className="text-white/60 mb-12">
          A brief look at my professional journey so far.
        </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card */}
          <div className="relative rounded-xl bg-black border border-emerald-900/60 text-white shadow-[0_0_35px_-18px_rgba(16,185,129,0.25)] overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative p-5 flex gap-4">
              {/* Logo */}
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-lg bg-emerald-900/30 border border-emerald-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src="/exions_tech_logo.png"
                    alt="Exions Tech Logo"
                    className="h-full w-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Web Developer Intern
                  </h3>
                  <p className="text-lg text-emerald-400 font-medium">
                    Exions Tech · Sep 2024
                  </p>
                  <p className="text-sm text-white/60">Remote</p>
                </div>

                <ul className="list-disc pl-4 text-lg leading-relaxed text-white/75 space-y-1">
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
                        className="rounded-full border border-emerald-800/50 bg-emerald-900/20 px-2.5 py-0.5 text-[11px] text-emerald-300"
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
