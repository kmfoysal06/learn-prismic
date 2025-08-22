import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
          <h2 className="badge">Projects</h2>
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        <div className="section-content">
          <div className="single-project">
            <img src="https://ps.w.org/charming-portfolio/assets/screenshot-9.png?rev=3138395" width="300px" height="auto" alt="Project 1" />
              <div className="project-details">
                <h3>Open Directory</h3>
                <p>Open Directory is a WordPress Plugin That Will Allow You To Have a Directory of Anything Hosted on Any WordPress Sitenn</p>
                <small>directoryWordPress PluginWordPress Option API</small>
              </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
