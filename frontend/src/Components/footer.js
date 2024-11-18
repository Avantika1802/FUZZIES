import React, { useState } from 'react';
import '../App.css'; 
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // If the email is valid, you can handle further actions like API calls here
    setMessage("Thank you for subscribing!");

    // Reset the email input
    setEmail('');
  };

  return (
    <footer>
      <img className="footer-top footer-cartPage" src="footer.png" alt="Footer" />
      <div className="footer-content">
        <div className="footer">
          <h2 className='footer-h2'>FUZZIES</h2>
          <p className="info">
            Discover premium pet food and accessories that nurture your pet's well-being and joy.
          </p>
          <div className='everything-together'>
            <div className='email-footer'>
              <h3 className='email-h3-footer'>Want to hear from us?</h3>
              <div className='email-placeholder-footer'>
                <input 
                  type="email" 
                  placeholder="Enter your email ID" 
                  className='input-footer' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='email-btn' onClick={handleSubmit}>SUBMIT</button>
              </div>
              <p className='email-para'>Reach us: supportfuzzies@gmail.com</p>
              {message && <p className="message-footer">{message}</p>}
            </div>

            <div>
              <img className='img-dog-footer' src='abcdef.png' alt="Dog" />
            </div>
          </div>
          <h2 className='connect-h3-footer'>Connect with us</h2>
          <div className="socials">
            <span><a href="#"><FaFacebookF /></a></span>
            <span><a href="#"><FaInstagram /></a></span>
            <span><a href="#"><FaTwitter /></a></span>
            <span><a href="#"><FaLinkedinIn /></a></span>
          </div>
          <div className="footer-bar">
            Copyright © 2024 Fuzzies. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;