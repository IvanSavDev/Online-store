import React, { useContext } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import { FilterCategoryProps } from './FilterCategoryTypes';

const FilterCategory = ({
  name,
  action,
  nameState,
}: FilterCategoryProps): JSX.Element => {
  const { stateFilters, dispatch } = useContext(ShopContext)!;

  const updateName = name.charAt(0).toUpperCase() + name.slice(1);

  const setCategory = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(action({ [name]: target.checked }));

  return (
    <div>
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={setCategory}
        checked={stateFilters[nameState].includes(name)}
      ></input>
      <label htmlFor={name} className="category-name">
        {updateName}
      </label>
    </div>
  );
};

export default FilterCategory;
