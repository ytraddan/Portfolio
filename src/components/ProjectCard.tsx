import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

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
    <div className="brutalist-card space-y-4">
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
          <div className="flex gap-2">
            <Link
              href={liveUrl}
              className="hover:text-blue-500 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </Link>
            <Link
              href={githubUrl}
              className="hover:text-blue-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <p className="brutalist-text">{description}</p>
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
