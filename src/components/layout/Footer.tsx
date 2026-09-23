import { ArrowUp } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Maheshwaran1303",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maheshwaran1303/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/techie_mahesh/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#262626]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#262626] text-sm font-semibold">
                M
              </span>

              <span className="text-sm font-semibold tracking-tight">
                MAHESWARAN
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-6 text-[#737373]">
              AI Python Full Stack Developer building digital products,
              AI-powered applications, and data-driven solutions.
            </p>

            <p className="mt-4 text-sm font-medium text-[#a3a3a3]">
              Real Problems. Real Solutions.
            </p>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12 lg:justify-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              <a
                href="#work"
                className="text-sm text-[#737373] transition hover:text-[#f5f5f5]"
              >
                Work
              </a>

              <a
                href="#about"
                className="text-sm text-[#737373] transition hover:text-[#f5f5f5]"
              >
                About
              </a>

              <a
                href="#services"
                className="text-sm text-[#737373] transition hover:text-[#f5f5f5]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-sm text-[#737373] transition hover:text-[#f5f5f5]"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-[#262626] text-xs font-semibold text-[#737373] transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
                >
                  {social.label === "GitHub"
                    ? "GH"
                    : social.label === "LinkedIn"
                        ? "in"
                        : "IG"}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-[#262626] py-6 text-xs text-[#525252] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Maheshwaran. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Next.js · TypeScript · Tailwind CSS</span>

            <a
              href="#"
              aria-label="Back to top"
              className="group flex items-center gap-2 text-[#737373] transition hover:text-[#f59e0b]"
            >
              Back to top
              <ArrowUp
                className="transition-transform group-hover:-translate-y-1"
              />
            </a>
                size={14}
          </div>
        </div>
      </div>
    </footer>
  );
}