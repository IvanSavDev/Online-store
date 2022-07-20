import React, { useContext } from 'react';
import 'nouislider/dist/nouislider.css';
import Sliders from './Sliders/Sliders';
import FilterFavorite from './FilterFavorite/FilterFavorite';
import FilterColor from './FilterColor/FilterColor';
import { ShopContext } from 'Src/context/ShopContext';
import { resetState } from 'Src/reducer/reducerActions';
import { FilterProps } from './FiltersTypes';
import FilterSearch from './FilterSearch/FilterSearch';
import MergeCategories from './MergeCategories/MergeCategories';

const Filters = ({ dataItems }: FilterProps): JSX.Element => {
  const { dispatch } = useContext(ShopContext)!;

  return (
    <div className="filters">
      <FilterSearch />
      <MergeCategories dataItems={dataItems} />
      <Sliders />
      <FilterColor />
      <FilterFavorite />
      <button
        className="btn-reset btn-reset-filters"
        onClick={() => dispatch(resetState())}
      >
        Reset filters
      </button>
      <button
        className="btn-reset btn-reset-options"
        onClick={() => {
          localStorage.removeItem('stateShop');
          dispatch(resetState());
        }}
      >
        Reset options
      </button>
    </div>
  );
};

export default Filters;
