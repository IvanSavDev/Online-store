import React from 'react';
import Header from 'Src/layout/Header/Header';
import Main from 'Src/layout/Main/Main';
import Footer from 'Src/layout/Footer/Footer';
import './App.scss';

const App = (): JSX.Element => (
  <div className="container-app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
