import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next/pages";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills: FC<SkillsProps> = ({ slice }) => {
  return (
    <>
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
                <PrismicNextImage 
                field={item.skill_logo}
                alt={typeof item.skill_name === 'string' && item.skill_name ? (item.skill_name as never) : undefined}
                />
                <h3>{item.skill_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
