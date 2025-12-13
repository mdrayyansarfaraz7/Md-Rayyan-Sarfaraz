function ProjectCard({
  title,
  description,
  image,
  tech,
  liveLink,
}) {
  return (
    <div
      className="
        relative w-full rounded-2xl bg-black
        border border-emerald-900/60
        shadow-[0_0_45px_-15px_rgba(16,185,129,0.25)]
        overflow-hidden
      "
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-emerald-500/10 via-transparent to-transparent" />

      <div className="relative flex flex-col lg:flex-row gap-6 p-6 sm:p-7">
        {/* Project Image */}
        <div className="w-full lg:w-[45%] shrink-0">
          <div className="overflow-hidden rounded-xl border border-emerald-800/50">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-4xl font-semibold text-white">
              {title}
            </h3>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full px-3 py-1 text-xs
                    border border-emerald-800/50
                    bg-emerald-900/20
                    text-emerald-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-sm font-medium text-emerald-400
                hover:text-emerald-300 transition
              "
            >
              Visit Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
