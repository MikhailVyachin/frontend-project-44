import getRandomNumber from '../randomNumber.js';

import gameLogic from '../index.js';

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
    const question = getRandomNumber(0, 100);
    const questionRight = isEven(question);

    return [question, questionRight];
}

const playEven = () => gameLogic(getData, description);

export default playEven;


