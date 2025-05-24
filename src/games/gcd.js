import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [question, answer];
};

const playGcd = () => gameLogic(getData, description);

export default playGcd;
