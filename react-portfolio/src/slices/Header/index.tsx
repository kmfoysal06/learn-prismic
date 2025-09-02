import React from "react";
import { HeaderSlice } from "../../types";
import "../../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface HeaderProps {
  slice: HeaderSlice;
}

const Header: React.FC<HeaderProps> = ({ slice }) => {
  const handleMenuToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    // add mobile-menu-open class to header
    const header = e.currentTarget.closest(".charming-portfolio-header");
    header?.classList.toggle("mobile-menu-open");
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <header className="charming-portfolio-header charming-portfolio-container" role="banner">
        <h3>
          <a href={slice.primary.logo_link?.url || "#"} className="header-logo">
            {slice.primary.logo_text}
          </a>
        </h3>
        <ul className="header-nav">
          {slice.primary.header_links.map((link, key) => (
            <li key={key}>
              <a href={link.url || "#"} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <a 
          href={slice.primary.github_link?.url || "#"} 
          className="header-icon" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <div className="menu-icons" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </section>
  );
};

export default Header;