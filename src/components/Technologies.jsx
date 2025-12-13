import TechCard from "./TechCard";

const technologies = [
  { name: "React", icon: "/icons/react-svgrepo-com.svg" },
  { name: "Next.js", icon: "/icons/nextjs-icon-svgrepo-com.svg" },
  { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg" },
  { name: "Express", icon: "/icons/expressjs-ar21~bgwhite.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/icons8-postgresql.svg" },
  { name: "HTML", icon: "/icons/icons8-html5.svg" },
  { name: "CSS", icon: "/icons/css-3-svgrepo-com.svg" },
  { name: "Javascript", icon: "/icons/icons8-javascript.svg" },
  { name: "TypeScript", icon: "/icons/icons8-typescript.svg" },
  { name: "Mongoose", icon: "/icons/icons8-mongoose.svg" },
  { name: "Drizzle", icon: "/icons/Drizzle--Streamline-Simple-Icons.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "/icons/Bootstrap--Streamline-Svg-Logos.svg" },
  { name: "Zustand", icon: "/icons/zustand-original.svg" },
];

const tools = [
  { name: "VS Code", icon: "/icons/vs-code-svgrepo-com.svg" },
  { name: "GitHub", icon: "/icons/icons8-github.svg" },
  { name: "Windows", icon: "/icons/windows-applications-svgrepo-com.svg" },
  { name: "Postman", icon: "/icons/postman-icon-svgrepo-com.svg" },
  { name: "Cloudinary", icon: "/icons/cloudinary-svgrepo-com.svg" },
];

export function Technologies() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 max-w-6xl mx-auto space-y-20 sm:space-y-24">
      
      {/* Technologies I Use */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-500 mb-4">
          Technologies <span className="font-thin text-white">I Use</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 mb-10 sm:mb-12 max-w-xl">
          Core technologies I rely on to build scalable web applications.
        </p>

        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-5 sm:gap-6
          "
        >
          {technologies.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>

      {/* Stuff I Use */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-500 mb-4">
          Stuff <span className="font-thin text-white">I Use</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 mb-10 sm:mb-12 max-w-xl">
          Tools and platforms that support my daily development workflow.
        </p>

        <div
          className="
            grid grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-5 sm:gap-6
          "
        >
          {tools.map((tool) => (
            <TechCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>

    </section>
  );
}
