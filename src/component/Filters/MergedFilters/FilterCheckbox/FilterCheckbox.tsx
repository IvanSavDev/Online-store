import React from 'react';
import { useShopContext } from 'Src/context/ShopContext';
import { FilterCheckboxProps } from './FilterCheckboxTypes';

const FilterCheckbox = ({
  name,
  action,
  selectedFilter,
}: FilterCheckboxProps): JSX.Element => {
  const { filters, dispatch } = useShopContext();
  const updateName = name.charAt(0).toUpperCase() + name.slice(1);

  const setCategory = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    dispatch(action({ [name]: target.checked }))
  );

  return (
    <div>
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={setCategory}
        checked={filters[selectedFilter].includes(name)}
      />
      <label htmlFor={name} className="filter-name">
        {updateName}
      </label>
    </div>
  );
};

export default FilterCheckbox;
