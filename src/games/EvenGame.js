import { game, random } from '../index.js';

const randomQuestionEven = () => {
  const question = random(100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const startEven = () => game(description, randomQuestionEven);
export default startEven;
