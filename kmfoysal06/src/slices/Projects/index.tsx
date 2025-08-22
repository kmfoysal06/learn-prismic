import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
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
                <PrismicNextImage 
                  field={item.image} 
                  alt={typeof item.title === 'string' && item.title ? (item.title as never) : undefined}
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
