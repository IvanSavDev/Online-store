import React from 'react';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import Footer from '../../layout/Footer/Footer';
import './App.scss';

const App = () => {
  // const [countGoodsInBasket, addToBacket] = useState<number>(0);

  return (
    <div className="container-app">
      <Header />
      <Main />
      <Footer className="footer" />
    </div>
  );
};

export default App;
