import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { LaptopData } from 'Src/types/productDataType';

export const getFilteredCards = (
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
