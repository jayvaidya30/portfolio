export enum ProjectStatus {
  Live = 'Live',
  InProgress = 'In Progress',
  Maintenance = 'Maintenance',
  Concept = 'Concept'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: ProjectStatus;
  repoUrl: string;
  demoUrl: string;
  tags: string[];
}
