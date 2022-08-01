import React, { useContext } from 'react';
import { imgsPaths, ImgData } from 'Src/data/imgsPaths';
import { ILaptopData } from 'Src/types/productDataType';
import { ShopContext } from 'Src/context/ShopContext';
import { ShopContextType } from 'Src/context/ShopContextTypes';

const getCurrentPhoto = (
  imgsPaths: Array<ImgData>,
  id: number
): string | undefined => {
  const photo = imgsPaths.find((img) => img.id === id);
  return photo?.img;
};

const Card = (props: { dataItem: ILaptopData }): JSX.Element => {
  const {
    dataItem: {
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
    },
  } = props;
  const {
    stateBasket: { dataOfGoodsInBasket, addGoodsInBasket },
  } = useContext<ShopContextType>(ShopContext)!;

  const addProduct = () => {
    if (dataOfGoodsInBasket.length === 20 && !dataOfGoodsInBasket[name]) {
      alert('Извините, все слоты заполнены');
      return;
    }
    if (!dataOfGoodsInBasket[name]) {
      addGoodsInBasket(name, 'add');
    } else {
      addGoodsInBasket(name, 'delete');
    }
  };

  return (
    <div className="card">
      <h3 className="card__header">{name}</h3>
      <div className="card__img-container">
        <img
          className="card__img"
          src={getCurrentPhoto(imgsPaths, id)}
          alt={name}
        />
      </div>
      <ul className="card__list">
        <li className="card__item">Company: {company}</li>
        <li className="card__item">Year: {year}</li>
        <li className="card__item">Counts in stock: {count}</li>
        <li className="card__item">Color: {color}</li>
        <li className="card__item">RAM: {ram}</li>
        <li className="card__item">CPU: {cpu}</li>
        <li className="card__item">SSD: {ssd}</li>
        <li className="card__item">Price: {price}</li>
        <li className="card__item">Favorite: {favorite ? 'yes' : 'no'}</li>
      </ul>
      <div className="card__cart-control">
        <button className="card__btn card__btn-add" onClick={addProduct}>
          {dataOfGoodsInBasket[name] === 1
            ? 'Delete from basket'
            : 'Add to Basket'}
        </button>
      </div>
    </div>
  );
};

export default Card;
