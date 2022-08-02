import {
  SELECT_COMPANY,
  SELECT_CPU,
  SELECT_RAM,
  SELECT_COLORS,
  SELECT_COUNTS,
  SELECT_SSD,
  SELECT_YEAR_RELEASE,
  SELECT_PRICE,
  SELECT_FAVORITE,
  RESET,
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

export interface IChooseYearRelease {
  type: typeof SELECT_YEAR_RELEASE;
  payload: DataRange;
}

export interface IChooseFavorite {
  type: typeof SELECT_FAVORITE;
  payload: boolean;
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
  | IChooseYearRelease
  | IChoosePrice
  | IChooseFavorite
  | IResetState
  | ISetValue;

export type ActionsCategories =
  | IChooseCompany
  | IChooseCpu
  | IChooseRam
  | IChooseSdd;
