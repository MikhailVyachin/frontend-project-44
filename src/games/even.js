import HelloUser from "../cli";

const getRandomNum = () => Math.floor(Math.random() * 100);

const isEven = (num) => num % 2 === 0

const EvenGame =(username) => {;
    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i++) {;
        const question = getRandomNum();
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(question) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {;
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer})".`);
            console.log(`Let's try again, ${username}`);
            return;
        }
    }
    
    console.log(`Congratulations, ${username}`);
}

const runGame = () => {
    const user = helloUser();
    startEvengame(user)
};

runGame();