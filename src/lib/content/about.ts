import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'These are some of the technologies Ive been working on lately:',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'Python',
      'Jupyter Notebook',
      'PHP',
      'MySQL',
      'MySQL Server',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Git',
      'Tailwind CSS'
  ]
  },
  img: '/gal.jpg',
};
