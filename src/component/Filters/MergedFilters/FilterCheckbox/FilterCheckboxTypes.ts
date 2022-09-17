import { ActionMergedFilters, NamesSelectedFilters } from '../MergedFiltersTypes';

export type FilterCheckboxProps = {
  name: string;
  action: ActionMergedFilters;
  selectedFilter: NamesSelectedFilters;
};
