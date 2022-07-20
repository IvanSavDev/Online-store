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
  VALUE_SEARCH,
} from './reducerConst';

export type DataCheckbox = {
  [key: string]: boolean;
};

export type DataRange = [number, number];

export interface IChooseCompany {
  type: typeof SELECT_COMPANY;
  payload: DataCheckbox;
}
export interface IChooseCpu {
  type: typeof SELECT_CPU;
  payload: DataCheckbox;
}
export interface IChooseRam {
  type: typeof SELECT_RAM;
  payload: DataCheckbox;
}
export interface IChooseColors {
  type: typeof SELECT_COLORS;
  payload: DataCheckbox;
}
export interface IChooseCounts {
  type: typeof SELECT_COUNTS;
  payload: [number, number];
}
export interface IChooseSdd {
  type: typeof SELECT_SSD;
  payload: DataCheckbox;
}

export interface IChoosePrice {
  type: typeof SELECT_PRICE;
  payload: DataRange;
}

export interface IChooseYearRealease {
  type: typeof SELECT_YEAR_REALEASE;
  payload: DataRange;
}

export interface IChooseFavorite {
  type: typeof SELECT_FAVORITE;
  payload: boolean;
}

export interface IAddToBacket {
  type: typeof ADD_TO_BASKET;
  payload: number;
}

export interface ISetValue {
  type: typeof VALUE_SEARCH;
  payload: string;
}

export interface IResetState {
  type: typeof RESET;
}

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
  | IAddToBacket
  | ISetValue;

export type ActionsCategories =
  | IChooseCompany
  | IChooseCpu
  | IChooseRam
  | IChooseSdd;
