import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ConsoleContainer = styled.div`
  position: absolute;
  align-self: auto;
  width: 320px;
  border-radius: 25px;
  height: 600px;
  right: 0;
  margin-top: 200px;
  ${font.bold};
  ${font.size(24)};
  background-color: ${color.grayDarken};
  color: ${color.textConsole};

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const ConsoleMessagesContaner = styled.div`
  height: 520px;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ConsoleInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 25px;
  padding-left: 10px;
  ${font.size(24)};
  ${font.bold};
  color: ${color.textConsole};
  background: ${color.backgroundForm};

  ::placeholder {
    color: ${color.textConsole};
  }

  :focus::placeholder {
    color: transparent;
  }
`;

export const Title = styled.div`
  padding: 5px;
  text-align: center;
  width: 100%;
`;

export const ConsoleMessage = styled.div`
  line-height: 29px;
  word-wrap: break-word;
  width: auto;
  display: inline;
  margin-bottom: 5px;

  :before {
    content: '>';
  }
`;
