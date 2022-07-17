import React, { useContext } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import imgStore from '../../assets/icons/store.png';
import imgBacket from '../../assets/icons/wicker-basket.png';

const Header = () => {
  const {
    stateBasket: { countGoodsInBasket },
  } = useContext(ShopContext)!;

  return (
    <header className="header">
      <div className="layout-width header-container">
        <div className="logo">
          <img className="logo_img" src={imgStore} alt="" />
          <span className="logo_name">Online store</span>
        </div>
        <div className="basket">
          <div className="backet__counts">{countGoodsInBasket}</div>
          <img src={imgBacket} alt="shopping basket" />
        </div>
      </div>
    </header>
  );
};

export default Header;
