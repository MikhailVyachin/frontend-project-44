import readlineSync from 'readline-sync';

const HelloUser = () => {
<<<<<<< HEAD
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name?: ');
    console.log(`Hello, ${name}!`);
};

export default HelloUser
=======
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Your Answer: ');
  console.log(`Hello, ${name}!`);
};

export default HelloUser;
>>>>>>> 08b33d4 (configuring eslint and error correction)
