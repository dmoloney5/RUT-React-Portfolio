import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <article id="resume">
        <div className="pdf">
          <h2 className="title">Resume</h2>
          <iframe
            src="DennisP._Moloney_Resume.pdf" alt="my resume"
            style={{
              border: 0
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </article>
    );
  }
}

export default Resume;
