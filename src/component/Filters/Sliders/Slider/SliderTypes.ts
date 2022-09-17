import { ChooseActionType, NamesSelectedFilters } from '../SlidersTypes';

export type SliderProps = {
  range: {
    min: number;
    max: number;
  };
  step: number;
  filterName: string;
  headerName: string;
  action: ChooseActionType;
  selectedFilter: NamesSelectedFilters;
};
