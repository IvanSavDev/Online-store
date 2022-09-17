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

import {
  CheckboxFilter,
  RangeFilter,
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

export const chooseCompany = (dataCompany: CheckboxFilter): IChooseCompany => ({
  type: SELECT_COMPANY,
  payload: dataCompany,
});
export const chooseCpu = (dataCpu: CheckboxFilter): IChooseCpu => ({
  type: SELECT_CPU,
  payload: dataCpu,
});
export const chooseRam = (dataRam: CheckboxFilter): IChooseRam => ({
  type: SELECT_RAM,
  payload: dataRam,
});
export const chooseColor = (dataColors: CheckboxFilter): IChooseColors => ({
  type: SELECT_COLORS,
  payload: dataColors,
});
export const chooseCounts = (dataCounts: RangeFilter): IChooseCounts => ({
  type: SELECT_COUNTS,
  payload: dataCounts,
});
export const chooseSsd = (dataSsd: CheckboxFilter): IChooseSdd => ({
  type: SELECT_SSD,
  payload: dataSsd,
});
export const chooseYearRelease = (
  dataYearRelease: RangeFilter,
): IChooseYearRelease => ({
  type: SELECT_YEAR_RELEASE,
  payload: dataYearRelease,
});
export const choosePrice = (dataPrice: RangeFilter): IChoosePrice => ({
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
export const setSearchValue = (valueSearch: string): ISetValue => ({
  type: VALUE_SEARCH,
  payload: valueSearch,
});
