import React from 'react';
import { imgsPaths } from 'Src/data/imgsPaths';
import { LaptopCharacteristics } from 'Src/types/productDataType';
import { useBasketContext } from 'Src/context/ShopContext';
import { getCurrentPhoto } from 'Src/utils/utils';

const Card = ({ product } : { product: LaptopCharacteristics }): JSX.Element => {
  const {
    company,
    name,
    count,
    year,
    color,
    price,
    id,
    ssd,
    cpu,
    ram,
    favorite,
  } = product;
  const { goodsBasket, addGoodsToBasket, deleteGoodsFromBasket } = useBasketContext();
  const goodsFromBasket = goodsBasket[name];

  const addProduct = () => (goodsFromBasket
    ? deleteGoodsFromBasket(name)
    : addGoodsToBasket(name)
  );

  return (
    <article className="card">
      <h3 className="card__header">{name}</h3>
      <img
        className="card__img"
        src={getCurrentPhoto(imgsPaths, id)}
        alt={name}
      />
      <ul className="card__list">
        <li className="card__item">{`Company: ${company}`}</li>
        <li className="card__item">{`Year: ${year}`}</li>
        <li className="card__item">{`Counts in stock: ${count}`}</li>
        <li className="card__item">{`Color: ${color}`}</li>
        <li className="card__item">{`RAM: ${ram}`}</li>
        <li className="card__item">{`CPU: ${cpu}`}</li>
        <li className="card__item">{`SSD: ${ssd}`}</li>
        <li className="card__item">{`Price: ${price}`}</li>
        <li className="card__item">{`Favorite: ${favorite ? 'yes' : 'no'}`}</li>
      </ul>
      <button className="card__btn card__btn-add" type="button" onClick={addProduct}>
        {goodsFromBasket === 1
          ? 'Delete from basket'
          : 'Add to Basket'}
      </button>
    </article>
  );
};

export default Card;
