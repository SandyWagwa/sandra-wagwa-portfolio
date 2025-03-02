import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Software Developer',
  title: 'Hello i am',
  tagline: 'Sandra Wagwa',
  description:
    "Experienced Full-Stack Developer proficient in Node.js, TypeScript, and RESTful APIs, with expertise in authentication, database optimization, and building scalable systems. Skilled in asynchronous programming, event-driven architecture, and collaborative development using Git...",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
