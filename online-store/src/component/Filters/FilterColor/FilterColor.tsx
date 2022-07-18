import React, { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext';
import { chooseColor } from 'Src/reducer/reducerActions';

const FilterColor = () => {
  const { stateFilters, dispatch } = useContext(ShopContext)!;
  const currentActive = (event: React.SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    dispatch(chooseColor({ [input.name]: input.checked }));
  };

  return (
    <div className="colors__list">
      <input
        type="checkbox"
        name="grey"
        className="color__item color__item_grey"
        onChange={currentActive}
        checked={stateFilters.selectedColors.includes('grey')}
      ></input>
      <input
        type="checkbox"
        name="blue"
        className="color__item color__item_blue"
        onChange={currentActive}
        checked={stateFilters.selectedColors.includes('blue')}
      ></input>
      <input
        type="checkbox"
        name="black"
        className="color__item color__item_black"
        onChange={currentActive}
        checked={stateFilters.selectedColors.includes('black')}
      ></input>
      <input
        type="checkbox"
        name="green"
        className="color__item color__item_green"
        onChange={currentActive}
        checked={stateFilters.selectedColors.includes('green')}
      ></input>
    </div>
  );
};

export default FilterColor;
