import React from "react";


function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span></span> Dennis Moloney's Portfolio!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="bio" href="about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a id="projects" href="#Projects">
              My Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Resume" href="Resume">
              My Resume
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="Contact" href="contact">
              Contact
            </a>
          </li>
         </ul>
      </nav>
    </header>
  );
}

export default Nav;