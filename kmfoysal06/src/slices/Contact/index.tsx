"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { sendForm } from "emailjs-com";
import { Bounce, toast, ToastContainer } from "react-toastify";


/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const SERVICE_ID = 'service_agrcnzc';
const TEMPLATE_ID = 'template_fgcne1r';
const PUBLIC_KEY = "h5WoFnntP5UE077wA";

const Contact: FC<ContactProps> = ({ slice }) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then((result) => {
        toast.success('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "colored",
            transition: Bounce,
          });
      }, (error) => {
        toast.error('Something went wrong!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
            theme: "colored",
            transition: Bounce,
          });
      });
  (e.target as HTMLFormElement).reset();
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        />
      <div className="charming-portfolio-container charming-portfolio-contact-section">
        <div className="section-header">
          <h2 className="badge">{slice.primary.badge}</h2>
          <p>{slice.primary.section_description}</p>
        </div>
        <div className="section-content">
          <div className="contact-header">
            <div className="name">
              <h3>{slice.primary.name}</h3>
              <p>{slice.primary.designation}</p>
            </div>
            <div className="contact-info">
              <p>Phone: <span>{slice.primary.phone}</span></p>
              <p>Email: <span>{slice.primary.email}</span></p>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-image">
              <PrismicNextImage field={slice.primary.image}
              alt={typeof "Contact Me" === 'string' && "Contact Me" ? ("Contact Me" as never) : undefined}
              /> 
            </div>

            <form className="form-container" onSubmit={handleOnSubmit}>
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-name">Name:</label>
                <input type="text" name="from_name" id="charming-portfolio-contact-name" placeholder="Your Name" required />
              </div>
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-email">Email:</label>
                <input type="text" name="from_email" id="charming-portfolio-contact-email" placeholder="Your Email" required />
              </div>
              <div className="form-field">
                <label htmlFor="charming-portfolio-contact-message">Message:</label>
                <textarea name="message" id="charming-portfolio-contact-message" placeholder="Your Message" rows={10} required></textarea>
              </div>
              <div className="form-field">
                <button type="submit" name="submit"> Submit </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
