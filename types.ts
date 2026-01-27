
export interface Project {
  id: string;
  title: string;
  challenge: string;
  result: string;
  expandedDescription: string;
  ctaText?: string;
  role: string;
  stack: string;
  imageUrl: string;
  isMentoring?: boolean;
  isIC?: boolean;
  isLead?: boolean;
  githubUrl?: string;
  tags: string[];
}

export interface Note {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
}

export interface LearningItem {
  id: string;
  category: 'Currently exploring' | 'Recently completed';
  title: string;
  description: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  WORK = 'work',
  CONTACT = 'contact'
}
