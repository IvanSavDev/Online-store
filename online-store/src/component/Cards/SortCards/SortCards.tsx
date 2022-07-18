import React from 'react';
import { SortCardsProps } from './SortCardType';

const SortCards = ({ dataForSort }: SortCardsProps) => {
  const {
    category: { sortCategory, setSortCategory },
  } = dataForSort;

  const changeCategory = (event: React.SyntheticEvent) => {
    const currentOptionEl = event.target as HTMLOptionElement;
    setSortCategory(currentOptionEl.value);
  };

  return (
    <div className="cards__sort-container">
      <select
        name="sort"
        className="cards__sort"
        onChange={changeCategory}
        value={sortCategory}
      >
        <option value="name-decrease">Name decending</option>
        <option value="name-increase">Name ascending</option>
        <option value="year-decrease">Year decending</option>
        <option value="year-increase">Year ascending</option>
      </select>
    </div>
  );
};

export default SortCards;
