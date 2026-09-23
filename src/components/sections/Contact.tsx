import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "techiemahesh86@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=techiemahesh86@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/918098437212?text=Hi%20Maheshwaran%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    icon: MessageCircle,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    shortLabel: "GH",
    href: "https://github.com/Maheshwaran1303",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "https://www.linkedin.com/in/maheshwaran1303/",
  },
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "https://www.instagram.com/techie_mahesh/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding border-t border-[#262626]"
    >
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* Main CTA */}
          <div>
            <span className="eyebrow">Contact</span>

            <h2 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Have a project
              <br />
              <span className="text-[#737373]">in mind?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#a3a3a3] sm:text-lg">
              Tell me what you are trying to build, what problem you want to
              solve, or what you need help with. Let&apos;s start with a
              conversation.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918098437212?text=Hi%20Maheshwaran%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#f59e0b] px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#fbbf24]"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Contact Information */}
          <div className="lg:pt-16">
            <div className="border-t border-[#262626]">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-[#262626] py-6"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#f59e0b]"
                      />

                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-[#525252]">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm text-[#a3a3a3] transition group-hover:text-[#f5f5f5]">
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#525252] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f59e0b]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#525252]">
                Find me online
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex h-11 items-center gap-2 border border-[#262626] px-4 text-[#a3a3a3] transition hover:border-[#f59e0b] hover:text-[#f59e0b]"
                  >
                    <span className="text-xs font-bold tracking-wide">
                      {social.shortLabel}
                    </span>

                    <span className="text-sm">
                      {social.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}