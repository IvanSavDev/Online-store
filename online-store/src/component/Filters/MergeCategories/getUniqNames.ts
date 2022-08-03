import { ILaptopData } from 'Src/types/productDataType';
import { MergeCategoryType } from './MergeCategoriesTypes';

export const getUniqNames = (
  data: Array<ILaptopData>,
  parameter: MergeCategoryType
): Array<string> => {
  const sortNumbers = (firstElement: number, secondElement: number) =>
    firstElement - secondElement;
  const sortStrings = (firstElement: string, secondElement: string) => {
    const firstElementLowerCase = firstElement.toLowerCase();
    const secondElementLoweCase = secondElement.toLowerCase();
    if (firstElementLowerCase > secondElementLoweCase) {
      return 1;
    }
    if (firstElementLowerCase < secondElementLoweCase) {
      return -1;
    }
    return 0;
  };

  const sortedUniqNames = data
    .map((item) => item[parameter])
    .sort((firstElement, secondElement) => {
      if (
        typeof firstElement === 'number' &&
        typeof secondElement === 'number'
      ) {
        return sortNumbers(firstElement, secondElement);
      }
      if (
        typeof firstElement === 'string' &&
        typeof secondElement === 'string'
      ) {
        return sortStrings(firstElement, secondElement);
      }
      return 0;
    })
    .map((name) => String(name));
  return Array.from(new Set(sortedUniqNames));
};
