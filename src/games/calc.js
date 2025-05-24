import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const description = 'What is the result of the expression?';

const getData = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const num1 = getRandomNumber(0, 30);
  const num2 = getRandomNumber(0, 30);

  let question;
  let correctAnswer;

  switch (operation) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error('Incorrect operation');
  }

  return [question, String(correctAnswer)];
};

const playCalc = () => gameLogic(getData, description);

export default playCalc;
