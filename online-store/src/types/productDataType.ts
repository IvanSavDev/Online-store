import { TypesSort } from 'Src/Enums/SortCardEnum';

export interface LaptopData {
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

export interface LaptopDataCategories {
  name: LaptopCategories;
  [TypesSort.Ascending]: boolean;
}
