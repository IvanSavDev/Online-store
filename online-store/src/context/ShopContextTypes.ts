import React from 'react';

import { InitialStateFiltersType } from '../type/initialStateFiltersType';
import { Actions } from '../reducer/reducerActions';

export type GoodsBasket = {
  length: number;
  [key: string]: string | number;
};

export type ShopContextType = null | {
  stateFilters: InitialStateFiltersType;
  stateBasket: {
    dataOfGoodsInBasket: GoodsBasket;
    addGoodsInBasket: (name: string, action: string) => void;
  };
  dispatch: React.Dispatch<Actions>;
  stateSortCategory: string;
};

export type DataShop = {
  stateFilters: InitialStateFiltersType;
  stateBasket: GoodsBasket;
  sortCategory: string;
};
