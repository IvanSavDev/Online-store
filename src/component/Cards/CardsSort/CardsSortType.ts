import React from 'react';
import { SortOption } from 'Src/types/productDataType';

export type SortCardsProps = {
  sortOption: SortOption;
  changeSorting: React.Dispatch<React.SetStateAction<SortOption>>;
};
