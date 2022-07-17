import {
  SELECT_COMPANY,
  SELECT_CPU,
  SELECT_RAM,
  SELECT_COLORS,
  SELECT_COUNTS,
  SELECT_SSD,
  SELECT_YEAR_REALEASE,
  SELECT_PRICE,
  SELECT_FAVORITE,
  RESET,
} from './reducerConst';

import { Actions } from './reducerActions';
import { InitialStateType } from 'Src/type/initialStateType';
import { initialState } from 'Src/data/initialState';
import data from 'Src/data/data';

// const initialState: InitialState = {
//   selectedCompany: {},
//   selectedCpu: {},
//   selectedRam: {},
//   selectedSsd: {},
//   selectedCounts: [],
//   selectedPrice: [],
//   selectedYearRealease: [],
//   selectedColors: {},
//   selectedFavorite: false,
// };

export const reducerShop = (
  state: InitialStateType,
  action: Actions
): InitialStateType => {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        ...state,
        selectedCompany: {
          ...state.selectedCompany,
          ...action.payload,
        },
      };

    case SELECT_CPU:
      return {
        ...state,
        selectedCpu: {
          ...state.selectedCpu,
          ...action.payload,
        },
      };

    case SELECT_RAM:
      return {
        ...state,
        selectedRam: {
          ...state.selectedRam,
          ...action.payload,
        },
      };

    case SELECT_SSD:
      return {
        ...state,
        selectedSsd: {
          ...state.selectedSsd,
          ...action.payload,
        },
      };

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

    case SELECT_YEAR_REALEASE:
      return {
        ...state,
        selectedYearRealease: [...action.payload],
      };

    case SELECT_COLORS:
      return {
        ...state,
        selectedColors: {
          ...state.selectedColors,
          ...action.payload,
        },
      };

    case SELECT_FAVORITE:
      return {
        ...state,
        selectedFavorite: data
          .filter((item) => item.favorite === action.payload)
          .map((item) => item.name),
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};
