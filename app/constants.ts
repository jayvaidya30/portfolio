import { Project, ProjectStatus } from './types';

export const PORTFOLIO_OWNER = "Alex Dev";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Dashboard',
    description: 'A comprehensive analytics dashboard for SaaS platforms featuring real-time data visualization using D3.js and WebSocket integration for live updates.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    status: ProjectStatus.Live,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['React', 'D3.js', 'TypeScript']
  },
  {
    id: '2',
    title: 'EcoMarket',
    description: 'Sustainable e-commerce marketplace connecting local farmers with urban consumers. Features include geolocation tracking and subscription boxes.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    status: ProjectStatus.InProgress,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    id: '3',
    title: 'ZenTask AI',
    description: 'AI-powered task management application that automatically prioritizes to-do lists based on user habits and deadlines using natural language processing.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    status: ProjectStatus.Concept,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['Gemini API', 'React Native', 'Node.js']
  },
  {
    id: '4',
    title: 'CodeSnippet Pro',
    description: 'A developer productivity tool for storing, sharing, and testing code snippets in the browser with an integrated Monaco editor.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    status: ProjectStatus.Live,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['React', 'Firebase', 'Monaco']
  },
  {
    id: '5',
    title: 'FlowState Audio',
    description: 'Ambient noise generator designed for deep work sessions. Users can mix different soundscapes like rain, cafe, and forest.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    status: ProjectStatus.Maintenance,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['Web Audio API', 'Vue.js', 'Pinia']
  },
  {
    id: '6',
    title: 'CryptoWatch',
    description: 'Lightweight cryptocurrency tracker extension for Chrome. alerts users of price movements and tracks portfolio value securely.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    status: ProjectStatus.Live,
    repoUrl: '#',
    demoUrl: '#',
    tags: ['TypeScript', 'Chrome Extension']
  }
];

export const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
Your goal is to answer questions about ${PORTFOLIO_OWNER}'s skills, projects, and experience based on the context of a senior frontend engineer.
Be professional, concise, and enthusiastic.
If asked about contact info, suggest emailing contact@example.com.
If asked about specific technologies, highlight React, TypeScript, Tailwind, and AI integration skills.
`;