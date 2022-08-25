import React, { createContext, useReducer, useState } from 'react';
import { DataShop, IGoodsBasket, ShopContextType } from './ShopContextTypes';
import { reducerShop } from 'Src/reducer/reducer';
import { initialStateFilters } from 'Src/data/initialStateFilters';
import { getDataFromStorage } from 'Src/localStorage/apiLocalStorage';
import { TypesSort } from 'Src/Enums/SortCardEnum';

export const ShopContext = createContext<ShopContextType>(null);

const addGoodsInBasket =
  (addToBasket: React.Dispatch<React.SetStateAction<IGoodsBasket>>) =>
  (name: string, action: string): void => {
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

export const Context = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  let startData: DataShop = {
    stateFilters: initialStateFilters,
    stateBasket: { length: 0 },
    sortCategory: {
      name: 'name',
      [TypesSort.Ascending]: true,
    },
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

  const [dataOfGoodsInBasket, addToBasket] = useState<IGoodsBasket>(
    startData.stateBasket
  );
  const [stateFilters, dispatch] = useReducer(
    reducerShop,
    startData.stateFilters
  );

  return (
    <ShopContext.Provider
      value={{
        stateFilters,
        dispatch,
        stateBasket: {
          dataOfGoodsInBasket,
          addGoodsInBasket: addGoodsInBasket(addToBasket),
        },
        stateSortCategory: startData.sortCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default Context;
