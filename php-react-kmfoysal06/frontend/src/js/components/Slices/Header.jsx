import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useNavLinks from '../../hooks/useNavLinks.js';

import { Link } from 'react-router-dom';

const Header = ({ slice }) => {
  const handleMenuToggle = (e) => {
    const header = e.currentTarget.closest(".charming-portfolio-header");
    header?.classList.toggle("mobile-menu-open");
  };

  const renderNavLink = useNavLinks();
  if (!slice?.slice_type) return null;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <header
        className="charming-portfolio-header charming-portfolio-container"
        role="banner"
      >
        <h3>
          {slice.primary.logo_link?.url ? (
            renderNavLink(slice.primary.logo_link.url, slice.primary.logo_text, "logo")
          ) : (
            <span className="header-logo">{slice.primary.logo_text}</span>
          )}
        </h3>
        <ul className="header-nav">
          {slice.primary.header_links.map((link, key) =>
            <li key={key}>{renderNavLink(link.url, link.text, key)}</li>
          )}
        </ul>
        <a
          href={slice.primary.github_link?.url || "#"}
          className="header-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} width={"20px"} />
        </a>
        <div className="menu-icons" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={faBars} width={"20px"} />
        </div>
      </header>
    </section>
  );
};

export default Header;

