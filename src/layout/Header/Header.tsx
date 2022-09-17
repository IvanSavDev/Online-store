import React from 'react';
import { useBasketContext } from 'Src/context/ShopContext';
import imgStore from 'Src/assets/icons/store.png';
import imgBasket from 'Src/assets/icons/wicker-basket.png';

const Header = (): JSX.Element => {
  const { goodsBasket } = useBasketContext();

  return (
    <header className="header">
      <div className="layout-width header-container">
        <div className="logo">
          <img src={imgStore} alt="online store" />
          <span className="logo__name">Online store</span>
        </div>
        <div className="basket">
          <div className="basket__counts">{goodsBasket.length}</div>
          <img src={imgBasket} alt="shopping basket" />
        </div>
      </div>
    </header>
  );
};

export default Header;
