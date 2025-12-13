import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section className="w-full py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-emerald-500">
                        Projects
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl">
                        Selected projects showcasing my approach to building scalable,
                        user-focused web applications and platforms.
                    </p>
                </div>

                {/* Project List — 1 per row */}
                <div className="flex flex-col gap-12">
                    <ProjectCard
                        title="Creozone"
                        description="
              A collaborative design platform that enables designers to share,
              refine, and build upon others’ creations. Creozone supports
              community-driven contributions, structured feedback, and
              refinement workflows—bringing a GitHub-like collaboration model
              to the design ecosystem.
            "
                        image="/project/image1.png"
                        tech={[
                            "React",
                            "Tailwind CSS",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                        ]}
                        liveLink="https://creozone.vercel.app/"
                    />
                    <ProjectCard
                        title="Revelo"
                        description="
              A collaborative design platform that enables designers to share,
              refine, and build upon others’ creations. Creozone supports
              community-driven contributions, structured feedback, and
              refinement workflows—bringing a GitHub-like collaboration model
              to the design ecosystem.
            "
                        image="/project/image3.png"
                        tech={[
                            "Next.js",
                            "Tailwind CSS",
                            "MongoDB",
                            "Razorpay",
                            "Cloudinary"
                        ]}
                        liveLink="https://revelo-beta.vercel.app/landing"
                    />
                    <ProjectCard
                        title="Paigam"
                        description="
An open-source npm package providing ready-to-use, customizable email templates for common use cases
such as verification, password resets, OTPs, welcome emails, receipts, and promotional messages. Built
entirely in JavaScript for flexibility and easy integration.
            "
                        image="/project/image2.png"
                        tech={[
                            "Javascript",
                        ]}
                        liveLink="https://www.npmjs.com/package/paigam"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;
