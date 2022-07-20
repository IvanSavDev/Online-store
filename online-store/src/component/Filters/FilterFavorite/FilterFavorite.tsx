import React, { useContext } from 'react';
import { chooseFavorite } from 'Src/reducer/reducerActions';
import { ShopContext } from 'Src/context/ShopContext';
import { ShopContextType } from 'Src/context/ShopContextTypes';

const FilterFavorite = (): JSX.Element => {
  const { dispatch } = useContext<ShopContextType>(ShopContext)!;

  return (
    <div className="category-favorite">
      <label
        htmlFor="favorite"
        className="filters__header category-favorite__header"
      >
        Only favorite:
      </label>
      <input
        id="favorite"
        type="checkbox"
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(chooseFavorite(target.checked));
        }}
      ></input>
    </div>
  );
};

export default FilterFavorite;
