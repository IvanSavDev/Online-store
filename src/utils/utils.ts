import { ImgData } from 'Src/data/imgsPaths';
import { LaptopCharacteristics, LaptopCategories } from 'Src/types/productDataType';
import { NamesMergedFilters } from 'Src/component/Filters/MergedFilters/MergedFiltersTypes';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';

export const getCurrentPhoto = (
  paths: Array<ImgData>,
  id: number,
): string | undefined => {
  const photo = paths.find((img) => img.id === id);
  return photo?.img;
};

export const getCategoryValues = (
  laptopsCharacteristics: Array<LaptopCharacteristics>,
  parameter: NamesMergedFilters,
): Array<string> => {
  const sortNumbers = (firstElement: number, secondElement: number) => firstElement - secondElement;
  const sortStrings = (firstElement: string, secondElement: string) => (
    firstElement.localeCompare(secondElement)
  );

  const sortedNames = laptopsCharacteristics
    .map((item) => item[parameter])
    .sort((firstElement, secondElement) => {
      if (
        typeof firstElement === 'number'
        && typeof secondElement === 'number'
      ) {
        return sortNumbers(firstElement, secondElement);
      }
      if (
        typeof firstElement === 'string'
        && typeof secondElement === 'string'
      ) {
        return sortStrings(firstElement, secondElement);
      }
      return 0;
    })
    .map((name) => String(name));
  return Array.from(new Set(sortedNames));
};

export const makeLaptopComparator = (
  attributeToCompare: LaptopCategories = 'name',
  isAscending = true,
) => (firstElement: LaptopCharacteristics, secondElement: LaptopCharacteristics) => {
  if (firstElement[attributeToCompare] > secondElement[attributeToCompare]) {
    return isAscending ? 1 : -1;
  }

  if (firstElement[attributeToCompare] < secondElement[attributeToCompare]) {
    return isAscending ? -1 : 1;
  }

  return 0;
};

export const isMatchFilters = (
  laptopCharacteristic: LaptopCharacteristics,
  filtersState: InitialStateFiltersType,
): boolean => {
  const {
    company, count, year, color, price, ssd, cpu, ram, name, favorite,
  } = laptopCharacteristic;
  const {
    selectedCompany,
    selectedCpu,
    selectedRam,
    selectedSsd,
    selectedCounts: [minCount, maxCount],
    selectedPrice: [minPrice, maxPrice],
    selectedYearRelease: [minYear, maxYear],
    selectedColors,
    selectedFavorite,
    search,
  } = filtersState;

  const isCheckboxFilterSelected = (
    filterData: string[],
    filterCategory: string | number,
  ) => filterData.includes(String(filterCategory)) || filterData.length === 0;

  const isRangeFilterSelected = (
    maxCategory: number,
    minCategory: number,
    filterCategory: number,
  ) => minCategory <= filterCategory && maxCategory >= filterCategory;

  const isEqualSearchName = (stringSearch: string, nameItem: string) => (
    nameItem.toLowerCase().includes(stringSearch.toLowerCase())
  );

  const isFavoriteFilterSelected = (
    isFavoriteCategory: boolean,
    isFavoriteItem: boolean,
  ) => {
    if (!isFavoriteCategory) {
      return true;
    }
    return isFavoriteItem === isFavoriteCategory;
  };

  return (
    isCheckboxFilterSelected(selectedCompany, company)
    && isCheckboxFilterSelected(selectedCpu, cpu)
    && isCheckboxFilterSelected(selectedRam, ram)
    && isCheckboxFilterSelected(selectedSsd, ssd)
    && isCheckboxFilterSelected(selectedColors, color)
    && isRangeFilterSelected(maxCount, minCount, count)
    && isRangeFilterSelected(maxPrice, minPrice, price)
    && isRangeFilterSelected(maxYear, minYear, year)
    && isEqualSearchName(search, name)
    && isFavoriteFilterSelected(selectedFavorite, favorite)
  );
};
