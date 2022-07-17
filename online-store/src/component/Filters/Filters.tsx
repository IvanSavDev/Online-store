import React, { useEffect, useRef } from 'react';
import { LaptopData } from '../../data/typeData';
import { Slider } from './Slider/Slider';
import FilterCategory from './FilterCategory/FilterCategory';
import FilterColor from './FilterColor/FilterColor';
import Checkbox from './CheckboxSample/Checkbox';
import ButtonReset from './ButtonReset/ButtonReset';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

type FilterProps = {
  dataItems: Array<LaptopData>;
};

const getUniqName = (data: Array<LaptopData>, parametr: string) => {
  const sample = data.map((item) => item[parametr]);
  const sortedName = sample.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return 0;
    }
  });
  return Array.from(new Set(sortedName));
};

const Filters: React.FC<FilterProps> = ({ dataItems }) => {
  const uniqCompaniesName = getUniqName(dataItems, 'company');
  const uniqCpu = getUniqName(dataItems, 'cpu');
  const uniqRam = getUniqName(dataItems, 'ram');
  const uniqSsd = getUniqName(dataItems, 'ssd');
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const slider = ref.current as noUiSlider.target;
    if (slider) {
      noUiSlider.create(slider, {
        start: [0, 5],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 10,
        },
      });

      const curSlider = slider.noUiSlider;
      if (curSlider) {
        curSlider.on('update', () => {
          console.log(curSlider.get());
        });
      }
    }
  }, [ref]);

  return (
    <div className="filters">
      <input type="text" placeholder="search..." />
      <div>
        <h3 className="filters__header category-header">Company:</h3>
        {uniqCompaniesName.map((companyName) => {
          if (typeof companyName === 'string')
            return (
              <FilterCategory
                key={companyName}
                name={companyName}
                category={'company'}
              />
            );
        })}
      </div>
      <div>
        <h3 className="filters__header category-header">CPU:</h3>
        {uniqCpu.map((cpuName) => {
          if (typeof cpuName === 'string')
            return (
              <FilterCategory key={cpuName} name={cpuName} category={'cpu'} />
            );
        })}
      </div>
      <div>
        <h3 className="filters__header category-header">RAM(gb):</h3>
        {uniqRam.map((ramName) => {
          const ramNameStr = String(ramName);
          if (typeof ramNameStr === 'string')
            return (
              <FilterCategory
                key={ramNameStr}
                name={ramNameStr}
                category={'ram'}
              />
            );
        })}
      </div>
      <div>
        <h3 className="filters__header category-header">SSD(gb):</h3>
        {uniqSsd.map((ramName) => {
          const ramNameStr = String(ramName);
          if (typeof ramNameStr === 'string')
            return (
              <FilterCategory
                key={ramNameStr}
                name={ramNameStr}
                category={'ssd'}
              />
            );
        })}
      </div>
      <div>
        <h3 className="filters__header">Counts:</h3>
        <Slider range={{ min: 0, max: 10 }} step={1} />
      </div>
      <div>
        <h3 className="filters__header">Price:</h3>
        <Slider range={{ min: 0, max: 120000 }} step={5000} />
      </div>
      <div>
        <h3 className="filters__header">Release year:</h3>
        <Slider range={{ min: 2014, max: 2022 }} step={1} />
      </div>
      <div className="colors">
        <h3 className="filters__header colors__header">Color:</h3>
        <FilterColor />
      </div>
      <div className="favorite-items">
        <h3 className="filters__header favorite-items__header">
          Only favorite:
        </h3>
        <Checkbox data={{ id: '1', name: 'favorite' }}></Checkbox>
      </div>
      <ButtonReset></ButtonReset>
    </div>
  );
};

export default Filters;
