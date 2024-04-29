import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import "./css/style.css"
import Test from './components/Test';
import BinanceData from './components/BinanceData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BinanceData />
    <Test innerTextProps="hi how are you" />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
