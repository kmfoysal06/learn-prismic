import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "@/app/styles/header.css";
// import "@/app/styles/fa.css"

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header: FC<HeaderProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <header className="charming-portfolio-header charming-portfolio-container" role="banner">
        <h3>CP</h3>
        <ul className="header-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
        <a href="github.com" className="header-icon">
          <i className="fa-brands fa-github"></i>
        </a>
        <div className="menu-icons">
          <i className="fa-solid fa-bars menu-toggle"></i>
        </div>

      </header>
    </section>
  );
};

export default Header;
