import React from 'react';

const Hero = ({ slice }) => {
  return (
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
              const url = item.link.url;
              return (
                <li key={index}>
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
          <img
            src={slice.primary.developer_image.url}
            alt={slice.primary.developer_full_name || 'Developer'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
