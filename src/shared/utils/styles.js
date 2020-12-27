import { css } from 'styled-components';

export const font = {
  title: 'font-family: "They Perished"; font-weight: normal;',
  regular: 'font-family: "Tahoma"; font-weight: normal;',
  bold: 'font-family: "Tahoma"; font-weight: bold;',
  size: size => `font-size: ${size}px`,
};

export const color = {
  background: '#32353b',
  backgroundForm: '#40444b',
  grayDarken: '#292c31',

  toggleButtonActive: '#373b41',

  border: '#232629',
  borderError: '#ff1800',

  textPrimary: '#f4f6fc',
  textConsole: '#1fcc26',
  textSecondary: '#944fdA',
  textGray: '#89888b',

  buttonPrimary: '#5f15a9',
};

export const mixin = {
  unSelectable: css`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
};
