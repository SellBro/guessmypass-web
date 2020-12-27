import React from 'react';

import Filter from './Filter';
import ItemsList from './ItemsList';

import { HomeContainer, Row, SideContainer, CenterContainer } from './styled';

const HomePage = () => {
  return (
    <HomeContainer>
      <Row>
        <SideContainer>
          <Filter />
        </SideContainer>
        <CenterContainer>
          <ItemsList />
        </CenterContainer>
      </Row>
    </HomeContainer>
  );
};

export default HomePage;
