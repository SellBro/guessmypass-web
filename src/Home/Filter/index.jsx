import React from 'react';

import {
  FilterContainer,
  FilterHeader,
  FilterBody,
  Input,
  TypeTitle,
  Type,
  TypeList,
} from './styled';

const Filter = () => {
  return (
    <FilterContainer>
      <FilterHeader>Filters</FilterHeader>
      <FilterBody>
        <Input placeholder="Search value" />
        <TypeList>
          <Type>Filters</Type>
          <Type>Filters</Type>
          <Type>Filters</Type>
        </TypeList>
        <TypeTitle>Types</TypeTitle>
        <TypeList>
          <Type>Filters</Type>
          <Type>Filters</Type>
          <Type>Filters</Type>
        </TypeList>
        <TypeTitle>Folders</TypeTitle>
        <Type>No Folders</Type>
      </FilterBody>
    </FilterContainer>
  );
};

export default Filter;
