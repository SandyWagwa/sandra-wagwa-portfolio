'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center text-4xl font-semibold !mb-12 text-gray-800">
        {title}
      </motion.h2>
      <div id="my-projects" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => {
          return (
            <motion.div
              key={project.id}
              className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              variants={projectVariants}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl text-gray-900">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <button className="text-blue-500 hover:text-blue-700 transition-colors duration-200">GitHub</button>
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="text-green-500 hover:text-green-700 transition-colors duration-200">Preview</button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-20"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
