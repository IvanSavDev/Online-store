import { InitialStateFiltersType } from '../type/initialStateFiltersType';
// import { data } from './data';

export const initialStateFilters: InitialStateFiltersType = {
  selectedCompany: [],
  selectedCpu: [],
  selectedRam: [],
  selectedSsd: [],
  selectedCounts: [0, 10],
  selectedPrice: [0, 120000],
  selectedYearRealease: [2014, 2022],
  selectedColors: [],
  selectedFavorite: [],
  search: '',
};

// export const initialState: InitialStateType = {
//   selectedCompany: {
//     msi: false,
//     hp: false,
//     huawey: false,
//     honor: false,
//     lenovo: false,
//     acer: false,
//     asus: false,
//     apple: false,
//   },
//   selectedCpu: {
//     intel: false,
//     amd: false,
//     m1: false,
//   },
//   selectedRam: {
//     8: false,
//     16: false,
//   },
//   selectedSsd: {
//     256: false,
//     512: false,
//   },
//   selectedCounts: [0, 10],
//   selectedPrice: [0, 120000],
//   selectedYearRealease: [2014, 2022],
//   selectedColors: { grey: false, blue: false, black: false, green: false },
//   countGoodsInBasket: 0,
//   selectedFavorite: false,
// };
