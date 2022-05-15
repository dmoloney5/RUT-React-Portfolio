import React from "react";
import coverImage from "../../Assets/img/digitalhand.jpg"

class About extends React.Component {
  render() {
    return (
      <section id="about-me" className="bio">
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        <h2 className="title">About Me</h2>
        <p>
          Hello I'm Dennis Moloney. I have been in the I.T. field for over 25
          years. I graduated from a technical institute for pc repair right out
          of H.S. I started this career with a little company building computers
          and supporting them. Since then I have had multiple contract work
          doing various I.T. related jobs which help me gather the knowledge of
          hardware, software and networking. I joined a large corporation in
          2006 as just a field technician. In my third year there I became the
          field support with a title Tier 3. I was the only Tier 3 technician in
          the northeast region. Just 3 years later I became the IT Manager of
          the field support. We handled 52 offices in NJ and over 3000 users.
          Once I left there I was working for a small SaaS company. My job was
          been the whole IT department. I worked closely with the development
          team and had interest in learning web design. I'm currently in Rutgers
          University learning to become a Full Stack Web Developer. Below you
          will find the project I've worked on. This website is my first front
          end website I coded. In the first 8 weeks of the Rutgers BootCamp I
          learned how to use html, css, and javascript to build a website. I also
          learn to use API, and client-side API also how to store hitory and
          other data to local storage. Below under website project 1-5 are
          different websited I built in the front-end development course. Now projects
          6-9 are the focus on the backend.  I learned to use MySQl, MongoDB, Node.js,
          Express.JS and React.  Now project 10 is my final group project for everything
          we learned throughout this 6 month BootCamp.  I want to thank Kevin Ferguson, 
          Bobby Hoffman(TA), Jasper Abarquez(TA) , and John Titus(TA) for their help and support
          during my learning career.
        </p>
      </section>
    );
  }
}

export default About;
