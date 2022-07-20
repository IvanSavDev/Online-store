import React, { useContext } from 'react';
import { getUniqNames } from './getUniqNames';
import FilterCategory from 'Src/component/Filters/MergeCategories/FilterCategory/FilterCategory';
import { FilterProps } from 'Src/component/Filters/FiltersTypes';
import { MergeCategoryType, IDataForCategory } from './MergeCategoriesTypes';
import { ShopContext } from 'Src/context/ShopContext';
import {
  CATEGORY_COMPANY,
  CATEGORY_CPU,
  CATEGORY_RAM,
  CATEGORY_SSD,
} from './MergeCategoriesConst';
import {
  chooseCompany,
  chooseCpu,
  chooseRam,
  chooseSsd,
} from 'Src/reducer/reducerActions';

const MergeCategories = ({ dataItems }: FilterProps): JSX.Element => {
  const dataForCategory: IDataForCategory = {
    [CATEGORY_COMPANY]: {
      headerName: 'Company',
      action: chooseCompany,
      stateName: 'selectedCompany',
    },
    [CATEGORY_CPU]: {
      headerName: 'CPU',
      action: chooseCpu,
      stateName: 'selectedCpu',
    },
    [CATEGORY_RAM]: {
      headerName: 'RAM',
      action: chooseRam,
      stateName: 'selectedRam',
    },
    [CATEGORY_SSD]: {
      headerName: 'SSD',
      action: chooseSsd,
      stateName: 'selectedSsd',
    },
  };

  const context = useContext(ShopContext)!;

  const keysMergeCategory = Object.keys(
    dataForCategory
  ) as Array<MergeCategoryType>;

  return (
    <>
      {keysMergeCategory.map((categoryParam) => (
        <div key={categoryParam} className={`category-${categoryParam}`}>
          <h3 className="filters__header category-header">
            {dataForCategory[categoryParam].headerName}:
          </h3>
          {getUniqNames(dataItems, categoryParam).map((name) => (
            <FilterCategory
              key={name}
              name={name}
              action={dataForCategory[categoryParam].action}
              nameState={dataForCategory[categoryParam].stateName}
              context={context}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default MergeCategories;
