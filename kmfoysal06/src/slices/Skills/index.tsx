import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

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
          <h2 className="badge">Skills</h2>
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="section-content">
          <div className="single-skill">
            {/* <img src="https://cp.kmfoysal06.com/wp-content/uploads/2025/08/images-copy-1.png" width="100px" height="100px" alt="JavaScript" /> */}
              <Image src="https://cp.kmfoysal06.com/wp-content/uploads/2025/08/images-copy-1.png" width={100} height={100} alt="JavaScript" loading="lazy" />
              <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
