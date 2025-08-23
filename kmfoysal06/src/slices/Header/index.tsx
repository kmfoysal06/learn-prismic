"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "@/app/styles/header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PrismicNextLink } from "@prismicio/next";

import Link from 'next/link'


/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header: FC<HeaderProps> = ({ slice }) => {
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
        <h3>{slice.primary.logo_text}</h3>
        <ul className="header-nav">
          {slice.primary.header_links.map((link, key) => (
            <li key={key}>
              <PrismicNextLink
                key={link.key}
                field={link}
                />
            </li>
          ))}
        </ul>
        <Link href="github.com" className="header-icon">
        {/* <FontAwesomeIcon icon={faCodeMerge} /> */}
        {/* <FontAwesomeIcon icon="fa-regular fa-circle-user" /> */}
        <FontAwesomeIcon icon={faGithub} width={"20px"} />
        </Link>
        <div className="menu-icons" onClick={handleMenuToggle}>
          {/* <FontAwesomeIcon icon={faBars} /> */}
        <FontAwesomeIcon icon={faBars} width={"20px"} />
        </div>

      </header>
    </section>
  );
};

export default Header;
