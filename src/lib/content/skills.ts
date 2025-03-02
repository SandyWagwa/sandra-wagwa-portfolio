import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'What I Do',
  skills: [
    {
      id: getId(),
      title: 'Full Stack Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using React, Node.js, and Express.js',
        'Developing scalable and secure backend services with NestJS and Express.js',
        'Designing and managing databases with PostgreSQL, MySQL, and MongoDB',
        'Creating and integrating RESTful APIs for seamless data exchange',
        'Implementing state management with Redux and Context API in React applications',
      ],
      softwareSkills: [
        { name: 'HTML-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'ReactJS', icon: 'logos:react' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Express.js', icon: 'logos:express' },
        { name: 'NestJS', icon: 'logos:nestjs' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'Docker', icon: 'logos:docker-icon' },
      ],
    },
    {
      id: getId(),
      title: 'Frontend Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing responsive and interactive web applications using React and TypeScript',
        'Ensuring cross-browser compatibility and accessibility',
        'Using TailwindCSS for efficient and modern styling',
      ],
      softwareSkills: [
        { name: 'ReactJS', icon: 'logos:react' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
        { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
        { name: 'Redux', icon: 'logos:redux' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX Designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Designing user-friendly interfaces with Figma',
        'Creating and maintaining design systems and style guides',
        'Ensuring accessibility and usability in designs',
      ],
      softwareSkills: [
        { name: 'Figma', icon: 'logos:figma' },
        { name: 'Adobe Illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'Adobe Photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
     ],
};
