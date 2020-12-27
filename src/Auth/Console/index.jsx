import React, { useState } from 'react';

import { consoleInputMessageHandler } from './logic';
import * as Styled from './styled';

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
    <Styled.ConsoleContainer>
      <Styled.Title>Console Terminal V 2.0</Styled.Title>
      <Styled.ConsoleMessagesContaner>
        {messages &&
          messages.map((message, index) => (
            <Styled.ConsoleMessage key={index}>{message}</Styled.ConsoleMessage>
          ))}
      </Styled.ConsoleMessagesContaner>
      <Styled.ConsoleInput
        onKeyPress={handleKeyPress}
        value={value}
        onChange={handleChange}
        placeholder="> Your text here"
      />
    </Styled.ConsoleContainer>
  );
};

export default Console;
