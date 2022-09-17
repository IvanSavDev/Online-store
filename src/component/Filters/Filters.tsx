import React from 'react';
import 'nouislider/dist/nouislider.css';
import { useShopContext } from 'Src/context/ShopContext';
import { resetState } from 'Src/reducer/reducerActions';
import { Laptops } from 'Src/types/productDataType';
import SlidersFilters from './Sliders/SlidersFilters';
import FilterFavorite from './FilterFavorite/FilterFavorite';
import FilterColor from './FilterColor/FilterColor';
import FilterSearch from './FilterSearch/FilterSearch';
import MergedFilters from './MergedFilters/MergedFilters';

const Filters = ({ products }: Laptops): JSX.Element => {
  const { dispatch } = useShopContext();

  return (
    <div className="filters">
      <FilterSearch />
      <MergedFilters products={products} />
      <SlidersFilters />
      <FilterColor />
      <FilterFavorite />
      <button
        className="btn-reset"
        type="button"
        onClick={() => dispatch(resetState())}
      >
        Reset filters
      </button>
    </div>
  );
};

export default Filters;
