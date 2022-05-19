import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
      return (
      <section className="info">
        <h2 id="contact" className="title">Contact</h2>
        <div className="info" >
          <h3>DM Production</h3>
          <div className="info-img">
            <p>
            <address>
              27 East Mount Ave <br />
              Atlantic Highlands, NJ <br />
              07716 <br />
               </address>
          </p>
        </div>
        </div>
        <div>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button data-testid="button" type="submit">Submit</button>
            </form>
          </div>
        <div className="info">
          <h3>Call Me</h3>
          <div className="info-img">
            <p>
              <a href="tel:1-732-904-5732">
                <img src="images/cell phone.jpg" alt="How to call me" style={{ display: "flex" }} width="200" height="200"/>
              </a>
            </p>
          </div>
        </div>
        <div className="info">
          <h3>Linkedin</h3>
          <div className="info-img">
            <p>
              <a
                href="HTTPS://www.linkedin.com/in/dennismoloney" target="_blank">
                <img
                  src="images/Linkedin-logo.jpg"
                  alt="Visit my Linkedin page" style={{ display: "flex" }} width="100" height="100"
                />
              </a>
            </p>
          </div>
        </div>
          <div className="info">
            <h3>GitHub</h3>
            <div className="info-img">
              <p>
                <a
                  href="https://github.com/dmoloney5" target="_blank">
                  <img
                    src="images/GitHub.png"
                    alt="Visit my GitHub Page page" style={{ display: "flex" }} width="100" height="100"
                  />
                </a>
              </p>
            </div>
          </div>
      </section>
    );
  }


export default Contact;
