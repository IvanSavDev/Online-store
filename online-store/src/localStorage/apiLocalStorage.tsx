import { DataShop } from '../context/ShopContextTypes';

export const getDataFromStorage = (): DataShop | null => {
  const dataFromStorage = localStorage.getItem('stateShop');
  const stateShop: DataShop | null = dataFromStorage
    ? JSON.parse(dataFromStorage)
    : null;
  return stateShop;
};

export const setDataFromStorage = (generalState: DataShop): void => {
  localStorage.setItem('stateShop', JSON.stringify(generalState));
};
