export type InitialStateType = {
  selectedCompany: Array<string>;
  selectedCpu: Array<string>;
  selectedRam: Array<number>;
  selectedSsd: Array<number>;
  selectedCounts: [number, number] | [];
  selectedPrice: [number, number] | [];
  selectedYearRealease: [number, number] | [];
  selectedColors: Array<string>;
  selectedFavorite: Array<string>;
};

export type valueCategory = string | number | boolean;

// export type InitialStateType = {
//   selectedCompany: {
//     [key: string]: boolean;
//   };
//   selectedCpu: {
//     [key: string]: boolean;
//   };
//   selectedRam: {
//     [key: string]: boolean;
//   };
//   selectedSsd: {
//     [key: string]: boolean;
//   };
//   selectedCounts: [number, number] | [];
//   selectedPrice: [number, number] | [];
//   selectedYearRealease: [number, number] | [];
//   selectedColors: {
//     [key: string]: boolean;
//   };
//   countGoodsInBasket: number;
//   selectedFavorite: boolean;
// };

// export type valueCategory = string | number | boolean;
