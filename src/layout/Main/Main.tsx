import React from 'react';
import Filters from 'Src/component/Filters/Filters';
import Cards from 'Src/component/Cards/Cards';
import { laptops } from 'Src/data/productData';

const Main = (): JSX.Element => (
  <main className="main">
    <div className="layout-width main-container">
      <Filters products={laptops} />
      <Cards products={laptops} />
    </div>
  </main>
);

export default Main;
