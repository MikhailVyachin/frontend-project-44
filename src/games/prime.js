import getRandomNumber from '../randomNumber.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const playPrime = () => gameLogic(getData, description);

export default playPrime;
