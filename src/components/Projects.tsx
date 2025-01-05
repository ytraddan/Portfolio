import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "The Gallery",
    description:
      "Full-Stack Next.js application for image collection management featuring user authentication, image uploads, Masonry Layout, and CRUD operations.",
    githubUrl: "https://github.com/ytraddan/TheGallery",
    liveUrl: "https://the-gallery-fawn.vercel.app",
    previewImage:
      "https://utfs.io/f/rvtSvzoehpAaEpfjGKYBU7mH2QboOyxF8ZvjrdX36ASaMgki",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Clerk",
    ],
  },
  {
    title: "Fake Products Store",
    description:
      "SPA for product catalog management using React, React Router, and Redux. Features CRUD operations, filtering, pagination, and theme switching.",
    githubUrl: "https://github.com/ytraddan/FakeProductsStore",
    liveUrl: "https://fake-products-store.vercel.app",
    previewImage:
      "https://utfs.io/f/rvtSvzoehpAaw2nJgTs2YxnTMilAEODa9R1yLmK5HrZbQSd7",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
  },
];

export default function Projects() {
  return (
    <section className="space-y-6" id="projects">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className=" flex flex-col md:flex-row gap-4 items-start ">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
