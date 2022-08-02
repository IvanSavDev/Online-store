import {
  SELECT_COMPANY,
  SELECT_CPU,
  SELECT_RAM,
  SELECT_COLORS,
  SELECT_COUNTS,
  SELECT_SSD,
  SELECT_YEAR_RELEASE,
  SELECT_PRICE,
  SELECT_FAVORITE,
  RESET,
  VALUE_SEARCH,
} from './reducerConst';

import { Actions, ActionsCheckbox } from './reducerActionsTypes';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';
import { FiltersNames } from './reducerTypes';

const changeDataCheckbox = (
  state: InitialStateFiltersType,
  selectedCategory: FiltersNames,
  dataFromAction: ActionsCheckbox
) => {
  const [[name, productSelected]] = Object.entries(dataFromAction.payload);
  if (productSelected) {
    return {
      ...state,
      [selectedCategory]: state[selectedCategory].includes(name)
        ? state[selectedCategory]
        : [...state[selectedCategory], name],
    };
  } else {
    return {
      ...state,
      [selectedCategory]: state[selectedCategory].filter(
        (companyName) => companyName !== name
      ),
    };
  }
};

export const reducerShop = (
  state: InitialStateFiltersType,
  action: Actions
): InitialStateFiltersType => {
  switch (action.type) {
    case SELECT_COMPANY:
      return changeDataCheckbox(state, 'selectedCompany', action);

    case SELECT_CPU:
      return changeDataCheckbox(state, 'selectedCpu', action);

    case SELECT_RAM:
      return changeDataCheckbox(state, 'selectedRam', action);

    case SELECT_SSD:
      return changeDataCheckbox(state, 'selectedSsd', action);

    case SELECT_COLORS:
      return changeDataCheckbox(state, 'selectedColors', action);

    case SELECT_COUNTS:
      return {
        ...state,
        selectedCounts: [...action.payload],
      };

    case SELECT_PRICE:
      return {
        ...state,
        selectedPrice: [...action.payload],
      };

    case SELECT_YEAR_RELEASE:
      return {
        ...state,
        selectedYearRelease: [...action.payload],
      };

    case SELECT_FAVORITE:
      return {
        ...state,
        selectedFavorite: action.payload,
      };

    case VALUE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case RESET:
      return {
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

    default:
      return state;
  }
};
