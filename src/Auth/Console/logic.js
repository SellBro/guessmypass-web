const Inputs = [
  {
    message: 'help',
    answer: 'Your help here!',
  },
  {
    message: 'hello world',
    answer: 'oh r u a coder? <3',
  },
  {
    message: 'info',
    answer: `Some info ✨`,
  },
  {
    message: 'guessmypass',
    answer: 'enjoy',
  },
];

export const consoleInputMessageHandler = (input, array) => {
  const result = Inputs.find(obj => {
    return obj.message === input;
  });

  if (result) {
    return [...array, result.answer];
  }

  if (input.toLowerCase() === 'clear') {
    return [];
  }

  return [...array, input];
};
