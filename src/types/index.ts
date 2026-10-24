export interface Project {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'Web Application' | 'Mobile & Web App' | 'Payment & API' | 'Web Tool' | 'Editorial Web' | 'Experimental';
  language: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  isOriginal: boolean;
  isFork?: boolean;
  year: string;
  stars?: number;
  visualAccent: string;
  highlights?: string[];
  featuredOrder?: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  topics: string[];
  updated_at: string;
  created_at: string;
  default_branch: string;
}

export interface ProfileData {
  name: string;
  displayName: string;
  handle: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  timezone: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
  };
  contact: {
    email: string;
    github: string;
    telegram?: string;
    twitter?: string;
    linkedin?: string;
  };
  stats: {
    label: string;
    value: string;
    caption: string;
  }[];
}

export interface SkillCategory {
  title: string;
  code: string;
  skills: {
    name: string;
    level?: 'core' | 'frequently-used' | 'exploring';
    badge?: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  focus: string;
  description: string;
  tags: string[];
}
