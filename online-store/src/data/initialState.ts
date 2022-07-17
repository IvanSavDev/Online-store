import { InitialStateType } from 'Src/type/initialStateType';
import { data } from './data';

export const initialState: InitialStateType = {
  selectedCompany: data.map((item) => item.company),
  selectedCpu: data.map((item) => item.cpu),
  selectedRam: data.map((item) => item.ram),
  selectedSsd: data.map((item) => item.ssd),
  selectedCounts: [0, 10],
  selectedPrice: [0, 120000],
  selectedYearRealease: [2014, 2022],
  selectedColors: data.map((item) => item.color),
  selectedFavorite: data
    .filter((item) => item.favorite === true)
    .map((item) => item.name),
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
