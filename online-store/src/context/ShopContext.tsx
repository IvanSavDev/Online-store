import React, { createContext, useReducer } from 'react';
import { InitialState } from '../type/initialState';
import { reducerShop } from '../reducer/reducer';
import { Actions } from 'reducer/reducerActions';

export const ShopContext = createContext<null | {
  valueShop: InitialState;
  dispatch: React.Dispatch<Actions>;
}>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const state: InitialState = {
    selectedCompany: {
      msi: false,
      hp: false,
      huawey: false,
      honor: false,
      lenovo: false,
      acer: false,
      asus: false,
      apple: false,
    },
    selectedCpu: {
      intel: false,
      amd: false,
      m1: false,
    },
    selectedRam: {
      8: false,
      16: false,
    },
    selectedSsd: {
      256: false,
      512: false,
    },
    selectedCounts: [],
    selectedPrice: [],
    selectedYearRealease: [],
    selectedColors: {},
    selectedFavorite: false,
  };

  const [valueShop, dispatch] = useReducer(reducerShop, state);

  return (
    <ShopContext.Provider value={{ valueShop, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
