import React from 'react';
import { LaptopCategories } from 'Src/types/productDataType';
import { SortTypes } from 'Src/Enums/SortTypesEnum';
import { CardsSortProps } from './CardsSortType';

const CardsSort = ({ sortOption, changeSorting }: CardsSortProps): JSX.Element => {
  const sortName = sortOption.name;
  const sortType = sortOption.ascending
    ? SortTypes.Ascending
    : SortTypes.Descending;

  const changeSortType = (event: React.SyntheticEvent) => {
    const currentOptionType = event.target as HTMLOptionElement;
    const [nameSelectedSort, typeSelectedSort] = currentOptionType.value.split('-') as [LaptopCategories, string];
    const isAscending = typeSelectedSort === SortTypes.Ascending;
    changeSorting({
      name: nameSelectedSort,
      [SortTypes.Ascending]: isAscending,
    });
  };

  return (
    <select
      name="sort"
      className="cards__sort"
      onChange={changeSortType}
      value={`${sortName}-${sortType}`}
    >
      <option value={`name-${SortTypes.Ascending}`}>
        {`Name ${SortTypes.Ascending}`}
      </option>
      <option value={`name-${SortTypes.Descending}`}>
        {`Name ${SortTypes.Descending}`}
      </option>
      <option value={`year-${SortTypes.Ascending}`}>
        {`Year ${SortTypes.Ascending}`}
      </option>
      <option value={`year-${SortTypes.Descending}`}>
        {`Year ${SortTypes.Descending}`}
      </option>
    </select>
  );
};

export default CardsSort;
