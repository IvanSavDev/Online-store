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
  VALUE_SEARCH,
} from './reducerConst';

import { Actions } from './reducerActions';
import { InitialStateFiltersType } from 'Src/type/initialStateFiltersType';
import data from 'Src/data/data';

export const reducerShop = (
  state: InitialStateFiltersType,
  action: Actions
): InitialStateFiltersType => {
  switch (action.type) {
    case SELECT_COMPANY: {
      const [[name, value]] = Object.entries(action.payload);
      if (value) {
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
      const [[name, value]] = Object.entries(action.payload);
      if (value) {
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
      const [[name, value]] = Object.entries(action.payload);
      if (value) {
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
      const [[name, value]] = Object.entries(action.payload);
      if (value) {
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

    case SELECT_YEAR_REALEASE:
      return {
        ...state,
        selectedYearRealease: [...action.payload],
      };

    case SELECT_COLORS: {
      const [[name, value]] = Object.entries(action.payload);
      if (value) {
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
        selectedFavorite: action.payload
          ? data
              .filter((item) => item.favorite === action.payload)
              .map((item) => item.name)
          : [],
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
        selectedYearRealease: [2014, 2022],
        selectedColors: [],
        selectedFavorite: [],
        search: '',
      };

    default:
      return state;
  }
};

// export const reducerShop = (
//   state: InitialStateFiltersType,
//   action: Actions
// ): InitialStateFiltersType => {
//   switch (action.type) {
//     case SELECT_COMPANY:
//       const [[name, value]] = Object.entries(action.payload);
//       if (value) {
//         const copyArray = state.selectedCompany;
//         if (!state.selectedCompany.includes(name)) {
//           copyArray.push(name);
//         }
//         return {
//           ...state,
//           selectedCompany: copyArray,
//         };
//       } else {
//         return {
//           ...state,
//           selectedCompany: state.selectedCompany.filter(
//             (companyName) => companyName !== name
//           ),
//         };
//       }

//     case SELECT_CPU:
//       return {
//         ...state,
//         selectedCpu: {
//           ...state.selectedCpu,
//           ...action.payload,
//         },
//       };

//     case SELECT_RAM:
//       return {
//         ...state,
//         selectedRam: {
//           ...state.selectedRam,
//           ...action.payload,
//         },
//       };

//     case SELECT_SSD:
//       return {
//         ...state,
//         selectedSsd: {
//           ...state.selectedSsd,
//           ...action.payload,
//         },
//       };

//     case SELECT_COUNTS:
//       return {
//         ...state,
//         selectedCounts: [...action.payload],
//       };

//     case SELECT_PRICE:
//       return {
//         ...state,
//         selectedPrice: [...action.payload],
//       };

//     case SELECT_YEAR_REALEASE:
//       return {
//         ...state,
//         selectedYearRealease: [...action.payload],
//       };

//     case SELECT_COLORS:
//       return {
//         ...state,
//         selectedColors: {
//           ...state.selectedColors,
//           ...action.payload,
//         },
//       };

//     case SELECT_FAVORITE:
//       return {
//         ...state,
//         selectedFavorite: data
//           .filter((item) => item.favorite === action.payload)
//           .map((item) => item.name),
//       };

//     case RESET:
//       return initialState;

//     default:
//       return state;
//   }
// };
