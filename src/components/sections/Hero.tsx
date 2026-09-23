import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="container-custom w-full">
        <div className="max-w-6xl">
          {/* Eyebrow */}
          <div className="eyebrow">
            AI Python Full Stack Developer
          </div>

          {/* Main Heading */}
          <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]">
            I build digital products
            <br className="hidden sm:block" /> that solve{" "}
            <span className="text-[#f59e0b]">real problems.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg sm:leading-8">
            I build modern web applications, AI-powered products, and
            data-driven solutions — taking ideas from concept to deployment.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#fbbf24]"
            >
              View My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#262626] px-6 py-3.5 text-sm font-semibold text-[#f5f5f5] transition hover:border-[#525252] hover:bg-[#111111]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Availability */}
          <div className="mt-14 flex flex-col gap-4 text-sm text-[#737373] sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
              Available for freelance projects
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={15} />
              Tamil Nadu, India
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#work"
          aria-label="Scroll to work"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#737373] transition hover:text-[#f5f5f5] lg:flex"
        >
          Scroll to explore
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}