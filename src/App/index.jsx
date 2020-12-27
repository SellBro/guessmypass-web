import React from 'react';

import Routes from './Routes';

import * as Global from './globalStyled';
import Normalize from './Normalize';

import './fontStyles.css';

const App = () => {
  return (
    <>
      <Normalize />
      <Global.Styles />
      <Routes />
    </>
  );
};

export default App;
