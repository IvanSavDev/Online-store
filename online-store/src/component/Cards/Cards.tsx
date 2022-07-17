import React, { useContext, useEffect, useState } from 'react';
import Card from './Card/Card';
// import { ShopContext } from '../../context/ShopContext';
import { LaptopData } from '../../data/typeData';
import SortCards from './SortCards/SortCards';
import { ShopContext } from 'Src/context/ShopContext';
// import { InitialStateType } from 'Src/type/initialStateType';
import dataItems from '../../data/data';

// type CardsProps = {
//   dataItems: Array<LaptopData>;
// };

// const isSuitableParam = (
//   dataItem: LaptopData,
//   filtersParam: InitialStateType
// ): boolean => {
//   const { company, count, year, color, price, ssd, cpu, ram, favorite } =
//     dataItem;
//   const {
//     selectedCompany,
//     selectedCpu,
//     selectedRam,
//     selectedSsd,
//     selectedCounts: [minCount, maxCount],
//     selectedPrice: [minPrice, maxPrice],
//     selectedYearRealease: [minYear, maxYear],
//     selectedColors,
//     selectedFavorite,
//   } = filtersParam;

//   // const checkRange = (minParam: number, maxParam: number, param: number) => {
//   //   if (minParam !== undefined && maxParam !== undefined) {
//   //     if (!(minParam < param && maxParam > param)) {
//   //       return false;
//   //     }
//   //   }
//   // };
//   if (selectedCompany[company]) {
//     return false;
//   }
//   if (!selectedCpu[cpu]) {
//     return false;
//   }
//   if (!selectedRam[ram]) {
//     return false;
//   }
//   if (!selectedSsd[ssd]) {
//     return false;
//   }
//   if (minCount !== undefined && maxCount !== undefined) {
//     if (!(minCount < count && maxCount > count)) {
//       return false;
//     }
//   }
//   if (minPrice !== undefined && maxPrice !== undefined) {
//     if (!(minPrice < price && maxPrice > price)) {
//       return false;
//     }
//   }
//   if (minYear !== undefined && maxYear !== undefined) {
//     if (!(minYear < year && maxYear > year)) {
//       return false;
//     }
//   }
//   if (!selectedColors[color]) {
//     return false;
//   }
//   if (!selectedFavorite === favorite) {
//     return false;
//   }
//   return true;
// };

const Cards = () => {
  const [sortByName, setSortByName] = useState<string>('decrease');
  const [sortByYear, setSortByYear] = useState<string>('decrease');
  const [firstRender, setFirstRender] = useState<number>(2);
  const [currentCards, setCurrentCards] = useState<[] | Array<LaptopData>>(
    dataItems
  );
  const { stateShop } = useContext(ShopContext)!;

  // const newAr = dataItems
  //   .filter((dataItem) => isSuitableParam(dataItem, stateShop))
  //   .sort((a, b) => {
  //     if (a.name < b.name || a.year - b.year) {
  //       return 1;
  //     }
  //     if (a.name > b.name || a.year - b.year) {
  //       return -1;
  //     }
  //     return 0;
  //   })
  //   .map((item) => {
  //     return <Card dataItem={item}></Card>;
  //   });

  useEffect(() => {
    console.log(123);
    if (firstRender === 0) {
      console.log(0);
      const filteredData = dataItems;
      // .filter((dataItem) => isSuitableParam(dataItem, stateShop))
      // .sort((a, b) => {
      //   if (a.name < b.name || a.year - b.year) {
      //     return 1;
      //   }
      //   if (a.name > b.name || a.year - b.year) {
      //     return -1;
      //   }
      //   return 0;
      // });
      setCurrentCards(filteredData);
    } else {
      setFirstRender((fs) => fs - 1);
    }
  }, [stateShop]);

  return (
    <div className="cards">
      <SortCards
        dataForSort={{
          name: { sortByName, setSortByName },
          year: { sortByYear, setSortByYear },
        }}
      ></SortCards>
      <div className="cards__list">
        {currentCards.map((item) => (
          <Card key={item.id} dataItem={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
