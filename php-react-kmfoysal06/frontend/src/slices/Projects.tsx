import React, { FC } from 'react';
import { ProjectsSlice } from '../types';

interface ProjectsProps {
  slice: ProjectsSlice;
}

const Projects: FC<ProjectsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="charming-portfolio-container charming-portfolio-projects-section">
        <div className="section-header">
          <h2 className="badge">{slice.primary.badge}</h2>
          <p>{slice.primary.section_description}</p>
        </div>
        <div className="section-content">
          {slice.primary.projects.map((item, key) => (
            <div className="single-project" key={key}>
              <img 
                src={item.image.url}
                alt={item.title || 'Project image'}
              />
              <div className="project-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;