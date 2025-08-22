import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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
            className="charming-portfolio-slice charming-portfolio-experiences"
        >
            <div className="charming-portfolio-container charming-portfolio-experience-section">
                <div className="section-header">
                    <h2 className="badge">{slice.primary.badge}</h2>
                    <p>{slice.primary.section_description}</p>
                </div>
                <div className="section-content">
                    {slice.primary.experiences.map((item, key) => (
                        <div className="single-experience" tabIndex={0} key={key}>
                            <PrismicNextImage field={item.image} 
                            alt={typeof item.title === 'string' && item.title ? (item.title as never) : undefined}/>
                            <div className="experience-details">
                                <div className="primary-details">
                                    <h3>{item.title}    </h3>
                                    {/* <p className="timerange">Oct 2024 - Aug 2025</p> */}
                                    <p className="timerange">{item.start_time} - {!item.currently_working ? item.end_time : "Current"}</p>
                                </div>
                                <p className="designation">{item.designation}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default Experiences;
