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

export type CheckboxFilter = {
  [key: string]: boolean;
};

export type RangeFilter = [number, number];

export interface IChooseCompany {
  type: typeof SELECT_COMPANY;
  payload: CheckboxFilter;
}
export interface IChooseCpu {
  type: typeof SELECT_CPU;
  payload: CheckboxFilter;
}
export interface IChooseRam {
  type: typeof SELECT_RAM;
  payload: CheckboxFilter;
}
export interface IChooseColors {
  type: typeof SELECT_COLORS;
  payload: CheckboxFilter;
}
export interface IChooseCounts {
  type: typeof SELECT_COUNTS;
  payload: [number, number];
}
export interface IChooseSdd {
  type: typeof SELECT_SSD;
  payload: CheckboxFilter;
}

export interface IChoosePrice {
  type: typeof SELECT_PRICE;
  payload: RangeFilter;
}

export interface IChooseYearRelease {
  type: typeof SELECT_YEAR_RELEASE;
  payload: RangeFilter;
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

export type ActionsCheckbox =
  | IChooseCompany
  | IChooseCpu
  | IChooseRam
  | IChooseColors
  | IChooseSdd;
