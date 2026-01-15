
export interface Project {
  id: string;
  title: string;
  context: string;
  role: string;
  approach: string[];
  results: string;
  stack: string;
  image?: string;
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
  GROWTH = 'growth',
  NOTES = 'notes',
  CONTACT = 'contact'
}
