import { SortTypes } from 'Src/Enums/SortTypesEnum';

export interface LaptopCharacteristics {
  id: number;
  company: string;
  name: string;
  count: number;
  year: number;
  ssd: number;
  ram: number;
  cpu: string;
  color: string;
  price: number;
  favorite: boolean;
}

export interface Laptops {
  products: Array<LaptopCharacteristics>;
}

export type LaptopCategories =
  | 'id'
  | 'company'
  | 'name'
  | 'count'
  | 'year'
  | 'ssd'
  | 'ram'
  | 'cpu'
  | 'color'
  | 'price'
  | 'favorite';

export interface SortOption {
  name: LaptopCategories;
  [SortTypes.Ascending]: boolean;
}
