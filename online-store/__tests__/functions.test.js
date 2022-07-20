import { chooseCompany } from '../src/reducer/reducerActions';
import { getFilteredCards } from 'Src/component/Cards/getFilteredCards';
import { getSortedCards } from 'Src/component/Cards/getSortedCards';
import { productData } from 'Src/data/productData';
import { getUniqNames } from 'Src/component/Filters/MergeCategories/getUniqNames';
import { reducerShop } from '../src/reducer/reducer';

test('filter cards', () => {
  const initState = {
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

test('sort cards', () => {
  const firstElement = productData[0];
  const secondElement = productData[1];

  const result = getSortedCards('name-decrease');

  expect(result(firstElement, secondElement)).toBe(-1);
});

test('get uniq name', () => {
  const result = getUniqNames(productData, 'ram');

  expect(result).toEqual(['8', '16']);
});

test('choose company', () => {
  const insertArg = { msi: true };
  const result = chooseCompany(insertArg);

  expect(result).toEqual({ type: 'SELECT_COMPANY', payload: insertArg });
});

test('reset filters', () => {
  const initState = {
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

  const state = {
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
