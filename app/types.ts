export enum ProjectStatus {
  Live = "Live",
  Building = "Building",
  Maintenance = "Maintenance",
  Concept = "Concept",
}

// 1. Define the two possible shapes for your repository
export type RepoConfig =
  | { type: "monorepo"; url: string }                       // Case A: Single Link
  | { type: "separate"; frontend: string; backend: string }; // Case B: Two Links

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: ProjectStatus;

  repo?: RepoConfig; 

  demoUrl: string;
  tags: string[];
}