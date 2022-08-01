import React from 'react';
import { LaptopCategories } from 'Src/types/productDataType';
import { SortCardsProps } from './SortCardType';
import { TypesSort } from 'Src/Enums/SortCardEnum';

const SortCards = ({ dataForSort }: SortCardsProps): JSX.Element => {
  const {
    category: { sortCategory, setSortCategory },
  } = dataForSort;

  const sortName = sortCategory.name;
  const sortType = sortCategory.ascending
    ? TypesSort.Ascending
    : TypesSort.Decending;

  const changeCategory = (event: React.SyntheticEvent): void => {
    const currentOptionEl = event.target as HTMLOptionElement;
    const [nameSelectedSort, typeSelectedSort] = currentOptionEl.value.split(
      '-'
    ) as [LaptopCategories, string];
    const isAscending = typeSelectedSort === TypesSort.Ascending;
    setSortCategory({
      name: nameSelectedSort,
      [TypesSort.Ascending]: isAscending,
    });
  };

  return (
    <div className="cards__sort-container">
      <select
        name="sort"
        className="cards__sort"
        onChange={changeCategory}
        value={`${sortName}-${sortType}`}
      >
        <option value={`name-${TypesSort.Ascending}`}>
          Name {TypesSort.Ascending}
        </option>
        <option value={`name-${TypesSort.Decending}`}>
          Name {TypesSort.Decending}
        </option>
        <option value={`year-${TypesSort.Ascending}`}>
          Year {TypesSort.Ascending}
        </option>
        <option value={`year-${TypesSort.Decending}`}>
          Year {TypesSort.Decending}
        </option>
      </select>
    </div>
  );
};

export default SortCards;
