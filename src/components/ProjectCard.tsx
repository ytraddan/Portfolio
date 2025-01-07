import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  previewImage: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  previewImage,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="bg-neutral-900/50 border-2 border-neutral-800 p-6 rounded-xl hover:border-blue-500   transition-[border,box-shadow] duration-300 space-y-4 hover:shadow-xl hover:shadow-blue-500/20">
      <Link href={liveUrl}>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={previewImage}
            alt={`${title} preview`}
            className="object-cover"
            fill
            priority
          />
        </div>
      </Link>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Link href={liveUrl}>
            <h3 className="text-xl font-bold hover:text-blue-500 transition-colors ">
              {title}
            </h3>
          </Link>
          <div className="flex gap-3">
            <Link
              href={liveUrl}
              className="hover:text-blue-500 transition-colors"
            >
              <ExternalLinkSVG />
            </Link>
            <Link
              href={githubUrl}
              className="hover:text-blue-500 transition-colors"
            >
              <GithubSVG />
            </Link>
          </div>
        </div>
        <p className="text-neutral-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-neutral-800 text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ExternalLinkSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

const GithubSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
};
