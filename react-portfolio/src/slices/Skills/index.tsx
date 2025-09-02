import React from "react";
import { SkillsSlice } from "../../types";
import "../../styles/home.css";

interface SkillsProps {
  slice: SkillsSlice;
}

const Skills: React.FC<SkillsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="charming-portfolio-container charming-portfolio-skills-section">
        <div className="section-header">
          <h2 className="badge">{slice.primary.badge}</h2>
          <p>{slice.primary.section_description}</p>
        </div>
        <div className="section-content">
          {slice.primary.skills.map((item, key) => (
            <div className="single-skill" key={key}>
              {item.skill_icon?.url && (
                <img 
                  src={item.skill_icon.url}
                  alt={item.skill_name || "Skill"}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
              <h3>{item.skill_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;