import React, { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext';
import {
  chooseCompany,
  chooseCpu,
  chooseRam,
  chooseSsd,
} from '../../../reducer/reducerActions';

const getAction = (nameCategory: string) => {
  if (nameCategory === 'cpu') {
    return chooseCpu;
  }
  if (nameCategory === 'ram') {
    return chooseRam;
  }
  if (nameCategory === 'ssd') {
    return chooseSsd;
  }
  if (nameCategory === 'company') {
    return chooseCompany;
  }
};

const getNameState = (nameCategory: string) => {
  if (nameCategory === 'cpu') {
    return 'selectedCpu';
  }
  if (nameCategory === 'ram') {
    return 'selectedRam';
  }
  if (nameCategory === 'ssd') {
    return 'selectedSsd';
  }
  if (nameCategory === 'company') {
    return 'selectedCompany';
  }
};

const FilterCategory = ({
  category,
  name,
}: {
  category: string;
  name: string;
}) => {
  const updateName = name.charAt(0).toUpperCase() + name.slice(1);

  const { stateFilters, dispatch } = useContext(ShopContext)!;

  const currentAction = getAction(category);

  const setCategory = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (currentAction) dispatch(currentAction({ [name]: target.checked }));
  };

  const currentStateName = getNameState(category)!;
  return (
    <div>
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={setCategory}
        checked={stateFilters[currentStateName].includes(name)}
      ></input>
      <label htmlFor={name} className="category-name">
        {updateName}
      </label>
    </div>
  );
};

export default FilterCategory;
