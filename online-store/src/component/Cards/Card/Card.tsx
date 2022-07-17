import React, { useContext, useState } from 'react';
import imgsPaths from '../../../data/imgsPaths';
import { LaptopData } from '../../../data/typeData';
import { ShopContext } from 'Src/context/ShopContext';

const Card = (props: { dataItem: LaptopData }) => {
  const {
    dataItem: { company, name, count, year, color, price, id, ssd, cpu, ram },
  } = props;
  const [inBasket, addInBasket] = useState<boolean>(false);
  const {
    stateBasket: { countGoodsInBasket, addGoodsInBasket },
  } = useContext(ShopContext)!;

  const addItem = () => {
    if (countGoodsInBasket === 20 && !inBasket) {
      alert('Извините, все слоты заполнены');
      return;
    }
    addInBasket(!inBasket);
    if (inBasket) {
      addGoodsInBasket(-1);
    } else {
      addGoodsInBasket(1);
    }
  };

  return (
    <div className="card">
      <h3 className="card__header">{name}</h3>
      <div className="img-card">
        <img src={imgsPaths[id - 1].img} alt={name} />
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
      </ul>
      <div className="card__cart-control">
        <button className="card__btn card__btn-add" onClick={addItem}>
          {inBasket ? 'Delete from basket' : 'Add to Basket'}
        </button>
      </div>
    </div>
  );
};

export default Card;

// const getPathImgCard = (name: string) =>
//   `../../../../assets/computers/${name}.jpg`;
// const getPathImgCard2 = async (name: string) => {
//   const imgPath = await import(`../../../../assets/computers/${name}.jpg`);
//   return imgPath;
// };

// useEffect(() => {
//   const getImg = async (name: string) => {
//     const img = await import(`../../../../assets/computers/${name}.jpg`);
//     console.log(img);
//     console.log(typeof img);
//     setImg(img);
//   };
//   getImg(imgName);
// }, [img]);
// console.log(getPathImgCard(imgName));

// const kek = require(`${getPathImgCard(imgName)}`);

// const addToBasket = () => {

// }
