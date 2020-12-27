import React, { useState } from 'react';

import { consoleInputMessageHandler } from './logic';
import * as S from './styled';

const data = ['Hello Unknown User!', 'Type in your command'];

const Console = () => {
  const [messages, setMessages] = useState(data);
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      setMessages(consoleInputMessageHandler(value, messages));
      setValue('');
    }
  };

  return (
    <S.ConsoleContainer>
      <S.Title>Console Terminal V 2.0</S.Title>
      <S.ConsoleMessagesContaner>
        {messages &&
          messages.map((message, index) => (
            <S.ConsoleMessage key={index}>{message}</S.ConsoleMessage>
          ))}
      </S.ConsoleMessagesContaner>
      <S.ConsoleInput
        onKeyPress={handleKeyPress}
        value={value}
        onChange={handleChange}
        placeholder="> Your text here"
      />
    </S.ConsoleContainer>
  );
};

export default Console;
