import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI Craft',
    code: '01 / UI',
    skills: [
      { name: 'TypeScript', level: 'core', badge: 'Primary' },
      { name: 'React (18 / 19)', level: 'core', badge: 'Primary' },
      { name: 'Next.js', level: 'frequently-used' },
      { name: 'Tailwind CSS', level: 'core', badge: 'Primary' },
      { name: 'Motion (motion/react)', level: 'frequently-used' },
      { name: 'Vite Ecosystem', level: 'core' },
      { name: 'HTML5 & Semantic SEO', level: 'core' },
      { name: 'Responsive Layouts & Grids', level: 'core' },
    ],
  },
  {
    title: 'Backend, APIs & Scraping',
    code: '02 / API',
    skills: [
      { name: 'Node.js', level: 'core', badge: 'Runtime' },
      { name: 'Express.js', level: 'frequently-used' },
      { name: 'REST API Design', level: 'core' },
      { name: 'Cheerio & Web Scraping', level: 'frequently-used' },
      { name: 'Supabase & PostgreSQL', level: 'frequently-used' },
      { name: 'Firebase & Auth', level: 'frequently-used' },
      { name: 'Python 3', level: 'exploring' },
    ],
  },
  {
    title: 'Mobile, Systems & Tools',
    code: '03 / OPS',
    skills: [
      { name: 'Git & GitHub CLI', level: 'core' },
      { name: 'Capacitor (Android/Web)', level: 'frequently-used' },
      { name: 'Vercel Deployment', level: 'core' },
      { name: 'Bun / npm / pnpm', level: 'core' },
      { name: 'Docker Basics', level: 'exploring' },
      { name: 'Linux / Bash Scripting', level: 'frequently-used' },
    ],
  },
];
