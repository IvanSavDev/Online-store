import React from 'react';
import rsImg from 'Src/assets/icons/rs_school_js.svg';
import gitHubImg from 'Src/assets/icons/GitHub-Icon.png';

class Footer extends React.Component {
  render(): JSX.Element {
    return (
      <footer className="footer">
        <div className="footer-container layout-width">
          <a className="link-rs" href="https://rs.school/js/" target="_blank">
            <img className="link-rs__img" src={rsImg} alt="rschool link" />
          </a>
          <div className="container-year">
            <span className="year">2022</span>
          </div>
          <a
            className="link-github"
            href="https://github.com/IvanSavDev?tab=repositories"
            target="_blank"
          >
            <img
              className="link-github__img"
              src={gitHubImg}
              alt="github link"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
