import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import "@/app/styles/header.css";
import Link from 'next/link'

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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        </ul>
        <Link href="github.com" className="header-icon">
          <i className="fa-brands fa-github"></i>
        </Link>
        <div className="menu-icons">
          <i className="fa-solid fa-bars menu-toggle"></i>
        </div>

      </header>
    </section>
  );
};

export default Header;
