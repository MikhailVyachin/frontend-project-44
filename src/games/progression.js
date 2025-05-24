import getRandomNumber from '../randomNumber.js'
import gameLogic from '../index.js'

const description = 'What number is missing in the progression?'

const getData = () => {
  const length = getRandomNumber(5, 20)
  const start = getRandomNumber(1, 30)
  const step = getRandomNumber(1, 5)
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * step))
  }

  const index = getRandomNumber(0, length - 1)
  const value = progression[index]
  progression[index] = '..'

  return [progression.join(' '), value.toString()]
}

const playProgression = () => gameLogic(getData, description)

export default playProgression
