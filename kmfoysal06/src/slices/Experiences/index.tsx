import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Experiences`.
 */
export type ExperiencesProps = SliceComponentProps<Content.ExperiencesSlice>;

/**
 * Component for "Experiences" Slices.
 */
const Experiences: FC<ExperiencesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="charming-portfolio-container charming-portfolio-experience-section">
        <div className="section-header">
          <h2 className="badge">Experience</h2>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="section-content">
          <div className="single-experience" tabIndex={0}>
            {/* <Image src="https://webermelon.com/wp-content/uploads/2022/09/Group-171.png" width="300px" height="auto" alt="Project 1" />
             */}
              <Image src="https://webermelon.com/wp-content/uploads/2022/09/Group-171.png" width={300} height={300} alt="Project 1" loading="lazy" />
              <div className="experience-details">
                <div className="primary-details">
                  <h3>Webermelon</h3>
                  <p className="timerange">Oct 2024 - Aug 2025</p>
                </div>
                <p className="designation">WordPress Developer</p>
                <p>Webermelon is a company.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
