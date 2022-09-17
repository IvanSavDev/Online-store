import React from 'react';
import { useShopContext } from 'Src/context/ShopContext';
import { chooseColor } from 'Src/reducer/reducerActions';
import { Colors } from './FilterColorsEnum';

const FilterColor = (): JSX.Element => {
  const { filters, dispatch } = useShopContext();

  const selectColor = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    dispatch(chooseColor({ [target.name]: target.checked }))
  );

  return (
    <div className="filter-colors">
      <h3 className="filters__header filter-colors__header">Color:</h3>
      <div className="filter-colors__list">
        {Object.values(Colors).map((color) => (
          <input
            key={color}
            type="checkbox"
            name={color}
            className={`filter-colors__item filter-colors__item_${color}`}
            onChange={selectColor}
            checked={filters.selectedColors.includes(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterColor;
