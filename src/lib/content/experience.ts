import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Kenya National Library Services',
      companyUrl: 'https://www.linkedin.com/company/kenya-national-library-service/',
      role: 'Software Engineer Intern',
      started: 'May 2024',
      upto: 'Sep 2024',
      tasks: [
        'Developed and maintained secure backend systems using Node.js.',
        'Assisted with API design and integration for efficient data exchange.',
        'Provided troubleshooting and user support for ICT services.',
        'Participated in the installation and configuration of IP phones.',
        'Supported data entry, programming, and technical support for the fibre backbone link.',
      ],
    },
    {
      company: 'The Jitu Ltd',
      companyUrl: 'https://www.linkedin.com/company/thejitu-com/',
      role: 'Software Development Intern',
      started: 'May 2023',
      upto: 'July 2023',
      tasks: [
        'Worked with HTML, CSS, JavaScript, ReactJS, NodeJS, and ExpressJS.',
        'Gained experience with Microsoft SQL Server and Azure Cloud Platform.',
        'Contributed to front-end development using ReactJS.',
        'Helped build back-end services with NodeJS and ExpressJS.',
        'Utilized Redux Toolkit for state management and Docker for containerization.',
      ],
    },
  ],
};
