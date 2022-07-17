import React, { useEffect, useRef, useState } from 'react';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

type SliderProps = {
  range: {
    min: number;
    max: number;
  };
  step: number;
};

export const Slider = ({ range: { min, max }, step }: SliderProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [currentMin, setCurrentMin] = useState<number>(min);
  const [currentMax, setCurrentMax] = useState<number>(max);

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    if (slider) {
      noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        step,
        range: {
          min,
          max,
        },
      });

      const curSlider = slider.noUiSlider;
      if (curSlider) {
        curSlider.on('update', () => {
          const [min, max] = curSlider.get() as Array<string>;
          setCurrentMin(Number(min));
          setCurrentMax(Number(max));
        });
      }
    }
  }, [ref]);

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
