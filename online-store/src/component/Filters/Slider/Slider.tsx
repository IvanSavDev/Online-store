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
  // range: {
  //   min: number;
  //   max: number;
  // };
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
  // range: { min, max },
  step,
  categorySlider,
}: SliderProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { stateShop, dispatch } = useContext(ShopContext)!;

  const currentCategoryState = getStateName(categorySlider)!;
  const [min, max] = stateShop[currentCategoryState];

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    if (slider && min !== undefined && max !== undefined) {
      noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        step,
        range: {
          min,
          max,
        },
      });
      const curSlider = slider.noUiSlider!;
      curSlider.on('update', () => {
        const [min, max] = curSlider.get() as Array<string>;
        const currentAction = chooseAction(categorySlider)!;
        dispatch(currentAction([Number(min), Number(max)]));
      });
    }
  }, [ref]);

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    const curSlider = slider.noUiSlider!;
    const [minSlider, maxSlider] = curSlider.get() as Array<string>;
    if (Number(minSlider) !== min || Number(maxSlider) !== max) {
      if (min !== undefined && max !== undefined) {
        curSlider.set([min, max]);
      }
    }
  }, [min, max]);

  return (
    <div>
      <div ref={ref}></div>
      <div className="count-range">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
