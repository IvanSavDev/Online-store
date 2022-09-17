import React from 'react';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { Actions } from 'Src/reducer/reducerActionsTypes';
import { SortOption } from 'Src/types/productDataType';

export interface IGoodsBasket {
  length: number;
  [key: string]: string | number;
}

export type ShopContextType = null | {
  filters: InitialStateFiltersType;
  dispatch: React.Dispatch<Actions>;
};

export interface FiltersState {
  filters: InitialStateFiltersType;
  goodsBasket: IGoodsBasket;
  sortOption: SortOption
}

export type BasketContextType = null | {
  goodsBasket: IGoodsBasket;
  addGoodsToBasket: (name: string) => void;
  deleteGoodsFromBasket: (name: string) => void;
};
