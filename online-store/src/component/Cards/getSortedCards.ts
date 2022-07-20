import { LaptopData } from 'Src/types/productDataType';

export const getSortedCards =
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
