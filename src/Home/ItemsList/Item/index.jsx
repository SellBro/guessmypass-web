import React from 'react';

import { ItemContainer, CheckBox, SelectButtonContainer, Info, Name, Notes } from './styled';

const Item = ({ name, notes }) => {
  return (
    <ItemContainer>
      <SelectButtonContainer>
        <CheckBox type="checkbox" />
      </SelectButtonContainer>
      <Info>
        <Name>{name}</Name>
        <br />
        <Notes>{notes}</Notes>
      </Info>
    </ItemContainer>
  );
};

export default Item;
