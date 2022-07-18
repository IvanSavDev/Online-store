import React, { useContext, useEffect, useRef } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import {
  chooseCounts,
  choosePrice,
  chooseYearRealease,
} from 'Src/reducer/reducerActions';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

type SliderProps = {
  range: {
    min: number;
    max: number;
  };
  step: number;
  categorySlider: string;
};

const chooseAction = (name: string) => {
  if (name === 'counts') {
    return chooseCounts;
  }
  if (name === 'price') {
    return choosePrice;
  }
  if (name === 'year') {
    return chooseYearRealease;
  }
};

const getStateName = (nameCategory: string) => {
  if (nameCategory === 'counts') {
    return 'selectedCounts';
  }
  if (nameCategory === 'price') {
    return 'selectedPrice';
  }
  if (nameCategory === 'year') {
    return 'selectedYearRealease';
  }
};

export const Slider = ({
  range: { min, max },
  step,
  categorySlider,
}: SliderProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { stateFilters, dispatch } = useContext(ShopContext)!;

  const currentCategoryState = getStateName(categorySlider)!;
  const [currentMin, currentMax] = stateFilters[currentCategoryState];

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
        const currentAction = chooseAction(categorySlider)!;
        dispatch(currentAction([Number(minFromSlider), Number(maxFromSlider)]));
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
    <div>
      <div ref={ref}></div>
      <div className="count-range">
        <span>{currentMin}</span>
        <span>{currentMax}</span>
      </div>
    </div>
  );
};
