import React from 'react';
import rsImg from '../../assets/icons/rs_school_js.svg';
import gitHubImg from '../../assets/icons/GitHub-Icon.png';

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={props.className}>
      <div className="footer-container layout-width">
        <a className="link-rs" href="https://rs.school/js/" target="_blank">
          <img className="img-rs" src={rsImg} alt="rschool link" />
        </a>
        <div className="container-year">
          <span className="year">2022</span>
        </div>
        <a
          className="link-github"
          href="https://github.com/IvanSavDev?tab=repositories"
          target="_blank"
        >
          <img className="img-github" src={gitHubImg} alt="github link" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
