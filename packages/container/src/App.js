import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import M from './components/MarketingApp';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <M />
      </div>
    </BrowserRouter>
  );
};

export default App;
