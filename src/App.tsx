import React from 'react';

import Home from './pages/Home';

import Menu from './components/Menu';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
