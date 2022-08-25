import { ShopContextType } from 'Src/context/ShopContextTypes';
import { NamesStateType } from '../MergeCategoriesTypes';
import { ActionCategoryType } from '../MergeCategoriesTypes';

export type FilterCategoryProps = {
  name: string;
  action: ActionCategoryType;
  nameState: NamesStateType;
  context: ShopContextType;
};
