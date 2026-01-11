import { ProjectStatus } from "./types";
import type { Project } from "./types";

const Project: Project[] = [
  {
    id: "1",
    title: "Sourcd FE",
    description:
      "Sourcd is an open-source platform where people can discover, share, and curate high-quality resources — articles, tools, videos, repositories, and more. Built with modern web technologies and designed to be simple, fast, and community-driven.",
    imageUrl: "/sourcd-frontend.svg",
    status: ProjectStatus.Building,
    repoUrl: "https://github.com/jayvaidya30/sourcd-web",
    demoUrl: "",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: "2",
    title: "Sourcd BE",
    description:
      "Sourcd is an open-source platform where people can discover, share, and curate high-quality resources — articles, tools, videos, repositories, and more. Built with modern web technologies and designed to be simple, fast, and community-driven.",
    imageUrl: "/sourcd-backend.svg",
    status: ProjectStatus.Building,
    repoUrl: "https://github.com/jayvaidya30/sourcd-api",
    demoUrl: "",
    tags: ["NodeJS", "ExpressJS", "Prisma", "Zod", "PostgresSQL", "JWT"],
  },
  {
    id: "3",
    title: "Drawly",
    description:
      "A simple, collaborative drawing app for creating hand-drawn style diagrams, wireframes, and sketches in real time.",
    imageUrl: "/drawly.svg",
    status: ProjectStatus.Maintenance,
    repoUrl: "https://github.com/jayvaidya30/drawly",
    demoUrl: "",
    tags: [
      "WebSockets",
      "NextJS",
      "Turborepo",
      "TailwindCSS",
      "PostgresSQL",
      "TypeScript",
      "NodeJS",
      "JWT",
      "Bcrypt",
    ],
  },
  {
    id: "4",
    title: "Brain-FE",
    description:
      "A modern React + TypeScript frontend built with Vite for a “Second Brain” knowledge management system.",
    imageUrl: "/second-brain-fe.svg",
    status: ProjectStatus.Maintenance,
    repoUrl: "https://github.com/jayvaidya30/Second-Brain-Frontend",
    demoUrl: "",
    tags: ["React", "TypeScript", "Vite", "JavaScript"],
  },
  {
    id: "5",
    title: "Brain-BE",
    description:
      "Second-Brain is a TypeScript-based backend built with Express and MongoDB, providing APIs for secure data storage and retrieval using JWT authentication.",
    imageUrl: "/second-brain-be.svg",
    status: ProjectStatus.Maintenance,
    repoUrl: "https://github.com/jayvaidya30/Second-Brain",
    demoUrl: "",
    tags: ["NodeJS", "MonogoDB", "Mongoose", "ExpressJS", "JWT", "CORS"],
  },
  {
    id: "6",
    title: "Chat-app",
    description:
      "chat-app is a TypeScript-based real-time chat application built using WebSockets for instant messaging between users.",
    imageUrl: "/chat-app.svg",
    status: ProjectStatus.Maintenance,
    repoUrl: "https://github.com/jayvaidya30/chat-app",
    demoUrl: "",
    tags: ["WebSockets", "TypeScript", "ExpressJS", "NodeJS"],
  },
];

export default Project;