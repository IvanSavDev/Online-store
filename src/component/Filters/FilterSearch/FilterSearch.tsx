import React, { useEffect, useRef } from 'react';
import crossImg from 'Src/assets/icons/cross.png';
import { useShopContext } from 'Src/context/ShopContext';
import { setSearchValue } from 'Src/reducer/reducerActions';

const FilterSearch = (): JSX.Element => {
  const {
    filters: { search },
    dispatch,
  } = useShopContext();

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (ref) {
      ref.current?.focus();
    }
  }, []);

  const addValueSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    dispatch(setSearchValue(target.value))
  );

  const resetInput = () => dispatch(setSearchValue(''));

  return (
    <div className="search">
      <input
        className="search__text"
        ref={ref}
        value={search}
        type="text"
        placeholder="search..."
        onChange={addValueSearch}
        autoComplete="off"
      />
      <button
        className="search__btn-reset"
        type="button"
        onClick={resetInput}
      >
        <img
          className="search__btn-img"
          src={crossImg}
          alt="reset input"
        />
      </button>
    </div>
  );
};

export default FilterSearch;
