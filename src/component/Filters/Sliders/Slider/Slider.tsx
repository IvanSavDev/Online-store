import React, { useEffect, useRef } from 'react';
import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { useShopContext } from 'Src/context/ShopContext';
import { SliderProps } from './SliderTypes';

const Slider = ({
  range: { min, max },
  step,
  filterName,
  headerName,
  action,
  selectedFilter,
}: SliderProps): JSX.Element => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { filters, dispatch } = useShopContext();
  const [currentMin, currentMax] = filters[selectedFilter];

  useEffect(() => {
    const containerSlider = ref.current as noUiSlider.target;
    const slider = containerSlider.noUiSlider;

    if (!slider) {
      noUiSlider.create(containerSlider, {
        start: [currentMin, currentMax],
        connect: true,
        step,
        range: {
          min,
          max,
        },
      });
    }

    slider?.on('update', () => {
      const [minFromSlider, maxFromSlider] = slider.get() as Array<string>;
      dispatch(action([Number(minFromSlider), Number(maxFromSlider)]));
    });

    return () => {
      slider?.off('update');
    };
  }, []);

  return (
    <div className={`filter-${filterName}`}>
      <h3 className="filter-header range-header">{`${headerName}:`}</h3>
      <div ref={ref} />
      <div className="count-range">
        <span>{currentMin}</span>
        <span>{currentMax}</span>
      </div>
    </div>
  );
};

export default Slider;
