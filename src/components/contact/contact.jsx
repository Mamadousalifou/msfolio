import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {

  const MonFOrmulaire = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjtfn6s",
        "template_hzniybi",
        MonFOrmulaire.current,
        "PfmnfR7JZVKvNSBpP"
      )

      .then(
        (result) => {
          console.log(result.text);
     
        },
        (error) => {
          console.log(error.text);
 
        }
      );

    if (MonFOrmulaire.current) {
      MonFOrmulaire.current.reset(); 
    }
  };

 

  return (


    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mamadousalifou01@gmail.com</h5>
            <a href="mailto:mamadousalifou01@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>linkedin</h4>
            <h5>https://www.linkedin.com/feed/</h5>
            <a href="https://www.linkedin.com/in/mamadou-salifou-61b057209/" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+212 778958118</h5>
            <a href="https://api.whatsapp.com/send?phone+212778958118" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form
          ref={MonFOrmulaire}
          onSubmit={sendEmail}
          className="text-start p-2 container col-10"
        >
          {/* <!-- name --> */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your name"
              required
            />
          </div><div className="form-group">
            <label htmlFor="name">Telephone</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              id="contact"
              placeholder="Your contact"
              required
            />
          </div>

          {/* <!-- email --> */}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Your email"
              required
            />
          </div>

         

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <hr />
          
            <button type="submit" className="btn btn-primary">
          Envoyer
            </button>
         
        </form>
       
      </div>
    </section>
  );
};

export default Contact;
