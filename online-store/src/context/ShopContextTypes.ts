import React from 'react';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { Actions } from 'Src/reducer/reducerActionsTypes';
import { LaptopDataCategories } from 'Src/types/productDataType';

export interface IGoodsBasket {
  length: number;
  [key: string]: string | number;
}

export type ShopContextType = null | {
  stateFilters: InitialStateFiltersType;
  stateBasket: {
    dataOfGoodsInBasket: IGoodsBasket;
    addGoodsInBasket: (name: string, action: string) => void;
  };
  dispatch: React.Dispatch<Actions>;
  stateSortCategory: LaptopDataCategories;
};

export interface DataShop {
  readonly stateFilters: InitialStateFiltersType;
  readonly stateBasket: IGoodsBasket;
  readonly sortCategory: LaptopDataCategories;
}
