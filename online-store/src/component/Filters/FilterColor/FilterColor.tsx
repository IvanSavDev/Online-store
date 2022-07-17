import React from 'react';

const FilterColor = () => {
  const currentActive = (event: React.SyntheticEvent) => {
    const input = event.target as HTMLInputElement;
    console.log(input.name);
    // const input: HTMLInputElement = event.target;
    // if (target) {
    //   console.log(target.name);
    // }
  };

  return (
    <div className="colors__list">
      <input
        type="checkbox"
        name="grey"
        className="color__item color__item_grey"
        onChange={currentActive}
      ></input>
      <input
        type="checkbox"
        name="blue"
        className="color__item color__item_blue"
        onChange={currentActive}
      ></input>
      <input
        type="checkbox"
        name="black"
        className="color__item color__item_black"
        onChange={currentActive}
      ></input>
      <input
        type="checkbox"
        name="green"
        className="color__item color__item_green"
        onChange={currentActive}
      ></input>
    </div>
  );
};

// <div className="color__item color__item_grey"></div>
// <div className="color__item color__item_blue"></div>
// <div className="color__item color__item_black"></div>
// <div className="color__item color__item_green"></div>

export default FilterColor;
