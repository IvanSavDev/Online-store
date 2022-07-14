import React from 'react';
import Card from './Card/Card';
// import data from '../../../data/data';
import { LaptopData } from '../../data/typeData';

type CardsProps = {
  dataItems: Array<LaptopData>;
};

const Cards = ({ dataItems }: CardsProps) => {
  return (
    <div className="cards-container">
      <div className="cards">
        {dataItems.map((dataItem) => {
          return <Card key={dataItem.id} dataItem={dataItem} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
