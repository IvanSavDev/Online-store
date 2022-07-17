import {
  SELECT_COMPANY,
  SELECT_CPU,
  SELECT_RAM,
  SELECT_COLORS,
  SELECT_COUNTS,
  SELECT_SSD,
  SELECT_YEAR_REALEASE,
  SELECT_PRICE,
  SELECT_FAVORITE,
  RESET,
  ADD_TO_BASKET,
} from './reducerConst';

interface IChooseCompany {
  type: typeof SELECT_COMPANY;
  payload: {
    [key: string]: boolean;
  };
}
interface IChooseCpu {
  type: typeof SELECT_CPU;
  payload: {
    [key: string]: boolean;
  };
}
interface IChooseRam {
  type: typeof SELECT_RAM;
  payload: {
    [key: string]: boolean;
  };
}
interface IChooseColors {
  type: typeof SELECT_COLORS;
  payload: {
    [key: string]: boolean;
  };
}
interface IChooseCounts {
  type: typeof SELECT_COUNTS;
  payload: [number, number];
}
interface IChooseSdd {
  type: typeof SELECT_SSD;
  payload: {
    [key: string]: boolean;
  };
}

interface IChoosePrice {
  type: typeof SELECT_PRICE;
  payload: [number, number];
}

interface IChooseYearRealease {
  type: typeof SELECT_YEAR_REALEASE;
  payload: [number, number];
}

interface IChooseFavorite {
  type: typeof SELECT_FAVORITE;
  payload: boolean;
}

interface IAddToBacket {
  type: typeof ADD_TO_BASKET;
  payload: number;
}

interface IResetState {
  type: typeof RESET;
}

type DataCheckbox = {
  [key: string]: boolean;
};

type DataRange = [number, number];

type CountGoodsType = number;

export type Actions =
  | IChooseCompany
  | IChooseCpu
  | IChooseRam
  | IChooseColors
  | IChooseCounts
  | IChooseSdd
  | IChooseYearRealease
  | IChoosePrice
  | IChooseFavorite
  | IResetState
  | IAddToBacket;

export const chooseCompany = (dataCompany: DataCheckbox): IChooseCompany => ({
  type: SELECT_COMPANY,
  payload: dataCompany,
});
export const chooseCpu = (dataCpu: DataCheckbox): IChooseCpu => ({
  type: SELECT_CPU,
  payload: dataCpu,
});
export const chooseRam = (dataRam: DataCheckbox): IChooseRam => ({
  type: SELECT_RAM,
  payload: dataRam,
});
export const chooseColor = (dataColors: DataCheckbox): IChooseColors => ({
  type: SELECT_COLORS,
  payload: dataColors,
});
export const chooseCounts = (dataCounts: DataRange): IChooseCounts => ({
  type: SELECT_COUNTS,
  payload: dataCounts,
});
export const chooseSsd = (dataSsd: DataCheckbox): IChooseSdd => ({
  type: SELECT_SSD,
  payload: dataSsd,
});
export const chooseYearRealease = (
  dataYearRealease: DataRange
): IChooseYearRealease => ({
  type: SELECT_YEAR_REALEASE,
  payload: dataYearRealease,
});
export const choosePrice = (dataPrice: DataRange): IChoosePrice => ({
  type: SELECT_PRICE,
  payload: dataPrice,
});
export const chooseFavorite = (dataFavorite: boolean): IChooseFavorite => ({
  type: SELECT_FAVORITE,
  payload: dataFavorite,
});
export const resetState = (): IResetState => ({
  type: RESET,
});
export const addToBacket = (countGoods: CountGoodsType): IAddToBacket => ({
  type: ADD_TO_BASKET,
  payload: countGoods,
});

// type ISelectAction = {
//   [key: string]: (key: DataRange | DataCheckbox | boolean) => Actions,
// }

// const selectAction = (nameCategory: string) => {
//   const actionsByName: ISelectAction = {
//     company: (key: DataCheckbox) => chooseCompany(key),
//     cpu: chooseCpu,
//     ram: chooseRam,
//     color: chooseColor,
//     counts: chooseCounts,
//     ssd: chooseSsd,
//     year: chooseYearRealease,
//     price: choosePrice,
//     favorite: chooseFavorite,
//   }

//   return actionsByName[nameCategory];
// }
