import readlineSync from 'readline-sync'

const HelloUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('Your Answer: ');
    console.log(`Hello, ${name}!`);
};

export default HelloUser