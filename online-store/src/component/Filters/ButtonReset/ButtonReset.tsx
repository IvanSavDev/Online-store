import React, { useContext } from 'react';
import { ShopContext } from 'Src/context/ShopContext';
import { resetState } from 'Src/reducer/reducerActions';

const ButtonReset = () => {
  const { dispatch } = useContext(ShopContext)!;

  return (
    <button className="btn-reset" onClick={() => dispatch(resetState())}>
      Reset filters
    </button>
  );
};

export default ButtonReset;
