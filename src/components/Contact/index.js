import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="info">
        <h2 className="title">Contact</h2>
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
        <div className="info">
          <h3>Email Me</h3>
          <div className="info-img">
            <p>
              <a href="mailto:dmoloney5@gmail.com">
                <img src="images/email.jpg" alt="how to email me" width="50" height="50"/>
              </a>
            </p>
          </div>
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
      </section>
    );
  }
}

export default Contact;
