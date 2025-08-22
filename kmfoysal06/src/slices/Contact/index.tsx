import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="charming-portfolio-container charming-portfolio-contact-section">
        <div className="section-header">
          <h2 className="badge">Contact Me</h2>
          <p>Want to know something else? Let me know:</p>
        </div>
        <div className="section-content">
          <div className="contact-header">
            <div className="name">
              <h3>Kazi Mohammad Foysal</h3>
              <p>WordPress Developer</p>
            </div>
            <div className="contact-info">
              <p>Phone: <span>01789377850</span></p>
              <p>Email: <span>foysalkazimd01@gmail.com</span></p>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-image">
              <img src="https://cp.kmfoysal06.com/wp-content/plugins/charming-portfolio/assets/build/img/charming_portfolio-default-avater.jpg" width="300px" height="auto" alt="Kazi Mohammad Foysal" loading="lazy" />
            </div>

            <div className="form-container">
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-name">Name:</label>
                <input type="text" name="name" id="charming-portfolio-contact-name" placeholder="Your Name" required />
              </div>
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-email">Email:</label>
                <input type="text" name="email" id="charming-portfolio-contact-email" placeholder="Your Email" required />
              </div>
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-message">Message:</label>
                <textarea name="message" id="charming-portfolio-contact-message" placeholder="Your Message" rows={10} required></textarea>
              </div>
              <div className="form-field">
                <button type="submit" name="submit"> Submit </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
