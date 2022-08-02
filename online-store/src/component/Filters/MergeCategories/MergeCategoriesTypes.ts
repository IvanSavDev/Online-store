import { ActionsCheckbox, DataCheckbox } from 'Src/reducer/reducerActionsTypes';
import {
  CATEGORY_COMPANY,
  CATEGORY_CPU,
  CATEGORY_RAM,
  CATEGORY_SSD,
  SELECTED_COMPANY,
  SELECTED_CPU,
  SELECTED_RAM,
  SELECTED_SSD,
} from './MergeCategoriesConst';

export type NamesStateType =
  | typeof SELECTED_COMPANY
  | typeof SELECTED_CPU
  | typeof SELECTED_RAM
  | typeof SELECTED_SSD;

export type MergeCategoryType =
  | typeof CATEGORY_COMPANY
  | typeof CATEGORY_CPU
  | typeof CATEGORY_RAM
  | typeof CATEGORY_SSD;

export type ActionCategoryType = (dataItem: DataCheckbox) => ActionsCheckbox;

interface dataCategoryType {
  headerName: string;
  action: ActionCategoryType;
  stateName: NamesStateType;
}

export interface IDataForCategory {
  [CATEGORY_COMPANY]: dataCategoryType;
  [CATEGORY_CPU]: dataCategoryType;
  [CATEGORY_RAM]: dataCategoryType;
  [CATEGORY_SSD]: dataCategoryType;
}
