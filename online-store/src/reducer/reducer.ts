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

import { Actions } from './reducerActionsTypes';
import { InitialStateFiltersType } from 'Src/types/initialStateFiltersType';

export const reducerShop = (
  state: InitialStateFiltersType,
  action: Actions
): InitialStateFiltersType => {
  switch (action.type) {
    case SELECT_COMPANY: {
      const [[name, productSelected]] = Object.entries(action.payload);
      if (productSelected) {
        const copyArray = state.selectedCompany;
        if (!state.selectedCompany.includes(name)) {
          copyArray.push(name);
        }
        return {
          ...state,
          selectedCompany: copyArray,
        };
      } else {
        return {
          ...state,
          selectedCompany: state.selectedCompany.filter(
            (companyName) => companyName !== name
          ),
        };
      }
    }

    case SELECT_CPU: {
      const [[name, productSelected]] = Object.entries(action.payload);
      if (productSelected) {
        const copyArray = state.selectedCpu;
        if (!state.selectedCpu.includes(name)) {
          copyArray.push(name);
        }
        return {
          ...state,
          selectedCpu: copyArray,
        };
      } else {
        return {
          ...state,
          selectedCpu: state.selectedCpu.filter((cpuName) => cpuName !== name),
        };
      }
    }

    case SELECT_RAM: {
      const [[name, productSelected]] = Object.entries(action.payload);
      if (productSelected) {
        const copyArray = state.selectedRam;
        if (!state.selectedRam.includes(name)) {
          copyArray.push(name);
        }
        return {
          ...state,
          selectedRam: copyArray,
        };
      } else {
        return {
          ...state,
          selectedRam: state.selectedRam.filter((cpuName) => cpuName !== name),
        };
      }
    }

    case SELECT_SSD: {
      const [[name, productSelected]] = Object.entries(action.payload);
      if (productSelected) {
        const copyArray = state.selectedSsd;
        if (!state.selectedSsd.includes(name)) {
          copyArray.push(name);
        }
        return {
          ...state,
          selectedSsd: copyArray,
        };
      } else {
        return {
          ...state,
          selectedSsd: state.selectedSsd.filter((cpuName) => cpuName !== name),
        };
      }
    }

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

    case SELECT_COLORS: {
      const [[name, productSelected]] = Object.entries(action.payload);
      if (productSelected) {
        const copyArray = state.selectedColors;
        if (!state.selectedColors.includes(name)) {
          copyArray.push(name);
        }
        return {
          ...state,
          selectedColors: copyArray,
        };
      } else {
        return {
          ...state,
          selectedColors: state.selectedColors.filter(
            (cpuName) => cpuName !== name
          ),
        };
      }
    }

    case SELECT_FAVORITE:
      return {
        ...state,
        selectedFavorite: action.payload,
      };

    case VALUE_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

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
