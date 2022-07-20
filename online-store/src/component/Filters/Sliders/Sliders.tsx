import React from 'react';
import Slider from './Slider/Slider';
import {
  chooseCounts,
  choosePrice,
  chooseYearRealease,
} from 'Src/reducer/reducerActions';
import { IDataForSlider, NamesCategoriesSliders } from './SlidersTypes';
import {
  CATEGORY_COUNTS,
  CATEGORY_PRICE,
  CATEGORY_YEAR,
  SELECTED_COUNTS,
  SELECTED_PRICE,
  SELECTED_YEAR,
} from './SlidersConst';

const Sliders = () => {
  const dataForSlider: IDataForSlider = {
    [CATEGORY_COUNTS]: {
      action: chooseCounts,
      nameState: SELECTED_COUNTS,
      step: 1,
      range: { min: 0, max: 10 },
      headerName: 'Counts',
    },
    [CATEGORY_PRICE]: {
      action: choosePrice,
      nameState: SELECTED_PRICE,
      step: 5000,
      range: { min: 0, max: 120000 },
      headerName: 'Price',
    },
    [CATEGORY_YEAR]: {
      action: chooseYearRealease,
      nameState: SELECTED_YEAR,
      step: 1,
      range: { min: 2014, max: 2022 },
      headerName: 'Release year',
    },
  };

  const nameCategorySliders = Object.keys(
    dataForSlider
  ) as Array<NamesCategoriesSliders>;

  return (
    <>
      {nameCategorySliders.map((categoryName) => {
        return (
          <Slider
            key={categoryName}
            step={dataForSlider[categoryName].step}
            categorySlider={categoryName}
            range={dataForSlider[categoryName].range}
            headerName={dataForSlider[categoryName].headerName}
            action={dataForSlider[categoryName].action}
            nameState={dataForSlider[categoryName].nameState}
          />
        );
      })}
    </>
  );
};

export default Sliders;
