import React, {
  createContext, useReducer, useState, useContext,
} from 'react';
import { reducerShop } from 'Src/reducer/reducer';
import { initialStateFilters } from 'Src/data/initialStateFilters';
import { getDataFromStorage } from 'Src/localStorage/apiLocalStorage';
import {
  BasketContextType, FiltersState, IGoodsBasket, ShopContextType,
} from './ShopContextTypes';

const FiltersContext = createContext<ShopContextType>(null);
const BasketContext = createContext<BasketContextType>(null);
export const useShopContext = () => useContext(FiltersContext)!;
export const useBasketContext = () => useContext(BasketContext)!;

const ShopProvider = ({ children }: {
  children: React.ReactNode;
}): JSX.Element => {
  let startData: Omit<FiltersState, 'sortOption'> = {
    filters: initialStateFilters,
    goodsBasket: { length: 0 },
  };

  const [loadStorage, setLoadStorage] = useState(false);

  if (!loadStorage) {
    setLoadStorage(true);
    const dataFromStorage = getDataFromStorage();
    if (dataFromStorage) {
      startData = {
        ...dataFromStorage,
        filters: {
          ...dataFromStorage.filters,
          search: '',
        },
      };
    }
  }

  const [goodsBasket, setGoodsBasket] = useState<IGoodsBasket>(
    startData.goodsBasket,
  );
  const [filters, dispatch] = useReducer(
    reducerShop,
    startData.filters,
  );

  const productFilters = React.useMemo(() => ({
    filters,
    dispatch,
  }), [filters]);

  const basketGoods = React.useMemo(() => ({
    goodsBasket,
    addGoodsToBasket: (name: string) => {
      setGoodsBasket((previousState) => ({
        ...previousState,
        [name]: 1,
        length: previousState.length + 1,
      }));
    },
    deleteGoodsFromBasket: (name: string) => {
      setGoodsBasket((previousState) => {
        const copyState = { ...previousState };
        delete copyState[name];
        return {
          ...copyState,
          length: previousState.length - 1,
        };
      });
    },
  }), [goodsBasket]);

  return (
    <FiltersContext.Provider value={productFilters}>
      <BasketContext.Provider value={basketGoods}>
        {children}
      </BasketContext.Provider>
    </FiltersContext.Provider>
  );
};

export default ShopProvider;
