import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { laptops } from 'Src/data/productData';
import { getCategoryValues, isMatchFilters, makeLaptopComparator } from 'Src/utils/utils';
import {
  SELECT_PRICE,
  SELECT_RAM,
  SELECT_COMPANY,
  SELECT_FAVORITE,
} from 'Src/reducer/reducerConst';
import { reducerShop } from '../src/reducer/reducer';
import {
  chooseCompany,
  choosePrice,
  chooseRam,
  chooseFavorite,
} from '../src/reducer/reducerActions';

test('filter cards', () => {
  const initState: InitialStateFiltersType = {
    selectedCompany: ['huawey'],
    selectedCpu: [],
    selectedRam: [],
    selectedSsd: [],
    selectedCounts: [0, 10],
    selectedPrice: [0, 120000],
    selectedYearRelease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: false,
    search: '',
  };

  const firstElement = laptops[0];

  const result = isMatchFilters(firstElement, initState);

  expect(result).toBe(false);
});

test('choose ram', () => {
  expect(chooseRam({ 8: true })).toStrictEqual({
    type: SELECT_RAM,
    payload: { 8: true },
  });
});

test('sort cards', () => {
  const firstElement = laptops[0];
  const secondElement = laptops[1];

  const result = makeLaptopComparator('name', true);

  expect(result(firstElement, secondElement)).toBe(-1);
});

test('get uniq name', () => {
  const result = getCategoryValues(laptops, 'ram');

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
    selectedYearRelease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: false,
    search: '',
  };

  const state: InitialStateFiltersType = {
    selectedCompany: ['huawey'],
    selectedCpu: [],
    selectedRam: ['8'],
    selectedSsd: [],
    selectedCounts: [0, 10],
    selectedPrice: [0, 120000],
    selectedYearRelease: [2014, 2022],
    selectedColors: [],
    selectedFavorite: false,
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

test('choose favorite', () => {
  expect(chooseFavorite(true)).toStrictEqual({
    type: SELECT_FAVORITE,
    payload: true,
  });
});
