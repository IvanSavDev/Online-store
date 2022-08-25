import { ILaptopData, LaptopCategories } from 'Src/types/productDataType';

export const makeLaptopComparator = (
  attributeToCompare: LaptopCategories = 'name',
  isAscending: boolean = true
) => {
  return (firstElement: ILaptopData, secondElement: ILaptopData) => {
    if (firstElement[attributeToCompare] > secondElement[attributeToCompare]) {
      return isAscending ? 1 : -1;
    }

    if (firstElement[attributeToCompare] < secondElement[attributeToCompare]) {
      return isAscending ? -1 : 1;
    }

    return 0;
  };
};
