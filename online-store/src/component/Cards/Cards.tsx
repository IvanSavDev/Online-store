import React, { useContext, useEffect, useState } from 'react';
import Card from './Card/Card';
import { LaptopData } from '../../data/typeData';
import SortCards from './SortCards/SortCards';
import { ShopContext } from 'Src/context/ShopContext';
import { InitialStateFiltersType } from 'Src/type/initialStateFiltersType';
import { setDataFromStorage } from 'Src/localStorage/apiLocalStorage';
import { CardsProps } from './CardsTypes';

const getFilteredCards = (
  companyData: LaptopData,
  currentState: InitialStateFiltersType
): boolean => {
  const { company, count, year, color, price, ssd, cpu, ram, name } =
    companyData;
  const {
    selectedCompany,
    selectedCpu,
    selectedRam,
    selectedSsd,
    selectedCounts: [minCount, maxCount],
    selectedPrice: [minPrice, maxPrice],
    selectedYearRealease: [minYear, maxYear],
    selectedColors,
    selectedFavorite,
    search,
  } = currentState;

  if (!selectedCompany.includes(company) && selectedCompany.length !== 0) {
    return false;
  }
  if (!selectedCpu.includes(cpu) && selectedCpu.length !== 0) {
    return false;
  }
  if (!selectedRam.includes(String(ram)) && selectedRam.length !== 0) {
    return false;
  }
  if (!selectedSsd.includes(String(ssd)) && selectedSsd.length !== 0) {
    return false;
  }
  if (!selectedColors.includes(color) && selectedColors.length !== 0) {
    return false;
  }
  if (selectedFavorite.length !== 0 && !selectedFavorite.includes(name)) {
    return false;
  }
  if (search && !name.toLowerCase().includes(search.toLowerCase())) {
    return false;
  }
  if (minCount !== undefined && maxCount !== undefined) {
    if (!(minCount <= count && maxCount >= count)) {
      return false;
    }
  }
  if (minPrice !== undefined && maxPrice !== undefined) {
    if (!(minPrice <= price && maxPrice >= price)) {
      return false;
    }
  }
  if (minYear !== undefined && maxYear !== undefined) {
    if (!(minYear <= year && maxYear >= year)) {
      return false;
    }
  }
  return true;
};

const getSortedCards =
  (sortByCategory: string) =>
  (firstElement: LaptopData, secondElement: LaptopData): number => {
    if (sortByCategory === 'name-decrease') {
      if (firstElement.name > secondElement.name) {
        return 1;
      }
      if (firstElement.name < secondElement.name) {
        return -1;
      }
    }
    if (sortByCategory === 'name-increase') {
      if (firstElement.name < secondElement.name) {
        return 1;
      }
      if (firstElement.name > secondElement.name) {
        return -1;
      }
    }
    if (sortByCategory === 'year-decrease') {
      return secondElement.year - firstElement.year;
    }
    if (sortByCategory === 'year-increase') {
      return firstElement.year - secondElement.year;
    }
    return 0;
  };

const Cards: React.FC<CardsProps> = ({ dataItems }) => {
  const { stateFilters, stateBasket, stateSortCategory } =
    useContext(ShopContext)!;

  const [sortCategory, setSortCategory] = useState<string>(stateSortCategory);

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
    .sort(getSortedCards(sortCategory))
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
