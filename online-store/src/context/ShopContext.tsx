import React, { createContext, useContext } from 'react';

export const ShopContext = createContext<null>(null);

export const Context = ({ children }) => {
  const value = null;
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
