import React from 'react';

type SortCardsProps = {
  dataForSort: {
    name: {
      sortByName: string;
      setSortByName: React.Dispatch<React.SetStateAction<string>>;
    };
    year: {
      sortByYear: string;
      setSortByYear: React.Dispatch<React.SetStateAction<string>>;
    };
  };
};

const SortCards = ({ dataForSort }: SortCardsProps) => {
  const {
    name: { sortByName, setSortByName },
    year: { sortByYear, setSortByYear },
  } = dataForSort;

  const handleSortName = (event: React.SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    setSortByName(input.value);
  };

  const handleSortYear = (event: React.SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    setSortByYear(input.value);
  };

  return (
    <div className="cards__sort">
      <div className="cards__sort-name">
        <span>Sort by name:</span>
        <input
          type="radio"
          name="name-sort"
          value="increase"
          id="name-increase"
          checked={sortByName === 'decrease' ? true : false}
          onChange={handleSortName}
        />
        <label htmlFor="name-increase">Descending</label>
        <input
          type="radio"
          name="name-sort"
          value="decrease"
          id="name-decrease"
          onChange={handleSortName}
          checked={sortByName === 'increase' ? true : false}
        />
        <label htmlFor="name-decrease">Ascending</label>
      </div>
      <div className="cards__sort-year">
        <span>Sort by year of issue:</span>
        <input
          type="radio"
          name="year-sort"
          value="increase"
          id="year-increase"
          checked={sortByYear === 'decrease' ? true : false}
          onChange={handleSortYear}
        />
        <label htmlFor="year-increase">Descending</label>
        <input
          type="radio"
          name="year-sort"
          value="decrease"
          id="year-decrease"
          checked={sortByYear === 'increase' ? true : false}
          onChange={handleSortYear}
        />
        <label htmlFor="year-decrease">Ascending</label>
      </div>
    </div>
  );
};

export default SortCards;
