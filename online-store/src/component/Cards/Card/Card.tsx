import React from 'react';
import imgsPaths from '../../../data/imgsPaths';
import { LaptopData } from '../../../data/typeData';
// const getPathImgCard = (name: string) =>
//   `../../../../assets/computers/${name}.jpg`;
// const getPathImgCard2 = async (name: string) => {
//   const imgPath = await import(`../../../../assets/computers/${name}.jpg`);
//   return imgPath;
// };

const Card = (props: { dataItem: LaptopData }) => {
  // const [img, setImg] = useState('');

  const {
    dataItem: { manufacturer, name, count, year, color, price, id },
  } = props;

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

  return (
    <div className="card">
      <h3 className="card__header">{name}</h3>
      <div className="img-card">
        <img src={imgsPaths[id - 1].img} alt={name} />
      </div>
      <ul className="card__list">
        <li>Manufacturer: {manufacturer}</li>
        <li>Year: {year}</li>
        <li>Counts in stock: {count}</li>
        <li>Color: {color}</li>
        <li>Price: {price}</li>
      </ul>
    </div>
  );
};

export default Card;
