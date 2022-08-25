import React, { useContext } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import { ShopContextType } from 'Src/context/ShopContextTypes';
import { chooseColor } from 'Src/reducer/reducerActions';
import { Colors } from './FilterColorsEnum';

const FilterColor = (): JSX.Element => {
  const { stateFilters, dispatch } = useContext<ShopContextType>(ShopContext)!;

  const currentActive = (event: React.SyntheticEvent): void => {
    const input = event.target as HTMLInputElement;
    dispatch(chooseColor({ [input.name]: input.checked }));
  };

  return (
    <div className="category-colors">
      <h3 className="filters__header category-colors__header">Color:</h3>
      <div className="colors__list">
        {Object.values(Colors).map((color) => {
          return (
            <input
              key={color}
              type="checkbox"
              name={color}
              className={`color__item color__item_${color}`}
              onChange={currentActive}
              checked={stateFilters.selectedColors.includes(color)}
            ></input>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColor;
