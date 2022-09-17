import { RangeFilter, Actions } from 'Src/reducer/reducerActionsTypes';
import {
  FILTER_COUNTS,
  FILTER_PRICE,
  FILTER_YEAR,
  SELECTED_COUNTS,
  SELECTED_PRICE,
  SELECTED_YEAR,
} from './SlidersFiltersConst';

export type ChooseActionType = (range: RangeFilter) => Actions;

export type NamesSelectedFilters =
  | typeof SELECTED_COUNTS
  | typeof SELECTED_PRICE
  | typeof SELECTED_YEAR;

export type NamesFiltersSliders =
  | typeof FILTER_COUNTS
  | typeof FILTER_PRICE
  | typeof FILTER_YEAR;

interface SliderFilter {
  action: ChooseActionType;
  selectedFilter: NamesSelectedFilters;
  step: number;
  range: { min: number; max: number };
  headerName: string;
}

export interface ISliderFilters {
  [FILTER_COUNTS]: SliderFilter;
  [FILTER_PRICE]: SliderFilter;
  [FILTER_YEAR]: SliderFilter;
}
