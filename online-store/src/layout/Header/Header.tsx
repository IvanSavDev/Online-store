import React, { useContext } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import { ShopContextType } from 'Src/context/ShopContextTypes';
import imgStore from 'Src/assets/icons/store.png';
import imgBacket from 'Src/assets/icons/wicker-basket.png';

const Header = (): JSX.Element => {
  const {
    stateBasket: { dataOfGoodsInBasket },
  } = useContext<ShopContextType>(ShopContext)!;

  return (
    <header className="header">
      <div className="layout-width header-container">
        <div className="logo">
          <img src={imgStore} alt="online store" />
          <span className="logo__name">Online store</span>
        </div>
        <div className="basket">
          <div className="backet__counts">{dataOfGoodsInBasket.length}</div>
          <img src={imgBacket} alt="shopping basket" />
        </div>
      </div>
    </header>
  );
};

export default Header;
