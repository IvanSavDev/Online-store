import React from 'react';
import {
  chooseCounts,
  choosePrice,
  chooseYearRelease,
} from 'Src/reducer/reducerActions';
import {
  FILTER_COUNTS,
  FILTER_PRICE,
  FILTER_YEAR,
  SELECTED_COUNTS,
  SELECTED_PRICE,
  SELECTED_YEAR,
} from './SlidersFiltersConst';
import Slider from './Slider/Slider';
import { ISliderFilters, NamesFiltersSliders } from './SlidersFiltersTypes';

const SlidersFilters = (): JSX.Element => {
  const filters: ISliderFilters = {
    [FILTER_COUNTS]: {
      action: chooseCounts,
      selectedFilter: SELECTED_COUNTS,
      step: 1,
      range: { min: 0, max: 10 },
      headerName: 'Counts',
    },
    [FILTER_PRICE]: {
      action: choosePrice,
      selectedFilter: SELECTED_PRICE,
      step: 5000,
      range: { min: 0, max: 120000 },
      headerName: 'Price',
    },
    [FILTER_YEAR]: {
      action: chooseYearRelease,
      selectedFilter: SELECTED_YEAR,
      step: 1,
      range: { min: 2014, max: 2022 },
      headerName: 'Release year',
    },
  };

  const filtersNames = Object.keys(filters) as Array<NamesFiltersSliders>;

  return (
    <>
      {filtersNames.map((filterName) => {
        const filter = filters[filterName];
        return (
          <Slider
            key={filterName}
            step={filter.step}
            filterName={filterName}
            range={filter.range}
            headerName={filter.headerName}
            action={filter.action}
            selectedFilter={filter.selectedFilter}
          />
        );
      })}
    </>
  );
};

export default SlidersFilters;
