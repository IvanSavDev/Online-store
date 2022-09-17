import React from 'react';
import {
  chooseCompany,
  chooseCpu,
  chooseRam,
  chooseSsd,
} from 'Src/reducer/reducerActions';
import { Laptops } from 'Src/types/productDataType';
import { getCategoryValues } from 'Src/utils/utils';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import {
  FILTER_COMPANY,
  FILTER_CPU,
  FILTER_RAM,
  FILTER_SSD,
} from './MergedFiltersConst';
import { NamesMergedFilters, IMergedFilters } from './MergedFiltersTypes';

const MergedFilters = ({ products }: Laptops): JSX.Element => {
  const filters: IMergedFilters = {
    [FILTER_COMPANY]: {
      headerName: 'Company',
      action: chooseCompany,
      selectedFilter: 'selectedCompany',
    },
    [FILTER_CPU]: {
      headerName: 'CPU',
      action: chooseCpu,
      selectedFilter: 'selectedCpu',
    },
    [FILTER_RAM]: {
      headerName: 'RAM(gb)',
      action: chooseRam,
      selectedFilter: 'selectedRam',
    },
    [FILTER_SSD]: {
      headerName: 'SSD(gb)',
      action: chooseSsd,
      selectedFilter: 'selectedSsd',
    },
  };

  const namesMergedFilters = Object.keys(filters) as Array<NamesMergedFilters>;

  return (
    <>
      {namesMergedFilters.map((nameFilter) => {
        const filter = filters[nameFilter];
        return (
          <div key={nameFilter} className={`filter-${nameFilter}`}>
            <h3 className="filter-header filters__header">
              {`${filter.headerName}:`}
            </h3>
            {getCategoryValues(products, nameFilter).map((name) => (
              <FilterCheckbox
                key={name}
                name={name}
                action={filter.action}
                selectedFilter={filter.selectedFilter}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default MergedFilters;
