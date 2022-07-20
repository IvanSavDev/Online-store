import React, { useContext, useEffect, useRef } from 'react';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { ShopContext } from 'Src/context/ShopContext';
import { SliderProps } from './SliderTypes';
import { ShopContextType } from 'Src/context/ShopContextTypes';

const Slider = ({
  range: { min, max },
  step,
  categorySlider,
  headerName,
  action,
  nameState,
}: SliderProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null!);
  const { stateFilters, dispatch } = useContext<ShopContextType>(ShopContext)!;
  const [currentMin, currentMax] = stateFilters[nameState];

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    if (slider && currentMin !== undefined && currentMax !== undefined) {
      noUiSlider.create(slider, {
        start: [currentMin, currentMax],
        connect: true,
        step,
        range: {
          min,
          max,
        },
      });
      const curSlider = slider.noUiSlider!;
      curSlider.on('update', () => {
        const [minFromSlider, maxFromSlider] = curSlider.get() as Array<string>;
        dispatch(action([Number(minFromSlider), Number(maxFromSlider)]));
      });
    }
  }, [ref]);

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    const curSlider = slider.noUiSlider!;
    const [minSlider, maxSlider] = curSlider.get() as Array<string>;
    if (Number(minSlider) !== currentMin || Number(maxSlider) !== currentMax) {
      if (currentMin !== undefined && currentMax !== undefined) {
        curSlider.set([currentMin, currentMax]);
      }
    }
  }, [currentMin, currentMax]);

  return (
    <div className={`category-${categorySlider}`}>
      <h3 className="filters__header">{headerName}:</h3>
      <div ref={ref}></div>
      <div className="count-range">
        <span>{currentMin}</span>
        <span>{currentMax}</span>
      </div>
    </div>
  );
};

export default Slider;
