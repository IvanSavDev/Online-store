import React, { useContext, useEffect, useRef } from 'react';
import crossImg from 'Src/assets/icons/cross.png';
import { ShopContext } from 'Src/context/ShopContext';
import { setValueSearch } from 'Src/reducer/reducerActions';

const FilterSearch = (): JSX.Element => {
  const {
    stateFilters: { search },
    dispatch,
  } = useContext(ShopContext)!;

  const inputSearch = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const addValueSearch = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (setValueSearch) dispatch(setValueSearch(target.value));
  };

  const resetInput = (): void => {
    dispatch(setValueSearch(''));
  };

  return (
    <div className="category-search">
      <input
        className="category-search__text"
        ref={inputSearch}
        value={search}
        type="text"
        placeholder="search..."
        onChange={addValueSearch}
        autoComplete="off"
      />
      <button className="category-search__btn-reset" onClick={resetInput}>
        <img className="category-search__btn-img" src={crossImg} alt="" />
      </button>
    </div>
  );
};

export default FilterSearch;
