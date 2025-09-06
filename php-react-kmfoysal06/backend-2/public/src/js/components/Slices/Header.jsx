import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Header = ({ slice }) => {
    const handleMenuToggle = (e) => {
        const header = e.currentTarget.closest(".charming-portfolio-header");
        header?.classList.toggle("mobile-menu-open");
    };
    if (slice?.slice_type) {
        return (
            <section
                data-slice-type={slice.slice_type}
                data-slice-variation={slice.variation}
            >
                <header className="charming-portfolio-header charming-portfolio-container" role="banner">
                    <h3>
                        <a href={slice.primary.logo_link.url || "#"} className="header-logo">
                            {slice.primary.logo_text}
                        </a>
                    </h3>
                    <ul className="header-nav">
                        {slice.primary.header_links.map((link, key) => (
                            <li key={key}>
                                <a href={link.url || "#"}>
                                    {link.text || 'Link'}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={slice.primary.github_link.url || "#"}
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


    }
};

export default Header;
