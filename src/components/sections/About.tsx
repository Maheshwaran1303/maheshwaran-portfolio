import {
  BrainCircuit,
  Database,
  Globe2,
  LayoutDashboard,
  Server,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    icon: Globe2,
    title: "Web Applications",
    description:
      "Modern, responsive applications built around real business requirements.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Products",
    description:
      "Practical AI features integrated into useful products and workflows.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable backend systems and REST APIs for reliable application logic.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Websites",
    description:
      "Professional websites designed to build trust and generate enquiries.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integrations",
    description:
      "AI capabilities connected to applications to automate and improve workflows.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description:
      "Dashboards, analysis, and data-driven solutions for better decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[#262626]">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* About Content */}
          <div>
            <Reveal>
              <div>
                <span className="eyebrow">About</span>
              </div>
            </Reveal>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">
              Building practical software for real-world problems.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-[#a3a3a3] sm:text-lg">
              <p>
                I&apos;m Maheshwaran, an AI Python Full Stack Developer focused
                on building useful digital products from idea to deployment.
              </p>

              <p>
                My work combines modern frontend development, Python
                backends, AI integrations, and data analytics to create
                solutions that are practical, maintainable, and focused on
                real requirements.
              </p>

              <p>
                I enjoy turning an idea or business problem into a working
                product — from planning the user experience and architecture
                to development, testing, and deployment.
              </p>
            </div>

            <div className="mt-10 border-l-2 border-[#f59e0b] pl-5">
              <p className="text-sm font-medium leading-6 text-[#f5f5f5]">
                &quot;Real Problems. Real Solutions.&quot;
              </p>

              <p className="mt-1 text-sm text-[#737373]">
                The principle behind the way I build.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#737373]">
                What I Build
              </p>
            </div>

            <div className="grid border-l border-t border-[#262626] sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="border-b border-r border-[#262626] p-6 transition-colors duration-300 hover:bg-[#111111] sm:p-7"
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[#f59e0b]"
                    />

                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {capability.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#737373]">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}