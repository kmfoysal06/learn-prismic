import React, { FC } from 'react';
import { SkillsSlice } from '../types';

interface SkillsProps {
  slice: SkillsSlice;
}

const Skills: FC<SkillsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="charming-portfolio-slice charming-portfolio-skills"
    >
      <div className="charming-portfolio-container charming-portfolio-skills-section">
        <div className="section-header">
          <h2 className="badge">{slice.primary.badge}</h2>
          <p>{slice.primary.section_description}</p>
        </div>
        <div className="section-content">
          {slice.primary.skills.map((item, key) => (
            <div className="single-skill" key={key}>
              <img 
                src={item.skill_logo.url}
                alt={item.skill_name || 'Skill logo'}
              />
              <h3>{item.skill_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;