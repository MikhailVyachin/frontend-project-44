import readlineSync from 'readline-sync'

const gameLogic = (getData, description) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  const roundsCount = 3

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, questionRight] = getData()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (questionRight === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questionRight}.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default gameLogic
