import React from "react";
import { ExternalLink } from "lucide-react";
import { Project, ProjectStatus } from "../app/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine color based on status
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.Live:
        return "bg-emerald-500";
      case ProjectStatus.Building:
        return "bg-amber-500";
      case ProjectStatus.Maintenance:
        return "bg-orange-500";
      case ProjectStatus.Concept:
        return "bg-indigo-500";
      default:
        return "bg-neutral-500";
    }
  };

  const statusColor = getStatusColor(project.status);

  // Reusable Icon to keep styles consistent without cluttering the JSX
  const GithubIcon = (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-white"
      fill="currentColor"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  return (
    <div className="group relative bg-neutral-900 rounded-2xl overflow-hidden max-w-80 border border-neutral-800 shadow-sm hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-40 w-full overflow-hidden bg-neutral-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Header: Title & Status */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
            {project.title}
          </h3>

          {/* Animated Status Dot */}
          <div className="flex items-center gap-2 bg-black px-2 py-1 rounded-full border border-neutral-800">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${statusColor}`}
              ></span>
            </span>
            <span className="text-xs font-medium text-neutral-400 whitespace-nowrap">
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-6 mb-4 grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links - UPDATED LOGIC */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800">
          
          {project.repo && (
            <>
              {project.repo.type === "monorepo" ? (
                // Single Repo Link
                <a
                  href={project.repo.url}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  {GithubIcon}
                  <span>Source</span>
                </a>
              ) : (
                // Separate Frontend/Backend Links
                <>
                  <a
                    href={project.repo.frontend}
                    className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    {GithubIcon}
                    <span>Frontend</span>
                  </a>
                  <a
                    href={project.repo.backend}
                    className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    {GithubIcon}
                    <span>Backend</span>
                  </a>
                </>
              )}
            </>
          )}

          {/* Live Demo Link */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors ml-auto group/link"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;