import React from 'react';
import { sendForm } from 'emailjs-com';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const SERVICE_ID = 'service_agrcnzc';
const TEMPLATE_ID = 'template_fgcne1r';
const PUBLIC_KEY = "h5WoFnntP5UE077wA";

const Contact = ({ slice }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then((result) => {
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
        (e.target).reset();
      }, (error) => {
        toast.error('Failed to send message. Please try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="charming-portfolio-slice charming-portfolio-contact"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
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
              <img 
                src={slice.primary.image.url}
                alt="Contact Me"
              />
            </div>
            <div className="form-data">
              <form onSubmit={handleOnSubmit}>
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
