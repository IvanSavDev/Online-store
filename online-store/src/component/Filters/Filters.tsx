import React, { useContext, useEffect, useRef } from 'react';
import { LaptopData } from '../../data/typeData';
import { Slider } from './Slider/Slider';
import FilterCategory from './FilterCategory/FilterCategory';
import FilterColor from './FilterColor/FilterColor';
// import Checkbox from './CheckboxSample/Checkbox';
import 'nouislider/dist/nouislider.css';
import { ShopContext } from 'Src/context/ShopContext';
import { setValueSearch } from 'Src/reducer/reducerActions';
import crossImg from 'Src/assets/icons/cross.png';
import { resetState } from 'Src/reducer/reducerActions';
import { chooseFavorite } from 'Src/reducer/reducerActions';

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
  const inputSearch = useRef<HTMLInputElement>(null!);
  const {
    stateFilters: { search },
    dispatch,
  } = useContext(ShopContext)!;

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const addValueSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (setValueSearch) dispatch(setValueSearch(target.value));
  };

  const resetInput = () => {
    dispatch(setValueSearch(''));
  };

  return (
    <div className="filters">
      <div className="category-search">
        <input
          className="category-search__text"
          ref={inputSearch}
          value={search}
          type="text"
          placeholder="search..."
          onChange={addValueSearch}
          autoComplete="off"
        />
        <button className="category-search__btn-reset" onClick={resetInput}>
          <img className="category-search__btn-img" src={crossImg} alt="" />
        </button>
      </div>
      <div className="category-company">
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
      <div className="category-cpu">
        <h3 className="filters__header category-header">CPU:</h3>
        {uniqCpu.map((cpuName) => {
          if (typeof cpuName === 'string')
            return (
              <FilterCategory key={cpuName} name={cpuName} category={'cpu'} />
            );
        })}
      </div>
      <div className="category-ram">
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
      <div className="category-ssd">
        <h3 className="filters__header category-header">SSD(gb):</h3>
        {uniqSsd.map((ssdName) => {
          const ssdNameStr = String(ssdName);
          if (typeof ssdNameStr === 'string')
            return (
              <FilterCategory
                key={ssdNameStr}
                name={ssdNameStr}
                category={'ssd'}
              />
            );
        })}
      </div>
      <div className="category-counts">
        <h3 className="filters__header">Counts:</h3>
        <Slider
          step={1}
          categorySlider={'counts'}
          range={{ min: 0, max: 10 }}
        />
      </div>
      <div className="category-price">
        <h3 className="filters__header">Price:</h3>
        <Slider
          step={5000}
          categorySlider={'price'}
          range={{ min: 0, max: 120000 }}
        />
      </div>
      <div className="category-year">
        <h3 className="filters__header">Release year:</h3>
        <Slider
          step={1}
          categorySlider={'year'}
          range={{ min: 2014, max: 2022 }}
        />
      </div>
      <div className="category-colors">
        <h3 className="filters__header category-colors__header">Color:</h3>
        <FilterColor />
      </div>
      <div className="category-favorite">
        <label
          htmlFor="favorite"
          className="filters__header category-favorite__header"
        >
          Only favorite:
        </label>
        <input
          id="favorite"
          type="checkbox"
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(chooseFavorite(target.checked));
          }}
        ></input>
      </div>
      <button
        className="btn-reset btn-reset-filters"
        onClick={() => dispatch(resetState())}
      >
        Reset filters
      </button>
      <button
        className="btn-reset btn-reset-options"
        onClick={() => localStorage.removeItem('stateShop')}
      >
        Reset options
      </button>
    </div>
  );
};

export default Filters;
