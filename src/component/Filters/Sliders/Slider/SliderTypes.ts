import { ChooseActionType, NamesSelectedFilters } from '../SlidersFiltersTypes';

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
