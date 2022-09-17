import { ActionsCheckbox, CheckboxFilter } from 'Src/reducer/reducerActionsTypes';
import {
  FILTER_COMPANY,
  FILTER_CPU,
  FILTER_RAM,
  FILTER_SSD,
  SELECTED_COMPANY,
  SELECTED_CPU,
  SELECTED_RAM,
  SELECTED_SSD,
} from './MergedFiltersConst';

export type NamesSelectedFilters =
  | typeof SELECTED_COMPANY
  | typeof SELECTED_CPU
  | typeof SELECTED_RAM
  | typeof SELECTED_SSD;

export type NamesMergedFilters =
  | typeof FILTER_COMPANY
  | typeof FILTER_CPU
  | typeof FILTER_RAM
  | typeof FILTER_SSD;

export type ActionMergedFilters = (selectedFilter: CheckboxFilter) => ActionsCheckbox;

interface MergedFilter {
  headerName: string;
  action: ActionMergedFilters;
  selectedFilter: NamesSelectedFilters;
}

export interface IMergedFilters {
  [FILTER_COMPANY]: MergedFilter;
  [FILTER_CPU]: MergedFilter;
  [FILTER_RAM]: MergedFilter;
  [FILTER_SSD]: MergedFilter;
}
