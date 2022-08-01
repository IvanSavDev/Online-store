import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { ILaptopData } from 'Src/types/productDataType';

export const getFilteredCards = (
  laptopData: ILaptopData,
  currentState: InitialStateFiltersType
): boolean => {
  const { company, count, year, color, price, ssd, cpu, ram, name, favorite } =
    laptopData;
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

  const laptopMatchCategoryCheckbox = (
    filterData: string[],
    laptopData: string | number
  ) => filterData.includes(String(laptopData)) || filterData.length === 0;

  const laptopMatchCategoryRange = (
    maxCategory: number,
    minCategory: number,
    laptopData: number
  ) => minCategory <= laptopData && maxCategory >= laptopData;

  const laptopMatchCategorySearch = (stringSearch: string, nameItem: string) =>
    nameItem.toLowerCase().includes(stringSearch.toLowerCase());

  const laptopMatchCategoryFavorite = (
    isFavoriteCategory: boolean,
    isFavoriteItem: boolean
  ) => {
    if (!isFavoriteCategory) {
      return true;
    }
    return isFavoriteItem === isFavoriteCategory;
  };

  if (
    laptopMatchCategoryCheckbox(selectedCompany, company) &&
    laptopMatchCategoryCheckbox(selectedCpu, cpu) &&
    laptopMatchCategoryCheckbox(selectedRam, ram) &&
    laptopMatchCategoryCheckbox(selectedSsd, ssd) &&
    laptopMatchCategoryCheckbox(selectedColors, color) &&
    laptopMatchCategoryRange(maxCount, minCount, count) &&
    laptopMatchCategoryRange(maxPrice, minPrice, price) &&
    laptopMatchCategoryRange(maxYear, minYear, year) &&
    laptopMatchCategorySearch(search, name) &&
    laptopMatchCategoryFavorite(selectedFavorite, favorite)
  ) {
    return true;
  }
  return false;
};
