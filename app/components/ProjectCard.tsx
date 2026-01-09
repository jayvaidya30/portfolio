import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine color based on status - keeping slight color for status but muted
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.Live:
        return 'bg-emerald-500';
      case ProjectStatus.InProgress:
        return 'bg-amber-500';
      case ProjectStatus.Maintenance:
        return 'bg-orange-500';
      case ProjectStatus.Concept:
        return 'bg-indigo-500';
      default:
        return 'bg-neutral-500';
    }
  };

  const statusColor = getStatusColor(project.status);

  return (
    <div className="group relative bg-neutral-900 rounded-2xl overflow-hidden max-w-80 border border-neutral-800 shadow-sm hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-neutral-800">
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
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusColor} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${statusColor}`}></span>
            </span>
            <span className="text-xs font-medium text-neutral-400 whitespace-nowrap">
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-4 grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800">
          <a 
            href={project.repoUrl} 
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
          <a 
            href={project.demoUrl} 
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors ml-auto group/link"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;