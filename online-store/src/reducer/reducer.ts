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
} from './reducerConst';

import { Actions } from './reducerActions';
import { InitialState } from 'type/initialState';

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
  state: InitialState,
  action: Actions
): InitialState => {
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
        selectedCounts: {
          ...state.selectedCounts,
          ...action.payload,
        },
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
        selectedFavorite: action.payload,
      };
    default:
      return state;
  }
};
