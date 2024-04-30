import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import "./css/style.css"
import Test from './components/Test';
import BinanceData from './components/BinanceData';
import person from "./mock/person.mock";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <BinanceData /> */}

    <div>
      {person.map((person, index) => (
        <div key={index}>
          <p>First Name: {person.first_name}</p>
          <p>Last Name: {person.last_name}</p>
          <p>Age: {person.year}</p>
          <br />
        </div>
      ))}
    </div>


    <Test innerTextProps="hi how are you" />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
