import React from 'react';
import { LaptopDataCategories } from 'Src/types/productDataType';

export type SortCardsProps = {
  dataForSort: {
    category: {
      sortCategory: LaptopDataCategories;
      setSortCategory: React.Dispatch<
        React.SetStateAction<LaptopDataCategories>
      >;
    };
  };
};
