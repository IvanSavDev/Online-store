import React, { createContext, useReducer, useState } from 'react';
import { InitialStateType } from '../type/initialStateType';
import { reducerShop } from '../reducer/reducer';
import { Actions } from '../reducer/reducerActions';
import { initialState } from 'Src/data/initialState';

export const ShopContext = createContext<null | {
  stateShop: InitialStateType;
  stateBasket: {
    countGoodsInBasket: number;
    addGoodsInBasket: (count: number) => void;
  };
  dispatch: React.Dispatch<Actions>;
}>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [stateShop, dispatch] = useReducer(reducerShop, initialState);
  const [countGoodsInBasket, addToBasket] = useState<number>(0);

  const addGoodsInBasket = (count: number): void => {
    addToBasket(countGoodsInBasket + count);
  };

  return (
    <ShopContext.Provider
      value={{
        stateShop,
        dispatch,
        stateBasket: { countGoodsInBasket, addGoodsInBasket },
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
