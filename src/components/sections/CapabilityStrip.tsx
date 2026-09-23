const capabilities = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Django",
  "REST APIs",
  "AI",
  "Data Analytics",
];

export default function CapabilityStrip() {
  return (
    <section className="border-y border-[#262626]">
      <div className="container-custom py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#737373]">
            Core Technologies
          </span>

          <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
            {capabilities.map((item) => (
              <span
                key={item}
                className="text-sm font-medium text-[#a3a3a3] transition hover:text-[#f59e0b]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}