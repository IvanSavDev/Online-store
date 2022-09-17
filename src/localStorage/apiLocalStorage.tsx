import { FiltersState } from 'Src/context/ShopContextTypes';

export const getDataFromStorage = (): FiltersState | null => {
  const dataFromStorage = localStorage.getItem('filtersState');
  const stateShop: FiltersState | null = dataFromStorage
    ? JSON.parse(dataFromStorage)
    : null;
  return stateShop;
};

export const setDataToStorage = (filtersState: FiltersState) => {
  localStorage.setItem('filtersState', JSON.stringify(filtersState));
};
