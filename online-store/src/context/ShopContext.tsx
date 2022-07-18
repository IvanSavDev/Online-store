import React, { createContext, useReducer, useState } from 'react';
import { DataShop, GoodsBasket, ShopContextType } from './ShopContextTypes';
import { reducerShop } from '../reducer/reducer';
import { initialStateFilters } from 'Src/data/initialStateFilters';
import { getDataFromStorage } from 'Src/localStorage/apiLocalStorage';

export const ShopContext = createContext<ShopContextType>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  let startData: DataShop = {
    stateFilters: initialStateFilters,
    stateBasket: { length: 0 },
    sortCategory: 'name-decrease',
  };
  const [loadStorage, changeLoadStorage] = useState(false);
  if (!loadStorage) {
    changeLoadStorage(true);
    const dataFromStorage = getDataFromStorage();
    if (dataFromStorage) {
      const copyData: DataShop = {
        ...dataFromStorage,
        stateFilters: {
          ...dataFromStorage.stateFilters,
          search: '',
        },
      };
      startData = copyData;
    }
  }
  const [stateShop] = useState(startData);
  const [dataOfGoodsInBasket, addToBasket] = useState<GoodsBasket>(
    stateShop.stateBasket
  );

  const [stateFilters, dispatch] = useReducer(
    reducerShop,
    stateShop.stateFilters
  );

  const addGoodsInBasket = (name: string, action: string): void => {
    const currentCount = action === 'add' ? 1 : -1;
    addToBasket((prevState) => {
      const copyState = { ...prevState };
      if (action === 'add') {
        return {
          ...copyState,
          [name]: 1,
          length: prevState.length + currentCount,
        };
      } else {
        delete copyState[name];
        return {
          ...copyState,
          length: prevState.length + currentCount,
        };
      }
    });
  };

  return (
    <ShopContext.Provider
      value={{
        stateFilters,
        dispatch,
        stateBasket: {
          dataOfGoodsInBasket,
          addGoodsInBasket,
        },
        stateSortCategory: stateShop.sortCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
