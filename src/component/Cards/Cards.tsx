import React, { useEffect, useState } from 'react';
import { useBasketContext, useShopContext } from 'Src/context/ShopContext';
import { getDataFromStorage, setDataToStorage } from 'Src/localStorage/apiLocalStorage';
import { SortOption, Laptops } from 'Src/types/productDataType';
import { SortTypes } from 'Src/Enums/SortTypesEnum';
import { isMatchFilters, makeLaptopComparator } from 'Src/utils/utils';
import Card from './Card/Card';
import SortCards from './CardsSort/CardsSort';

const Cards = ({ products }: Laptops): JSX.Element => {
  const { filters } = useShopContext();
  const { goodsBasket } = useBasketContext();
  const [loadStorage, setLoadStorage] = useState(false);

  let initialSortOption: SortOption = {
    name: 'name',
    [SortTypes.Ascending]: true,
  };

  if (!loadStorage) {
    setLoadStorage(true);
    const dataFromStorage = getDataFromStorage();
    if (dataFromStorage) {
      initialSortOption = dataFromStorage.sortOption;
    }
  }

  const [sortOption, setSortOption] = useState<SortOption>(initialSortOption);

  const currentSort = makeLaptopComparator(
    sortOption.name,
    sortOption.ascending,
  );

  useEffect(() => {
    const generalState = {
      filters,
      goodsBasket,
      sortOption,
    };
    setDataToStorage(generalState);
  }, [filters, sortOption, goodsBasket]);

  const filteredCards = products
    .filter((product) => isMatchFilters(product, filters))
    .sort(currentSort)
    .map((product) => <Card key={product.id} product={product} />);

  return (
    <div className="cards">
      <SortCards
        sortOption={sortOption}
        changeSorting={setSortOption}
      />
      {filteredCards.length === 0 ? (
        <h3 className="cards__not-found">Sorry, no matches found :(</h3>
      ) : (
        <div className="cards__list">
          {filteredCards}
        </div>
      )}
    </div>
  );
};

export default Cards;
