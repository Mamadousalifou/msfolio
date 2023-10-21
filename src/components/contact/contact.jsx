import React, { useState }from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';


const contact = () => {

  const MyComponent = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    const sendEmail = () => {
      emailjs.send('service_rjtfn6s', 'template_hzniybi', formData)
        .then((response) => {
          console.log('E-mail envoyé avec succès!', response);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        });
    };
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(); // Appel de la fonction sendEmail() lors de la soumission du formulaire.
    // Vous pouvez également réinitialiser le formulaire ici si nécessaire.
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
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

        <form onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" />
          <input type="number" name="phone" placeholder="Your phone Number" required/>
          <textarea  value={formData.message}  onChange={handleInputChange} type="message" rows="7"  placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
