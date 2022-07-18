import React from 'react';
import Filters from '../../component/Filters/Filters';
import Cards from '../../component/Cards/Cards';
import dataItems from '../../data/data';

const Main = () => {
  return (
    <main className="main">
      <div className="layout-width main-container">
        <Filters dataItems={dataItems} />
        <Cards dataItems={dataItems} />
      </div>
    </main>
  );
};

export default Main;
