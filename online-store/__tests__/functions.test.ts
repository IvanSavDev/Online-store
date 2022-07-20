import {
  chooseCompany,
  choosePrice,
  chooseRam,
  addToBacket,
} from '../src/reducer/reducerActions';
import { getFilteredCards } from 'Src/component/Cards/getFilteredCards';
import { getSortedCards } from 'Src/component/Cards/getSortedCards';
import { productData } from 'Src/data/productData';
import { getUniqNames } from 'Src/component/Filters/MergeCategories/getUniqNames';
import { reducerShop } from '../src/reducer/reducer';
import {
  SELECT_PRICE,
  ADD_TO_BASKET,
  SELECT_RAM,
  SELECT_COMPANY,
} from 'Src/reducer/reducerConst';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';

test('filter cards', () => {
  const initState: InitialStateFiltersType = {
    selectedCompany: ['huawey'],
    selectedCpu: [],
    selectedRam: [],
    selectedSsd: [],
    selectedCounts: [0, 10],
    selectedPrice: [0, 120000],
    selectedYearRealease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: [],
    search: '',
  };

  const firstElement = productData[0];

  const result = getFilteredCards(firstElement, initState);

  expect(result).toBe(false);
});

test('choose ram', () => {
  expect(chooseRam({ 8: true })).toStrictEqual({
    type: SELECT_RAM,
    payload: { 8: true },
  });
});

test('sort cards', () => {
  const firstElement = productData[0];
  const secondElement = productData[1];

  const result = getSortedCards('name-decrease');

  expect(result(firstElement, secondElement)).toBe(-1);
});

test('choose price', () => {
  expect(addToBacket(5)).toStrictEqual({
    type: ADD_TO_BASKET,
    payload: 5,
  });
});

test('get uniq name', () => {
  const result = getUniqNames(productData, 'ram');

  expect(result).toEqual(['8', '16']);
});

test('choose company', () => {
  const insertArg = { msi: true };
  const result = chooseCompany(insertArg);

  expect(result).toEqual({ type: SELECT_COMPANY, payload: insertArg });
});

test('reset filters', () => {
  const initState: InitialStateFiltersType = {
    selectedCompany: [],
    selectedCpu: [],
    selectedRam: [],
    selectedSsd: [],
    selectedCounts: [0, 10],
    selectedPrice: [0, 120000],
    selectedYearRealease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: [],
    search: '',
  };

  const state: InitialStateFiltersType = {
    selectedCompany: ['huawey'],
    selectedCpu: [],
    selectedRam: ['8'],
    selectedSsd: [],
    selectedCounts: [0, 10],
    selectedPrice: [0, 120000],
    selectedYearRealease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: [],
    search: '',
  };

  expect(reducerShop(state, { type: 'RESET' })).toStrictEqual(initState);
});

test('choose price', () => {
  expect(choosePrice([20000, 40000])).toStrictEqual({
    type: SELECT_PRICE,
    payload: [20000, 40000],
  });
});
