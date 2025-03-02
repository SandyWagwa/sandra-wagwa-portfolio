import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'My Projects',
  projects: [
    {
      id: getId(),
      name: 'Dynamic Travel Website',
      url: 'https://github.com/SandyWagwa/travel-and-tourism',
      repo: 'https://github.com/SandyWagwa/travel-and-tourism',
      img: '',
      year: 2023,
      tags: ['PHP', 'SQL', 'CSS'],
      description: 'A dynamic travel website that fetches and displays content like destinations, team info, media, and user messages from a database, with form handling for contact.',
    },
    {
      id: getId(),
      name: 'Process and Resource Management Simulator',
      url: 'https://github.com/SandyWagwa/pcb-and-rcb',
      repo: 'https://github.com/SandyWagwa/pcb-and-rcb',
      img: '',
      year: 2023,
      tags: ['C++'],
      description: 'A simulation that handles process creation, destruction, resource requests/releases, and scheduling, processing commands from an input file and writing results to an output file.',
    },
    {
      id: getId(),
      name: 'Ngee Ann Polytechnic Facility Booking App',
      url: 'https://github.com/SandyWagwa/np_booking',
      repo: 'https://github.com/SandyWagwa/np_booking',
      img: '',
      year: 2024,
      tags: ['Flutter'],
      description: 'A Flutter-based facility booking app with essential UI features like navigation, state management, and data passing.',
    },
    {
      id: getId(),
      name: 'Wheel of Fortune Game',
      url: 'https://github.com/SandyWagwa/wheel-of-fortune',
      repo: 'https://github.com/SandyWagwa/wheel-of-fortune',
      img: '',
      year: 2025,
      tags: ['C++'],
      description: 'A simplified "Wheel of Fortune"-style game where players spin a wheel to receive different outcomes that affect their gameplay.',
    },
    {
      id: getId(),
      name: 'Java Image Processor',
      url: 'https://github.com/SandyWagwa/Image_Processor',
      repo: 'https://github.com/SandyWagwa/Image_Processor',
      img: '',
      year: 2025,
      tags: ['Java'],
      description: 'A Java program allowing interactive column removal from images, supporting undo functionality and saving the final image as "newIMG.png."',
    },
  ],
};
