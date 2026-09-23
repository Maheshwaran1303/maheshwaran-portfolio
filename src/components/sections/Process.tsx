"use client";

import {
  Lightbulb,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business, users, requirements, and the actual problem that needs to be solved.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the user experience, technical architecture, features, and development approach before building.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the frontend, backend, APIs, database, and integrations using the right technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test",
    description:
      "Test functionality, responsiveness, integrations, and important user flows before release.",
    icon: TestTube2,
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Move the application into production and configure the required hosting and deployment environment.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Review real usage, identify improvements, and continuously refine the product when needed.",
    icon: RefreshCw,
  },
];

export default function Process() {
  return (
    <section className="section-padding border-t border-[#262626]">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="eyebrow">My Process</span>

          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            From problem
            <br />
            <span className="text-[#737373]">to production.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg">
            A structured approach helps turn ideas into reliable products
            without losing sight of the original business problem.
          </p>
        </div>

        {/* Process Grid */}
        <div className="mt-16 grid border-l border-t border-[#262626] md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Number(step.number) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-b border-r border-[#262626] p-6 transition-colors duration-300 hover:bg-[#111111] sm:p-8 lg:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#525252]">
                    {step.number}
                  </span>

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#f59e0b] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                <h3 className="mt-14 text-xl font-semibold tracking-tight sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#737373]">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}