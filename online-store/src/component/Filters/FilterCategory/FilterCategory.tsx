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

const FilterCategory = ({
  category,
  name,
}: {
  category: string;
  name: string;
}) => {
  const updateName = name.charAt(0).toUpperCase() + name.slice(1);

  const { valueShop, dispatch } = useContext(ShopContext)!;

  const currentAction = getAction(category);

  const setCategory = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (currentAction) dispatch(currentAction({ [name]: target.checked }));
  };

  return (
    <div>
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={setCategory}
        checked={valueShop.selectedCompany[name]}
      ></input>
      <label htmlFor={name} className="company__name">
        {updateName}
      </label>
    </div>
  );
};

export default FilterCategory;
