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

type IDataCheckbox = {
  [key: string]: boolean;
};

type IDataRange = [number, number];

export type Actions =
  | IChooseCompany
  | IChooseCpu
  | IChooseRam
  | IChooseColors
  | IChooseCounts
  | IChooseSdd
  | IChooseYearRealease
  | IChoosePrice
  | IChooseFavorite;

// type ISelectAction = {
//   [key: string]: (key: IDataRange | IDataCheckbox | boolean) => Actions,
// }

// const selectAction = (nameCategory: string) => {
//   const actionsByName: ISelectAction = {
//     company: (key: IDataCheckbox) => chooseCompany(key),
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

export const chooseCompany = (dataCompany: IDataCheckbox): IChooseCompany => ({
  type: SELECT_COMPANY,
  payload: dataCompany,
});
export const chooseCpu = (dataCpu: IDataCheckbox): IChooseCpu => ({
  type: SELECT_CPU,
  payload: dataCpu,
});
export const chooseRam = (dataRam: IDataCheckbox): IChooseRam => ({
  type: SELECT_RAM,
  payload: dataRam,
});
export const chooseColor = (dataColors: IDataCheckbox): IChooseColors => ({
  type: SELECT_COLORS,
  payload: dataColors,
});
export const chooseCounts = (dataCounts: IDataRange): IChooseCounts => ({
  type: SELECT_COUNTS,
  payload: dataCounts,
});
export const chooseSsd = (dataSsd: IDataCheckbox): IChooseSdd => ({
  type: SELECT_SSD,
  payload: dataSsd,
});
export const chooseYearRealease = (
  dataYearRealease: IDataRange
): IChooseYearRealease => ({
  type: SELECT_YEAR_REALEASE,
  payload: dataYearRealease,
});
export const choosePrice = (dataPrice: IDataRange): IChoosePrice => ({
  type: SELECT_PRICE,
  payload: dataPrice,
});
export const chooseFavorite = (dataFavorite: boolean): IChooseFavorite => ({
  type: SELECT_FAVORITE,
  payload: dataFavorite,
});
