import React from 'react';
import { FilterCategoryProps } from './FilterCategoryTypes';

const FilterCategory = ({
  name,
  action,
  nameState,
  context,
}: FilterCategoryProps): JSX.Element => {
  const updateName = name.charAt(0).toUpperCase() + name.slice(1);

  const setCategory = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    context?.dispatch(action({ [name]: target.checked }));

  return (
    <div>
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={setCategory}
        checked={context?.stateFilters[nameState].includes(name)}
      ></input>
      <label htmlFor={name} className="category-name">
        {updateName}
      </label>
    </div>
  );
};

export default FilterCategory;
