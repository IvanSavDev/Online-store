import React from 'react';
import imgStore from '../../assets/icons/store.png';
import imgBacket from '../../assets/icons/wicker-basket.png';

const Header = () => {
  return (
    <header className="header">
      <div className="layout-width header-container">
        <div className="logo">
          <img className="logo_img" src={imgStore} alt="" />
          <span className="logo_name">Online store</span>
        </div>
        <img src={imgBacket} alt="shopping basket" />
      </div>
    </header>
  );
};

export default Header;
