import { DataRange, Actions } from 'Src/reducer/reducerActionsTypes';
import {
  CATEGORY_COUNTS,
  CATEGORY_PRICE,
  CATEGORY_YEAR,
  SELECTED_COUNTS,
  SELECTED_PRICE,
  SELECTED_YEAR,
} from './SlidersConst';

export type ChooseActionType = (dataCounts: DataRange) => Actions;

export type NamesStateRangeType =
  | typeof SELECTED_COUNTS
  | typeof SELECTED_PRICE
  | typeof SELECTED_YEAR;

export type NamesCategoriesSliders =
  | typeof CATEGORY_COUNTS
  | typeof CATEGORY_PRICE
  | typeof CATEGORY_YEAR;

interface IDataSlider {
  action: ChooseActionType;
  nameState: NamesStateRangeType;
  step: number;
  range: { min: number; max: number };
  headerName: string;
}

export interface IDataForSlider {
  [CATEGORY_COUNTS]: IDataSlider;
  [CATEGORY_PRICE]: IDataSlider;
  [CATEGORY_YEAR]: IDataSlider;
}
