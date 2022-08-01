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
  ADD_TO_BASKET,
  VALUE_SEARCH,
} from './reducerConst';

import {
  DataCheckbox,
  DataRange,
  IAddToBacket,
  IChooseColors,
  IChooseCompany,
  IChooseCounts,
  IChooseCpu,
  IChooseFavorite,
  IChoosePrice,
  IChooseRam,
  IChooseSdd,
  IChooseYearRelease,
  IResetState,
  ISetValue,
} from './reducerActionsTypes';

export const chooseCompany = (dataCompany: DataCheckbox): IChooseCompany => ({
  type: SELECT_COMPANY,
  payload: dataCompany,
});
export const chooseCpu = (dataCpu: DataCheckbox): IChooseCpu => ({
  type: SELECT_CPU,
  payload: dataCpu,
});
export const chooseRam = (dataRam: DataCheckbox): IChooseRam => ({
  type: SELECT_RAM,
  payload: dataRam,
});
export const chooseColor = (dataColors: DataCheckbox): IChooseColors => ({
  type: SELECT_COLORS,
  payload: dataColors,
});
export const chooseCounts = (dataCounts: DataRange): IChooseCounts => ({
  type: SELECT_COUNTS,
  payload: dataCounts,
});
export const chooseSsd = (dataSsd: DataCheckbox): IChooseSdd => ({
  type: SELECT_SSD,
  payload: dataSsd,
});
export const chooseYearRelease = (
  dataYearRelease: DataRange
): IChooseYearRelease => ({
  type: SELECT_YEAR_RELEASE,
  payload: dataYearRelease,
});
export const choosePrice = (dataPrice: DataRange): IChoosePrice => ({
  type: SELECT_PRICE,
  payload: dataPrice,
});
export const chooseFavorite = (dataFavorite: boolean): IChooseFavorite => ({
  type: SELECT_FAVORITE,
  payload: dataFavorite,
});
export const resetState = (): IResetState => ({
  type: RESET,
});
export const addToBacket = (countGoods: number): IAddToBacket => ({
  type: ADD_TO_BASKET,
  payload: countGoods,
});
export const setValueSearch = (valueSearch: string): ISetValue => ({
  type: VALUE_SEARCH,
  payload: valueSearch,
});
