import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="charming-portfolio-container charming-portfolio-footer-inner">
        <div className="footer-section footer-owner-data">
          <div className="contactinfo">
            <h3>Kazi Mohammad Foysal</h3>
            <p>Web Developer</p>
            <p>Anowara, Chittagong, Bangladesh</p>
            <p>foysalkazimd01@gmail.com</p>
          </div>
          <div className="footer-search">
            <div className="search-and-profile">
              <div className="search">
                <form role="search" method="get" id="searchform" className="searchform charming-portfolio-search" action="/">
                  <div>
                    <label className="screen-reader-text" htmlFor="s">Search for Blogs:</label>
                    <input type="text" placeholder="Search" name="s" id="s" />
                      <button type="submit" className="submit charming-portfolio-header-search" aria-label="Search">
                        <span className="dashicons dashicons-search"><span>
                        </span></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-socials">
            <ul className="charming-portfolio-social-links">
              <li><a href="https://profiles.wordpress.org/kmfoysal06/"><i className="fas fa-link"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section footer-section-menus">
          <div className="footer-subsection">
            <h3>Latest Blogs:</h3>
            <ul>
              <li> <a href="https://cp.kmfoysal06.com/index.php/2025/08/02/hello-world/">Hello world!</a> </li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h3>External Links:</h3>
            <ul>
              <li> <a href="https://github.com/kmfoysal06" target="_blank">Github <i className="fa fa-external-link" aria-hidden="true"></i></a> </li>
              </ul>
          </div>
        </div>

      </div>
      <div className="charming-portfolio-container copyright">
        <p> Copy RIght Bro Copy Right</p>
      </div>
    </section>
  );
};

export default Footer;
