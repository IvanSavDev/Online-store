import React, { useContext } from 'react';
import './Checkbox.scss';
import { ShopContext } from '../../../context/ShopContext';
import { chooseFavorite } from '../../../reducer/reducerActions';

type CheckboxProps = {
  data: {
    id: string;
    width?: number;
    height?: number;
    name: string;
  };
};

const Checkbox = ({ data }: CheckboxProps) => {
  const { id, width = 15, height = 15, name } = data;

  const { stateShop, dispatch } = useContext(ShopContext)!;

  const setFavorite = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(chooseFavorite(target.checked));
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        id={id}
        name={name}
        type="checkbox"
        style={{ width, height }}
        onChange={setFavorite}
        checked={stateShop.selectedFavorite || false}
      />
      <label
        htmlFor={id}
        className="checkbox__label"
        style={{ width, height }}
      ></label>
    </div>
  );
};

export default Checkbox;
