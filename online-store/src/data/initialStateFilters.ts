import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';

export const initialStateFilters: InitialStateFiltersType = {
  selectedCompany: [],
  selectedCpu: [],
  selectedRam: [],
  selectedSsd: [],
  selectedCounts: [0, 10],
  selectedPrice: [0, 120000],
  selectedYearRelease: [2014, 2022],
  selectedColors: [],
  selectedFavorite: false,
  search: '',
};
