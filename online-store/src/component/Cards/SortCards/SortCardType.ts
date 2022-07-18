import React from 'react';

export type SortCardsProps = {
  dataForSort: {
    category: {
      sortCategory: string;
      setSortCategory: React.Dispatch<React.SetStateAction<string>>;
    };
  };
};
