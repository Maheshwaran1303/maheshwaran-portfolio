"use client";

import {
  BarChart3,
  BrainCircuit,
  Globe2,
  Rocket,
  Server,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to establish a strong digital presence and make it easier for customers to discover and contact a business.",
    technologies: "Next.js · React · Tailwind CSS",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Full Stack Web Applications",
    description:
      "End-to-end web applications with modern interfaces, backend systems, authentication, databases, and APIs.",
    technologies: "React · Next.js · Python · Django",
    icon: Workflow,
  },
  {
    number: "03",
    title: "AI-Powered Applications",
    description:
      "Practical AI features integrated into web applications to automate workflows, process information, and create smarter user experiences.",
    technologies: "Python · AI APIs · Next.js · Django",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "REST API Development",
    description:
      "Structured and maintainable APIs that connect frontend applications, databases, third-party services, and business workflows.",
    technologies: "Python · Django REST Framework",
    icon: Server,
  },
  {
    number: "05",
    title: "Data Analytics & Dashboards",
    description:
      "Data analysis and interactive dashboards that transform raw business data into useful insights and visual reports.",
    technologies: "Python · pandas · Power BI · Excel",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Deployment & Hosting",
    description:
      "Application deployment and production setup for modern web projects, including frontend, backend, domains, and hosting environments.",
    technologies: "Vercel · Render · Hostinger · VPS",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding border-t border-[#262626]"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="eyebrow">Services</span>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              From idea to
              <br />
              <span className="text-[#737373]">working product.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg lg:justify-self-end">
            I help businesses and individuals turn ideas, requirements, and
            real-world problems into practical digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid border-l border-t border-[#262626] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: Number(service.number) * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-r border-[#262626] p-6 transition-colors duration-300 hover:bg-[#111111] sm:p-8 lg:p-9"
                >
                {/* Number + Icon */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#525252]">
                    {service.number}
                  </span>

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#f59e0b] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-14 text-xl font-semibold tracking-tight sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#737373]">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 border-t border-[#262626] pt-5">
                  <p className="text-xs leading-5 text-[#525252]">
                    {service.technologies}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}