export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Ananthi Makeup Artist",
    category: "Business Website",
    description:
      "A premium, mobile-first business website designed to showcase bridal services, portfolio work, stories, and enquiry options professionally.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    href: "https://ananthi-makeup.vercel.app/",
    image: "/projects/ananthi-makeup.png",
    featured: true,
  },

  {
    number: "02",
    title: "AI Noise Remover",
    category: "AI Application",
    description:
      "An AI-powered application focused on reducing unwanted noise from audio recordings and improving overall audio clarity.",
    technologies: [
      "Next.js",
      "Python",
      "AI",
      "Audio Processing",
    ],
    href: "#",
  },

  {
    number: "03",
    title: "Smart To-Do",
    category: "Full Stack Application",
    description:
      "A productivity application combining a modern React frontend with a Django REST backend for managing tasks efficiently.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "MySQL",
    ],
    href: "#",
  },
];