import React from 'react';
import { chooseFavorite } from 'Src/reducer/reducerActions';
import { useShopContext } from 'Src/context/ShopContext';

const FilterFavorite = (): JSX.Element => {
  const { dispatch, filters } = useShopContext();

  const selectFavorite = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    dispatch(chooseFavorite(target.checked))
  );

  return (
    <div className="filter-favorite">
      <label
        htmlFor="favorite"
        className="filters__header filter-favorite__header"
      >
        Only favorite:
      </label>
      <input
        id="favorite"
        type="checkbox"
        checked={filters.selectedFavorite}
        onChange={selectFavorite}
      />
    </div>
  );
};

export default FilterFavorite;
