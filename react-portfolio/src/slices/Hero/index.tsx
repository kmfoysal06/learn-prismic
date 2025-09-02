import React from "react";
import { HeroSlice } from "../../types";
import "../../styles/home.css";

interface HeroProps {
  slice: HeroSlice;
}

const Hero: React.FC<HeroProps> = ({ slice }) => {
  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="charming-portfolio-slice charming-portfolio-hero"
      >
        <div className="charming-portfolio-container charming-portfolio-hero-section">
          <div className="hero-text hero__inner">
            <h2>
              {slice.primary.hello_text ?? "Hello, I am"}{" "}
              <span className="highlight">{slice.primary.developer_full_name}</span>
            </h2>
            <p className="short-description">{slice.primary.developer_bio}</p>
            <ul className="charming-portfolio-social-links">
              {slice.primary.social_links.map((item, index) => {
                const url = item.link?.url;
                return (
                  <li key={item.link_name || index}>
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
            {slice.primary.developer_image?.url && (
              <img
                src={slice.primary.developer_image.url}
                alt={slice.primary.developer_full_name || "Developer"}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;