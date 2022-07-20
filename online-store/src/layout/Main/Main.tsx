import React from 'react';
import Filters from 'Src/component/Filters/Filters';
import Cards from 'Src/component/Cards/Cards';
import { productData } from 'Src/data/productData';

class Main extends React.Component {
  render(): JSX.Element {
    return (
      <main className="main">
        <div className="layout-width main-container">
          <Filters dataItems={productData} />
          <Cards dataItems={productData} />
        </div>
      </main>
    );
  }
}

export default Main;
