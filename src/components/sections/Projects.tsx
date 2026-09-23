import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow">Selected Work</span>

          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Real projects.
            <br />
            Real problems.
            <br />
            <span className="text-[#737373]">Real solutions.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg">
            A selection of projects built to solve practical problems,
            improve digital experiences, and turn ideas into working
            products.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden border border-[#262626] bg-[#111111]"
            >
              {/* Project Preview */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[#262626] bg-[#171717]">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        priority={project.featured}
                        className="object-cover transition duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    ) : (
                    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f59e0b]">
                        {project.category}
                        </span>

                        <span className="mt-3 text-2xl font-semibold tracking-tight text-[#f5f5f5] sm:text-3xl">
                        {project.title}
                        </span>

                        <span className="mt-3 text-sm text-[#525252]">
                        Project preview coming soon
                        </span>
                    </div>
                    )}

                {/* Project Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#0a0a0a]/80 text-xs font-semibold backdrop-blur-sm">
                  {project.number}
                </div>
              </div>

              {/* Project Information */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f59e0b]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#a3a3a3]">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-[#262626] px-3 py-1.5 text-xs text-[#a3a3a3]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  {project.href !== "#" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 self-start border-b border-[#f59e0b] pb-1 text-sm font-semibold text-[#f5f5f5] transition hover:text-[#f59e0b] lg:self-end"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}