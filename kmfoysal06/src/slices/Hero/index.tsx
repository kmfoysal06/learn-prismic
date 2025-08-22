import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import "@/app/styles/home.css";
import { PrismicNextImage } from "@prismicio/next";
import { asLink } from "@prismicio/helpers";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="charming-portfolio-slice charming-portfolio-hero"
      >
        <div className="charming-portfolio-container charming-portfolio-hero-section">
              <div className="hero-text hero__inner">
                  <h2>Hello, I am <span className="highlight">{slice.primary.developer_full_name}</span></h2>
                  <p className="short-description">{slice.primary.developer_bio}</p>
                  <ul className="charming-portfolio-social-links">
                      {slice.primary.social_links.map((item) => {
                        const url = asLink(item.link);
                        return (
                          <li key={item.link_name as string}>
                            {url && (
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                {item.link_name}
                              </a>
                            )}
                          </li>
                        );
                      })}
                  </ul>
              </div>
              <div className="hero-image hero__inner">
                  <PrismicNextImage
                    field={slice.primary.developer_image}
                    alt={typeof slice.primary.developer_full_name === 'string' && slice.primary.developer_full_name ? (slice.primary.developer_full_name as never) : undefined}
                  />
              </div>
          </div>
      </section>
    </>
    
  );
};

export default Hero;
