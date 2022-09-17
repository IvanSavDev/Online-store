import React from 'react';
import gitHubImg from 'Src/assets/icons/GitHub-Icon.png';

const Footer = (): JSX.Element => (
  <footer className="footer">
    <a
      className="link-github"
      rel="noreferrer"
      href="https://github.com/IvanSavDev?tab=repositories"
      target="_blank"
    >
      <img
        className="link-github__img"
        src={gitHubImg}
        alt="github link"
      />
    </a>
  </footer>
);
export default Footer;
