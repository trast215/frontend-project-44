import { game, random } from './index.js';

const getNod = (a, b) => ((a % b) ? getNod(b, a % b) : Math.abs(b));
const randomQuestionNod = () => {
  const number1 = random(101, 1);
  const number2 = random(101, 1);
  const question = `${number1} ${number2}`;
  let correctAnswer = 0;
  correctAnswer = getNod(number1, number2);
  correctAnswer = String(correctAnswer);
  return [question, correctAnswer];
};
const description = 'Find the greatest common divisor of given numbers.';
const startNod = () => game(description, randomQuestionNod);
export default startNod;
