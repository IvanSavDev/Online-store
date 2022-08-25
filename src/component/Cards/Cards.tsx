import React, { useContext, useEffect, useState } from 'react';
import Card from './Card/Card';
import SortCards from './SortCards/SortCards';
import { ShopContext } from 'Src/context/ShopContext';
import { setDataFromStorage } from 'Src/localStorage/apiLocalStorage';
import { CardsProps } from './CardsTypes';
import { getFilteredCards } from './getFilteredCards';
import { ShopContextType } from 'Src/context/ShopContextTypes';
import { LaptopDataCategories } from 'Src/types/productDataType';
import { makeLaptopComparator } from './getSortedCards';

const Cards = ({ dataItems }: CardsProps): JSX.Element => {
  const { stateFilters, stateBasket, stateSortCategory } =
    useContext<ShopContextType>(ShopContext)!;

  const [sortCategory, setSortCategory] =
    useState<LaptopDataCategories>(stateSortCategory);

  const currentSort = makeLaptopComparator(
    sortCategory.name,
    sortCategory.ascending
  );

  useEffect(() => {
    const generalState = {
      stateFilters,
      stateBasket: stateBasket.dataOfGoodsInBasket,
      sortCategory,
    };
    setDataFromStorage(generalState);
  }, [stateFilters, stateBasket, sortCategory]);

  const filteredAndSortedCards = dataItems
    .filter((dataItem) => getFilteredCards(dataItem, stateFilters))
    .sort(currentSort)
    .map((item) => <Card key={item.id} dataItem={item}></Card>);

  return (
    <div className="cards">
      <SortCards
        dataForSort={{
          category: { sortCategory, setSortCategory },
        }}
      ></SortCards>
      <div className="cards__list">
        {filteredAndSortedCards}
        {filteredAndSortedCards.length === 0 ? (
          <h3>Sorry, no matches found</h3>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Cards;
