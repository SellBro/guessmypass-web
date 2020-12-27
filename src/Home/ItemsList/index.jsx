import React from 'react';

import Item from './Item';

import { FormContainer, FormHeader, ToggleButton, ListContainer, ListBody } from './styled';

const data = [
  {
    name: 'battleNet',
    password: 'password',
    url: 'url',
    notes: 'my battle net',
    cardholderName: '',
    number: '',
    cvv: '',
  },

  {
    name: 'Bitwarden',
    password: 'password',
    url: 'url',
    notes: 'my bitwarden',
    cardholderName: '',
    number: '',
    cvv: '',
  },
  {
    name: 'battleNet',
    password: 'password',
    url: 'url',
    notes: 'my battle net',
    cardholderName: '',
    number: '',
    cvv: '',
  },

  {
    name: 'Bitwarden',
    password: 'password',
    url: 'url',
    notes: 'my bitwarden',
    cardholderName: '',
    number: '',
    cvv: '',
  },
  {
    name: 'battleNet',
    password: 'password',
    url: 'url',
    notes: 'my battle net',
    cardholderName: '',
    number: '',
    cvv: '',
  },

  {
    name: 'Bitwarden',
    password: 'password',
    url: 'url',
    notes: 'my bitwarden',
    cardholderName: '',
    number: '',
    cvv: '',
  },
  {
    name: 'battleNet',
    password: 'password',
    url: 'url',
    notes: 'my battle net',
    cardholderName: '',
    number: '',
    cvv: '',
  },

  {
    name: 'Bitwarden',
    password: 'password',
    url: 'url',
    notes: 'my bitwarden',
    cardholderName: '',
    number: '',
    cvv: '',
  },
  {
    name: 'battleNet',
    password: 'password',
    url: 'url',
    notes: 'my battle net',
    cardholderName: '',
    number: '',
    cvv: '',
  },

  {
    name: 'Bitwarden',
    password: 'password',
    url: 'url',
    notes: 'my bitwarden',
    cardholderName: '',
    number: '',
    cvv: '',
  },
];

const ItemsList = () => {
  return (
    <FormContainer>
      <FormHeader>
        <ToggleButton active>My Vault</ToggleButton>
        <ToggleButton>Add Item</ToggleButton>
      </FormHeader>
      <ListContainer>
        <ListBody>
          {data.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ListBody>
      </ListContainer>
    </FormContainer>
  );
};

export default ItemsList;
