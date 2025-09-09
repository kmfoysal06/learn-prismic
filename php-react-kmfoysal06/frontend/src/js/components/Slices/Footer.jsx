import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Footer = ({ slice }) => {
  if (slice.slice_type) {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="charming-portfolio-container charming-portfolio-footer-inner">
          <div className="footer-section footer-owner-data">
            <div className="contactinfo">
              <h3>{slice.primary.name}</h3>
              <p>{slice.primary.designation}</p>
              <p>{slice.primary.location}</p>
              <p>{slice.primary.email}</p>
            </div>
            <div className="footer-search">
              <div className="search-and-profile">
                <div className="search">
                  <form
                    role="search"
                    method="get"
                    id="searchform"
                    className="searchform charming-portfolio-search"
                    action="http://blog.kmfoysal06.com/"
                  >
                    <div>
                      <label className="screen-reader-text" htmlFor="s">
                        Search for Blogs:
                      </label>
                      <input type="text" placeholder="Search" name="s" id="s" />
                      <button
                        type="submit"
                        className="submit charming-portfolio-header-search"
                        aria-label="Search"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section footer-section-menus">
            <div className="footer-subsection">
              <h3>Languages:</h3>
              <ul>
                <li>
                  <a href="/en-us">English</a>
                </li>
                <li>
                  <a href="/fr-ca">French</a>
                </li>
              </ul>
            </div>
            <div className="footer-subsection">
              <h3>External Links:</h3>
              <ul>
                { slice.primary.external_links.map((link, key) => (
                  <li key={key}>
                    <a
                      href={link.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text || "Link"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="charming-portfolio-container copyright">
          <p>
            {slice?.primary?.footer_credit_text
              ? slice.primary.footer_credit_text.replace(
                  "[current_year]",
                  new Date().getFullYear().toString(),
                )
              : "CopyRight " + new Date().getFullYear().toString()}
          </p>
        </div>
      </section>
    );
  }
};

export default Footer;
